import React from "react"

const ContentHeroSection = ({ title, description }) => {
  return (
    <div className="mt-0 w-full text-white bg-sadi-blue-500 py-10 md:py-12">
      <div className="flex flex-col absolute">
        <h1 className="text-3xl md:text-4xl lg:text-7xl sm:text-center md:text-left font-bold z-40 mt-14 md:mt-16 ml-3 md:ml-10 md:w-2/3">
          {title}
        </h1>
        <br />
        <p className="text-md md:text-3xl font-medium z-40 md:mt-10 mb-4 md:mb-8 md:w-2/3 mx-4 md:mx-auto block">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ContentHeroSection