import React from 'react';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry, widgetFor }) => (
    <div>
        <h1>PREVIEW</h1>
        <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
    </div>
);

export default AboutPagePreview;
