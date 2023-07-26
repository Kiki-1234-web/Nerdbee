import React, { useState } from 'react';

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <button
        className="btn btn-secondary me-2"
        onClick={handleDecrement}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="btn btn-secondary ms-2"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
