import React, { ChangeEvent } from 'react';

interface PriceInputProps {
  label: string;
  value: number; // Change the type to number
  onChange: (newValue: number) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ label, value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 100); 
  };

  const handleDecrement = () => {
    onChange(Math.max(0, value - 100)); // Prevent going below zero
  };

  // Function to format the value as currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD' 
    }).format(value);
  };

  return (
    <div>
      <label>{label}</label>
      <div> {/* Wrap input and buttons in a container */}
        <button onClick={handleDecrement}>-</button>
        <input 
          type="text" 
          value={formatCurrency(value)} // Display formatted currency
          onChange={(e) => onChange(parseInt(e.target.value.replace(/[^0-9.-]+/g,""), 10))} // Parse the input
        />
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default PriceInput;