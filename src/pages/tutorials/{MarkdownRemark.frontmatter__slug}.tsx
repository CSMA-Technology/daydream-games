import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { Typography } from '@mui/material';
import Layout from '../../layouts';

const Template = ({
  data,
}: PageProps<Queries.TemplateQuery>) => {
  const { markdownRemark } = data;
  return (
    <Layout>
      <div className="blog-post-container">
        <Typography variant="body1">
          <h1>{markdownRemark?.frontmatter?.title}</h1>
          <h2>{markdownRemark?.frontmatter?.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: markdownRemark!.html! }}
          />
        </Typography>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Template ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export default Template;
