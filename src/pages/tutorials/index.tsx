import {
  List, ListItem, Typography, Link as MuiLink,
} from '@mui/material';
import { graphql, HeadFC, Link as GatsbyLink } from 'gatsby';
import type { PageProps } from 'gatsby';
import Layout from '../../layouts';

const Tutorials = ({ data }: PageProps<Queries.TutorialsQuery>) => (
  <Layout>
    <Typography variant="h2">Tutorials</Typography>
    <List>
      {data.allMarkdownRemark.nodes.map(({ frontmatter }) => (
        <ListItem>
          <MuiLink component={GatsbyLink} to={frontmatter!.slug!}>{frontmatter!.title}</MuiLink>
          {/* <Link to={frontmatter!.slug!}>
            {frontmatter!.title}
          </Link> */}
        </ListItem>
      ))}
    </List>

  </Layout>
);

export default Tutorials;

export const Head: HeadFC = () => <title>Tutorials - Daydream Games</title>;

export const pageQuery = graphql`
  query Tutorials {
    markdownRemark {
      id
    }
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          slug
          title
        }
      }
    }
  }
`;
