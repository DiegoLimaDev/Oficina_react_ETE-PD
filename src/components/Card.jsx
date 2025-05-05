import React from 'react';
import { Box, CardContent, Card as MUICard, Typography } from '@mui/material';
import theme from '../styles/theme';

const Card = ({ item }) => {
  return (
    <Box>
      <MUICard sx={{ width: theme.sizes.big, height: theme.sizes.big }}>
        <CardContent>
          <Typography textAlign={'left'}>{item.id}</Typography>
          <Typography>{item.completed ? 'Done' : 'To do'}</Typography>
        </CardContent>
      </MUICard>
    </Box>
  );
};

export default Card;
