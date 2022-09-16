import { Typography } from '@mui/material';
import { HeadFC } from 'gatsby';
import Layout from '../layouts';

const Games = () => (
  <Layout>
    <Typography variant="h2">Our Games</Typography>
  </Layout>
);

export default Games;

export const Head: HeadFC = () => <title>Games - Daydream Games</title>;
