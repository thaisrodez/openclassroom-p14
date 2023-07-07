import PropTypes from 'prop-types';

export function Select({ label, name, id, options, onChange }) {
  return (
    <>
      <label htmlFor={id} className='label'>{label}</label>
      <select name={name} id={id} className='input' onChange={onChange}>
        {options.map((option) => (
          <option key={option.key} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func
}
