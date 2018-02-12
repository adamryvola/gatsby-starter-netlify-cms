import React from "react";
import graphql from "graphql";
import { HTMLContent } from '../components/Content';

export default class IndexPage extends React.Component {

  render() {
    const { data } = this.props;
    const { html } = data.markdownRemark;

    return (
        <HTMLContent className="content" content={html} />
    );
  }
}
export const aboutPageQuery = graphql`
  query IndexQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;
