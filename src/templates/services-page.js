import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

export const ServicesPageTemplate = ({ content, contentComponent }) => {
    const PageContent = contentComponent || Content;
    return (
        <PageContent className="content" content={content} />
    );
};

export default ({ data }) => {
    const { html } = data.markdownRemark;
    return (<ServicesPageTemplate contentComponent={HTMLContent} content={html} />);
};

export const servicesPageQuery = graphql`
  query ServicesPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      services
    }
  }
`;
