import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export function Header({ title, linkLabel, linkPath }) {
  return (
    <div className='p-4 text-center space-y-4 mx-auto w-fit'>
      <h1 className='h1'>{title}</h1>
      <Link to={linkPath} className='link block'>{linkLabel}</Link>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  linkLabel: PropTypes.string,
  linkPath:PropTypes.string,
}
