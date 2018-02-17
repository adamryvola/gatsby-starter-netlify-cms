import React from 'react';
import graphql from 'graphql';
import Content from '../components/Content';

export const ServicesPageTemplate = ({services}) => {
    return (
        <div>
            <button id="expand-controll">+ rozbalit vše</button>
            <Content className="content" content={
                services.map((service, i) => (
                    <div key={i} className="acc_panel">
                        <button className="acc_panel_title">
                            {service.title}
                        </button>
                        <div className="acc_panel_content">
                            {service.content}
                        </div>
                    </div>
                ))
            }/>
        </div>
    );
};

export default ({data}) => {
    const {frontmatter} = data.markdownRemark;
    return (<ServicesPageTemplate services={frontmatter.services}/>);
};

export const productPageQuery = graphql`
  query ProductPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        services {
            title
            content
        }
      }
    }
  }
`;
