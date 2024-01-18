import { Dropdowns } from './Components/Dropdowns.tsx';
import logo from './assets/img/logo referente.png';
import './App.css';
import { ChangeEvent, useState } from 'react';
import Results from './Components/Results.tsx';
import axios from 'axios';
import { BACKEND_URL } from './envVariables.ts';
import { urlMaker } from './helpers/urlMaker.ts';
import PriceInput from '../src/Components/PriceInput.tsx';

const BASE_URL = BACKEND_URL;
type OnInputChangeHandler = (e: ChangeEvent<HTMLInputElement> & { name: string }) => void;


function App() {
  const [filters, setFilters] = useState({
    neighbourhood: '',
    contractType: '',
    propertyType: '',
    minBedrooms: '',
    maxBedrooms: '',
    minBathrooms: '',
    usdM2MinLimit: '',
    usdM2MaxLimit: '',
  });

  const [quantity, setQuantity] = useState(0);
  const [metrics, setMetrics] = useState({ metrics: {}, groupedMetrics: {} });

  type SelectChangeHandler = (newValue: unknown, name: string) => void;

  const onDropdownChange: SelectChangeHandler = (newValue, name: string) => {
    const value = (newValue as { value: string }).value;
    setFilters({ ...filters, [name]: value });
  };

  const onInputChange: OnInputChangeHandler = (e) => {
    const {value,name } = e.currentTarget
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    console.log(filters);
  };

  const handleGetQuantity = async () => {
    const filtersURL = urlMaker(filters);
    const URL = `${BASE_URL}/zonapropquantity${filtersURL}`;
    const { data } = await axios.get(URL);
    setQuantity(data);
  };

  const handleGetMetrics = async () => {
    const filtersURL = urlMaker(filters);
    const URL = `${BASE_URL}/zonaprop${filtersURL}`;
    const { data } = await axios.get(URL);
    setMetrics(data);
  };



  return (
    <>
      <div className='flex h-screen'>
        <div className='w-80 h-screen bg-gray1 flex-shrink-0'>
          <div className='w-full h-24 bg-gray2 flex justify-center  p-8'>
            <img src={logo} alt='referente logo' className='h-10 w-auto' />
          </div>
          <br />
          <br />
          <div className='flex justify-center h-4/6'>
            <Dropdowns
              onDropdownChange={onDropdownChange}
              handleGetQuantity={handleGetQuantity}
              handleGetMetrics={handleGetMetrics}
            ></Dropdowns>
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <div className='h-[500px] bg-gradient-to-r from-violet1 to-violet2 mix-blend-multiply'>
            <PriceInput label='Precio por m2 máximo: ' onInputChange={onInputChange} name='usdM2MinLimit'></PriceInput>
            <PriceInput label='Precio por m2 mínimo: ' onInputChange={onInputChange} name='usdM2MaxLimit'></PriceInput>
          </div>
          <div className='bg-pink1 w-full h-full relative'>
            <Results quantity={quantity} metrics={metrics}></Results>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
