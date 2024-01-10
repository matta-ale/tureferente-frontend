import Select, { StylesConfig } from 'react-select';

import neighbourhoods from '../assets/filters/neighbourhoods.json';
import tipoContrato from '../assets/filters/tipoContrato.json';
import tipoInmueble from '../assets/filters/tipoInmueble.json';

type SelectChangeHandler = (newValue: unknown, name: string) => void;

type HandleButtons = () => void;

export const Dropdowns = (props: {
  onDropdownChange: SelectChangeHandler;
  handleGetQuantity: HandleButtons;
  handleGetMetrics: HandleButtons;
}) => {
  
  const { onDropdownChange, handleGetQuantity , handleGetMetrics} = props;

  const colorStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      border: 'none',
    }),
    input: (styles) => ({
      ...styles,

      border: 'none',
    }),
    placeholder: (styles) => ({
      ...styles,
      color: 'white',
      backgroundColor: '#30304C',
    }),
    // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //   return { ...styles, color: 'white', backgroundColor: '#393857' };
    // },
  };
  return (
    <div className='w-72 flex flex-col'>
      <Select
        name='barrio'
        options={neighbourhoods}
        styles={colorStyles}
        defaultValue={{ label: 'Seleccione barrio', value: 'empty' }}
        onChange={(selectedOption) =>
          onDropdownChange(selectedOption, 'barrio')
        }
      />
      <br />
      <Select
        name='tipoContrato'
        options={tipoContrato}
        styles={colorStyles}
        defaultValue={{ label: 'Seleccione tipo contrato', value: 'empty' }}
        onChange={(selectedOption) =>
          onDropdownChange(selectedOption, 'tipoContrato')
        }
      />
      <br />
      <Select
        name='tipoInmueble'
        options={tipoInmueble}
        styles={colorStyles}
        defaultValue={{ label: 'Seleccione tipo inmueble', value: 'empty' }}
        onChange={(selectedOption) =>
          onDropdownChange(selectedOption, 'tipoInmueble')
        }
      />
      <br />
      <div>
        <button className='w-full h-8 bg-gray-500' onClick={handleGetQuantity}>
          Get quantity
        </button>
        <br />
        <br />
        <button className='w-full h-8 bg-gray-500' onClick={handleGetMetrics}>
          Get metrics
        </button>
      </div>
    </div>
  );
};
