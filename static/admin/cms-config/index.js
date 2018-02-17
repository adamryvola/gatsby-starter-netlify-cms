"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _netlifyCms = require("netlify-cms");

var _netlifyCms2 = _interopRequireDefault(_netlifyCms);

require("netlify-cms/dist/cms.css");

var _HomePagePreview = require("./preview-templates/HomePagePreview");

var _HomePagePreview2 = _interopRequireDefault(_HomePagePreview);

var _ServicesPagePreview = require("./preview-templates/ServicesPagePreview");

var _ServicesPagePreview2 = _interopRequireDefault(_ServicesPagePreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CMS.registerPreviewStyle('./styles.css');
_netlifyCms2.default.registerPreviewTemplate('home', _HomePagePreview2.default); /* eslint-disable no-unused-vars */

_netlifyCms2.default.registerPreviewTemplate('services', _ServicesPagePreview2.default);