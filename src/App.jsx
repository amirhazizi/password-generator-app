import { FaRegCopy } from "react-icons/fa"
import { BsArrowRightShort } from "react-icons/bs"
import { useState } from "react"
import Checkbox from "./components/Checkbox"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "1234567890"
const symbols = `.,:;'"/[]{}<>?~!@#$%^&*()*-+-=_`
function App() {
  const [value, setValue] = useState(0)
  const [isLowerCase, setIsLowerCase] = useState({ value: false, text: "" })
  const [isUpperCase, setIsUpperCase] = useState({ value: false, text: "" })
  const [isNumber, setIsNumber] = useState({ value: false, text: "" })
  const [isSymbol, setIsSymbol] = useState({ value: false, text: "" })
  const [password, setPassword] = useState("")
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / 20}% 100%`,
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (
      value === 0 ||
      (!isLowerCase.value &&
        !isUpperCase.value &&
        !isNumber.value &&
        !isSymbol.value)
    ) {
      console.log("ok")
      return
    }
    const total = `${isLowerCase.text}${isUpperCase.text}${isNumber.text}${isSymbol.text}`
    const totalLength = total.length
    let newPassword = ""
    let i = 0
    while (i < value) {
      newPassword += total.charAt(Math.floor(Math.random() * totalLength))
      i += 1
    }
    setPassword(newPassword)
  }
  return (
    <main className='min-h-screen grid place-items-center bg-clCinder text-clWhite'>
      <div className='space-y-4 mx-auto my-20'>
        <h1 className=' opacity-50 text-center'>Password Generator</h1>
        <div className='flex justify-between bg-clBalticSea p-4'>
          <h2 className={`text-xl font-medium ${password || "opacity-40"}`}>
            {password || "P4$5W0rD!"}
          </h2>
          <button>
            <FaRegCopy className='fill-clMintGreen scale-125'></FaRegCopy>
          </button>
        </div>
        <form onSubmit={submitHandler} className='bg-clBalticSea p-4 space-y-8'>
          <div className='space-y-4'>
            <div className='flex justify-between items-center'>
              <p className=''>Character Length</p>
              <p className='text-clMintGreen text-2xl'>{value}</p>
            </div>
            <input
              className='slider'
              type='range'
              min='0'
              max='20'
              onChange={(e) => setValue(e.target.value)}
              style={getBackgroundSize()}
              value={value}
            />
          </div>
          <div className='space-y-3'>
            <Checkbox
              label={"Include Uppercase Letters"}
              check={isLowerCase}
              setCheck={setIsLowerCase}
              template={lowerCase}
            />
            <Checkbox
              label={"Include Lowercase Letters"}
              check={isUpperCase}
              setCheck={setIsUpperCase}
              template={upperCase}
            />
            <Checkbox
              label={"Include Numbers"}
              check={isNumber}
              setCheck={setIsNumber}
              template={numbers}
            />
            <Checkbox
              label={"Include Symbols"}
              check={isSymbol}
              setCheck={setIsSymbol}
              template={symbols}
            />
          </div>
          <div className='flex justify-between bg-clBalticSea2 p-4 uppercase'>
            <p className='text-clAbbey font-bold text-lg'>Strength</p>
            <div className='flex items-center gap-x-3'>
              <p className='text-lg'>none</p>
              <div className='flex h-full gap-x-2'>
                <span className='h-full border-2 border-clWhite px-1'></span>
                <span className='h-full border-2 border-clWhite px-1'></span>
                <span className='h-full border-2 border-clWhite px-1'></span>
                <span className='h-full border-2 border-clWhite px-1'></span>
              </div>
            </div>
          </div>
          <button
            type='submit'
            className='uppercase text-clBalticSea bg-clMintGreen w-full py-3 flex items-center justify-center gap-x-2 font-bold'
          >
            Generate
            <BsArrowRightShort className='fill-clBalticSea scale-150'></BsArrowRightShort>
          </button>
        </form>
      </div>
    </main>
  )
}

export default App
