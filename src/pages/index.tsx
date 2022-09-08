// import * as React from 'react';
import type { HeadFC } from 'gatsby';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  // maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const links = [
  {
    text: 'Tutorial',
    url: '/tutorials',
    description:
      'We write some shit',
    color: '#E95800',
  },
  {
    text: 'About Us',
    url: '/aboutus',
    description:
      'We know some shit',
    color: '#E95800',
  },
];

function IndexPage() {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        CSMA Technology
        <br />
        <span style={headingAccentStyles}>Technology for all, but mostly turtles.</span>
      </h1>
      <p style={paragraphStyles}>
        More to come. For now, fuck off.
      </p>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={link.url}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default IndexPage;

// eslint-disable-next-line react/function-component-definition
export const Head: HeadFC = () => <title>CSMA Technology</title>;
