//  // We are fetching data from mongodb on home page and then sending on the childpage in the form of props to display the required values
// // Show price in toggle bar

// // *NOTES*
// // Since 'div' is not inline we can use 'calssName='d-inline'

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducer'
export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const [qty, setQty] = useState(1);
  const [selectedOption, setSelectedOption] = useState('paperback'); // Default option is paperback

  const priceOptions = {
    paperback: 130, // Set your actual prices here
    hardcover: 220,
  };

  const total = qty * priceOptions[selectedOption];

  const handleAddtoCart = async () => {
    let book = []
    for (const item of data) {
      if (item.id === props.bookItem._id) {
        book = item;

        break;
      }
    }
   // update qty and price in the same row if the book is same (left to do)
    await dispatch({
      type: "ADD",
      id: props.bookItem._id,
      name: props.bookItem.name,
      qty: qty,
      img: props.bookItem.img,
      price: priceOptions[selectedOption], // Use the selected option's price
    });

    console.log(data);
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="card mt-3 align-middle" style={{ width: '18rem' }}>
      <img
        src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg&ga=GA1.1.601690525.1689749811&semt=sph"
       
        className="card-img-top"
        alt="..."
        style={{ height: "120px", objectFit: "fill" }}
      />
      <div className={`card-body ${showFullDescription ? 'expanded' : 'collapsed'}`}>
        <h5 className="card-title">{props.bookItem.name}</h5>
        <h6 className="card-text bold">Written by:{props.bookItem.writer}</h6>
        <div className="d-flex align-items-center justify-content-between">
          <div className="container w-100">
            <select className='m-2 h-100 bg-secondary rounded' onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                )
              })}
            </select>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Price
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  className="dropdown-item"
                  href="#?"
                  onClick={() => setSelectedOption('paperback')}
                >
                  Paperback: ${priceOptions['paperback']}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#?"
                  onClick={() => setSelectedOption('hardcover')}
                >
                  Hardcover: ${priceOptions['hardcover']}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-center' style={{ fontWeight: 'bold' }}>Total Price: ${total}</div>
        <hr />
        <button className={'btn btn-secondary justify-center ms-2'} onClick={handleAddtoCart}>Add to Cart</button>
      </div>
    </div>
  );
}
