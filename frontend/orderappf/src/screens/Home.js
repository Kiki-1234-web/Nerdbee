import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
export default function Home() {
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
    
//         return (
//   <div>
//     <div>
//       <Navbar />
//     </div>
//     <div>
//       <Carousal />
//     </div>
//     <div className='container'>
//       {bookCat.length !== 0
//         ? bookCat.map((data) => (<div className='row mb-3'>
//             <div key={data._id}>
//               <div className='fs-3 m-3'>{data.CategoryName}</div>
//               <hr />
//               {bookItems.length !== 0 ? (
//                 bookItems
//                   .filter((item) => item.CategoryName === data.CategoryName)
//                   .map((filterItems) => (
//                     <div key={filterItems._id}>
//                       <Card />
//                     </div>
//                   ))
//               ) : (
//                 <div>No data found</div>
//               )}
//             </div>
//             </div>
//           ))
//         : <div>""""</div>}
//       <Card />
//     </div>
//     <div>
//       <Footer />
//     </div>
//   </div>
// );
return (
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <Carousal />
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
                    .filter((item) => item.CategoryName === data.CategoryName)
                    .map((filterItems) => (
                      <div key={filterItems._id}>
                        <Card title={filterItems.name}
                        description = {filterItems.description}
                         writer = {filterItems.writer}
                         imgsrc = {filterItems.img}
                         options = {filterItems.options}
                         />
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
