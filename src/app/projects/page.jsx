'use client'

//React
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

// Firebase
import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs, collection } from 'firebase/firestore/lite'

//Modules
import Image from 'next/image'
import Link from 'next/link'

// Images
import backArrow from "/public/icon-back-arrow.svg";
import backDarkArrow from "/public/dark-icon-back-arrow.svg";
import githubIcon from "/public/logos/github.svg";
import githubWhiteIcon from "/public/logos/github-white.svg";
import newWindowIcon from "/public/icon-new-window.svg";
import newWindowDarkIcon from "/public/dark-icon-new-window.svg";

//Styles
import styles from './page.module.css'

const firebaseConfig = {
  apiKey: "AIzaSyAUDWmbEu-3rawSCWWN49rcWXCwRLpncFs",
  authDomain: "portfolio-s-apps.firebaseapp.com",
  databaseURL: "https://portfolio-s-apps-default-rtdb.firebaseio.com",
  projectId: "portfolio-s-apps",
  storageBucket: "portfolio-s-apps.appspot.com",
  messagingSenderId: "64416105591",
  appId: "1:64416105591:web:814a7388c3901a5c0ab272",
  measurementId: "G-FBXJZ4ZHDS"
};


function Projects() {

  const { appTheme } = useContext(ThemeContext)

  // States declaration
  const [projectsInfo, setProjectsInfo] = useState([])

  //Firebase variables declaration
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  /*Async function that returns a list of my projects
  In my firebase database */
  async function getProjects(db) {
    const projectsCol = collection(db, "portfolio's apps");
    const projectsSnapshot = await getDocs(projectsCol)
    const projectsList = projectsSnapshot.docs.map(doc => doc.data());

    setProjectsInfo(projectsList)
  }

  useEffect(() => {
    getProjects(db)
  }, [db])

  return (
    <div className={styles.list}>
      <div className={styles.bar}>
        <Link href=".." className={styles.backLink}>
          <Image src={appTheme === "dark" ? backArrow : backDarkArrow} className={styles.back} alt='go-back-img' priority />
        </Link>
      </div>
      <div className={styles.grid}>

        {projectsInfo.length !== 0 && projectsInfo.map(project => (

          <section className={styles.project} key={project.name}>
            <div className={styles.group} key={project.name}>
              <Image
                src={appTheme === "dark" && project.image_dark_mode ?
                  project.image_dark_mode : project.image}
                alt='no-image' width="500" height="300" priority />
              <h2 className={styles.title}>{project.name}</h2>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.techs} >
                <div className={styles.container}>
                  {project.techs && project.techs.map((techImageLink, index) => (
                    <Image src={techImageLink} key={index} alt='tech-img' width="48" height="48" />
                  ))}
                </div>
                <div className={styles.links}>
                  <Link href={project.url}
                    className={styles.url}
                    target='_blank'>
                    <button className={styles.button}>
                      Live
                      <Image src={appTheme === "dark" ? newWindowIcon : newWindowDarkIcon} alt="website-icon" />
                    </button>
                  </Link>
                  <Link href={project.repository}
                    className={styles.url}
                    target="_blank">
                    <button className={styles.button}>
                      Code
                      <Image src={appTheme === "dark" ? githubWhiteIcon : githubIcon} alt="website-icon" />
                    </button>
                  </Link>
                </div>
              </div>

            </div>

          </section>
        ))}
      </div>
    </div>
  )
}

export default Projects