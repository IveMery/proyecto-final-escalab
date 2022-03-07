(self["webpackChunkproyecto_final"] = self["webpackChunkproyecto_final"] || []).push([["src_views_MyTeam_js"],{

/***/ "./src/components/Empty.js":
/*!*********************************!*\
  !*** ./src/components/Empty.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_animation_gif_batman_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/animation/gif/batman.gif */ "./src/assets/animation/gif/batman.gif");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./src/components/Title.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorBoundary */ "./src/ErrorBoundary/index.js");







var Empty = function Empty() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: "h6",
    gutterBottom: true
  }, "Agrega algunos h\xE9roes o villanos..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    style: {
      width: "300px"
    },
    src: _assets_animation_gif_batman_gif__WEBPACK_IMPORTED_MODULE_1__.default,
    alt: "batman gif"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Empty);

/***/ }),

/***/ "./src/components/Stats.js":
/*!*********************************!*\
  !*** ./src/components/Stats.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _TableStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableStats */ "./src/components/TableStats.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./src/components/Title.js");
/* harmony import */ var _contexts_StatsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/StatsContext */ "./src/contexts/StatsContext.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorBoundary */ "./src/ErrorBoundary/index.js");







var Stats = function Stats() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_StatsContext__WEBPACK_IMPORTED_MODULE_3__.StatsContext),
      totalStatsHero = _useContext.totalStatsHero;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__.default, {
    align: "center",
    gutterBottom: true
  }, "Resumen de Stats"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {
    container: true,
    spacing: 3,
    direction: "row",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {
    item: true,
    lg: 9,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TableStats__WEBPACK_IMPORTED_MODULE_1__.default, {
    totalStatsHero: totalStatsHero
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Stats);

/***/ }),

/***/ "./src/components/TableStats.js":
/*!**************************************!*\
  !*** ./src/components/TableStats.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableStats": function() { return /* binding */ TableStats; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/TableCell.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableHead/TableHead.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableRow/TableRow.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorBoundary */ "./src/ErrorBoundary/index.js");











function createData(name, speed, durability, intelligence, power, combat, strength) {
  return {
    name: name,
    speed: speed,
    durability: durability,
    intelligence: intelligence,
    power: power,
    combat: combat,
    strength: strength
  };
}

var TableStats = function TableStats(_ref) {
  var totalStatsHero = _ref.totalStatsHero;
  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)({
    head: {
      background: "#323232",
      fontFamily: "Chewy"
    },
    tablecell: {
      color: "white",
      fontFamily: "Chewy"
    },
    tablecellStats: {
      color: "black",
      fontFamily: "Chewy"
    }
  });
  var classes = useStyles();
  var speed = totalStatsHero.speed,
      strength = totalStatsHero.strength,
      durability = totalStatsHero.durability,
      intelligence = totalStatsHero.intelligence,
      power = totalStatsHero.power,
      combat = totalStatsHero.combat;
  var rows = [createData("Total Stats", speed, durability, intelligence, power, combat, strength)];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    sx: {
      minWidth: 700
    },
    "aria-label": "customized table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.head
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: classes.tablecell
  }, "Stats"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Speed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Durability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Intelligence"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Power"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Combat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Strength"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, null, rows.map(function (row) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
      key: row.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
      component: "th",
      scope: "row",
      className: classes.tablecellStats
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
      align: "center",
      className: classes.tablecellStats
    }, row.speed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
      align: "center",
      className: classes.tablecellStats
    }, row.durability), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
      align: "center",
      className: classes.tablecellStats
    }, row.intelligence), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
      align: "center",
      className: classes.tablecellStats
    }, row.power), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
      align: "center",
      className: classes.tablecellStats
    }, row.combat), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
      align: "center",
      className: classes.tablecellStats
    }, row.strength));
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (TableStats);

/***/ }),

/***/ "./src/views/MyTeam.js":
/*!*****************************!*\
  !*** ./src/views/MyTeam.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _contexts_HeroContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/HeroContext */ "./src/contexts/HeroContext.js");
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Empty */ "./src/components/Empty.js");
/* harmony import */ var _components_Characters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Characters */ "./src/components/Characters.js");
/* harmony import */ var _contexts_ButtonsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/ButtonsContext */ "./src/contexts/ButtonsContext.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Title */ "./src/components/Title.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Stats */ "./src/components/Stats.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");











var MyTeam = function MyTeam() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_HeroContext__WEBPACK_IMPORTED_MODULE_1__.HeroContext),
      heroes = _useContext.heroes;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ButtonsContext__WEBPACK_IMPORTED_MODULE_4__.ButtonsContext),
      setShow = _useContext2.setShow;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setShow(false);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, heroes.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_5__.default, {
    gutterBottom: true,
    align: "center",
    variant: "h3"
  }, "Mi equipo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__.default, {
    p: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
    container: true,
    direction: "row",
    justifyContent: "center"
  }, heroes.length > 0 ? heroes.map(function (characters) {
    var id = characters.id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Characters__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: id,
      characters: characters
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Empty__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__.default, {
    style: {
      paddingBottom: "45px"
    }
  }, heroes.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Stats__WEBPACK_IMPORTED_MODULE_7__.default, null))));
};

MyTeam.propTypes = {
  heroes: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  setShow: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};
/* harmony default export */ __webpack_exports__["default"] = (MyTeam);

/***/ }),

/***/ "./src/assets/animation/gif/batman.gif":
/*!*********************************************!*\
  !*** ./src/assets/animation/gif/batman.gif ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b3cd584929cb67125bb3ad7ec29fad34.gif");

/***/ })

}]);
//# sourceMappingURL=src_views_MyTeam_js.bundle.js.map