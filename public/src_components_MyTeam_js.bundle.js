(self["webpackChunkproyecto_final"] = self["webpackChunkproyecto_final"] || []).push([["src_components_MyTeam_js"],{

/***/ "./src/components/Empty.js":
/*!*********************************!*\
  !*** ./src/components/Empty.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_animation_gif_batman_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/animation/gif/batman.gif */ "./src/assets/animation/gif/batman.gif");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./src/components/Title.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");






var Empty = function Empty() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: "h6",
    gutterBottom: true
  }, "Agrega algunos heroes o villanos..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    style: {
      width: "300px"
    },
    src: _assets_animation_gif_batman_gif__WEBPACK_IMPORTED_MODULE_1__.default,
    alt: "batman gif"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Empty);

/***/ }),

/***/ "./src/components/MyTeam.js":
/*!**********************************!*\
  !*** ./src/components/MyTeam.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _contexts_HeroContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/HeroContext */ "./src/contexts/HeroContext.js");
/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Empty */ "./src/components/Empty.js");
/* harmony import */ var _Characters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Characters */ "./src/components/Characters.js");
/* harmony import */ var _contexts_ButtonsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/ButtonsContext */ "./src/contexts/ButtonsContext.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Title */ "./src/components/Title.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Stats */ "./src/components/Stats.js");
/* harmony import */ var _ErrorBoundary_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ErrorBoundary/index */ "./src/ErrorBoundary/index.js");


 // import "../assets/styles/sliderArrow.css";









var MyTeam = function MyTeam() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_HeroContext__WEBPACK_IMPORTED_MODULE_1__.HeroContext),
      heroes = _useContext.heroes,
      deleteHero = _useContext.deleteHero;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ButtonsContext__WEBPACK_IMPORTED_MODULE_4__.ButtonsContext),
      setShow = _useContext2.setShow;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setShow(false);
  }, []); // const settings = {
  //   dots: true,
  //   infinite: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 3,
  //   speed: 500,
  //   autoplaySpeed: 2000,
  //   autoplay: true,
  //   cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 740,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, heroes.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_5__.default, {
    gutterBottom: true,
    align: "center",
    variant: "h3"
  }, "Mi equipo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__.default, {
    p: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ErrorBoundary_index__WEBPACK_IMPORTED_MODULE_8__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, heroes.length > 0 ? heroes.map(function (characters) {
    var id = characters.id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Characters__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: id,
      characters: characters,
      deleteHero: deleteHero
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Empty__WEBPACK_IMPORTED_MODULE_2__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__.default, null, heroes.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Stats__WEBPACK_IMPORTED_MODULE_7__.default, null))));
};

MyTeam.propTypes = {
  heroes: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)),
  deleteHero: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (MyTeam);

/***/ }),

/***/ "./src/components/Stats.js":
/*!*********************************!*\
  !*** ./src/components/Stats.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _TableStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableStats */ "./src/components/TableStats.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./src/components/Title.js");
/* harmony import */ var _contexts_StatsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/StatsContext */ "./src/contexts/StatsContext.js");






var Stats = function Stats() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_StatsContext__WEBPACK_IMPORTED_MODULE_3__.StatsContext),
      totalStatsHero = _useContext.totalStatsHero;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__.default, {
    align: "center"
  }, "Resumen de Stats"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
    container: true,
    spacing: 3,
    direction: "row",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TableStats__WEBPACK_IMPORTED_MODULE_1__.default, {
    totalStatsHero: totalStatsHero
  }))));
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/TableCell.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableHead/TableHead.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableRow/TableRow.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");










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
  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({
    head: {
      background: "rgb(54, 57, 63)"
    },
    tablecell: {
      color: "white"
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    sx: {
      minWidth: 700
    },
    "aria-label": "customized table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: classes.head
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.tablecell
  }, "Stats"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Speed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Durability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Intelligence"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Power"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Combat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.tablecell,
    align: "center"
  }, "Strength"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, null, rows.map(function (row) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
      key: row.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
      component: "th",
      scope: "row"
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
      align: "center"
    }, row.speed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
      align: "center"
    }, row.durability), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
      align: "center"
    }, row.intelligence), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
      align: "center"
    }, row.power), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
      align: "center"
    }, row.combat), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
      align: "center"
    }, row.strength));
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (TableStats);

/***/ }),

/***/ "./src/assets/animation/gif/batman.gif":
/*!*********************************************!*\
  !*** ./src/assets/animation/gif/batman.gif ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1d13a1ab6a2ac228cadacc566ee681e7.gif");

/***/ })

}]);
//# sourceMappingURL=src_components_MyTeam_js.bundle.js.map