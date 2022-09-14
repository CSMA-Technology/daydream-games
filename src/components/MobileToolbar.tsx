import { useState, MouseEvent } from 'react';

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Adb as AdbIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'gatsby';

type Props = {
  pages: { name: string, href: string }[]
};

const MobileToolbar = ({ pages }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Toolbar disableGutters>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: 'block',
          }}
        >
          {pages.map(({ name, href }) => (
            <MenuItem key={name} onClick={handleCloseNavMenu} component={Link} to={href}>
              <Typography textAlign="center">{name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <AdbIcon sx={{ display: 'flex', mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component={Link}
        to="/"
        sx={{
          mr: 2,
          display: 'flex',
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        CSMA
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
    </Toolbar>
  );
};

export default MobileToolbar;
