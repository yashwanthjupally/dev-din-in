import React, { useState } from 'react';

import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../styles/HeaderStyles.css'
import Logo from '../images/logo.svg'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  // handle menu click
  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  // menu drawer 
  const drawer = (
    <Box onClick={handleMenuToggle} sx={{ textAlign: 'center'}}>
      <Typography color='goldenrod' variant='h6' component='div'
        sx={{
          flexGrow: 1, my: 2
        }}
      >
        <img src={Logo} alt='Restaurant' width={'140vw'}/>
      </Typography>
      <Divider />


      <ul className='responsive-navigation'>
        <li>
          <NavLink activeClassName='active' to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/menu'}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>Contact</NavLink>
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
             <img src={Logo} alt='Restaurant' width={'250vw'}/>
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation'>
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'}>Contact</NavLink>
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
        
        <Box>
          <Toolbar />
        </Box>

      </Box>

    </>
  )
}

export default Header
