'use strict';

var _utils = require('./components/helpers/utils');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _About = require('./components/About');

var _About2 = _interopRequireDefault(_About);

var _Education = require('./components/Education');

var _Education2 = _interopRequireDefault(_Education);

var _Experience = require('./components/Experience');

var _Experience2 = _interopRequireDefault(_Experience);

var _Interests = require('./components/Interests');

var _Interests2 = _interopRequireDefault(_Interests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_About2.default, _utils.utils.dom('about'));
_reactDom2.default.render(_Education2.default, _utils.utils.dom('education'));
_reactDom2.default.render(_Experience2.default, _utils.utils.dom('experience'));
_reactDom2.default.render(_Interests2.default, _utils.utils.dom('interests'));
