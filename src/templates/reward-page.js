import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

export const RewardPageTemplate = ({ content, contentComponent }) => {
    const PageContent = contentComponent || Content;
    return (
        <PageContent className="content" content={content} />
    );
};

export default ({ data }) => {
    const { html } = data.markdownRemark;
    return (<RewardPageTemplate contentComponent={HTMLContent} content={html} />);
};

export const rewardPageQuery = graphql`
  query RewardPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;
