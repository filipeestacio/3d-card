"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 45ch;\n  height: 45ch;\n  background: grey;\n  border-radius: 5px;\n  background-image: ", ";\n  background-size: cover;\n  background-position: center center;\n  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);\n  transition: box-shadow 0.5s;\n  will-change: transform;\n  border: 5px solid white;\n  z-index: 1;\n\n  &:hover {\n    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);\n    z-index: 10;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledCard = _styledComponents.default.div(_templateObject(), function (props) {
  return "url(".concat(props.url, ")");
});

exports.StyledCard = StyledCard;

//# sourceMappingURL=3dCard.styled.js.map