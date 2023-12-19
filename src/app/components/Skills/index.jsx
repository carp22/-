import React from 'react'
import Image from "next/image"
import reactLogo from "/public/logos/react.svg"
import jsLogo from "/public/logos/js.svg"
import htmlLogo from "/public/logos/html-5.svg"
import cssLogo from "/public/logos/css.svg"
import nextjsLogo from "/public/logos/nextjs.svg"
import "./index.css"

function Skills() {
  return (
    <section className='skills-section'>
      <h2>KNOWLEDGE</h2>

      <div className="skills-logos">
        <Image src={nextjsLogo} alt='next-logo' className='nextjs-logo' />
        <Image src={reactLogo} alt='react-logo' className='react-logo' />
        <Image src={jsLogo} alt='js-logo' className='js-logo' />
        <Image src={htmlLogo} alt='html-logo' className='html-logo' />
        <Image src={cssLogo} alt='css-logo' className='css-logo' />
      </div>
    </section>
  )
}

export default Skills