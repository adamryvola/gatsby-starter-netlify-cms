import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

export const ContactsPageTemplate = ({ content, contentComponent }) => {
    const PageContent = contentComponent || Content;
    return (
        <PageContent className="content" content={content} />
    );
};

export default ({ data }) => {
    const { html } = data.markdownRemark;
    return (<ContactsPageTemplate contentComponent={HTMLContent} content={html} />);
};

export const contactsPageQuery = graphql`
  query ContactsPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;
