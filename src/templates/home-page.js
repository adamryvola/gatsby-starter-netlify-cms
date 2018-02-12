import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content;

    return (
        <PageContent className="content" content={content} />
    );
};

export default ({ data }) => {
    const { markdownRemark: post } = data;

    return (<AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
    />);
};

export const aboutPageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
