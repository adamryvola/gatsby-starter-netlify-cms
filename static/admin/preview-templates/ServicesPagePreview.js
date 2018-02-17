import React from 'react';
import { ServicesPageTemplate } from '../../../src/templates/services-page';

const ServicesPagePreview = ({ entry, widgetFor }) => (
    <div>
        PREVIEW
        <ServicesPageTemplate services={entry.getIn(['data', 'services'])} />
    </div>
);

export default ServicesPagePreview;
