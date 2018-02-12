import React from 'react';
import { HomePageTemplate } from '../../templates/home-page';

const HomePagePreview = ({ entry, widgetFor }) => (
    <div>
        <HomePageTemplate content={widgetFor('body')} />
    </div>
);

export default HomePagePreview;
