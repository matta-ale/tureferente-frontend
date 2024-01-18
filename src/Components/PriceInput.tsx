import { ChangeEvent, useState } from 'react';
import './PriceInput.css';

type OnInputChangeHandler = (e: ChangeEvent<HTMLInputElement> & { name: string }) => void;


interface PriceInputProps {
  label: string;
  onInputChange: OnInputChangeHandler;
  name:string
}

const PriceInput: React.FC<PriceInputProps> = (props:{label:string, onInputChange:OnInputChangeHandler, name:string}) => {
  const {label, onInputChange} = props
  const [price, setPrice] = useState(0);

  const handleIncrement = () => {
    setPrice(price + 100);
  };

  const handleDecrement = () => {
    setPrice(Math.max(0, price - 100));
  };

  return (
    <div className="flex font-bold items-center">
      <label className=' px-1 flex flex-col justify-center'>{label}</label>
      <label className='h-10 pl-3 pr-1 flex flex-col justify-center bg-white'>USD</label>
      <input className='w-[60px] h-10' type="number" value={price} step="100" min="0" readOnly onChange={onInputChange}/>
      <div className="flex flex-col bg-blue-400 h-10">
        <button onClick={handleIncrement} aria-label="Increase Price">
          ⬆️
        </button>
        <button onClick={handleDecrement} aria-label="Decrease Price">
          ⬇️
        </button>
      </div>
    </div>
  );
};

export default PriceInput;