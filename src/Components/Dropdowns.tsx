import Select, { StylesConfig } from 'react-select';

import neighbourhoods from '../assets/filters/neighbourhoods.json';
import contractType from '../assets/filters/contractType.json';
import propertyType from '../assets/filters/propertyType.json';
import bedrooms from '../assets/filters/bedrooms.json';
import bathrooms from '../assets/filters/bathrooms.json';

type SelectChangeHandler = (newValue: unknown, name: string) => void;

type HandleButtons = () => void;

export const Dropdowns = (props: {
  onDropdownChange: SelectChangeHandler;
  handleGetQuantity: HandleButtons;
  handleGetMetrics: HandleButtons;
}) => {
  const { onDropdownChange, handleGetQuantity, handleGetMetrics } = props;

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
    <div className='w-72 h-full flex flex-col justify-between '>
      <div>
        <label htmlFor='barrio' className='text-white'>
          Barrio:
          <Select
            name='barrio'
            className='mt-1 text-black'
            options={neighbourhoods}
            styles={colorStyles}
            defaultValue={{ label: 'Seleccione barrio', value: 'empty' }}
            onChange={(selectedOption) =>
              onDropdownChange(selectedOption, 'neighbourhood')
            }
          />
        </label>
        <br />
        <label htmlFor='tipoContrato' className='text-white'>
          Alquiler/Venta:
          <Select
            name='tipoContrato'
            className='mt-1 text-black'
            options={contractType}
            styles={colorStyles}
            defaultValue={{ label: 'Seleccione tipo contrato', value: 'empty' }}
            onChange={(selectedOption) =>
              onDropdownChange(selectedOption, 'contractType')
            }
          />
        </label>
        <br />
        <label htmlFor='tipoInmueble' className='text-white'>
          Casa/Depto:
          <Select
            name='tipoInmueble'
            className='mt-1 text-black'
            options={propertyType}
            styles={colorStyles}
            defaultValue={{ label: 'Seleccione tipo inmueble', value: 'empty' }}
            onChange={(selectedOption) =>
              onDropdownChange(selectedOption, 'propertyType')
            }
          />
        </label>
        <br />
        <div className='w-full flex justify-between'>
          <label htmlFor='minDorm' className='text-white'>
            Dormitorios (mín):
            <Select
              name='minDorm'
              className='mt-1 text-black'
              options={bedrooms}
              styles={colorStyles}
              defaultValue={{
                label: '-',
                value: '',
              }}
              onChange={(selectedOption) =>
                onDropdownChange(selectedOption, 'minBedrooms')
              }
            />
          </label>
          <label htmlFor='masDorm' className='text-white'>
            Dormitorios (máx):
            <Select
              name='masDorm'
              className='mt-1 text-black'
              options={bedrooms}
              styles={colorStyles}
              defaultValue={{
                label: '-',
                value: '',
              }}
              onChange={(selectedOption) =>
                onDropdownChange(selectedOption, 'maxBedrooms')
              }
            />
          </label>
        </div>
        <br />
          <label htmlFor='minBanos' className='text-white'>
            Baños (mín):
            <Select
              name='minBanos'
              className='mt-1 text-black'
              options={bathrooms}
              styles={colorStyles}
              defaultValue={{
                label: '-',
                value: '',
              }}
              onChange={(selectedOption) =>
                onDropdownChange(selectedOption, 'minBathrooms')
              }
            />
          </label>
        <br />
      </div>
      <div className='text-white flex justify-between'>
        <button
          className='w-[136px] h-14 rounded-md text-white font-bold bg-gray-900'
          onClick={handleGetQuantity}
        >
          Get quantity
        </button>
        <br />
        <br />
        <button
          className='w-[136px] h-14 rounded-md text-white font-bold bg-gray-900'
          onClick={handleGetMetrics}
        >
          Get metrics
        </button>
      </div>
    </div>
  );
};
