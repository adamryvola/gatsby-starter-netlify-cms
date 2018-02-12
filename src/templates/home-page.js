import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

export const HomePageTemplate = ({ content, contentComponent }) => {
    const PageContent = contentComponent || Content;
    return (
        <PageContent className="content" content={content} />
    );
};

export default ({ data }) => {
    const { html } = data.markdownRemark;
    return (<HomePageTemplate contentComponent={HTMLContent} content={html} />);
};

export const homePageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;
