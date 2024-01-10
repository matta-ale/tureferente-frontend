import { Dropdowns } from './Components/Dropdowns.tsx';
import logo from './assets/img/logo referente.png';
import './App.css';
import { useState } from 'react';
import Results from './Components/Results.tsx';

function App() {
  const [filters, setFilters] = useState({
    barrio: '',
    tipoContrato: '',
    tipoInmueble: '',
  });

  type SelectChangeHandler = (newValue: unknown, name: string) => void;

  const onDropdownChange: SelectChangeHandler = (newValue, name: string) => {
    const value = (newValue as { value: string }).value;
    setFilters({ ...filters, [name]: value });
    console.log(filters);
  };

  const handleGetQuantity = () => {

  };

  const handleGetMetrics = () => {};


  return (
    <>
      <div className='flex h-screen'>
        <div className='w-80 h-screen bg-gray1 flex-shrink-0'>
          <div className='w-full h-24 bg-gray2 flex justify-center items-center p-8'>
            <img src={logo} alt='referente logo' className='h-10 w-auto' />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className='flex justify-center'>
            <Dropdowns onDropdownChange={onDropdownChange} handleGetQuantity={handleGetQuantity} handleGetMetrics={handleGetMetrics}></Dropdowns>
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <div className='h-[500px] bg-gradient-to-r from-violet1 to-violet2 mix-blend-multiply'></div>
          <div className='bg-pink1 w-full h-full relative'>
            <Results></Results>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
