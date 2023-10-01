import { useState,useEffect } from 'react'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn'
import CardUi from './Components/CardUI'

function App() {
  const [thememode, setThemeMode] = useState("light")

  const lighttheme = () => {
    setThemeMode("light")
  }

  const darktheme = () => {
    setThemeMode("dark")
  }
  //actual change in theme


    useEffect(() => {
      document.querySelector('html').classList.remove("light", "dark")
      document.querySelector('html').classList.add(thememode)
    }, [thememode])

 


  return (
           <ThemeProvider value={{thememode,lighttheme,darktheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <CardUi/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
 <ThemeBtn/>      
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
