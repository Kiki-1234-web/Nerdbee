// import React, { useState } from 'react';
// import QuantityButton from './Quantitybutton';

// export default function Card(props) {
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   const toggleDescription = () => {
//     setShowFullDescription(!showFullDescription);
//   };

//   return (
//     <div>
//       <div>
//         <div className="card mt-3 align-middle" style={{ width: '18rem', maxHeight: '360px' }}>
//           <img
//             src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg&ga=GA1.1.601690525.1689749811&semt=sph"
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">{props.title}</h5>
//             {showFullDescription ? (
//               <p className="card-text">{props.description}</p>
//             ) : (
//               <p className="card-text">
//                 {props.description.slice(0, 100)}
//                 {props.description.length > 100 && '... '}
//                 <a to="/" onClick={toggleDescription}>
//                   Read more
//                 </a>
//               </p>
//             )}
//             <div className="container w-100">
//               <div>
//                 <QuantityButton />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import QuantityButton from './Quantitybutton';
//import './Card.css'; // Import a CSS file for styling adjustments

export default function Card(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div>
      <div>
        <div className="card mt-3 align-middle" style={{ width: '18rem' }}>
          <img
          //  src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg&ga=GA1.1.601690525.1689749811&semt=sph"
           src = {props.imgsrc}
            className="card-img-top"
            alt="..."
          />
          <div className={`card-body ${showFullDescription ? 'expanded' : 'collapsed'}`}>
            <h5 className="card-title">{props.title}</h5>
            <div className="description">
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
              <h5 className="card-text">{props.writer}</h5>
            </div>
            <div className="container w-100">
              <div>
                <QuantityButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

