'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _servicesPage = require('../../../src/templates/services-page');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServicesPagePreview = function ServicesPagePreview(_ref) {
    var entry = _ref.entry,
        widgetFor = _ref.widgetFor;
    return _react2.default.createElement(
        'div',
        null,
        'PREVIEW',
        _react2.default.createElement(_servicesPage.ServicesPageTemplate, { services: entry.getIn(['data', 'services']) })
    );
};

exports.default = ServicesPagePreview;
module.exports = exports['default'];