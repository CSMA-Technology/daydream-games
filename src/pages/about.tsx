import { Typography } from '@mui/material';
import type { HeadFC } from 'gatsby';
import Layout from '../layouts';

const About = () => (
  <Layout>
    <div>
      <Typography variant="h2">About</Typography>
    </div>
  </Layout>
);

export default About;

export const Head: HeadFC = () => <title>About - Daydream Games</title>;
