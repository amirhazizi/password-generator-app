import { AiFillCheckSquare } from "react-icons/ai"
const Checkbox = ({ label, setCheck, template }) => {
  return (
    <label className='checkbox-container flex items-center '>
      <input
        type='checkbox'
        onChange={() => {
          setCheck(({ value }) => {
            if (value) {
              return { value: !value, text: "" }
            }
            return { value: !value, text: template }
          })
        }}
      />
      <span className='checkmark mr-4'></span>
      <p>{label}</p>
    </label>
  )
}
export default Checkbox
