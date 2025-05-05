import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '../styles/theme';

const Header = () => {
  return (
    <Box
      bgcolor={theme.colors.primary}
      height={theme.sizes.big}
      padding={'1rem'}
    >
      <Typography
        color={theme.colors.auxiliar}
        fontSize={theme.sizes.small}
        textAlign={'center'}
      >
        Oficina React
      </Typography>
    </Box>
  );
};

export default Header;
