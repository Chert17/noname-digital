import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { tokenSelector } from 'redux/auth-slice/auth-slice';
import { productIdSelector } from 'redux/products-slice/products-slice';

const Header = () => {
  const location = useLocation();
  const token = useSelector(tokenSelector);
  const productId = useSelector(productIdSelector);

  return (
    <AppBar sx={{ backgroundColor: '#fff' }}>
      <Toolbar>
        <Tabs
          value={location.pathname}
          aria-label="nav tabs example"
          sx={{ width: '100%' }}
        >
          <Tab
            label="TEST NONAME DIGITAL"
            value="/"
            component={NavLink}
            to="/"
            sx={{ marginRight: 'auto' }}
          />
          {token ? (
            <Tab
              label="profile"
              value="/profile"
              component={NavLink}
              to="/profile"
            />
          ) : (
            <Tab label="login" value="/auth" component={NavLink} to="/auth" />
          )}
          <Tab
            label={<ShoppingCartIcon />}
            value="/cart"
            component={NavLink}
            to="/cart"
          />
          <Tab value={`/product/${productId}`} sx={{ display: 'none' }} />
          {/* //! !without this, mui swears */}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
