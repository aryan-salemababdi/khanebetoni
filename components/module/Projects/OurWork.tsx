import React from 'react'
import OurWorks from './OurWorks'

const OurWork = async () => {

    const res = await fetch("https://khanebetoni-api.vercel.app/projects", {
      cache: "no-cache",
    });
  
    const data = await res.json();

  return (
    <>
    <OurWorks data={data} />
    </>
  )
}

export default OurWork