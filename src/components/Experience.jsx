import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pg-4">
        <h1 className="my-20 text-center text-4xl">Certificates</h1>
        <div>
            {EXPERIENCES.map((Experience,index)=>
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full max-w-wxl lg:w-3/4">
            <h6 className="md-2 font-semibold text-center">
                {Experience.role}-{" "}
                
            </h6>
            <p className="mb-4 text-neutral-400 text-center">{Experience.description}</p>
            </div>

        </div>
            )}
        </div>
      
    </div>
  )
}

export default Experience
