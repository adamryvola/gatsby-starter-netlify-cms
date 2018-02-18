import React from 'react';
import graphql from 'graphql';

export default () => {
    return (<div />);
};

export const settingsQuery = graphql`
  query Settings($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
      }
    }
  }
`;
