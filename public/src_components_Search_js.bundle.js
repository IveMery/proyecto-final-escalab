(self["webpackChunkproyecto_final"] = self["webpackChunkproyecto_final"] || []).push([["src_components_Search_js"],{

/***/ "./src/components/ListCharacters.js":
/*!******************************************!*\
  !*** ./src/components/ListCharacters.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Characters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Characters */ "./src/components/Characters.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ "./src/components/Loader.js");
/* harmony import */ var _contexts_HeroContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/HeroContext */ "./src/contexts/HeroContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);







var ListCharacters = function ListCharacters(_ref) {
  var data = _ref.data;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_HeroContext__WEBPACK_IMPORTED_MODULE_3__.HeroContext),
      loading = _useContext.loading;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    container: true,
    direction: "row",
    justifyContent: "center"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_2__.default, null) : !data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "No encontramos heroes con ese nombre") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, data === null || data === void 0 ? void 0 : data.map(function (characters) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Characters__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: characters.id,
      characters: characters
    });
  })));
};

ListCharacters.propTypes = {
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object))
};
/* harmony default export */ __webpack_exports__["default"] = (ListCharacters);

/***/ }),

/***/ "./src/components/Search.js":
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts_HeroContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/HeroContext */ "./src/contexts/HeroContext.js");
/* harmony import */ var _ListCharacters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListCharacters */ "./src/components/ListCharacters.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js");
/* harmony import */ var _contexts_ButtonsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ButtonsContext */ "./src/contexts/ButtonsContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorBoundary */ "./src/ErrorBoundary/index.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Title */ "./src/components/Title.js");












var Search = function Search() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_HeroContext__WEBPACK_IMPORTED_MODULE_1__.HeroContext),
      handleChange = _useContext.handleChange,
      handleSubmit = _useContext.handleSubmit,
      query = _useContext.query,
      data = _useContext.data,
      value = _useContext.value;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ButtonsContext__WEBPACK_IMPORTED_MODULE_3__.ButtonsContext),
      show = _useContext2.show,
      setShow = _useContext2.setShow;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setShow(true);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
    container: true,
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_5__.default, null, "Buscar Personajes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, {
    type: "text",
    placeholder: "Search",
    value: value,
    onChange: handleChange,
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__.default, {
        position: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__.default, null))
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__.default, null, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_5__.default, null, "Lista de Personajes"), query && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ListCharacters__WEBPACK_IMPORTED_MODULE_2__.default, {
    data: data
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

}]);
//# sourceMappingURL=src_components_Search_js.bundle.js.map