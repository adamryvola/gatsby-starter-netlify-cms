import React from 'react';
import { HomePageTemplate } from '../../../src/templates/home-page';

const HomePagePreview = ({ entry, widgetFor }) => (
    <div>
        PREVIEW
        <HomePageTemplate content={widgetFor('body')} />
    </div>
);

export default HomePagePreview;
