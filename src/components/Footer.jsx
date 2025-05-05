import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '../styles/theme';

const Footer = () => {
  return (
    <Box
      bgcolor={theme.colors.primary}
      height={theme.sizes.medium}
      padding={'1rem'}
    >
      <Typography
        fontSize={theme.sizes.small}
        color={theme.colors.auxiliar}
        textAlign={'center'}
      >
        Diego Lima
      </Typography>
    </Box>
  );
};

export default Footer;
