import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import newWindow from "/public/project-link-icon.svg"

import "./index.css"

function ProjectPreview({ className }) {
  return (
    <Link href="/projects" className={`projects-preview ${className && className}`}>
      <div className='link-wrapper'>
        <h1>PROJECTS!</h1>
        <Image src={newWindow} alt='link' />
      </div>
          <p>Click here to see my work!</p>
    </Link>
  )
}

export default ProjectPreview;