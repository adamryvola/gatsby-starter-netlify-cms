import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './style.css';

const TemplateWrapper = ({children}) => (
    <div>
        <Navbar />
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
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
