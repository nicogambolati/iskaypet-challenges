import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, SwipeableDrawer } from '@mui/material';
import { Link } from 'react-router-dom';

const menuItems = [
  { id: 1, label: 'Mis datos', path: '/datos' },
  { id: 2, label: 'Mis tareas', path: '/tareas' },
  { id: 3, label: 'Mis devoluciones', path: '/devoluciones' },
  { id: 4, label: 'Mis comunicaciones', path: '/comunicaciones' },
  { id: 5, label: 'Mis mejores amigos', path: '/mejores-amigos' },
];

const HorizontalMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className='horizontal-menu'>
      <AppBar position="static">
        <Toolbar>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Horizontal menu"
          >
            {menuItems.map((item, index) => (
              <Tab key={index} label={item.label} component={Link} to={item.path} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="top"
        open={openDrawer}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      >
        <div
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Menu"
          >
            {menuItems.map((item) => (
              <Tab key={item.id} label={item.label} component={Link} to={item.path} />
            ))}
          </Tabs>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default HorizontalMenu;
