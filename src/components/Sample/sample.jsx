import React from 'react'
import { Link } from 'react-router-dom'

const Sample = () => {
  return (
     <div className="flex justify-center w-full pt-5 ">
              <Link
                to="/contact"
                className="flex overflow-hidden border-2 items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-white shadow hover:bg-[#041A2F]/90 h-12 px-4 py-2 max-w-[13%] whitespace-nowrap md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-[#b9b7b7ee] hover:ring-offset-2  bg-[#041A2F]"
              >
                <div className="flex items-center">
                  <span className="ml-1 text-lg text-white  playfont animate-marquee">
                    Schedule for free sample
                  </span>
                </div>
              </Link>
            </div>
  )
}
export default Sample
