import { useContext } from "react"
import { AppContext } from "../App"
const Checkbox = ({ label, setCheck, template }) => {
  const { strengthHandler, strength } = useContext(AppContext)
  return (
    <label className='checkbox-container flex items-center '>
      <input
        type='checkbox'
        onChange={() => {
          setCheck(({ value }) => {
            if (value) {
              strengthHandler(strength.level - 1)
              return { value: !value, text: "" }
            }
            strengthHandler(strength.level + 1)
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
