(self["webpackChunkproyecto_final"] = self["webpackChunkproyecto_final"] || []).push([["src_ErrorBoundary_index_js-src_components_Characters_js-src_components_Title_js"],{

/***/ "./src/ErrorBoundary/index.js":
/*!************************************!*\
  !*** ./src/ErrorBoundary/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ButtonPrimary */ "./src/components/ButtonPrimary.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "oops! Tenemos un Problema"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: "/"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_1__.default, null, "Inicio")));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./src/components/ButtonPrimary.js":
/*!*****************************************!*\
  !*** ./src/components/ButtonPrimary.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");



var ButtonPrimary = function ButtonPrimary(props) {
  var onClick = props.onClick,
      startIcon = props.startIcon,
      variant = props.variant,
      color = props.color,
      className = props.className,
      children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
    onClick: onClick,
    startIcon: startIcon,
    variant: variant,
    color: color,
    className: className,
    children: children
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonPrimary);

/***/ }),

/***/ "./src/components/Characters.js":
/*!**************************************!*\
  !*** ./src/components/Characters.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.js");
/* harmony import */ var _assets_images_imagehero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/imagehero.jpg */ "./src/assets/images/imagehero.jpg");
/* harmony import */ var _contexts_HeroContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/HeroContext */ "./src/contexts/HeroContext.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _ButtonPrimary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonPrimary */ "./src/components/ButtonPrimary.js");
/* harmony import */ var _contexts_ButtonsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/ButtonsContext */ "./src/contexts/ButtonsContext.js");
/* harmony import */ var _custom_hooks_useModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom-hooks/useModal */ "./src/custom-hooks/useModal.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var Characters = function Characters(_ref) {
  var characters = _ref.characters;
  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.default)({
    card: {
      margin: 10,
      color: "white",
      background: "#E2C275",
      border: "none"
    },
    info: {
      margin: 5,
      marginTop: 2,
      fontFamily: "Russo One"
    }
  });
  var classes = useStyles();
  var name = characters.name,
      id = characters.id,
      image = characters.image;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_HeroContext__WEBPACK_IMPORTED_MODULE_3__.HeroContext),
      selectedHero = _useContext.selectedHero,
      heroes = _useContext.heroes,
      deleteHero = _useContext.deleteHero,
      deleteHeroAlert = _useContext.deleteHeroAlert;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ButtonsContext__WEBPACK_IMPORTED_MODULE_5__.ButtonsContext),
      show = _useContext2.show,
      setShow = _useContext2.setShow;

  var _useModal = (0,_custom_hooks_useModal__WEBPACK_IMPORTED_MODULE_6__.default)(),
      open = _useModal.open,
      openModal = _useModal.openModal,
      closeModal = _useModal.closeModal; // const { hero } = useGetCharacters(
  //   `https://superheroapi.com/api.php/1187317678426591/${id}`
  // );


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      hero = _useState2[0],
      setHero = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("https://superheroapi.com/api.php/1187317678426591/".concat(id)).then(function (res) {
      return res.json();
    }).then(function (data) {
      return setHero(data);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__.default, {
    component: "img",
    image: image.url,
    height: "250",
    name: name,
    alt: name,
    onError: function onError(e) {
      e.target.src = _assets_images_imagehero_jpg__WEBPACK_IMPORTED_MODULE_2__.default;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
    gutterBottom: true,
    variant: "h5",
    className: classes.info
  }, name), show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonPrimary__WEBPACK_IMPORTED_MODULE_4__.default, {
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_13__.default, null),
    variant: "contained",
    color: "primary",
    className: classes.info,
    onClick: function onClick() {
      return selectedHero(hero, id);
    }
  }, heroes.find(function (hero) {
    return hero.id === id;
  }) ? "Agregado" : "Agregar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonPrimary__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.info,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14__.default, null),
    variant: "contained",
    color: "secondary",
    onClick: openModal
  }, "Ver mAs", " ")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonPrimary__WEBPACK_IMPORTED_MODULE_4__.default, {
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15__.default, null),
    variant: "contained",
    color: "secondary",
    className: classes.info,
    onClick: function onClick() {
      return deleteHeroAlert(id);
    }
  }, "Eliminar"))), open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_1__.default, {
    hero: hero,
    closeModal: closeModal,
    open: open
  }));
};

