import React, { useState } from 'react'

export default function DarkModeButton(props) {
    const [theme, setTheme] = useState(props.mode)

    const returnOpposite = (mode) => {

        if(mode === "light"){
            return "dark"
        }
        else{
            return "light"
        }
    }
    function handleDark() {
        const mode = theme
        const op = returnOpposite(mode)
        let nav = document.getElementById("nav")
        
        nav.classList.remove(`navbar-${op}`, `bg-${op}`)
        nav.classList.add(`navbar-${mode}`, `bg-${mode}`)

        try{
        let textArea = document.getElementById("myBox")
        let root = document.getElementById("root")
        let main = document.getElementById("main")
        let heading = document.getElementById("heading")
        let summary = document.getElementById("summary")
        let summary2 = document.getElementById("summary2")

        textArea.classList.remove(`bg-${op}`, `border-${mode}`, `text-${mode}`)
        textArea.classList.add(`border-${op}`, `text-${op}`, `bg-${mode}`)

        root.classList.remove(`bg-${op}`)
        root.classList.add(`bg-${mode}`)
        
        main.classList.remove(`bg-${op}`, `border-${mode}`)
        main.classList.add(`border-${op}`)

        heading.classList.remove(`text-${mode}`)
        heading.classList.add(`text-${op}`)

        summary.classList.remove(`text-${mode}`)
        summary.classList.add(`text-${op}`)
        
        summary2.classList.remove(`text-${mode}`)
        summary2.classList.add(`text-${op}`)
        }
        catch{
            console.log("okay")
        }

        setTheme(op)
    }
  return (
    <button type="button" className="btn btn-dark border border-warning " onClick={handleDark}>Enable {theme} mode</button>
  )
}
