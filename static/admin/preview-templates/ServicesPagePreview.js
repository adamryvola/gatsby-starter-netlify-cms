import React from 'react';
import { ServicesPageTemplate } from '../../../src/templates/services-page';

const ServicesPagePreview = ({ entry, widgetFor }) => (
    <div>
        <ServicesPageTemplate content={widgetFor('body')} />
    </div>
);

export default ServicesPagePreview;
