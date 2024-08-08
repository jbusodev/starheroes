import React, { useEffect, useState } from 'react'
import './DarkModeToggle.css'

const DarkModeToggle = () => {
    const [mode, setMode] = useState('Light')
    const [isChecked, setChecked] = useState(false)

    useEffect(() => {
      if ( localStorage.getItem('darkMode') === 'true' ) {
        setMode('Dark')
        document.querySelector("body")?.setAttribute("data-theme", "dark")
      }
      return () => {
        const checkedState = localStorage.getItem('darkMode') === 'true' ? true : false
        setChecked( checkedState )
      }
    }, [])

    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "dark")
        setMode('Dark')
        setChecked(true)
        localStorage.setItem('darkMode', 'true')
    }

    const setLightMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "light")
        setMode('Light')
        setChecked(false)
        localStorage.setItem('darkMode', 'false')
    }

    const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) setDarkMode()
        else setLightMode()
    }

    return (
        <div className='dark_mode order-lg-2'>
            <input type="checkbox" className="dark_mode_input" id="darkmode-toggle" onChange={toggleTheme} checked={isChecked}/>
            <label htmlFor="darkmode-toggle" className="darm_mode_label">
                {mode} Mode
            </label>
        </div >
    )
}

export default DarkModeToggle