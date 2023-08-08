import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
export default function Home() {
     const[search, setSearch] = useState('');
     const [bookCat, setBookCat] = useState([]);
     const[bookItems, setBookItem] = useState([]);

    const loadData = async()=>{
        let response = await fetch("http://localhost:5000/api/bookData",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            }
    });
    response = await response.json();
     setBookItem(response[0]);
    setBookCat(response[1]);

  //  console.log(response[0], response[1]);
}
    
     useEffect(()=>{
loadData()
     },[])
return (
  <div>
    <div>
      <Navbar />
    </div>
    <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:'contain !important'}}>
  <div className="carousel-inner" id='carousel'>
  <div className="carousel-caption" style={{zIndex:"10"}}>
  <div class="d-flex justify-content-center">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value = {search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <button class="btn btn-outline-light bg-secondary" type="submit">Search</button>
    </div>
  </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?books" className="d-block w-100" style={{maxHeight:'500px'}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?books" className="d-block w-100" style={{maxHeight:'500px'}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?books" className="d-block w-100" style={{maxHeight:'500px'}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div className='container'>
      {bookCat.length !== 0 ? (
        <div className='categories-container'>
          {bookCat.map((data) => (
            <div key={data._id} className="category">
              <div className='fs-3 m-3'>{data.CategoryName}</div>
              <hr />
              {bookItems.length !== 0 ? (
                <div className="card-grid">
                  {bookItems
                    .filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLowerCase())))
                    .map((filterItems) => (
                      <div key={filterItems._id} className ='col-12 col-md-5 col-lg-3'> 
                      {/* NOTES : Check if card has constant size after adding description*/}

                        {/* <Card title={filterItems.name}
                        description = {filterItems.description}
                         writer = {filterItems.writer}
                         imgsrc = {filterItems.img}
                         options = {filterItems.options}
                         /> */}

                         <Card bookItem={filterItems}>
                         options = {filterItems.options}
                         </Card>
                      </div>
                    ))}
                </div>
              ) : (
                <div>No data found</div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>""""</div>
      )}
    </div>
    <div>
      <Footer />
    </div>
  </div>
);
}
// Bring cards in grid format
