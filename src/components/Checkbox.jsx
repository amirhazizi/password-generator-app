import { AiFillCheckSquare } from "react-icons/ai"
const Checkbox = ({ label }) => {
  return (
    <label className='checkbox-container flex items-center '>
      <input type='checkbox' />
      <span className='checkmark mr-4'></span>
      <p>{label}</p>
    </label>
  )
}
export default Checkbox
