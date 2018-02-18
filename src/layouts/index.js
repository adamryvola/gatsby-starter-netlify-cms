import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './style.css';

const TemplateWrapper = ({children, data}) => {
    const settings = data.markdownRemark.frontmatter;
    return (
        <div>
            <Helmet>
                <title>{settings.title}</title>
            </Helmet>
            <Navbar/>
            <div className="top-divider">
            </div>
            <div className="content-wrapper">
                <div className="content">
                    {children()}
                </div>
            </div>
            <div className="bottom-divider">
            </div>
            <div className="footer">
                AR 2018
            </div>
        </div>)
};

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export const templateQuery = graphql`
  query Template {
    markdownRemark(frontmatter: { path: { eq: "settings" } }) {
      frontmatter {
        path
        title
      }
    }
  }
`;

export default TemplateWrapper;
