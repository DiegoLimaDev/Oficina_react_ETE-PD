import { Box, Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import theme from '../styles/theme';

const Home = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.get(url).then((res) => setData(res.data));
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Box flex={1} minHeight={'100vh'}>
        <Box
          display={'flex'}
          flexWrap={'wrap'}
          px={theme.sizes.small}
          justifyContent={'flex-start'}
        >
          {data.map((item) => {
            return (
              <Box key={item.id} m={theme.sizes.oneRem}>
                <Card item={item} />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
