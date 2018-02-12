import React from 'react';
import { HomePageTemplate } from '../../templates/home-page';

const HomePagePreview = ({ entry, widgetFor }) => (
    <div>
        <h1>PREVIEW</h1>
        <HomePageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
    </div>
);

export default HomePagePreview;
