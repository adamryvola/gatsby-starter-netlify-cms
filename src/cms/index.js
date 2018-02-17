import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import HomePagePreview from '../../static/admin/preview-templates/HomePagePreview';
import ServicesPagePreview from '../../static/admin/preview-templates/ServicesPagePreview';

CMS.registerPreviewStyle('./styles.css');
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('services', ServicesPagePreview);
