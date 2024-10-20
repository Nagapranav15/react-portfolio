import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Projects and Internships</h1>
        <div>
            {PROJECTS.map((project, index)=>
            <div key={index} className="mb-8 flex-wrap lg:justify-center">

                <div className="text-center">
                    <h6>{project.title}</h6>
                    <p>{project.description}</p>
                </div>
            </div>

            )}
        </div>
    </div>
  )
}

export default Projects
