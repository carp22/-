'use client'

import React from 'react'

//Components
import Me from './components/Me'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Navbar } from './components/Navbar'
import ProjectPreviews from "./components/ProjectPreview"
import Resume from './components/Resume'

//Styles
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>  
        <Navbar />

        <div className={styles.hero} id="about" >
          <Me />
          <section className={styles.container}>
            <ProjectPreviews className="previews" />
            <Skills />
          </section>
        </div>

        <section id="resume">
          <Resume />
        </section>

        <section id="contact">
          <Contact />
        </section>

    </main>
  )
}
