import ContactusPage from '@/components/template/ContactusPage/ContactusPage'
import { Box } from '@mui/material'
import React from 'react'

const Contactus = () => {
  return (
    <>
    <Box
        height="100%" 
        justifyContent="center"
        alignItems="center"
        m="50px 0px" 
        >
         <ContactusPage />
    </Box>
    
    </>
  )
}

export default Contactus