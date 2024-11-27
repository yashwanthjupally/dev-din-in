import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../styles/HeaderStyles.css'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  // handle menu click
  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  // menu drawer 
  const drawer = (
    <Box onClick={handleMenuToggle} sx={{ textAlign: 'center' }}>
      <Typography color='goldenrod' variant='h6' component='div'
        sx={{
          flexGrow: 1, my: 2
        }}
      >
        Restaurant
      </Typography>
      <Divider />


      <ul className='responsive-navigation'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/main'}>Main</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>

    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleMenuToggle}
              sx={{
                mr: 2,
                display: { sm: 'none' }
              }}>
              <MenuIcon />
            </IconButton>

            <Typography color='goldenrod' variant='h6' component='div'
              sx={{
                flexGrow: 1
              }}>
              Restaurant
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/main'}>Main</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>

          </Toolbar>
        </AppBar>

        <Box component='nav'>
          <Drawer variant='temporary' open={mobileOpen} onClose={handleMenuToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '40vw'
              }}}> {drawer}
          </Drawer>
        </Box>
        
        <Box sx={{ p: 1 }}>
          <Toolbar />
        </Box>

      </Box>

    </>
  )
}

export default Header
