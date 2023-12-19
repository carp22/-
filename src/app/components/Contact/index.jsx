import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '@/app/context/ThemeContext'

//Modules
import Link from 'next/link'
import Image from 'next/image'

import chopper from "/public/chopper.gif"

// Logos
import gmail from "/public/logos/gmail.svg"
import linkedin from "/public/logos/linkedin.svg"
import cvLight from "/public/logos/cv-light.svg"
import cvDark from "/public/logos/cv-dark.svg"
import github from "/public/logos/github.svg"
import githubWhiteLogo from "/public/logos/github-white.svg"
import "./index.css"

function Contact() {

  const { appTheme } = useContext(ThemeContext)

  return (
    <div className='contact-me'>

      <div className="chopper-container">
        <Image src={chopper} className="chopper-img" alt='chopper-img' />
      </div>

      <div className='contact-body'>
        <h1 className='contactme-title'>Contact me!</h1>
        <p className='interest-p'>If you find yourself intrigued after perusing my portfolio, you&quot;re more than welcome to engage in a conversation.</p>
        <p className='thanks-p'>Feel free to check out my CV, and thanks for dropping by and taking the time to explore my work. I hope you enjoyed it!</p>

        <div className="contact-socials">
          <Link href="https://mail.google.com/mail/u/0/?to=carlosrp2207@gmail.com&fs=1&tf=cm" target='_blank'>
            <Image src={gmail} alt="gmail-logo" className='logo' />
          </Link>

          <Link href="https://www.linkedin.com/in/carlos-rivas-pimentel" target='_blank'>
            <Image src={linkedin} alt="linkedin-logo" className='logo' />
          </Link>

          <Link href="https://github.com/carp22" target='_blank'>
            <Image src={appTheme === "dark" ? githubWhiteLogo : github} alt="github-logo" className='github-icon logo' />
          </Link>

          <Link href="https://drive.google.com/file/d/1AptFu_1OOFQndiUQ4P8MoTpEgdOuETL1/view?usp=sharing" target='_blank'>
            <Image src={appTheme === "dark" ? cvDark : cvLight} alt="cv-logo" className='cv-icon logo' />
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Contact