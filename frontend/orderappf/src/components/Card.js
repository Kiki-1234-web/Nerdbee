import React, { useState } from 'react';
import QuantityButton from './Quantitybutton';

export default function Card(props) {
  //let options = props.options;
   console.log(props.children[1])
  // let priceoptions = props.children[1]
  // console.log(priceoptions[0])

  // NOTES: Set default values for quantity and type or else it'll give error. Here we use STATE to set them.
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

return (
  <div className="card mt-3 align-middle" style={{ width: '18rem' }}>
     {/* <img src={props.imgsrc} className="card-img-top" alt="..." style={{height:"120px", objectFit:"fill"}} */}
    {/* //  src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg&ga=GA1.1.601690525.1689749811&semt=sph" 
   // />   */}
    {/* <img src={props.bookItem.img} className="card-img-top" alt="..." style={{height:"120px", objectFit:"fill"}} */}
    <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg&ga=GA1.1.601690525.1689749811&semt=sph" 
    className="card-img-top" alt="..." style={{height:"120px", objectFit:"fill"}}
    /* //  src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg&ga=GA1.1.601690525.1689749811&semt=sph" 
    /> */
    />
    <div className={`card-body ${showFullDescription ? 'expanded' : 'collapsed'}`}>
      <h5 className="card-title">{props.bookItem.name}</h5>
      <h6 className="card-text bold">Written by:{props.bookItem.writer}</h6>
      {/* <div className="description">
        {showFullDescription ? (
          <p className="card-text">{props.description}</p>
        ) : (
          <p className="card-text">
            {props.description.slice(0, 100)}
            {props.description.length > 100 && '... '}
            <a href="#?" onClick={toggleDescription}>
              Read more
            </a>
          </p>
        )}
      </div> */}
      <div className="d-flex align-items-center justify-content-between">
        <div className="container w-50">
          <div>
            <QuantityButton />
          </div>
        </div>
        {/* <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true">
            Select Price
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#?">option 1</a>
            <a className="dropdown-item" href="#?">option 2</a>
          </div>
        </div> */}
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
  </ul>
</div>
        
      </div>
      <div className='text-center' style={{fontWeight:'bold'}}>Total Price</div>
      <hr></hr>
      <button className={'btn btn-secondary justify-center ms-2'}>Add to Cart</button>
    </div>
  </div>
);
 }
 // We are fetching data from mongodb on home page and then sending on the childpage in the form of props to display the required values
// Show price in toggle bar

// *NOTES*
// Since 'div' is not inline we can use 'calssName='d-inline'

