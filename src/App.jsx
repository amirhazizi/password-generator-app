import { FaRegCopy } from "react-icons/fa"
import React, { useState, useEffect } from "react"
import Checkbox from "./components/Checkbox"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "1234567890"
const symbols = `.,:;'"/[]{}<>?~!@#$%^&*()*-+-=_`
const AppContext = React.createContext()
function App() {
  const [value, setValue] = useState(0)
  const [isLowerCase, setIsLowerCase] = useState({ value: false, text: "" })
  const [isUpperCase, setIsUpperCase] = useState({ value: false, text: "" })
  const [isNumber, setIsNumber] = useState({ value: false, text: "" })
  const [isSymbol, setIsSymbol] = useState({ value: false, text: "" })
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState({ type: "", level: 0 })
  const [isNotification, setIsNotification] = useState({
    type: "",
    text: "",
  })
  const [showNotification, setShowNotification] = useState(false)

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / 20}% 100%`,
    }
  }
  const strengthHandler = (value) => {
    if (value <= 0) {
      setStrength({ type: "", level: 0 })
    } else if (value >= 4) {
      setStrength({ type: "legend", level: 4 })
    } else {
      if (value === 1) setStrength({ type: "low", level: value })
      else if (value === 2) setStrength({ type: "medium", level: value })
      else setStrength({ type: "best", level: value })
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (value === 0) {
      setIsNotification({
        type: "bg-red-500",
        text: "please set character length",
      })
      setShowNotification(true)
      return
    }
    if (
      !isLowerCase.value &&
      !isUpperCase.value &&
      !isNumber.value &&
      !isSymbol.value
    ) {
      setIsNotification({
        type: "bg-red-500",
        text: "choice one less pattern",
      })
      setShowNotification(true)
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
    setIsNotification({
      type: "bg-green-400",
      text: "Password Generated",
    })
    setShowNotification(true)
  }
  const addToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password)

      setIsNotification({
        type: "bg-green-400",
        text: "Password added to clipboard",
      })
      setShowNotification(true)
    }
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNotification(false)
    }, 1600)
    return () => clearTimeout(timeout)
  }, [isNotification])
  const { type: notificationType, text: notificationText } = isNotification
  return (
    <AppContext.Provider value={{ strengthHandler, strength }}>
      <div
        className={`notification fixed text-center p-3 top-2 left-1/2 z-10  px-4 text-clWhite -translate-x-1/2 rounded-lg capitalize ${notificationType} ${
          showNotification ? "translate-y-0 " : "-translate-y-8 invisible"
        }`}
      >
        {notificationText}
      </div>
      <main className='min-h-screen grid place-items-center bg-clCinder text-clWhite'>
        <div className='space-y-4 mx-auto my-20'>
          <h1 className=' opacity-50 text-center'>Password Generator</h1>
          <div className='flex justify-between bg-clBalticSea p-4 md:px-6'>
            <h2 className={`text-2xl font-medium ${password || "opacity-40"}`}>
              {password || "P4$5W0rD!"}
            </h2>
            <button onClick={() => addToClipboard()}>
              <FaRegCopy className='fill-clMintGreen transition-colors scale-125 hover:fill-clWhite'></FaRegCopy>
            </button>
          </div>
          <form
            onSubmit={submitHandler}
            className='bg-clBalticSea p-4 space-y-8 md:p-6 '
          >
            <div className='space-y-5'>
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
                <p className='text-lg'>{strength.type && strength.type}</p>
                <div className='flex h-full gap-x-2'>
                  <span
                    className={`h-full border-2 border-clWhite px-1 ${
                      strength.level > 0 && "bg-orange-400"
                    }`}
                  ></span>
                  <span
                    className={`h-full border-2 border-clWhite px-1 ${
                      strength.level > 1 && "bg-orange-400"
                    }`}
                  ></span>
                  <span
                    className={`h-full border-2 border-clWhite px-1 ${
                      strength.level > 2 && "bg-orange-400"
                    }`}
                  ></span>
                  <span
                    className={`h-full border-2 border-clWhite px-1 ${
                      strength.level > 3 && "bg-orange-400"
                    }`}
                  ></span>
                </div>
              </div>
            </div>
            <button
              type='submit'
              className='submit-btn uppercase text-clBalticSea bg-clMintGreen w-full py-3 flex items-center justify-center gap-x-2 font-medium transition-colors border-2 border-transparent hover:border-clMintGreen hover:bg-clBalticSea hover:text-clMintGreen'
            >
              Generate
              <svg
                className='scale-150 transition-colors'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
                />
              </svg>
            </button>
          </form>
        </div>
      </main>
    </AppContext.Provider>
  )
}

export { App, AppContext }
