'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _homePage = require('../../../src/templates/home-page');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePagePreview = function HomePagePreview(_ref) {
    var entry = _ref.entry,
        widgetFor = _ref.widgetFor;
    return _react2.default.createElement(
        'div',
        null,
        'PREVIEW',
        _react2.default.createElement(_homePage.HomePageTemplate, { content: widgetFor('body') })
    );
};

exports.default = HomePagePreview;
module.exports = exports['default'];