"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _configProvider = require("../config-provider");

var _icon = _interopRequireDefault(require("../icon"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _index = require("../index");

var _wave = _interopRequireDefault(require("../_util/wave"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderBack = function renderBack(prefixCls, backIcon, onBack) {
  if (!backIcon || !onBack) {
    return null;
  }

  return React.createElement("div", {
    className: "".concat(prefixCls, "-back-icon"),
    onClick: function onClick(e) {
      if (onBack) {
        onBack(e);
      }
    }
  }, React.createElement(_wave["default"], null, backIcon), React.createElement(_index.Divider, {
    type: "vertical"
  }));
};

var renderBreadcrumb = function renderBreadcrumb(breadcrumb) {
  return React.createElement(_index.Breadcrumb, breadcrumb);
};

var renderHeader = function renderHeader(prefixCls, props) {
  var breadcrumb = props.breadcrumb,
      backIcon = props.backIcon,
      onBack = props.onBack;

  if (breadcrumb && breadcrumb.routes && breadcrumb.routes.length > 2) {
    return renderBreadcrumb(breadcrumb);
  }

  return renderBack(prefixCls, backIcon, onBack);
};

var renderTitle = function renderTitle(prefixCls, props) {
  var title = props.title,
      subTitle = props.subTitle,
      tags = props.tags,
      extra = props.extra;
  var titlePrefixCls = "".concat(prefixCls, "-title-view");
  return React.createElement("div", {
    className: "".concat(prefixCls, "-title-view")
  }, React.createElement("span", {
    className: "".concat(titlePrefixCls, "-title")
  }, title), subTitle && React.createElement("span", {
    className: "".concat(titlePrefixCls, "-sub-title")
  }, subTitle), tags && React.createElement("span", {
    className: "".concat(titlePrefixCls, "-tags")
  }, tags), extra && React.createElement("span", {
    className: "".concat(titlePrefixCls, "-extra")
  }, extra));
};

var renderFooter = function renderFooter(prefixCls, footer) {
  if (footer) {
    return React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }

  return null;
};

var PageHeader = function PageHeader(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        style = props.style,
        footer = props.footer,
        children = props.children;
    var prefixCls = getPrefixCls('page-header', customizePrefixCls);
    var className = (0, _classnames2["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-has-footer"), footer));
    return React.createElement("div", {
      className: className,
      style: style
    }, renderHeader(prefixCls, props), renderTitle(prefixCls, props), children && React.createElement("div", {
      className: "".concat(prefixCls, "-content-view")
    }, children), renderFooter(prefixCls, footer));
  });
};

PageHeader.defaultProps = {
  backIcon: React.createElement(_icon["default"], {
    type: "arrow-left"
  })
};
var _default = PageHeader;
exports["default"] = _default;