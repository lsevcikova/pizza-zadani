import './style.css'

const Check = ({ checked, onChange }) => {
  return (
    <button className='check' onClick={onChange}>
      {checked ? '✓' : ''}
    </button>
  )
}

export default Check