Characters.propTypes = {
  hero: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  characters: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  show: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  selectedHero: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  heroes: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array),
  deleteHero: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  openModal: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  closeModal: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (Characters);

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar */ "./src/components/ProgressBar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");










var Modal = function Modal(_ref) {
  var hero = _ref.hero,
      closeModal = _ref.closeModal,
      open = _ref.open;
  var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default)({
    dialog: {
      background: "5800FF",
      margin: "0",
      padding: "5"
    },
    dialogContent: {
      background: " #170070",
      border: "none"
    },
    paragraph: {
      width: "400px",
      fontSize: "28px",
      color: "white",
      margin: "0px",
      padding: "5px"
    },
    dialogTitle: {
      color: "#ef6c00",
      fontFamily: "Russo One"
    },
    dialogActions: {
      background: " #170070"
    }
  });
  var classes = useStyles();
  var powerstats = hero.powerstats,
      biography = hero.biography;
  var intelligence = powerstats.intelligence,
      strength = powerstats.strength,
      speed = powerstats.speed,
      durability = powerstats.durability,
      power = powerstats.power,
      combat = powerstats.combat;
  var strengthNumber = parseInt(strength) || 0;
  var combatNumber = parseInt(combat) || 0;
  var durabilityNumber = parseInt(durability) || 0;
  var powerNumber = parseInt(power) || 0;
  var intelligenceNumber = parseInt(intelligence) || 0;
  var speedNumber = parseInt(speed) || 0;
  var testData = [{
    bgcolor: "#6a1b9a",
    completed: strengthNumber,
    value: "Strength"
  }, {
    bgcolor: "#00695c",
    completed: combatNumber,
    value: "Combat"
  }, {
    bgcolor: "#ef6c00",
    completed: durabilityNumber,
    value: "Durability"
  }, {
    bgcolor: "#6a1b4a",
    completed: powerNumber,
    value: "Power"
  }, {
    bgcolor: "#ef6c80",
    completed: speedNumber,
    value: "Speed"
  }, {
    bgcolor: "#00691c",
    completed: intelligenceNumber,
    value: "Intelligence"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__.default, {
    open: open,
    className: classes.dialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.dialogContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
    align: "center",
    className: classes.dialogTitle,
    variant: "h6",
    gutterBottom: true
  }, "Estadisticas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap"
  }, testData.map(function (item, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: idx,
      bgcolor: item.bgcolor,
      completed: item.completed,
      value: item.value
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: classes.paragraph,
    align: "center"
  }, "Orientacion:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, biography.alignment === "good" ? "Heroe" : biography.alignment === "bad" ? "Villano" : "Neutral")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.dialogActions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
    style: {
      background: "#BF1363",
      color: "white"
    },
    onClick: closeModal
  }, "Cerrar")));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/ProgressBar.js":
/*!***************************************!*\
  !*** ./src/components/ProgressBar.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ProgressBar = function ProgressBar(props) {
  var bgcolor = props.bgcolor,
      completed = props.completed,
      value = props.value;
  var containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 5
  };
  var fillerStyles = {
    height: "100%",
    width: "".concat(completed, "%"),
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out"
  };
  var labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold"
  };
  var subtitleStyles = {
    color: "#FFE61B"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: subtitleStyles
  }, value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: containerStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: fillerStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: labelStyles
  }, " ", completed))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./src/components/Title.js":
/*!*********************************!*\
  !*** ./src/components/Title.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var Title = function Title(props) {
  var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)({
    title: {
      marginTop: 25,
      fontFamily: "Chewy"
    }
  });
  var classes = useStyles();
  var children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, _extends({}, props, {
    className: classes.title
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/custom-hooks/useModal.js":
/*!**************************************!*\
  !*** ./src/custom-hooks/useModal.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useModal = function useModal() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var openModal = function openModal() {
    return setOpen(true);
  };

  var closeModal = function closeModal() {
    return setOpen(false);
  };

  return {
    open: open,
    openModal: openModal,
    closeModal: closeModal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useModal);

/***/ }),

/***/ "./src/assets/images/imagehero.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/imagehero.jpg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6b773a685ac22e696530b07e71c270c1.jpg");

/***/ })

}]);
//# sourceMappingURL=src_ErrorBoundary_index_js-src_components_Characters_js-src_components_Title_js.bundle.js.map