//React
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '@/app/context/ThemeContext'

//Images
// import meImg from "/carp22.github.io/me-image.jpg"

//Libraries
import Image from "next/image"
import Typewriter from 'typewriter-effect'
import "./index.css"

function Me() {

  const { appTheme } = useContext(ThemeContext)

  const typeStyles = {
    fontSize: "28px",
    color: appTheme === "dark" ? "#E94560" : "#001B79",
    fontFamily: "Poppins",
    fontWeight: "700"
  }

  return (
    <section className='aboutme-section'>
      
      <Image src="/carp22.github.io/me-image.jpg" alt='me-img' className='aboutme-img' priority />

      <div className="aboutme-description">
        <h3 className='greetings'>Hi there 🫡,</h3>
        <h1>Carlos Rivas Pimentel</h1>
        <h2 style={typeStyles}>
          <Typewriter
            options={{
              strings: ["{ Frontend Developer }"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className='description'>I&apos;m on my way to become a FullStack Developer, currently mastering Frontend libraries
          such as ReactJS.</p>
        <p> My principle is creating innovative solutions for real problems, always working towards improvement, and learning new things
          to become a better professional.</p>

      </div>
    </section>
  )
}

export default Me
