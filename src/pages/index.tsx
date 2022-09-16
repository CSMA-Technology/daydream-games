// import * as React from 'react';
import { Typography } from '@mui/material';
import type { HeadFC } from 'gatsby';
import Layout from '../layouts';

const IndexPage = () => (
  <Layout>
    <main>
      <Typography variant="h2">
        Daydream Games
      </Typography>
      <Typography variant="h6">Technology for all, but mostly turtles.</Typography>
      <p>
        More to come. For now, fuck off.
      </p>
    </main>
  </Layout>
);

export default IndexPage;

// eslint-disable-next-line react/function-component-definition
export const Head: HeadFC = () => <title>Daydream Games</title>;
