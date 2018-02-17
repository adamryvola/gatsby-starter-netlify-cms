/* eslint-disable no-unused-vars */
import React from "react";
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";

import HomePagePreview from './preview-templates/HomePagePreview';
import ServicesPagePreview from './preview-templates/ServicesPagePreview';

// CMS.registerPreviewStyle('./styles.css');
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('services', ServicesPagePreview);
