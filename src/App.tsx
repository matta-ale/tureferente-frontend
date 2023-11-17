import { Dropdown } from './Components/Dropdown.tsx';
import logo from './assets/img/logo referente.png'
import './App.css';

function App() {
  return (
    <>
      {/* <div className='h-screen grid place-items-center bg-gradient-to-r from-sky-600 to-indigo'> */}
      <div className="flex min-h-screen min-w-screen bg-[url('./assets/img/real-estate-house-keys-h79pvlxway8mwu2p.png')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
        <div className='w-3/12 flex flex-col'>
          <div className='w-full h-24 bg-violet-950 mix-blend-lighten flex justify-center items-center p-12'>
            <img src={logo} alt="referente logo" />
          </div>
          <div className='w-full flex-grow bg-purple-950 mix-blend-lighten opacity-80'>
            {/* <Dropdown></Dropdown> */}
          </div>
        </div>
        <div className='h-24 w-9/12 bg-refPurple mix-blend-lighten opacity-50'></div>
      </div>
    </>
  );
}

export default App;
