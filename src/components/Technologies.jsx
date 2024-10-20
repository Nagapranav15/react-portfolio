import React from 'react'
import { SiPython, SiTableau, SiMysql, SiR, SiMicrosoftexcel } from 'react-icons/si' // Importing necessary icons

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pg-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Python Icon */}
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl text-yellow-400" />
            </div>
            
            {/* Tableau Icon */}
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTableau className="text-7xl text-blue-600" />
            </div>
            
            {/* MySQL Icon */}
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-blue-500" />
            </div>
            
            {/* R Language Icon */}
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiR className="text-7xl text-blue-400" />
            </div>
            
            {/* Excel Icon */}
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMicrosoftexcel className="text-7xl text-green-500" />
            </div>
        </div>
    </div>
  )
}

export default Technologies
