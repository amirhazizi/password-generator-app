import { FaRegCopy } from "react-icons/fa"
import { BsArrowRightShort } from "react-icons/bs"
import { useState } from "react"
import Checkbox from "./components/Checkbox"
function App() {
  const [value, setValue] = useState(0)
  const MAX = 10
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    }
  }
  return (
    <main className='min-h-screen grid place-items-center bg-clCinder text-clWhite'>
      <div className='space-y-4 mx-auto my-20'>
        <h1 className=' opacity-50 text-center'>Password Generator</h1>
        <div className='flex justify-between bg-clBalticSea p-4'>
          <h2 className='text-xl  font-bold'>text</h2>
          <button>
            <FaRegCopy className='fill-clMintGreen scale-125'></FaRegCopy>
          </button>
        </div>
        <form className='bg-clBalticSea p-4 space-y-8'>
          <div className='space-y-4'>
            <div className='flex justify-between items-center'>
              <p className=''>Character Length</p>
              <p className='text-clMintGreen text-2xl'>0</p>
            </div>
            <input
              className='slider'
              type='range'
              min='0'
              max={MAX}
              onChange={(e) => setValue(e.target.value)}
              style={getBackgroundSize()}
              value={value}
            />
          </div>
          <div className='space-y-3'>
            <Checkbox label={"Include Uppercase Letters"} />
            <Checkbox label={"Include Lowercase Letters"} />
            <Checkbox label={"Include Numbers"} />
            <Checkbox label={"Include Symbols"} />
          </div>
          <div className='flex justify-between bg-clBalticSea2 p-4 uppercase'>
            <p className='text-clAbbey font-bold text-lg'>Strength</p>
            <div className='flex items-center gap-x-3'>
              <p className='text-lg'>low</p>
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
