import { states } from '../data/selectData'
import { Select } from './UI/select'
import { formatState } from '../utils/formatState'
import PropTypes from 'prop-types';


export function AddressForm({ handleChange, formInputs, handleSelectChange }) {
  return (
    <fieldset name='address' className='border border-solid border-blue-100 p-4 border-spacing-y-4'>
      <legend>Address</legend>
      <div>
        <label htmlFor="street" className='label'>Street</label>
        <input id="street" type="text" name='street' value={formInputs.street} onChange={handleChange} className='input' />
      </div>
      <div>
        <label htmlFor="city" className='label'>City</label>
        <input id="city" type="text" name='city' value={formInputs.city} onChange={handleChange} className='input' />
      </div>
      <div>
        <Select label="State" name="state" id="state" options={formatState(states)} onChange={handleSelectChange} />
      </div>
      <div>

        <label htmlFor="zip-code" className='label'>Zip Code</label>
        <input id="zip-code" type="number" name='zipCode' value={formInputs.zipCode} onChange={handleChange} className='input' />
      </div>
    </fieldset>
  )
}

AddressForm.propTypes = {
  handleChange: PropTypes.func,
   formInputs: PropTypes.func,
    handleSelectChange: PropTypes.func
   }
