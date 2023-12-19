import React from 'react'
import { useContext } from "react"

//src
import newWindowIcon from "/public/icon-new-window.svg"
import newWindowDarkIcon from "/public/dark-icon-new-window.svg"

//Modules
import Link from "next/link"
import Image from 'next/image'
import { ThemeContext } from '@/app/context/ThemeContext'

//Styles
import "./index.css"

function Experience() {

  const {appTheme} = useContext(ThemeContext)

  return (
    <section className='section-resume'>
      <div className='working-experience'>
        <h1 className='title'>RESUME</h1>
        
        <section className="mixser-exp">
          <Link href="https://mixser.com.do/" target='_blank' className='company-link' >
            <h2 className='company-link-text'>MIXSER AGENCY</h2>
            <Image src={ appTheme === "dark" ? newWindowIcon : newWindowDarkIcon} alt="visit-site" />
          </Link>

          <h4 className='position'>Frontend Developer</h4>

          <ul className='tasks'>
            <li>Creation of web pages using: HTML, CSS and WordPress.</li>
            <li>Testing and bug fixing.</li>
            <li>Design changes, such as modifying the color palette, rearranging menus, and optimizing usability.</li>
          </ul>
        </section>

        <section className="cidil-exp">
          <Link href="https://superior.ipl.edu.do/" target='_blank' className='company-link'>
            <h2 className='company-link-text'>CENTRO DE INVESTIGACIÓN, DESARROLLO E INNOVACIÓN LOYOLA</h2>
            <Image src={ appTheme === "dark" ? newWindowIcon : newWindowDarkIcon} alt='visit-site' />
          </Link>

          <h4 className='position'>Laboratory Technician (Internship)</h4>

          <ul className='tasks'>
            <li>Analyze and maintenance of new equipment for the multimedia laboratory.</li>
            <li>Installation and configuration of Python libraries on electronic devices for the automation
              of laboratory practices.</li>
            <li>Documentation of operating manuals for the correct use of the tools and devices.</li>
          </ul>
        </section>

        <section className="outplex-exp">
          <Link href="https://outplex.com/" target='_blank' className='company-link'>
            <h2 className='company-link-text'>OUTPLEX</h2>
            <Image src={ appTheme === "dark" ? newWindowIcon : newWindowDarkIcon} alt='visit-site' />
          </Link>

          <h4 className='position'>Reservation Agent</h4>

          <ul className='tasks'>
            <li>Support to users&apos; account</li>
            <li>Customer service, chat assistance</li>
            <li>Creation and modification of reservations flights</li>
          </ul>
        </section>

      </div>
    </section>
  )
}

export default Experience