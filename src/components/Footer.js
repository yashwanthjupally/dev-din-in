import React from 'react'
import { GitHub, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', padding: 1.5 }}>

        <Box sx={{
          my: '2vh',
          '& svg': { fontSize: '2rem', mr: 2, cursor: 'pointer' },
          '& svg:hover': { color: 'goldenrod', transform: 'translatex(5px)', transition: 'all 400ms' }
        }}>
          <Instagram />
          <Twitter />
          <GitHub />
          <YouTube />
        </Box>

        <Typography variant='h5' sx={{ '@media (max-width: 600px)': { fontSize: '1rem' } }}>
          All Rights Reserved &copy; Yashwanth
        </Typography>
      </Box>
    </>
  )
}

export default Footer
