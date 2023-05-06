"use strict";
(self["webpackChunkae_game"] = self["webpackChunkae_game"] || []).push([[722],{

/***/ 9929:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "companiesAe2CompanyListAsync": function() { return /* binding */ companiesAe2CompanyListAsync; }
});

// EXTERNAL MODULE: ./www/model/game/player/player-type.ts
var player_type = __webpack_require__(8580);
;// CONCATENATED MODULE: ./www/page/client/client-companies/client-companies-const.ts



var defaultCompanyState = {
  clientGamePlayerIdList: [player_type/* GamePlayerIdEnum.player1 */.J8.player1, player_type/* GamePlayerIdEnum.player2 */.J8.player2],
  gameSettings: {
    startedMoney: 500,
    unitLimit: 25
  },
  playerList: [{
    gamePlayerColorId: player_type/* GamePlayerColorIdEnum.blue */.Zw.blue,
    gamePlayerId: player_type/* GamePlayerIdEnum.player1 */.J8.player1,
    gamePlayerTeamId: player_type/* GamePlayerTeamIdEnum.team1 */.gI.team1,
    money: 0,
    playerType: player_type/* GamePlayerTypeEnum.human */.vT.human
  }, {
    gamePlayerColorId: player_type/* GamePlayerColorIdEnum.red */.Zw.red,
    gamePlayerId: player_type/* GamePlayerIdEnum.player2 */.J8.player2,
    gamePlayerTeamId: player_type/* GamePlayerTeamIdEnum.team2 */.gI.team2,
    money: 0,
    playerType: player_type/* GamePlayerTypeEnum.bot */.vT.bot
  }]
};
// EXTERNAL MODULE: ./www/model/game/building/building-type.ts
var building_type = __webpack_require__(271);
// EXTERNAL MODULE: ./www/model/game/landscape/landscape-type.ts
var landscape_type = __webpack_require__(1094);
// EXTERNAL MODULE: ./www/model/game/unit/unit-type.ts
var unit_type = __webpack_require__(7982);
// EXTERNAL MODULE: ./www/util/string.tsx
var string = __webpack_require__(3791);
// EXTERNAL MODULE: ./www/model/game/unit/unit-const.ts
var unit_const = __webpack_require__(9614);
// EXTERNAL MODULE: ./www/model/map/map-type.ts
var map_type = __webpack_require__(6429);
// EXTERNAL MODULE: ./www/model/game/trigger/trigger-type.ts
var trigger_type = __webpack_require__(7879);
// EXTERNAL MODULE: ./www/provider/game/game-context-type.ts
var game_context_type = __webpack_require__(8999);
;// CONCATENATED MODULE: ./www/model/game/point/point-const.ts


var defaultPoint = {
  x: -1,
  y: -1
};
// EXTERNAL MODULE: ./www/model/map/companies-map-list/ae2/ae2-image/ae2-image.ts + 12 modules
var ae2_image = __webpack_require__(219);
;// CONCATENATED MODULE: ./www/model/map/companies-map-list/ae2/1-temple-raiders.ts


/* eslint-disable id-length, no-unused-vars, @typescript-eslint/no-unused-vars */
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};











var br0 = landscape_type/* GameLandscapeItemEnum.br0 */.k.br0,
  br1 = landscape_type/* GameLandscapeItemEnum.br1 */.k.br1,
  wt0 = landscape_type/* GameLandscapeItemEnum.wt0 */.k.wt0,
  st0 = landscape_type/* GameLandscapeItemEnum.st0 */.k.st0,
  tr0 = landscape_type/* GameLandscapeItemEnum.tr0 */.k.tr0,
  hl0 = landscape_type/* GameLandscapeItemEnum.hl0 */.k.hl0,
  fr1 = landscape_type/* GameLandscapeItemEnum.fr1 */.k.fr1,
  rd0 = landscape_type/* GameLandscapeItemEnum.rd0 */.k.rd0,
  tr1 = landscape_type/* GameLandscapeItemEnum.tr1 */.k.tr1,
  tr2 = landscape_type/* GameLandscapeItemEnum.tr2 */.k.tr2,
  fr0 = landscape_type/* GameLandscapeItemEnum.fr0 */.k.fr0,
  tr3 = landscape_type/* GameLandscapeItemEnum.tr3 */.k.tr3,
  tr4 = landscape_type/* GameLandscapeItemEnum.tr4 */.k.tr4,
  wt1 = landscape_type/* GameLandscapeItemEnum.wt1 */.k.wt1,
  wt2 = landscape_type/* GameLandscapeItemEnum.wt2 */.k.wt2;
var playerEmpty = player_type/* GamePlayerIdEnum.playerEmpty */.J8.playerEmpty,
  player1 = player_type/* GamePlayerIdEnum.player1 */.J8.player1,
  player2 = player_type/* GamePlayerIdEnum.player2 */.J8.player2,
  player3 = player_type/* GamePlayerIdEnum.player3 */.J8.player3,
  player4 = player_type/* GamePlayerIdEnum.player4 */.J8.player4;
var castle = building_type/* GameBuildingTypeEnum.castle */.R.castle,
  farm = building_type/* GameBuildingTypeEnum.farm */.R.farm,
  well = building_type/* GameBuildingTypeEnum.well */.R.well,
  temple = building_type/* GameBuildingTypeEnum.temple */.R.temple;
var buildingBroken = building_type/* GameBuildingStateEnum.buildingBroken */.n.buildingBroken,
  buildingOk = building_type/* GameBuildingStateEnum.buildingOk */.n.buildingOk;
var gray = player_type/* GamePlayerColorIdEnum.gray */.Zw.gray,
  red = player_type/* GamePlayerColorIdEnum.red */.Zw.red,
  blue = player_type/* GamePlayerColorIdEnum.blue */.Zw.blue,
  green = player_type/* GamePlayerColorIdEnum.green */.Zw.green,
  black = player_type/* GamePlayerColorIdEnum.black */.Zw.black;
var teamEmpty = player_type/* GamePlayerTeamIdEnum.teamEmpty */.gI.teamEmpty,
  team1 = player_type/* GamePlayerTeamIdEnum.team1 */.gI.team1,
  team2 = player_type/* GamePlayerTeamIdEnum.team2 */.gI.team2,
  team3 = player_type/* GamePlayerTeamIdEnum.team3 */.gI.team3,
  team4 = player_type/* GamePlayerTeamIdEnum.team4 */.gI.team4;
var archer = unit_type/* GameUnitTypeEnum.archer */.D.archer,
  catapult = unit_type/* GameUnitTypeEnum.catapult */.D.catapult,
  crystal = unit_type/* GameUnitTypeEnum.crystal */.D.crystal,
  demonLord = unit_type/* GameUnitTypeEnum.demonLord */.D.demonLord,
  direWolf = unit_type/* GameUnitTypeEnum.direWolf */.D.direWolf,
  dragon = unit_type/* GameUnitTypeEnum.dragon */.D.dragon,
  elemental = unit_type/* GameUnitTypeEnum.elemental */.D.elemental,
  galamar = unit_type/* GameUnitTypeEnum.galamar */.D.galamar,
  golem = unit_type/* GameUnitTypeEnum.golem */.D.golem,
  saeth = unit_type/* GameUnitTypeEnum.saeth */.D.saeth,
  skeleton = unit_type/* GameUnitTypeEnum.skeleton */.D.skeleton,
  soldier = unit_type/* GameUnitTypeEnum.soldier */.D.soldier,
  sorceress = unit_type/* GameUnitTypeEnum.sorceress */.D.sorceress,
  valadorn = unit_type/* GameUnitTypeEnum.valadorn */.D.valadorn,
  wisp = unit_type/* GameUnitTypeEnum.wisp */.D.wisp;
var templeRaiders = {
  briefingList: [{
    faceSrc: '',
    markdownLangKey: 'COMPANY_LOCATION__THE_TEMPLE_OF_COURAGE'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.tamplier.src */.J.tamplier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_1__BRIEFING_1_TAMPLIER'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_1__BRIEFING_2_GALAMAR'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_1__BRIEFING_3_SOLDIER'
  }],
  buildingList: [{
    buildingType: well,
    gamePlayerId: playerEmpty,
    state: buildingOk,
    x: 1,
    y: 1
  }, {
    buildingType: well,
    gamePlayerId: playerEmpty,
    state: buildingOk,
    x: 10,
    y: 10
  }, {
    buildingType: farm,
    gamePlayerId: player2,
    state: buildingOk,
    x: 6,
    y: 1
  }, {
    buildingType: farm,
    gamePlayerId: player2,
    state: buildingOk,
    x: 8,
    y: 1
  }, {
    buildingType: temple,
    gamePlayerId: playerEmpty,
    state: buildingOk,
    x: 9,
    y: 3
  }, {
    buildingType: farm,
    gamePlayerId: player1,
    state: buildingOk,
    x: 4,
    y: 8
  }, {
    buildingType: farm,
    gamePlayerId: player1,
    state: buildingOk,
    x: 8,
    y: 8
  }],
  cemetery: [],
  graveList: [],
  landscape: [[st0, fr0, st0, st0, rd0, fr0, tr0, hl0, fr1, st0, fr0, fr0], [fr0, tr0, tr0, st0, rd0, hl0, tr0, tr0, tr0, tr0, st0, fr1], [tr3, st0, hl0, tr0, rd0, fr0, hl0, fr0, fr1, tr0, tr0, hl0], [st0, fr0, tr0, tr0, rd0, tr0, tr0, fr1, tr0, rd0, hl0, fr0], [fr1, fr1, fr0, st0, rd0, rd0, rd0, rd0, rd0, rd0, rd0, rd0], [wt0, wt0, hl0, tr0, st0, tr0, fr0, st0, hl0, rd0, tr0, fr0], [wt1, wt0, wt0, wt0, hl0, st0, fr1, hl0, tr0, rd0, fr1, tr0], [wt0, wt0, wt0, wt0, tr0, rd0, rd0, rd0, rd0, rd0, st0, fr1], [fr1, tr0, tr0, hl0, tr0, rd0, tr0, hl0, tr0, tr0, fr0, fr0], [rd0, rd0, rd0, rd0, rd0, rd0, tr0, fr1, st0, tr0, hl0, tr1], [hl0, fr1, tr0, tr0, hl0, tr0, fr0, fr0, fr1, tr0, tr0, fr1], [st0, st0, fr0, fr1, tr0, st0, hl0, fr0, fr0, st0, tr0, hl0]],
  mapId: 'mission-ae2-temple-raiders',
  mapName: '',
  mapNameLangKey: 'MAP_NAME__AE2_MISSION_1__TEMPLE_RAIDERS',
  mapObjectiveLangKey: 'MAP_NAME__AE2_MISSION_1__TEMPLE_RAIDERS__OBJECTIVE',
  mapType: map_type/* MapTypeEnum.companies */.G.companies,
  storyMarkdownLangKeyList: ['MAP_NAME__AE2_MISSION__STORY_1_1', 'MAP_NAME__AE2_MISSION__STORY_1_2', 'MAP_NAME__AE2_MISSION__STORY_1_3'],
  triggerList: [{
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceDefeat */.q.companiesForceDefeat,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allHeroesDied */.m.allHeroesDied,
    dependentTriggerIdList: [],
    forPlayerId: player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'defeat--mission-ae2-temple-raiders',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.addUnitList */.q.addUnitList,
      addUnitList: [__assign(__assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(archer),
        unitType: archer,
        x: 1,
        y: 1
      }), __assign(__assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(soldier),
        unitType: soldier,
        x: 10,
        y: 10
      })],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDied */.m.allEnemyUnitDied,
    dependentTriggerIdList: [],
    forPlayerId: player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'add-unit--mission-ae2-temple-raiders',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.showBriefing */.q.showBriefing,
      addUnitList: [],
      briefing: {
        briefingList: [{
          faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_1__BRIEFING_4_SOLDIER'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_1__BRIEFING_5_GALAMAR'
        }],
        onBriefingEnd: null
      },
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDied */.m.allEnemyUnitDied,
    dependentTriggerIdList: [],
    forPlayerId: player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'add-unit--briefing--mission-ae2-temple-raiders',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.showBriefing */.q.showBriefing,
      addUnitList: [],
      briefing: {
        briefingList: [{
          faceSrc: ae2_image/* ae2FaceImage.tamplier.src */.J.tamplier.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_1__BRIEFING_6_TAMPLIER'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_1__BRIEFING_7_GALAMAR'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.tamplier.src */.J.tamplier.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_1__BRIEFING_8_TAMPLIER'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_1__BRIEFING_9_GALAMAR'
        }],
        onBriefingEnd: {
          actionType: game_context_type/* GameActionTypeEnum.companiesForceWin */.q.companiesForceWin,
          addUnitList: [],
          briefing: null,
          buyUnitType: null,
          movePointList: [],
          toPoint: defaultPoint,
          unitCurrentPoint: defaultPoint,
          unitId: ''
        }
      },
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDied */.m.allEnemyUnitDied,
    dependentTriggerIdList: ['add-unit--mission-ae2-temple-raiders', 'add-unit--briefing--mission-ae2-temple-raiders'],
    forPlayerId: player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'win--mission-ae2-temple-raiders',
    turnCount: 0
  }],
  unitList: [__assign(__assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(galamar),
    unitType: galamar,
    x: 4,
    y: 9
  }), __assign(__assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(archer),
    unitType: archer,
    x: 3,
    y: 10
  }), __assign(__assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(soldier),
    unitType: soldier,
    x: 3,
    y: 8
  }), __assign(__assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(skeleton),
    unitType: skeleton,
    x: 8,
    y: 3
  }), __assign(__assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(skeleton),
    unitType: skeleton,
    x: 10,
    y: 3
  })]
};
;// CONCATENATED MODULE: ./www/model/map/companies-map-list/ae2/2-to-the-rescue.ts


/* eslint-disable id-length, no-unused-vars, @typescript-eslint/no-unused-vars */
var _2_to_the_rescue_assign = undefined && undefined.__assign || function () {
  _2_to_the_rescue_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _2_to_the_rescue_assign.apply(this, arguments);
};











var _2_to_the_rescue_br0 = landscape_type/* GameLandscapeItemEnum.br0 */.k.br0,
  _2_to_the_rescue_br1 = landscape_type/* GameLandscapeItemEnum.br1 */.k.br1,
  _2_to_the_rescue_wt0 = landscape_type/* GameLandscapeItemEnum.wt0 */.k.wt0,
  _2_to_the_rescue_st0 = landscape_type/* GameLandscapeItemEnum.st0 */.k.st0,
  _2_to_the_rescue_tr0 = landscape_type/* GameLandscapeItemEnum.tr0 */.k.tr0,
  _2_to_the_rescue_hl0 = landscape_type/* GameLandscapeItemEnum.hl0 */.k.hl0,
  _2_to_the_rescue_fr1 = landscape_type/* GameLandscapeItemEnum.fr1 */.k.fr1,
  _2_to_the_rescue_rd0 = landscape_type/* GameLandscapeItemEnum.rd0 */.k.rd0,
  _2_to_the_rescue_tr1 = landscape_type/* GameLandscapeItemEnum.tr1 */.k.tr1,
  _2_to_the_rescue_tr2 = landscape_type/* GameLandscapeItemEnum.tr2 */.k.tr2,
  _2_to_the_rescue_fr0 = landscape_type/* GameLandscapeItemEnum.fr0 */.k.fr0,
  _2_to_the_rescue_tr3 = landscape_type/* GameLandscapeItemEnum.tr3 */.k.tr3,
  _2_to_the_rescue_tr4 = landscape_type/* GameLandscapeItemEnum.tr4 */.k.tr4,
  _2_to_the_rescue_wt1 = landscape_type/* GameLandscapeItemEnum.wt1 */.k.wt1,
  _2_to_the_rescue_wt2 = landscape_type/* GameLandscapeItemEnum.wt2 */.k.wt2;
var _2_to_the_rescue_playerEmpty = player_type/* GamePlayerIdEnum.playerEmpty */.J8.playerEmpty,
  _2_to_the_rescue_player1 = player_type/* GamePlayerIdEnum.player1 */.J8.player1,
  _2_to_the_rescue_player2 = player_type/* GamePlayerIdEnum.player2 */.J8.player2,
  _2_to_the_rescue_player3 = player_type/* GamePlayerIdEnum.player3 */.J8.player3,
  _2_to_the_rescue_player4 = player_type/* GamePlayerIdEnum.player4 */.J8.player4;
var _2_to_the_rescue_castle = building_type/* GameBuildingTypeEnum.castle */.R.castle,
  _2_to_the_rescue_farm = building_type/* GameBuildingTypeEnum.farm */.R.farm,
  _2_to_the_rescue_well = building_type/* GameBuildingTypeEnum.well */.R.well,
  _2_to_the_rescue_temple = building_type/* GameBuildingTypeEnum.temple */.R.temple;
var _2_to_the_rescue_buildingBroken = building_type/* GameBuildingStateEnum.buildingBroken */.n.buildingBroken,
  _2_to_the_rescue_buildingOk = building_type/* GameBuildingStateEnum.buildingOk */.n.buildingOk;
var _2_to_the_rescue_gray = player_type/* GamePlayerColorIdEnum.gray */.Zw.gray,
  _2_to_the_rescue_red = player_type/* GamePlayerColorIdEnum.red */.Zw.red,
  _2_to_the_rescue_blue = player_type/* GamePlayerColorIdEnum.blue */.Zw.blue,
  _2_to_the_rescue_green = player_type/* GamePlayerColorIdEnum.green */.Zw.green,
  _2_to_the_rescue_black = player_type/* GamePlayerColorIdEnum.black */.Zw.black;
var _2_to_the_rescue_teamEmpty = player_type/* GamePlayerTeamIdEnum.teamEmpty */.gI.teamEmpty,
  _2_to_the_rescue_team1 = player_type/* GamePlayerTeamIdEnum.team1 */.gI.team1,
  _2_to_the_rescue_team2 = player_type/* GamePlayerTeamIdEnum.team2 */.gI.team2,
  _2_to_the_rescue_team3 = player_type/* GamePlayerTeamIdEnum.team3 */.gI.team3,
  _2_to_the_rescue_team4 = player_type/* GamePlayerTeamIdEnum.team4 */.gI.team4;
var _2_to_the_rescue_archer = unit_type/* GameUnitTypeEnum.archer */.D.archer,
  _2_to_the_rescue_catapult = unit_type/* GameUnitTypeEnum.catapult */.D.catapult,
  _2_to_the_rescue_crystal = unit_type/* GameUnitTypeEnum.crystal */.D.crystal,
  _2_to_the_rescue_demonLord = unit_type/* GameUnitTypeEnum.demonLord */.D.demonLord,
  _2_to_the_rescue_direWolf = unit_type/* GameUnitTypeEnum.direWolf */.D.direWolf,
  _2_to_the_rescue_dragon = unit_type/* GameUnitTypeEnum.dragon */.D.dragon,
  _2_to_the_rescue_elemental = unit_type/* GameUnitTypeEnum.elemental */.D.elemental,
  _2_to_the_rescue_galamar = unit_type/* GameUnitTypeEnum.galamar */.D.galamar,
  _2_to_the_rescue_golem = unit_type/* GameUnitTypeEnum.golem */.D.golem,
  _2_to_the_rescue_saeth = unit_type/* GameUnitTypeEnum.saeth */.D.saeth,
  _2_to_the_rescue_skeleton = unit_type/* GameUnitTypeEnum.skeleton */.D.skeleton,
  _2_to_the_rescue_soldier = unit_type/* GameUnitTypeEnum.soldier */.D.soldier,
  _2_to_the_rescue_sorceress = unit_type/* GameUnitTypeEnum.sorceress */.D.sorceress,
  _2_to_the_rescue_valadorn = unit_type/* GameUnitTypeEnum.valadorn */.D.valadorn,
  _2_to_the_rescue_wisp = unit_type/* GameUnitTypeEnum.wisp */.D.wisp;
var toTheRescue = {
  briefingList: [{
    faceSrc: '',
    markdownLangKey: 'COMPANY_LOCATION__THE_TEMPLE_OF_WISDOM'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.valadorn.src */.J.valadorn.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_2__BRIEFING_1_VALADORN'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.demonLord.src */.J.demonLord.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_2__BRIEFING_2_DEMON_LORD'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_2__BRIEFING_3_SOLDIER'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.tamplier.src */.J.tamplier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_2__BRIEFING_4_TAMPLIER'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_2__BRIEFING_5_SOLDIER'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.valadorn.src */.J.valadorn.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_2__BRIEFING_6_VALADORN'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_2__BRIEFING_7_SOLDIER'
  }],
  buildingList: [{
    buildingType: _2_to_the_rescue_castle,
    gamePlayerId: _2_to_the_rescue_playerEmpty,
    state: _2_to_the_rescue_buildingOk,
    x: 3,
    y: 5
  }, {
    buildingType: _2_to_the_rescue_castle,
    gamePlayerId: _2_to_the_rescue_player2,
    state: _2_to_the_rescue_buildingOk,
    x: 12,
    y: 3
  }, {
    buildingType: _2_to_the_rescue_farm,
    gamePlayerId: _2_to_the_rescue_playerEmpty,
    state: _2_to_the_rescue_buildingOk,
    x: 1,
    y: 4
  }, {
    buildingType: _2_to_the_rescue_farm,
    gamePlayerId: _2_to_the_rescue_playerEmpty,
    state: _2_to_the_rescue_buildingOk,
    x: 5,
    y: 2
  }, {
    buildingType: _2_to_the_rescue_farm,
    gamePlayerId: _2_to_the_rescue_playerEmpty,
    state: _2_to_the_rescue_buildingOk,
    x: 10,
    y: 2
  }, {
    buildingType: _2_to_the_rescue_farm,
    gamePlayerId: _2_to_the_rescue_playerEmpty,
    state: _2_to_the_rescue_buildingOk,
    x: 13,
    y: 6
  }, {
    buildingType: _2_to_the_rescue_farm,
    gamePlayerId: _2_to_the_rescue_playerEmpty,
    state: _2_to_the_rescue_buildingOk,
    x: 7,
    y: 7
  }, {
    buildingType: _2_to_the_rescue_farm,
    gamePlayerId: _2_to_the_rescue_playerEmpty,
    state: _2_to_the_rescue_buildingBroken,
    x: 9,
    y: 5
  }, {
    buildingType: _2_to_the_rescue_farm,
    gamePlayerId: _2_to_the_rescue_playerEmpty,
    state: _2_to_the_rescue_buildingBroken,
    x: 5,
    y: 7
  }, {
    buildingType: _2_to_the_rescue_temple,
    gamePlayerId: _2_to_the_rescue_playerEmpty,
    state: _2_to_the_rescue_buildingOk,
    x: 7,
    y: 3
  }],
  cemetery: [],
  graveList: [],
  landscape: [[_2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt1, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_br1, _2_to_the_rescue_wt0, _2_to_the_rescue_wt2, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0], [_2_to_the_rescue_hl0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_br1, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_fr0, _2_to_the_rescue_fr1, _2_to_the_rescue_tr0, _2_to_the_rescue_fr1], [_2_to_the_rescue_fr0, _2_to_the_rescue_fr1, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_st0, _2_to_the_rescue_tr0, _2_to_the_rescue_rd0, _2_to_the_rescue_fr0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_tr0, _2_to_the_rescue_fr1, _2_to_the_rescue_st0, _2_to_the_rescue_hl0, _2_to_the_rescue_fr1], [_2_to_the_rescue_fr1, _2_to_the_rescue_st0, _2_to_the_rescue_fr0, _2_to_the_rescue_st0, _2_to_the_rescue_fr1, _2_to_the_rescue_st0, _2_to_the_rescue_rd0, _2_to_the_rescue_tr0, _2_to_the_rescue_st0, _2_to_the_rescue_hl0, _2_to_the_rescue_fr0, _2_to_the_rescue_st0, _2_to_the_rescue_tr0, _2_to_the_rescue_tr0, _2_to_the_rescue_tr1], [_2_to_the_rescue_st0, _2_to_the_rescue_tr0, _2_to_the_rescue_hl0, _2_to_the_rescue_tr0, _2_to_the_rescue_tr0, _2_to_the_rescue_fr0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_hl0, _2_to_the_rescue_tr0, _2_to_the_rescue_st0, _2_to_the_rescue_hl0], [_2_to_the_rescue_fr1, _2_to_the_rescue_hl0, _2_to_the_rescue_tr0, _2_to_the_rescue_rd0, _2_to_the_rescue_hl0, _2_to_the_rescue_tr0, _2_to_the_rescue_st0, _2_to_the_rescue_rd0, _2_to_the_rescue_fr1, _2_to_the_rescue_tr0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0], [_2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_hl0, _2_to_the_rescue_st0, _2_to_the_rescue_fr1, _2_to_the_rescue_fr0, _2_to_the_rescue_hl0, _2_to_the_rescue_tr0, _2_to_the_rescue_fr0], [_2_to_the_rescue_fr1, _2_to_the_rescue_fr0, _2_to_the_rescue_hl0, _2_to_the_rescue_rd0, _2_to_the_rescue_hl0, _2_to_the_rescue_tr0, _2_to_the_rescue_fr0, _2_to_the_rescue_tr0, _2_to_the_rescue_hl0, _2_to_the_rescue_tr0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_tr0, _2_to_the_rescue_fr0, _2_to_the_rescue_st0], [_2_to_the_rescue_hl0, _2_to_the_rescue_st0, _2_to_the_rescue_tr0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_hl0, _2_to_the_rescue_fr1, _2_to_the_rescue_tr0, _2_to_the_rescue_st0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_fr1], [_2_to_the_rescue_st0, _2_to_the_rescue_fr1, _2_to_the_rescue_hl0, _2_to_the_rescue_tr0, _2_to_the_rescue_fr0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_rd0, _2_to_the_rescue_hl0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt1, _2_to_the_rescue_wt0, _2_to_the_rescue_hl0], [_2_to_the_rescue_fr1, _2_to_the_rescue_fr0, _2_to_the_rescue_fr0, _2_to_the_rescue_st0, _2_to_the_rescue_hl0, _2_to_the_rescue_tr0, _2_to_the_rescue_hl0, _2_to_the_rescue_tr0, _2_to_the_rescue_rd0, _2_to_the_rescue_tr0, _2_to_the_rescue_hl0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0], [_2_to_the_rescue_tr3, _2_to_the_rescue_fr1, _2_to_the_rescue_st0, _2_to_the_rescue_st0, _2_to_the_rescue_fr1, _2_to_the_rescue_st0, _2_to_the_rescue_fr1, _2_to_the_rescue_hl0, _2_to_the_rescue_rd0, _2_to_the_rescue_fr0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt0, _2_to_the_rescue_wt2, _2_to_the_rescue_wt0]],
  mapId: 'mission-ae2-to-the-rescue',
  mapName: '',
  mapNameLangKey: 'MAP_NAME__AE2_MISSION_2__TO_THE_RESCUE',
  mapObjectiveLangKey: 'MAP_NAME__AE2_MISSION_2__TO_THE_RESCUE__OBJECTIVE',
  mapType: map_type/* MapTypeEnum.companies */.G.companies,
  storyMarkdownLangKeyList: [],
  triggerList: [{
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceDefeat */.q.companiesForceDefeat,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.skirmishDefeat */.m.skirmishDefeat,
    dependentTriggerIdList: [],
    forPlayerId: _2_to_the_rescue_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'defeat--mission-ae2-to-the-rescue',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.showBriefing */.q.showBriefing,
      addUnitList: [],
      briefing: {
        briefingList: [{
          faceSrc: ae2_image/* ae2FaceImage.valadorn.src */.J.valadorn.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_2__BRIEFING_8_VALADORN'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_2__BRIEFING_9_SOLDIER'
        }],
        onBriefingEnd: {
          actionType: game_context_type/* GameActionTypeEnum.companiesForceWin */.q.companiesForceWin,
          addUnitList: [],
          briefing: null,
          buyUnitType: null,
          movePointList: [],
          toPoint: defaultPoint,
          unitCurrentPoint: defaultPoint,
          unitId: ''
        }
      },
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDiedAndHasAllCastles */.m.allEnemyUnitDiedAndHasAllCastles,
    dependentTriggerIdList: [],
    forPlayerId: _2_to_the_rescue_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'win--mission-ae2-to-the-rescue',
    turnCount: 0
  }],
  unitList: [_2_to_the_rescue_assign(_2_to_the_rescue_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _2_to_the_rescue_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_2_to_the_rescue_valadorn),
    unitType: _2_to_the_rescue_valadorn,
    x: 8,
    y: 9
  }), _2_to_the_rescue_assign(_2_to_the_rescue_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _2_to_the_rescue_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_2_to_the_rescue_soldier),
    unitType: _2_to_the_rescue_soldier,
    x: 7,
    y: 10
  }), _2_to_the_rescue_assign(_2_to_the_rescue_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _2_to_the_rescue_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_2_to_the_rescue_archer),
    unitType: _2_to_the_rescue_archer,
    x: 9,
    y: 10
  }), _2_to_the_rescue_assign(_2_to_the_rescue_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _2_to_the_rescue_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_2_to_the_rescue_demonLord),
    unitType: _2_to_the_rescue_demonLord,
    x: 12,
    y: 3
  }), _2_to_the_rescue_assign(_2_to_the_rescue_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _2_to_the_rescue_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_2_to_the_rescue_soldier),
    unitType: _2_to_the_rescue_soldier,
    x: 6,
    y: 1
  }), _2_to_the_rescue_assign(_2_to_the_rescue_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _2_to_the_rescue_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_2_to_the_rescue_archer),
    unitType: _2_to_the_rescue_archer,
    x: 13,
    y: 4
  })]
};
;// CONCATENATED MODULE: ./www/model/map/companies-map-list/ae2/3-path-of-shadows.ts


/* eslint-disable id-length, no-unused-vars, @typescript-eslint/no-unused-vars */
var _3_path_of_shadows_assign = undefined && undefined.__assign || function () {
  _3_path_of_shadows_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _3_path_of_shadows_assign.apply(this, arguments);
};











var _3_path_of_shadows_br0 = landscape_type/* GameLandscapeItemEnum.br0 */.k.br0,
  _3_path_of_shadows_br1 = landscape_type/* GameLandscapeItemEnum.br1 */.k.br1,
  _3_path_of_shadows_wt0 = landscape_type/* GameLandscapeItemEnum.wt0 */.k.wt0,
  _3_path_of_shadows_st0 = landscape_type/* GameLandscapeItemEnum.st0 */.k.st0,
  _3_path_of_shadows_tr0 = landscape_type/* GameLandscapeItemEnum.tr0 */.k.tr0,
  _3_path_of_shadows_hl0 = landscape_type/* GameLandscapeItemEnum.hl0 */.k.hl0,
  _3_path_of_shadows_fr1 = landscape_type/* GameLandscapeItemEnum.fr1 */.k.fr1,
  _3_path_of_shadows_rd0 = landscape_type/* GameLandscapeItemEnum.rd0 */.k.rd0,
  _3_path_of_shadows_tr1 = landscape_type/* GameLandscapeItemEnum.tr1 */.k.tr1,
  _3_path_of_shadows_tr2 = landscape_type/* GameLandscapeItemEnum.tr2 */.k.tr2,
  _3_path_of_shadows_fr0 = landscape_type/* GameLandscapeItemEnum.fr0 */.k.fr0,
  _3_path_of_shadows_tr3 = landscape_type/* GameLandscapeItemEnum.tr3 */.k.tr3,
  _3_path_of_shadows_tr4 = landscape_type/* GameLandscapeItemEnum.tr4 */.k.tr4,
  _3_path_of_shadows_wt1 = landscape_type/* GameLandscapeItemEnum.wt1 */.k.wt1,
  _3_path_of_shadows_wt2 = landscape_type/* GameLandscapeItemEnum.wt2 */.k.wt2;
var _3_path_of_shadows_playerEmpty = player_type/* GamePlayerIdEnum.playerEmpty */.J8.playerEmpty,
  _3_path_of_shadows_player1 = player_type/* GamePlayerIdEnum.player1 */.J8.player1,
  _3_path_of_shadows_player2 = player_type/* GamePlayerIdEnum.player2 */.J8.player2,
  _3_path_of_shadows_player3 = player_type/* GamePlayerIdEnum.player3 */.J8.player3,
  _3_path_of_shadows_player4 = player_type/* GamePlayerIdEnum.player4 */.J8.player4;
var _3_path_of_shadows_castle = building_type/* GameBuildingTypeEnum.castle */.R.castle,
  _3_path_of_shadows_farm = building_type/* GameBuildingTypeEnum.farm */.R.farm,
  _3_path_of_shadows_well = building_type/* GameBuildingTypeEnum.well */.R.well,
  _3_path_of_shadows_temple = building_type/* GameBuildingTypeEnum.temple */.R.temple;
var _3_path_of_shadows_buildingBroken = building_type/* GameBuildingStateEnum.buildingBroken */.n.buildingBroken,
  _3_path_of_shadows_buildingOk = building_type/* GameBuildingStateEnum.buildingOk */.n.buildingOk;
var _3_path_of_shadows_gray = player_type/* GamePlayerColorIdEnum.gray */.Zw.gray,
  _3_path_of_shadows_red = player_type/* GamePlayerColorIdEnum.red */.Zw.red,
  _3_path_of_shadows_blue = player_type/* GamePlayerColorIdEnum.blue */.Zw.blue,
  _3_path_of_shadows_green = player_type/* GamePlayerColorIdEnum.green */.Zw.green,
  _3_path_of_shadows_black = player_type/* GamePlayerColorIdEnum.black */.Zw.black;
var _3_path_of_shadows_teamEmpty = player_type/* GamePlayerTeamIdEnum.teamEmpty */.gI.teamEmpty,
  _3_path_of_shadows_team1 = player_type/* GamePlayerTeamIdEnum.team1 */.gI.team1,
  _3_path_of_shadows_team2 = player_type/* GamePlayerTeamIdEnum.team2 */.gI.team2,
  _3_path_of_shadows_team3 = player_type/* GamePlayerTeamIdEnum.team3 */.gI.team3,
  _3_path_of_shadows_team4 = player_type/* GamePlayerTeamIdEnum.team4 */.gI.team4;
var _3_path_of_shadows_archer = unit_type/* GameUnitTypeEnum.archer */.D.archer,
  _3_path_of_shadows_catapult = unit_type/* GameUnitTypeEnum.catapult */.D.catapult,
  _3_path_of_shadows_crystal = unit_type/* GameUnitTypeEnum.crystal */.D.crystal,
  _3_path_of_shadows_demonLord = unit_type/* GameUnitTypeEnum.demonLord */.D.demonLord,
  _3_path_of_shadows_direWolf = unit_type/* GameUnitTypeEnum.direWolf */.D.direWolf,
  _3_path_of_shadows_dragon = unit_type/* GameUnitTypeEnum.dragon */.D.dragon,
  _3_path_of_shadows_elemental = unit_type/* GameUnitTypeEnum.elemental */.D.elemental,
  _3_path_of_shadows_galamar = unit_type/* GameUnitTypeEnum.galamar */.D.galamar,
  _3_path_of_shadows_golem = unit_type/* GameUnitTypeEnum.golem */.D.golem,
  _3_path_of_shadows_saeth = unit_type/* GameUnitTypeEnum.saeth */.D.saeth,
  _3_path_of_shadows_skeleton = unit_type/* GameUnitTypeEnum.skeleton */.D.skeleton,
  _3_path_of_shadows_soldier = unit_type/* GameUnitTypeEnum.soldier */.D.soldier,
  _3_path_of_shadows_sorceress = unit_type/* GameUnitTypeEnum.sorceress */.D.sorceress,
  _3_path_of_shadows_valadorn = unit_type/* GameUnitTypeEnum.valadorn */.D.valadorn,
  _3_path_of_shadows_wisp = unit_type/* GameUnitTypeEnum.wisp */.D.wisp;
var pathOfShadows = {
  briefingList: [{
    faceSrc: '',
    markdownLangKey: 'COMPANY_LOCATION__FOREST_OF_MISTS'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_3__BRIEFING_1_SOLDIER'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_3__BRIEFING_2_GALAMAR'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_3__BRIEFING_3_SOLDIER'
  }],
  buildingList: [{
    buildingType: _3_path_of_shadows_well,
    gamePlayerId: _3_path_of_shadows_playerEmpty,
    state: _3_path_of_shadows_buildingOk,
    x: 4,
    y: 8
  }],
  cemetery: [],
  graveList: [],
  landscape: [[_3_path_of_shadows_fr0, _3_path_of_shadows_st0, _3_path_of_shadows_rd0, _3_path_of_shadows_tr0, _3_path_of_shadows_st0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt1, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0], [_3_path_of_shadows_fr0, _3_path_of_shadows_fr0, _3_path_of_shadows_rd0, _3_path_of_shadows_fr1, _3_path_of_shadows_fr0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt1, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt1], [_3_path_of_shadows_st0, _3_path_of_shadows_hl0, _3_path_of_shadows_rd0, _3_path_of_shadows_hl0, _3_path_of_shadows_fr0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0], [_3_path_of_shadows_wt0, _3_path_of_shadows_tr0, _3_path_of_shadows_rd0, _3_path_of_shadows_fr1, _3_path_of_shadows_st0, _3_path_of_shadows_hl0, _3_path_of_shadows_fr0, _3_path_of_shadows_fr1, _3_path_of_shadows_fr0, _3_path_of_shadows_wt0], [_3_path_of_shadows_wt0, _3_path_of_shadows_tr0, _3_path_of_shadows_rd0, _3_path_of_shadows_rd0, _3_path_of_shadows_rd0, _3_path_of_shadows_rd0, _3_path_of_shadows_rd0, _3_path_of_shadows_rd0, _3_path_of_shadows_tr0, _3_path_of_shadows_wt0], [_3_path_of_shadows_fr1, _3_path_of_shadows_tr0, _3_path_of_shadows_fr0, _3_path_of_shadows_fr1, _3_path_of_shadows_tr0, _3_path_of_shadows_st0, _3_path_of_shadows_fr0, _3_path_of_shadows_rd0, _3_path_of_shadows_fr1, _3_path_of_shadows_wt0], [_3_path_of_shadows_fr0, _3_path_of_shadows_hl0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_rd0, _3_path_of_shadows_hl0, _3_path_of_shadows_fr0], [_3_path_of_shadows_hl0, _3_path_of_shadows_tr0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_br1, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0], [_3_path_of_shadows_fr0, _3_path_of_shadows_tr0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_tr0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_br1, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0], [_3_path_of_shadows_wt0, _3_path_of_shadows_br1, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_br1, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_rd0, _3_path_of_shadows_fr0, _3_path_of_shadows_wt0], [_3_path_of_shadows_wt0, _3_path_of_shadows_br1, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_br1, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_rd0, _3_path_of_shadows_st0, _3_path_of_shadows_st0], [_3_path_of_shadows_fr1, _3_path_of_shadows_hl0, _3_path_of_shadows_fr1, _3_path_of_shadows_tr0, _3_path_of_shadows_rd0, _3_path_of_shadows_hl0, _3_path_of_shadows_fr0, _3_path_of_shadows_rd0, _3_path_of_shadows_fr0, _3_path_of_shadows_st0], [_3_path_of_shadows_fr1, _3_path_of_shadows_fr0, _3_path_of_shadows_tr0, _3_path_of_shadows_hl0, _3_path_of_shadows_rd0, _3_path_of_shadows_rd0, _3_path_of_shadows_rd0, _3_path_of_shadows_rd0, _3_path_of_shadows_rd0, _3_path_of_shadows_rd0], [_3_path_of_shadows_fr0, _3_path_of_shadows_st0, _3_path_of_shadows_hl0, _3_path_of_shadows_tr0, _3_path_of_shadows_fr1, _3_path_of_shadows_fr0, _3_path_of_shadows_st0, _3_path_of_shadows_rd0, _3_path_of_shadows_hl0, _3_path_of_shadows_fr1], [_3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_fr0, _3_path_of_shadows_st0, _3_path_of_shadows_fr0, _3_path_of_shadows_fr0, _3_path_of_shadows_rd0, _3_path_of_shadows_rd0, _3_path_of_shadows_fr0], [_3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_fr0, _3_path_of_shadows_hl0, _3_path_of_shadows_fr0, _3_path_of_shadows_hl0, _3_path_of_shadows_tr0, _3_path_of_shadows_rd0, _3_path_of_shadows_fr0], [_3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_fr0, _3_path_of_shadows_fr1, _3_path_of_shadows_wt0, _3_path_of_shadows_wt0, _3_path_of_shadows_fr0, _3_path_of_shadows_fr0, _3_path_of_shadows_rd0, _3_path_of_shadows_hl0]],
  mapId: 'mission-ae2-path-of-shadows',
  mapName: '',
  mapNameLangKey: 'MAP_NAME__AE2_MISSION_3__PATH_OF_SHADOWS',
  mapObjectiveLangKey: 'MAP_NAME__AE2_MISSION_3__PATH_OF_SHADOWS__OBJECTIVE',
  mapType: map_type/* MapTypeEnum.companies */.G.companies,
  storyMarkdownLangKeyList: [],
  triggerList: [{
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceDefeat */.q.companiesForceDefeat,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allHeroesDied */.m.allHeroesDied,
    dependentTriggerIdList: [],
    forPlayerId: _3_path_of_shadows_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'defeat--mission-ae2-path-of-shadows',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.addUnitList */.q.addUnitList,
      addUnitList: [_3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _3_path_of_shadows_player1,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_elemental),
        unitType: _3_path_of_shadows_elemental,
        x: 3,
        y: 8
      }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _3_path_of_shadows_player1,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_elemental),
        unitType: _3_path_of_shadows_elemental,
        x: 4,
        y: 7
      }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _3_path_of_shadows_player1,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_elemental),
        unitType: _3_path_of_shadows_elemental,
        x: 5,
        y: 8
      }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _3_path_of_shadows_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_wisp),
        unitType: _3_path_of_shadows_wisp,
        x: 2,
        y: 1
      }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _3_path_of_shadows_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_direWolf),
        unitType: _3_path_of_shadows_direWolf,
        x: 1,
        y: 2
      }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _3_path_of_shadows_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_direWolf),
        unitType: _3_path_of_shadows_direWolf,
        x: 3,
        y: 2
      }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _3_path_of_shadows_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_direWolf),
        unitType: _3_path_of_shadows_direWolf,
        x: 0,
        y: 8
      }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _3_path_of_shadows_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_direWolf),
        unitType: _3_path_of_shadows_direWolf,
        x: 1,
        y: 7
      }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _3_path_of_shadows_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_direWolf),
        unitType: _3_path_of_shadows_direWolf,
        x: 8,
        y: 6
      })],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDied */.m.allEnemyUnitDied,
    dependentTriggerIdList: [],
    forPlayerId: _3_path_of_shadows_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'add-unit--mission-ae2-path-of-shadows',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.showBriefing */.q.showBriefing,
      addUnitList: [],
      briefing: {
        briefingList: [{
          faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_3__BRIEFING_4_SOLDIER'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_3__BRIEFING_5_GALAMAR'
        }, {
          faceSrc: '',
          markdownLangKey: 'MAP_NAME__AE2_MISSION_3__BRIEFING_6_ELEMENTAL'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_3__BRIEFING_7_GALAMAR'
        }],
        onBriefingEnd: null
      },
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDied */.m.allEnemyUnitDied,
    dependentTriggerIdList: [],
    forPlayerId: _3_path_of_shadows_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'add-unit--briefing--mission-ae2-path-of-shadows',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceWin */.q.companiesForceWin,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDied */.m.allEnemyUnitDied,
    dependentTriggerIdList: ['add-unit--mission-ae2-path-of-shadows', 'add-unit--briefing--mission-ae2-path-of-shadows'],
    forPlayerId: _3_path_of_shadows_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'win---mission-ae2-path-of-shadows',
    turnCount: 0
  }],
  unitList: [_3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _3_path_of_shadows_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_sorceress),
    unitType: _3_path_of_shadows_sorceress,
    x: 8,
    y: 15
  }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _3_path_of_shadows_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_galamar),
    unitType: _3_path_of_shadows_galamar,
    x: 8,
    y: 14
  }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _3_path_of_shadows_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_soldier),
    unitType: _3_path_of_shadows_soldier,
    x: 7,
    y: 14
  }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _3_path_of_shadows_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_archer),
    unitType: _3_path_of_shadows_archer,
    x: 7,
    y: 15
  }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _3_path_of_shadows_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_direWolf),
    unitType: _3_path_of_shadows_direWolf,
    x: 6,
    y: 13
  }), _3_path_of_shadows_assign(_3_path_of_shadows_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _3_path_of_shadows_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_3_path_of_shadows_direWolf),
    unitType: _3_path_of_shadows_direWolf,
    x: 8,
    y: 11
  })]
};
;// CONCATENATED MODULE: ./www/model/map/companies-map-list/ae2/4-reinforcements.ts


/* eslint-disable id-length, no-unused-vars, @typescript-eslint/no-unused-vars */
var _4_reinforcements_assign = undefined && undefined.__assign || function () {
  _4_reinforcements_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _4_reinforcements_assign.apply(this, arguments);
};











var _4_reinforcements_br0 = landscape_type/* GameLandscapeItemEnum.br0 */.k.br0,
  _4_reinforcements_br1 = landscape_type/* GameLandscapeItemEnum.br1 */.k.br1,
  _4_reinforcements_wt0 = landscape_type/* GameLandscapeItemEnum.wt0 */.k.wt0,
  _4_reinforcements_st0 = landscape_type/* GameLandscapeItemEnum.st0 */.k.st0,
  _4_reinforcements_tr0 = landscape_type/* GameLandscapeItemEnum.tr0 */.k.tr0,
  _4_reinforcements_hl0 = landscape_type/* GameLandscapeItemEnum.hl0 */.k.hl0,
  _4_reinforcements_fr1 = landscape_type/* GameLandscapeItemEnum.fr1 */.k.fr1,
  _4_reinforcements_rd0 = landscape_type/* GameLandscapeItemEnum.rd0 */.k.rd0,
  _4_reinforcements_tr1 = landscape_type/* GameLandscapeItemEnum.tr1 */.k.tr1,
  _4_reinforcements_tr2 = landscape_type/* GameLandscapeItemEnum.tr2 */.k.tr2,
  _4_reinforcements_fr0 = landscape_type/* GameLandscapeItemEnum.fr0 */.k.fr0,
  _4_reinforcements_tr3 = landscape_type/* GameLandscapeItemEnum.tr3 */.k.tr3,
  _4_reinforcements_tr4 = landscape_type/* GameLandscapeItemEnum.tr4 */.k.tr4,
  _4_reinforcements_wt1 = landscape_type/* GameLandscapeItemEnum.wt1 */.k.wt1,
  _4_reinforcements_wt2 = landscape_type/* GameLandscapeItemEnum.wt2 */.k.wt2;
var _4_reinforcements_playerEmpty = player_type/* GamePlayerIdEnum.playerEmpty */.J8.playerEmpty,
  _4_reinforcements_player1 = player_type/* GamePlayerIdEnum.player1 */.J8.player1,
  _4_reinforcements_player2 = player_type/* GamePlayerIdEnum.player2 */.J8.player2,
  _4_reinforcements_player3 = player_type/* GamePlayerIdEnum.player3 */.J8.player3,
  _4_reinforcements_player4 = player_type/* GamePlayerIdEnum.player4 */.J8.player4;
var _4_reinforcements_castle = building_type/* GameBuildingTypeEnum.castle */.R.castle,
  _4_reinforcements_farm = building_type/* GameBuildingTypeEnum.farm */.R.farm,
  _4_reinforcements_well = building_type/* GameBuildingTypeEnum.well */.R.well,
  _4_reinforcements_temple = building_type/* GameBuildingTypeEnum.temple */.R.temple;
var _4_reinforcements_buildingBroken = building_type/* GameBuildingStateEnum.buildingBroken */.n.buildingBroken,
  _4_reinforcements_buildingOk = building_type/* GameBuildingStateEnum.buildingOk */.n.buildingOk;
var _4_reinforcements_gray = player_type/* GamePlayerColorIdEnum.gray */.Zw.gray,
  _4_reinforcements_red = player_type/* GamePlayerColorIdEnum.red */.Zw.red,
  _4_reinforcements_blue = player_type/* GamePlayerColorIdEnum.blue */.Zw.blue,
  _4_reinforcements_green = player_type/* GamePlayerColorIdEnum.green */.Zw.green,
  _4_reinforcements_black = player_type/* GamePlayerColorIdEnum.black */.Zw.black;
var _4_reinforcements_teamEmpty = player_type/* GamePlayerTeamIdEnum.teamEmpty */.gI.teamEmpty,
  _4_reinforcements_team1 = player_type/* GamePlayerTeamIdEnum.team1 */.gI.team1,
  _4_reinforcements_team2 = player_type/* GamePlayerTeamIdEnum.team2 */.gI.team2,
  _4_reinforcements_team3 = player_type/* GamePlayerTeamIdEnum.team3 */.gI.team3,
  _4_reinforcements_team4 = player_type/* GamePlayerTeamIdEnum.team4 */.gI.team4;
var _4_reinforcements_archer = unit_type/* GameUnitTypeEnum.archer */.D.archer,
  _4_reinforcements_catapult = unit_type/* GameUnitTypeEnum.catapult */.D.catapult,
  _4_reinforcements_crystal = unit_type/* GameUnitTypeEnum.crystal */.D.crystal,
  _4_reinforcements_demonLord = unit_type/* GameUnitTypeEnum.demonLord */.D.demonLord,
  _4_reinforcements_direWolf = unit_type/* GameUnitTypeEnum.direWolf */.D.direWolf,
  _4_reinforcements_dragon = unit_type/* GameUnitTypeEnum.dragon */.D.dragon,
  _4_reinforcements_elemental = unit_type/* GameUnitTypeEnum.elemental */.D.elemental,
  _4_reinforcements_galamar = unit_type/* GameUnitTypeEnum.galamar */.D.galamar,
  _4_reinforcements_golem = unit_type/* GameUnitTypeEnum.golem */.D.golem,
  _4_reinforcements_saeth = unit_type/* GameUnitTypeEnum.saeth */.D.saeth,
  _4_reinforcements_skeleton = unit_type/* GameUnitTypeEnum.skeleton */.D.skeleton,
  _4_reinforcements_soldier = unit_type/* GameUnitTypeEnum.soldier */.D.soldier,
  _4_reinforcements_sorceress = unit_type/* GameUnitTypeEnum.sorceress */.D.sorceress,
  _4_reinforcements_valadorn = unit_type/* GameUnitTypeEnum.valadorn */.D.valadorn,
  _4_reinforcements_wisp = unit_type/* GameUnitTypeEnum.wisp */.D.wisp;
var reinforcements = {
  briefingList: [{
    faceSrc: '',
    markdownLangKey: 'COMPANY_LOCATION__THE_TEMPLE_OF_LIFE'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.tamplier.src */.J.tamplier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_4__BRIEFING_1_TAMPLIER'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_4__BRIEFING_2_GALAMAR'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_4__BRIEFING_3_SOLDIER'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_4__BRIEFING_4_SOLDIER'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_4__BRIEFING_5_GALAMAR'
  }],
  buildingList: [{
    buildingType: _4_reinforcements_temple,
    gamePlayerId: _4_reinforcements_playerEmpty,
    state: _4_reinforcements_buildingOk,
    x: 3,
    y: 3
  }, {
    buildingType: _4_reinforcements_castle,
    gamePlayerId: _4_reinforcements_player1,
    state: _4_reinforcements_buildingOk,
    x: 7,
    y: 1
  }, {
    buildingType: _4_reinforcements_castle,
    gamePlayerId: _4_reinforcements_player2,
    state: _4_reinforcements_buildingOk,
    x: 13,
    y: 9
  }, {
    buildingType: _4_reinforcements_farm,
    gamePlayerId: _4_reinforcements_player1,
    state: _4_reinforcements_buildingOk,
    x: 9,
    y: 1
  }, {
    buildingType: _4_reinforcements_farm,
    gamePlayerId: _4_reinforcements_player1,
    state: _4_reinforcements_buildingOk,
    x: 7,
    y: 5
  }, {
    buildingType: _4_reinforcements_farm,
    gamePlayerId: _4_reinforcements_player1,
    state: _4_reinforcements_buildingOk,
    x: 1,
    y: 8
  }, {
    buildingType: _4_reinforcements_farm,
    gamePlayerId: _4_reinforcements_player1,
    state: _4_reinforcements_buildingOk,
    x: 5,
    y: 4
  }, {
    buildingType: _4_reinforcements_farm,
    gamePlayerId: _4_reinforcements_player1,
    state: _4_reinforcements_buildingOk,
    x: 12,
    y: 3
  }, {
    buildingType: _4_reinforcements_farm,
    gamePlayerId: _4_reinforcements_player2,
    state: _4_reinforcements_buildingOk,
    x: 14,
    y: 11
  }, {
    buildingType: _4_reinforcements_farm,
    gamePlayerId: _4_reinforcements_player2,
    state: _4_reinforcements_buildingOk,
    x: 12,
    y: 13
  }, {
    buildingType: _4_reinforcements_farm,
    gamePlayerId: _4_reinforcements_player2,
    state: _4_reinforcements_buildingOk,
    x: 13,
    y: 6
  }, {
    buildingType: _4_reinforcements_farm,
    gamePlayerId: _4_reinforcements_player2,
    state: _4_reinforcements_buildingOk,
    x: 9,
    y: 11
  }, {
    buildingType: _4_reinforcements_farm,
    gamePlayerId: _4_reinforcements_playerEmpty,
    state: _4_reinforcements_buildingBroken,
    x: 4,
    y: 9
  }, {
    buildingType: _4_reinforcements_farm,
    gamePlayerId: _4_reinforcements_player2,
    state: _4_reinforcements_buildingOk,
    x: 5,
    y: 11
  }],
  cemetery: [],
  graveList: [],
  landscape: [[_4_reinforcements_st0, _4_reinforcements_st0, _4_reinforcements_st0, _4_reinforcements_fr0, _4_reinforcements_st0, _4_reinforcements_fr0, _4_reinforcements_fr0, _4_reinforcements_st0, _4_reinforcements_rd0, _4_reinforcements_fr1, _4_reinforcements_st0, _4_reinforcements_fr0, _4_reinforcements_fr0, _4_reinforcements_fr0, _4_reinforcements_st0, _4_reinforcements_fr0], [_4_reinforcements_st0, _4_reinforcements_fr1, _4_reinforcements_fr1, _4_reinforcements_st0, _4_reinforcements_fr1, _4_reinforcements_hl0, _4_reinforcements_tr0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_tr0, _4_reinforcements_fr1, _4_reinforcements_hl0, _4_reinforcements_hl0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0], [_4_reinforcements_fr0, _4_reinforcements_hl0, _4_reinforcements_fr0, _4_reinforcements_tr0, _4_reinforcements_st0, _4_reinforcements_fr0, _4_reinforcements_tr0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_hl0, _4_reinforcements_st0], [_4_reinforcements_st0, _4_reinforcements_fr0, _4_reinforcements_tr0, _4_reinforcements_rd0, _4_reinforcements_tr0, _4_reinforcements_st0, _4_reinforcements_st0, _4_reinforcements_fr0, _4_reinforcements_rd0, _4_reinforcements_fr1, _4_reinforcements_st0, _4_reinforcements_hl0, _4_reinforcements_tr0, _4_reinforcements_st0, _4_reinforcements_wt0, _4_reinforcements_wt0], [_4_reinforcements_hl0, _4_reinforcements_fr0, _4_reinforcements_hl0, _4_reinforcements_rd0, _4_reinforcements_hl0, _4_reinforcements_tr0, _4_reinforcements_fr0, _4_reinforcements_fr1, _4_reinforcements_rd0, _4_reinforcements_tr0, _4_reinforcements_fr0, _4_reinforcements_fr0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt1], [_4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_fr1, _4_reinforcements_tr0, _4_reinforcements_rd0, _4_reinforcements_hl0, _4_reinforcements_fr0, _4_reinforcements_st0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt0], [_4_reinforcements_st0, _4_reinforcements_st0, _4_reinforcements_fr0, _4_reinforcements_rd0, _4_reinforcements_fr1, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_st0, _4_reinforcements_tr0, _4_reinforcements_fr0, _4_reinforcements_st0, _4_reinforcements_tr0, _4_reinforcements_fr0, _4_reinforcements_wt0], [_4_reinforcements_fr0, _4_reinforcements_tr0, _4_reinforcements_hl0, _4_reinforcements_rd0, _4_reinforcements_fr0, _4_reinforcements_fr1, _4_reinforcements_hl0, _4_reinforcements_st0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_fr1, _4_reinforcements_fr1, _4_reinforcements_fr1, _4_reinforcements_hl0, _4_reinforcements_fr0, _4_reinforcements_fr0], [_4_reinforcements_st0, _4_reinforcements_tr0, _4_reinforcements_tr0, _4_reinforcements_rd0, _4_reinforcements_st0, _4_reinforcements_st0, _4_reinforcements_fr1, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_st0, _4_reinforcements_tr0, _4_reinforcements_tr0, _4_reinforcements_tr0, _4_reinforcements_st0, _4_reinforcements_rd0], [_4_reinforcements_hl0, _4_reinforcements_st0, _4_reinforcements_fr0, _4_reinforcements_rd0, _4_reinforcements_tr0, _4_reinforcements_tr0, _4_reinforcements_st0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_fr1, _4_reinforcements_tr0, _4_reinforcements_tr0, _4_reinforcements_rd0, _4_reinforcements_tr0, _4_reinforcements_rd0], [_4_reinforcements_fr0, _4_reinforcements_fr1, _4_reinforcements_tr0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_br0, _4_reinforcements_br0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_rd0], [_4_reinforcements_st0, _4_reinforcements_fr1, _4_reinforcements_hl0, _4_reinforcements_hl0, _4_reinforcements_tr0, _4_reinforcements_tr0, _4_reinforcements_hl0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_tr0, _4_reinforcements_tr0, _4_reinforcements_hl0, _4_reinforcements_fr0, _4_reinforcements_rd0, _4_reinforcements_tr0, _4_reinforcements_st0], [_4_reinforcements_fr0, _4_reinforcements_fr0, _4_reinforcements_fr0, _4_reinforcements_st0, _4_reinforcements_fr0, _4_reinforcements_tr0, _4_reinforcements_fr0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_fr0, _4_reinforcements_st0, _4_reinforcements_tr0, _4_reinforcements_tr0, _4_reinforcements_rd0, _4_reinforcements_fr1, _4_reinforcements_fr1], [_4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_st0, _4_reinforcements_hl0, _4_reinforcements_fr0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_st0, _4_reinforcements_tr0, _4_reinforcements_tr0, _4_reinforcements_tr0, _4_reinforcements_rd0, _4_reinforcements_rd0, _4_reinforcements_fr0], [_4_reinforcements_wt1, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_fr1, _4_reinforcements_st0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_hl0, _4_reinforcements_fr1, _4_reinforcements_hl0, _4_reinforcements_st0, _4_reinforcements_tr0, _4_reinforcements_rd0, _4_reinforcements_fr0], [_4_reinforcements_wt0, _4_reinforcements_wt2, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt0, _4_reinforcements_wt2, _4_reinforcements_wt0, _4_reinforcements_hl0, _4_reinforcements_fr0, _4_reinforcements_fr0, _4_reinforcements_fr0, _4_reinforcements_fr1, _4_reinforcements_hl0, _4_reinforcements_rd0, _4_reinforcements_fr1]],
  mapId: 'mission-ae2-reinforcements',
  mapName: '',
  mapNameLangKey: 'MAP_NAME__AE2_MISSION_4__REINFORCEMENTS',
  mapObjectiveLangKey: 'MAP_NAME__AE2_MISSION_4__REINFORCEMENTS__OBJECTIVE',
  mapType: map_type/* MapTypeEnum.companies */.G.companies,
  storyMarkdownLangKeyList: ['MAP_NAME__AE2_MISSION__STORY_4_1'],
  triggerList: [{
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceDefeat */.q.companiesForceDefeat,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allHeroesDied */.m.allHeroesDied,
    dependentTriggerIdList: [],
    forPlayerId: _4_reinforcements_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'defeat--mission-ae2-reinforcements',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.showBriefing */.q.showBriefing,
      addUnitList: [],
      briefing: {
        briefingList: [{
          faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_4__BRIEFING_6_SOLDIER'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_4__BRIEFING_7_GALAMAR'
        }],
        onBriefingEnd: {
          actionType: game_context_type/* GameActionTypeEnum.companiesForceWin */.q.companiesForceWin,
          addUnitList: [],
          briefing: null,
          buyUnitType: null,
          movePointList: [],
          toPoint: defaultPoint,
          unitCurrentPoint: defaultPoint,
          unitId: ''
        }
      },
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDiedAndHasAllCastles */.m.allEnemyUnitDiedAndHasAllCastles,
    dependentTriggerIdList: [],
    forPlayerId: _4_reinforcements_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'win--mission-ae2-reinforcements',
    turnCount: 0
  }],
  unitList: [_4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_demonLord),
    unitType: _4_reinforcements_demonLord,
    x: 13,
    y: 9
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_galamar),
    unitType: _4_reinforcements_galamar,
    x: 7,
    y: 1
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_sorceress),
    unitType: _4_reinforcements_sorceress,
    x: 3,
    y: 3
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_soldier),
    unitType: _4_reinforcements_soldier,
    x: 5,
    y: 4
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_elemental),
    unitType: _4_reinforcements_elemental,
    x: 7,
    y: 5
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_soldier),
    unitType: _4_reinforcements_soldier,
    x: 12,
    y: 3
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_archer),
    unitType: _4_reinforcements_archer,
    x: 11,
    y: 3
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_elemental),
    unitType: _4_reinforcements_elemental,
    x: 14,
    y: 5
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_soldier),
    unitType: _4_reinforcements_soldier,
    x: 13,
    y: 6
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_direWolf),
    unitType: _4_reinforcements_direWolf,
    x: 11,
    y: 7
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_soldier),
    unitType: _4_reinforcements_soldier,
    x: 9,
    y: 11
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_catapult),
    unitType: _4_reinforcements_catapult,
    x: 12,
    y: 9
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_golem),
    unitType: _4_reinforcements_golem,
    x: 5,
    y: 11
  }), _4_reinforcements_assign(_4_reinforcements_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _4_reinforcements_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_4_reinforcements_catapult),
    unitType: _4_reinforcements_catapult,
    x: 6,
    y: 10
  })]
};
;// CONCATENATED MODULE: ./www/model/map/companies-map-list/ae2/5-escort-duty.ts


/* eslint-disable id-length, no-unused-vars, @typescript-eslint/no-unused-vars */
var _5_escort_duty_assign = undefined && undefined.__assign || function () {
  _5_escort_duty_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _5_escort_duty_assign.apply(this, arguments);
};











var _5_escort_duty_br0 = landscape_type/* GameLandscapeItemEnum.br0 */.k.br0,
  _5_escort_duty_br1 = landscape_type/* GameLandscapeItemEnum.br1 */.k.br1,
  _5_escort_duty_wt0 = landscape_type/* GameLandscapeItemEnum.wt0 */.k.wt0,
  _5_escort_duty_st0 = landscape_type/* GameLandscapeItemEnum.st0 */.k.st0,
  _5_escort_duty_tr0 = landscape_type/* GameLandscapeItemEnum.tr0 */.k.tr0,
  _5_escort_duty_hl0 = landscape_type/* GameLandscapeItemEnum.hl0 */.k.hl0,
  _5_escort_duty_fr1 = landscape_type/* GameLandscapeItemEnum.fr1 */.k.fr1,
  _5_escort_duty_rd0 = landscape_type/* GameLandscapeItemEnum.rd0 */.k.rd0,
  _5_escort_duty_tr1 = landscape_type/* GameLandscapeItemEnum.tr1 */.k.tr1,
  _5_escort_duty_tr2 = landscape_type/* GameLandscapeItemEnum.tr2 */.k.tr2,
  _5_escort_duty_fr0 = landscape_type/* GameLandscapeItemEnum.fr0 */.k.fr0,
  _5_escort_duty_tr3 = landscape_type/* GameLandscapeItemEnum.tr3 */.k.tr3,
  _5_escort_duty_tr4 = landscape_type/* GameLandscapeItemEnum.tr4 */.k.tr4,
  _5_escort_duty_wt1 = landscape_type/* GameLandscapeItemEnum.wt1 */.k.wt1,
  _5_escort_duty_wt2 = landscape_type/* GameLandscapeItemEnum.wt2 */.k.wt2;
var _5_escort_duty_playerEmpty = player_type/* GamePlayerIdEnum.playerEmpty */.J8.playerEmpty,
  _5_escort_duty_player1 = player_type/* GamePlayerIdEnum.player1 */.J8.player1,
  _5_escort_duty_player2 = player_type/* GamePlayerIdEnum.player2 */.J8.player2,
  _5_escort_duty_player3 = player_type/* GamePlayerIdEnum.player3 */.J8.player3,
  _5_escort_duty_player4 = player_type/* GamePlayerIdEnum.player4 */.J8.player4;
var _5_escort_duty_castle = building_type/* GameBuildingTypeEnum.castle */.R.castle,
  _5_escort_duty_farm = building_type/* GameBuildingTypeEnum.farm */.R.farm,
  _5_escort_duty_well = building_type/* GameBuildingTypeEnum.well */.R.well,
  _5_escort_duty_temple = building_type/* GameBuildingTypeEnum.temple */.R.temple;
var _5_escort_duty_buildingBroken = building_type/* GameBuildingStateEnum.buildingBroken */.n.buildingBroken,
  _5_escort_duty_buildingOk = building_type/* GameBuildingStateEnum.buildingOk */.n.buildingOk;
var _5_escort_duty_gray = player_type/* GamePlayerColorIdEnum.gray */.Zw.gray,
  _5_escort_duty_red = player_type/* GamePlayerColorIdEnum.red */.Zw.red,
  _5_escort_duty_blue = player_type/* GamePlayerColorIdEnum.blue */.Zw.blue,
  _5_escort_duty_green = player_type/* GamePlayerColorIdEnum.green */.Zw.green,
  _5_escort_duty_black = player_type/* GamePlayerColorIdEnum.black */.Zw.black;
var _5_escort_duty_teamEmpty = player_type/* GamePlayerTeamIdEnum.teamEmpty */.gI.teamEmpty,
  _5_escort_duty_team1 = player_type/* GamePlayerTeamIdEnum.team1 */.gI.team1,
  _5_escort_duty_team2 = player_type/* GamePlayerTeamIdEnum.team2 */.gI.team2,
  _5_escort_duty_team3 = player_type/* GamePlayerTeamIdEnum.team3 */.gI.team3,
  _5_escort_duty_team4 = player_type/* GamePlayerTeamIdEnum.team4 */.gI.team4;
var _5_escort_duty_archer = unit_type/* GameUnitTypeEnum.archer */.D.archer,
  _5_escort_duty_catapult = unit_type/* GameUnitTypeEnum.catapult */.D.catapult,
  _5_escort_duty_crystal = unit_type/* GameUnitTypeEnum.crystal */.D.crystal,
  _5_escort_duty_demonLord = unit_type/* GameUnitTypeEnum.demonLord */.D.demonLord,
  _5_escort_duty_direWolf = unit_type/* GameUnitTypeEnum.direWolf */.D.direWolf,
  _5_escort_duty_dragon = unit_type/* GameUnitTypeEnum.dragon */.D.dragon,
  _5_escort_duty_elemental = unit_type/* GameUnitTypeEnum.elemental */.D.elemental,
  _5_escort_duty_galamar = unit_type/* GameUnitTypeEnum.galamar */.D.galamar,
  _5_escort_duty_golem = unit_type/* GameUnitTypeEnum.golem */.D.golem,
  _5_escort_duty_saeth = unit_type/* GameUnitTypeEnum.saeth */.D.saeth,
  _5_escort_duty_skeleton = unit_type/* GameUnitTypeEnum.skeleton */.D.skeleton,
  _5_escort_duty_soldier = unit_type/* GameUnitTypeEnum.soldier */.D.soldier,
  _5_escort_duty_sorceress = unit_type/* GameUnitTypeEnum.sorceress */.D.sorceress,
  _5_escort_duty_valadorn = unit_type/* GameUnitTypeEnum.valadorn */.D.valadorn,
  _5_escort_duty_wisp = unit_type/* GameUnitTypeEnum.wisp */.D.wisp;
var escortDuty = {
  briefingList: [{
    faceSrc: '',
    markdownLangKey: 'COMPANY_LOCATION__PATHWAY_TO_THORIN'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_5__BRIEFING_1_SOLDIER'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_5__BRIEFING_2_GALAMAR'
  }],
  buildingList: [{
    buildingType: _5_escort_duty_well,
    gamePlayerId: _5_escort_duty_playerEmpty,
    state: _5_escort_duty_buildingOk,
    x: 18,
    y: 8
  }, {
    buildingType: _5_escort_duty_temple,
    gamePlayerId: _5_escort_duty_playerEmpty,
    state: _5_escort_duty_buildingOk,
    x: 2,
    y: 1
  }, {
    buildingType: _5_escort_duty_well,
    gamePlayerId: _5_escort_duty_playerEmpty,
    state: _5_escort_duty_buildingOk,
    x: 6,
    y: 10
  }, {
    buildingType: _5_escort_duty_temple,
    gamePlayerId: _5_escort_duty_playerEmpty,
    state: _5_escort_duty_buildingOk,
    x: 12,
    y: 8
  }, {
    buildingType: _5_escort_duty_well,
    gamePlayerId: _5_escort_duty_playerEmpty,
    state: _5_escort_duty_buildingOk,
    x: 12,
    y: 5
  }, {
    buildingType: _5_escort_duty_temple,
    gamePlayerId: _5_escort_duty_playerEmpty,
    state: _5_escort_duty_buildingOk,
    x: 7,
    y: 5
  }, {
    buildingType: _5_escort_duty_well,
    gamePlayerId: _5_escort_duty_playerEmpty,
    state: _5_escort_duty_buildingOk,
    x: 4,
    y: 4
  }],
  cemetery: [],
  graveList: [],
  landscape: [[_5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_fr1, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr0, _5_escort_duty_tr0, _5_escort_duty_tr0, _5_escort_duty_rd0, _5_escort_duty_tr0, _5_escort_duty_hl0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_fr0], [_5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_rd0, _5_escort_duty_tr0, _5_escort_duty_hl0, _5_escort_duty_tr0, _5_escort_duty_fr1, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_fr0, _5_escort_duty_fr1, _5_escort_duty_rd0, _5_escort_duty_tr0, _5_escort_duty_fr1, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr1, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0], [_5_escort_duty_st0, _5_escort_duty_fr0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_hl0, _5_escort_duty_fr0, _5_escort_duty_fr1, _5_escort_duty_tr0, _5_escort_duty_rd0, _5_escort_duty_hl0, _5_escort_duty_fr0, _5_escort_duty_fr1, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_fr0], [_5_escort_duty_fr1, _5_escort_duty_hl0, _5_escort_duty_rd0, _5_escort_duty_tr0, _5_escort_duty_tr0, _5_escort_duty_fr0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_fr1, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr0, _5_escort_duty_hl0, _5_escort_duty_tr0, _5_escort_duty_fr0], [_5_escort_duty_st0, _5_escort_duty_tr0, _5_escort_duty_rd0, _5_escort_duty_hl0, _5_escort_duty_tr0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr1, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_hl0, _5_escort_duty_fr0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_st0], [_5_escort_duty_fr0, _5_escort_duty_tr0, _5_escort_duty_rd0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_tr0, _5_escort_duty_rd0, _5_escort_duty_hl0, _5_escort_duty_st0, _5_escort_duty_tr0, _5_escort_duty_tr0, _5_escort_duty_rd0, _5_escort_duty_st0, _5_escort_duty_fr1, _5_escort_duty_tr0, _5_escort_duty_hl0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr0], [_5_escort_duty_st0, _5_escort_duty_hl0, _5_escort_duty_rd0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_hl0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_tr0, _5_escort_duty_hl0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0], [_5_escort_duty_fr1, _5_escort_duty_tr0, _5_escort_duty_rd0, _5_escort_duty_fr1, _5_escort_duty_fr0, _5_escort_duty_fr1, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_tr0, _5_escort_duty_hl0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_tr0, _5_escort_duty_rd0, _5_escort_duty_hl0, _5_escort_duty_tr0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr1], [_5_escort_duty_fr0, _5_escort_duty_fr1, _5_escort_duty_rd0, _5_escort_duty_tr0, _5_escort_duty_fr1, _5_escort_duty_hl0, _5_escort_duty_rd0, _5_escort_duty_hl0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_hl0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_st0], [_5_escort_duty_fr0, _5_escort_duty_fr0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_rd0, _5_escort_duty_tr0, _5_escort_duty_hl0, _5_escort_duty_st0, _5_escort_duty_fr0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_tr0, _5_escort_duty_hl0, _5_escort_duty_hl0, _5_escort_duty_tr0, _5_escort_duty_rd0, _5_escort_duty_hl0, _5_escort_duty_fr1], [_5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr1, _5_escort_duty_st0, _5_escort_duty_tr0, _5_escort_duty_hl0, _5_escort_duty_rd0, _5_escort_duty_fr0, _5_escort_duty_fr1, _5_escort_duty_st0, _5_escort_duty_fr1, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr1, _5_escort_duty_tr0, _5_escort_duty_hl0, _5_escort_duty_rd0, _5_escort_duty_fr1, _5_escort_duty_fr0], [_5_escort_duty_fr1, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_st0, _5_escort_duty_fr0, _5_escort_duty_st0, _5_escort_duty_hl0, _5_escort_duty_tr0, _5_escort_duty_rd0, _5_escort_duty_fr1, _5_escort_duty_fr0]],
  mapId: 'mission-ae2-escort-duty',
  mapName: '',
  mapNameLangKey: 'MAP_NAME__AE2_MISSION_5__ESCORT_DUTY',
  mapObjectiveLangKey: 'MAP_NAME__AE2_MISSION_5__ESCORT_DUTY__OBJECTIVE',
  mapType: map_type/* MapTypeEnum.companies */.G.companies,
  storyMarkdownLangKeyList: [],
  triggerList: [{
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceDefeat */.q.companiesForceDefeat,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.oneHeroLivesOnly */.m.oneHeroLivesOnly,
    dependentTriggerIdList: [],
    forPlayerId: _5_escort_duty_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'defeat--mission-ae2-escort-duty',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.showBriefing */.q.showBriefing,
      addUnitList: [],
      briefing: {
        briefingList: [{
          faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_5__BRIEFING_3_SOLDIER'
        }],
        onBriefingEnd: null
      },
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.unitOnRectanglePlace */.m.unitOnRectanglePlace,
    dependentTriggerIdList: [],
    forPlayerId: _5_escort_duty_player1,
    placeList: {
      rectangleList: [[{
        x: 0,
        y: 0
      }, {
        x: 8,
        y: 11
      }]],
      unitTypeList: unit_const/* allAvailableUnitList */.ot
    },
    triggerId: 'add-unit--briefing--mission-ae2-escort-duty-1',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.addUnitList */.q.addUnitList,
      addUnitList: [_5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_skeleton),
        unitType: _5_escort_duty_skeleton,
        x: 4,
        y: 1
      }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_archer),
        unitType: _5_escort_duty_archer,
        x: 5,
        y: 2
      }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_skeleton),
        unitType: _5_escort_duty_skeleton,
        x: 4,
        y: 3
      })],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.unitOnRectanglePlace */.m.unitOnRectanglePlace,
    dependentTriggerIdList: [],
    forPlayerId: _5_escort_duty_player1,
    placeList: {
      rectangleList: [[{
        x: 0,
        y: 0
      }, {
        x: 8,
        y: 11
      }]],
      unitTypeList: unit_const/* allAvailableUnitList */.ot
    },
    triggerId: 'add-unit--mission-ae2-escort-duty-1',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.addUnitList */.q.addUnitList,
      addUnitList: [_5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_archer),
        unitType: _5_escort_duty_archer,
        x: 5,
        y: 10
      }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_direWolf),
        unitType: _5_escort_duty_direWolf,
        x: 7,
        y: 9
      }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_direWolf),
        unitType: _5_escort_duty_direWolf,
        x: 7,
        y: 8
      })],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.unitOnRectanglePlace */.m.unitOnRectanglePlace,
    dependentTriggerIdList: [],
    forPlayerId: _5_escort_duty_player1,
    placeList: {
      rectangleList: [[{
        x: 0,
        y: 7
      }, {
        x: 19,
        y: 11
      }]],
      unitTypeList: unit_const/* allAvailableUnitList */.ot
    },
    triggerId: 'add-unit--mission-ae2-escort-duty-2',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.addUnitList */.q.addUnitList,
      addUnitList: [_5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_direWolf),
        unitType: _5_escort_duty_direWolf,
        x: 11,
        y: 5
      }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_golem),
        unitType: _5_escort_duty_golem,
        x: 12,
        y: 6
      }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_direWolf),
        unitType: _5_escort_duty_direWolf,
        x: 12,
        y: 7
      })],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.unitOnRectanglePlace */.m.unitOnRectanglePlace,
    dependentTriggerIdList: [],
    forPlayerId: _5_escort_duty_player1,
    placeList: {
      rectangleList: [[{
        x: 7,
        y: 6
      }, {
        x: 19,
        y: 11
      }]],
      unitTypeList: unit_const/* allAvailableUnitList */.ot
    },
    triggerId: 'add-unit--mission-ae2-escort-duty-3',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.addUnitList */.q.addUnitList,
      addUnitList: [_5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_direWolf),
        unitType: _5_escort_duty_direWolf,
        x: 16,
        y: 10
      }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_golem),
        unitType: _5_escort_duty_golem,
        x: 17,
        y: 10
      }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_direWolf),
        unitType: _5_escort_duty_direWolf,
        x: 18,
        y: 10
      }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _5_escort_duty_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_archer),
        unitType: _5_escort_duty_archer,
        x: 18,
        y: 9
      })],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.unitOnRectanglePlace */.m.unitOnRectanglePlace,
    dependentTriggerIdList: [],
    forPlayerId: _5_escort_duty_player1,
    placeList: {
      rectangleList: [[{
        x: 15,
        y: 8
      }, {
        x: 19,
        y: 11
      }]],
      unitTypeList: unit_const/* allAvailableUnitList */.ot
    },
    triggerId: 'add-unit--mission-ae2-escort-duty-4',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceWin */.q.companiesForceWin,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDied */.m.allEnemyUnitDied,
    dependentTriggerIdList: ['add-unit--mission-ae2-escort-duty-1', 'add-unit--briefing--mission-ae2-escort-duty-1', 'add-unit--mission-ae2-escort-duty-2', 'add-unit--mission-ae2-escort-duty-3', 'add-unit--mission-ae2-escort-duty-4'],
    forPlayerId: _5_escort_duty_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'win--mission-ae2-escort-duty',
    turnCount: 0
  }],
  unitList: [_5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _5_escort_duty_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_crystal),
    unitType: _5_escort_duty_crystal,
    x: 11,
    y: 0
  }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _5_escort_duty_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_galamar),
    unitType: _5_escort_duty_galamar,
    x: 11,
    y: 1
  }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _5_escort_duty_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_archer),
    unitType: _5_escort_duty_archer,
    x: 12,
    y: 0
  }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _5_escort_duty_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_sorceress),
    unitType: _5_escort_duty_sorceress,
    x: 12,
    y: 1
  }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _5_escort_duty_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_soldier),
    unitType: _5_escort_duty_soldier,
    x: 11,
    y: 2
  }), _5_escort_duty_assign(_5_escort_duty_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _5_escort_duty_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_5_escort_duty_direWolf),
    unitType: _5_escort_duty_direWolf,
    x: 10,
    y: 1
  })]
};
;// CONCATENATED MODULE: ./www/model/map/companies-map-list/ae2/6-northbound.ts


/* eslint-disable id-length, no-unused-vars, @typescript-eslint/no-unused-vars */
var _6_northbound_assign = undefined && undefined.__assign || function () {
  _6_northbound_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _6_northbound_assign.apply(this, arguments);
};











var _6_northbound_br0 = landscape_type/* GameLandscapeItemEnum.br0 */.k.br0,
  _6_northbound_br1 = landscape_type/* GameLandscapeItemEnum.br1 */.k.br1,
  _6_northbound_wt0 = landscape_type/* GameLandscapeItemEnum.wt0 */.k.wt0,
  _6_northbound_st0 = landscape_type/* GameLandscapeItemEnum.st0 */.k.st0,
  _6_northbound_tr0 = landscape_type/* GameLandscapeItemEnum.tr0 */.k.tr0,
  _6_northbound_hl0 = landscape_type/* GameLandscapeItemEnum.hl0 */.k.hl0,
  _6_northbound_fr1 = landscape_type/* GameLandscapeItemEnum.fr1 */.k.fr1,
  _6_northbound_rd0 = landscape_type/* GameLandscapeItemEnum.rd0 */.k.rd0,
  _6_northbound_tr1 = landscape_type/* GameLandscapeItemEnum.tr1 */.k.tr1,
  _6_northbound_tr2 = landscape_type/* GameLandscapeItemEnum.tr2 */.k.tr2,
  _6_northbound_fr0 = landscape_type/* GameLandscapeItemEnum.fr0 */.k.fr0,
  _6_northbound_tr3 = landscape_type/* GameLandscapeItemEnum.tr3 */.k.tr3,
  _6_northbound_tr4 = landscape_type/* GameLandscapeItemEnum.tr4 */.k.tr4,
  _6_northbound_wt1 = landscape_type/* GameLandscapeItemEnum.wt1 */.k.wt1,
  _6_northbound_wt2 = landscape_type/* GameLandscapeItemEnum.wt2 */.k.wt2;
var _6_northbound_playerEmpty = player_type/* GamePlayerIdEnum.playerEmpty */.J8.playerEmpty,
  _6_northbound_player1 = player_type/* GamePlayerIdEnum.player1 */.J8.player1,
  _6_northbound_player2 = player_type/* GamePlayerIdEnum.player2 */.J8.player2,
  _6_northbound_player3 = player_type/* GamePlayerIdEnum.player3 */.J8.player3,
  _6_northbound_player4 = player_type/* GamePlayerIdEnum.player4 */.J8.player4;
var _6_northbound_castle = building_type/* GameBuildingTypeEnum.castle */.R.castle,
  _6_northbound_farm = building_type/* GameBuildingTypeEnum.farm */.R.farm,
  _6_northbound_well = building_type/* GameBuildingTypeEnum.well */.R.well,
  _6_northbound_temple = building_type/* GameBuildingTypeEnum.temple */.R.temple;
var _6_northbound_buildingBroken = building_type/* GameBuildingStateEnum.buildingBroken */.n.buildingBroken,
  _6_northbound_buildingOk = building_type/* GameBuildingStateEnum.buildingOk */.n.buildingOk;
var _6_northbound_gray = player_type/* GamePlayerColorIdEnum.gray */.Zw.gray,
  _6_northbound_red = player_type/* GamePlayerColorIdEnum.red */.Zw.red,
  _6_northbound_blue = player_type/* GamePlayerColorIdEnum.blue */.Zw.blue,
  _6_northbound_green = player_type/* GamePlayerColorIdEnum.green */.Zw.green,
  _6_northbound_black = player_type/* GamePlayerColorIdEnum.black */.Zw.black;
var _6_northbound_teamEmpty = player_type/* GamePlayerTeamIdEnum.teamEmpty */.gI.teamEmpty,
  _6_northbound_team1 = player_type/* GamePlayerTeamIdEnum.team1 */.gI.team1,
  _6_northbound_team2 = player_type/* GamePlayerTeamIdEnum.team2 */.gI.team2,
  _6_northbound_team3 = player_type/* GamePlayerTeamIdEnum.team3 */.gI.team3,
  _6_northbound_team4 = player_type/* GamePlayerTeamIdEnum.team4 */.gI.team4;
var _6_northbound_archer = unit_type/* GameUnitTypeEnum.archer */.D.archer,
  _6_northbound_catapult = unit_type/* GameUnitTypeEnum.catapult */.D.catapult,
  _6_northbound_crystal = unit_type/* GameUnitTypeEnum.crystal */.D.crystal,
  _6_northbound_demonLord = unit_type/* GameUnitTypeEnum.demonLord */.D.demonLord,
  _6_northbound_direWolf = unit_type/* GameUnitTypeEnum.direWolf */.D.direWolf,
  _6_northbound_dragon = unit_type/* GameUnitTypeEnum.dragon */.D.dragon,
  _6_northbound_elemental = unit_type/* GameUnitTypeEnum.elemental */.D.elemental,
  _6_northbound_galamar = unit_type/* GameUnitTypeEnum.galamar */.D.galamar,
  _6_northbound_golem = unit_type/* GameUnitTypeEnum.golem */.D.golem,
  _6_northbound_saeth = unit_type/* GameUnitTypeEnum.saeth */.D.saeth,
  _6_northbound_skeleton = unit_type/* GameUnitTypeEnum.skeleton */.D.skeleton,
  _6_northbound_soldier = unit_type/* GameUnitTypeEnum.soldier */.D.soldier,
  _6_northbound_sorceress = unit_type/* GameUnitTypeEnum.sorceress */.D.sorceress,
  _6_northbound_valadorn = unit_type/* GameUnitTypeEnum.valadorn */.D.valadorn,
  _6_northbound_wisp = unit_type/* GameUnitTypeEnum.wisp */.D.wisp;
var northbound = {
  briefingList: [{
    faceSrc: '',
    markdownLangKey: 'COMPANY_LOCATION__THE_GATES_OF_THORIN'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.valadorn.src */.J.valadorn.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_6__BRIEFING_1_VALADORN'
  }],
  buildingList: [{
    buildingType: _6_northbound_farm,
    gamePlayerId: _6_northbound_player1,
    state: _6_northbound_buildingOk,
    x: 2,
    y: 14
  }, {
    buildingType: _6_northbound_farm,
    gamePlayerId: _6_northbound_playerEmpty,
    state: _6_northbound_buildingBroken,
    x: 9,
    y: 13
  }, {
    buildingType: _6_northbound_farm,
    gamePlayerId: _6_northbound_player1,
    state: _6_northbound_buildingOk,
    x: 8,
    y: 17
  }, {
    buildingType: _6_northbound_farm,
    gamePlayerId: _6_northbound_playerEmpty,
    state: _6_northbound_buildingOk,
    x: 4,
    y: 12
  }, {
    buildingType: _6_northbound_castle,
    gamePlayerId: _6_northbound_player1,
    state: _6_northbound_buildingOk,
    x: 5,
    y: 17
  }, {
    buildingType: _6_northbound_farm,
    gamePlayerId: _6_northbound_playerEmpty,
    state: _6_northbound_buildingBroken,
    x: 10,
    y: 10
  }, {
    buildingType: _6_northbound_farm,
    gamePlayerId: _6_northbound_player2,
    state: _6_northbound_buildingOk,
    x: 7,
    y: 8
  }, {
    buildingType: _6_northbound_farm,
    gamePlayerId: _6_northbound_playerEmpty,
    state: _6_northbound_buildingOk,
    x: 10,
    y: 6
  }, {
    buildingType: _6_northbound_farm,
    gamePlayerId: _6_northbound_playerEmpty,
    state: _6_northbound_buildingOk,
    x: 2,
    y: 7
  }, {
    buildingType: _6_northbound_farm,
    gamePlayerId: _6_northbound_player2,
    state: _6_northbound_buildingOk,
    x: 5,
    y: 7
  }, {
    buildingType: _6_northbound_castle,
    gamePlayerId: _6_northbound_player2,
    state: _6_northbound_buildingOk,
    x: 5,
    y: 5
  }],
  cemetery: [],
  graveList: [],
  landscape: [[_6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_br1, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt1, _6_northbound_wt0], [_6_northbound_wt0, _6_northbound_wt2, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_hl0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_st0, _6_northbound_fr0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt2], [_6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_fr1, _6_northbound_tr0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_fr1, _6_northbound_tr0, _6_northbound_st0, _6_northbound_wt0, _6_northbound_wt0], [_6_northbound_wt1, _6_northbound_wt0, _6_northbound_st0, _6_northbound_fr0, _6_northbound_st0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_st0, _6_northbound_tr0, _6_northbound_wt0, _6_northbound_wt1], [_6_northbound_wt0, _6_northbound_wt0, _6_northbound_fr0, _6_northbound_hl0, _6_northbound_tr0, _6_northbound_tr0, _6_northbound_rd0, _6_northbound_st0, _6_northbound_fr1, _6_northbound_fr0, _6_northbound_wt0, _6_northbound_wt0], [_6_northbound_fr0, _6_northbound_fr0, _6_northbound_fr1, _6_northbound_st0, _6_northbound_fr1, _6_northbound_tr0, _6_northbound_rd0, _6_northbound_hl0, _6_northbound_fr0, _6_northbound_fr1, _6_northbound_fr0, _6_northbound_wt0], [_6_northbound_st0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_wt0], [_6_northbound_hl0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_fr0, _6_northbound_st0, _6_northbound_tr0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_st0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0], [_6_northbound_fr1, _6_northbound_rd0, _6_northbound_st0, _6_northbound_tr0, _6_northbound_fr0, _6_northbound_hl0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_tr0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_br1], [_6_northbound_fr0, _6_northbound_rd0, _6_northbound_fr1, _6_northbound_hl0, _6_northbound_fr0, _6_northbound_tr0, _6_northbound_rd0, _6_northbound_hl0, _6_northbound_fr0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_br1], [_6_northbound_wt0, _6_northbound_br1, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_st0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_fr0, _6_northbound_fr1, _6_northbound_tr0, _6_northbound_rd0], [_6_northbound_wt0, _6_northbound_br1, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_hl0, _6_northbound_rd0, _6_northbound_st0, _6_northbound_hl0, _6_northbound_st0, _6_northbound_tr0, _6_northbound_rd0], [_6_northbound_st0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_fr0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0], [_6_northbound_fr0, _6_northbound_tr0, _6_northbound_hl0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_hl0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_tr0, _6_northbound_hl0, _6_northbound_st0], [_6_northbound_wt0, _6_northbound_wt0, _6_northbound_tr0, _6_northbound_rd0, _6_northbound_hl0, _6_northbound_st0, _6_northbound_wt0, _6_northbound_wt1, _6_northbound_wt0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0], [_6_northbound_wt0, _6_northbound_wt0, _6_northbound_tr0, _6_northbound_rd0, _6_northbound_fr1, _6_northbound_fr0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_wt0, _6_northbound_rd0, _6_northbound_fr1, _6_northbound_st0], [_6_northbound_st0, _6_northbound_st0, _6_northbound_hl0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_st0, _6_northbound_hl0, _6_northbound_fr0, _6_northbound_st0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_fr1], [_6_northbound_fr0, _6_northbound_fr0, _6_northbound_st0, _6_northbound_rd0, _6_northbound_hl0, _6_northbound_rd0, _6_northbound_tr0, _6_northbound_st0, _6_northbound_tr0, _6_northbound_rd0, _6_northbound_st0, _6_northbound_fr0], [_6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_rd0, _6_northbound_wt0, _6_northbound_wt0], [_6_northbound_st0, _6_northbound_fr0, _6_northbound_fr1, _6_northbound_rd0, _6_northbound_st0, _6_northbound_fr0, _6_northbound_hl0, _6_northbound_tr0, _6_northbound_st0, _6_northbound_fr0, _6_northbound_wt0, _6_northbound_wt2]],
  mapId: 'mission-ae2-northbound',
  mapName: '',
  mapNameLangKey: 'MAP_NAME__AE2_MISSION_6__NORTHBOUND',
  mapObjectiveLangKey: 'MAP_NAME__AE2_MISSION_6__NORTHBOUND__OBJECTIVE',
  mapType: map_type/* MapTypeEnum.companies */.G.companies,
  storyMarkdownLangKeyList: [],
  triggerList: [{
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceDefeat */.q.companiesForceDefeat,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allHeroesDied */.m.allHeroesDied,
    dependentTriggerIdList: [],
    forPlayerId: _6_northbound_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'defeat--mission-ae2-northbound',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.showBriefing */.q.showBriefing,
      addUnitList: [],
      briefing: {
        briefingList: [{
          faceSrc: ae2_image/* ae2FaceImage.valadorn.src */.J.valadorn.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_6__BRIEFING_2_VALADORN'
        }],
        onBriefingEnd: {
          actionType: game_context_type/* GameActionTypeEnum.companiesForceWin */.q.companiesForceWin,
          addUnitList: [],
          briefing: null,
          buyUnitType: null,
          movePointList: [],
          toPoint: defaultPoint,
          unitCurrentPoint: defaultPoint,
          unitId: ''
        }
      },
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDiedAndHasAllCastles */.m.allEnemyUnitDiedAndHasAllCastles,
    dependentTriggerIdList: [],
    forPlayerId: _6_northbound_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'win--mission-ae2-northbound',
    turnCount: 0
  }],
  unitList: [_6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_valadorn),
    unitType: _6_northbound_valadorn,
    x: 5,
    y: 17
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_direWolf),
    unitType: _6_northbound_direWolf,
    x: 4,
    y: 16
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_catapult),
    unitType: _6_northbound_catapult,
    x: 3,
    y: 17
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_golem),
    unitType: _6_northbound_golem,
    x: 8,
    y: 16
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_soldier),
    unitType: _6_northbound_soldier,
    x: 8,
    y: 17
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_archer),
    unitType: _6_northbound_archer,
    x: 7,
    y: 17
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_demonLord),
    unitType: _6_northbound_demonLord,
    x: 5,
    y: 5
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_wisp),
    unitType: _6_northbound_wisp,
    x: 6,
    y: 5
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_golem),
    unitType: _6_northbound_golem,
    x: 4,
    y: 6
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_catapult),
    unitType: _6_northbound_catapult,
    x: 5,
    y: 6
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_soldier),
    unitType: _6_northbound_soldier,
    x: 6,
    y: 6
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_direWolf),
    unitType: _6_northbound_direWolf,
    x: 7,
    y: 6
  }), _6_northbound_assign(_6_northbound_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _6_northbound_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_6_northbound_soldier),
    unitType: _6_northbound_soldier,
    x: 5,
    y: 7
  })]
};
;// CONCATENATED MODULE: ./www/model/map/companies-map-list/ae2/7-rendezvous.ts


/* eslint-disable id-length, no-unused-vars, @typescript-eslint/no-unused-vars */
var _7_rendezvous_assign = undefined && undefined.__assign || function () {
  _7_rendezvous_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _7_rendezvous_assign.apply(this, arguments);
};











var _7_rendezvous_br0 = landscape_type/* GameLandscapeItemEnum.br0 */.k.br0,
  _7_rendezvous_br1 = landscape_type/* GameLandscapeItemEnum.br1 */.k.br1,
  _7_rendezvous_wt0 = landscape_type/* GameLandscapeItemEnum.wt0 */.k.wt0,
  _7_rendezvous_st0 = landscape_type/* GameLandscapeItemEnum.st0 */.k.st0,
  _7_rendezvous_tr0 = landscape_type/* GameLandscapeItemEnum.tr0 */.k.tr0,
  _7_rendezvous_hl0 = landscape_type/* GameLandscapeItemEnum.hl0 */.k.hl0,
  _7_rendezvous_fr1 = landscape_type/* GameLandscapeItemEnum.fr1 */.k.fr1,
  _7_rendezvous_rd0 = landscape_type/* GameLandscapeItemEnum.rd0 */.k.rd0,
  _7_rendezvous_tr1 = landscape_type/* GameLandscapeItemEnum.tr1 */.k.tr1,
  _7_rendezvous_tr2 = landscape_type/* GameLandscapeItemEnum.tr2 */.k.tr2,
  _7_rendezvous_fr0 = landscape_type/* GameLandscapeItemEnum.fr0 */.k.fr0,
  _7_rendezvous_tr3 = landscape_type/* GameLandscapeItemEnum.tr3 */.k.tr3,
  _7_rendezvous_tr4 = landscape_type/* GameLandscapeItemEnum.tr4 */.k.tr4,
  _7_rendezvous_wt1 = landscape_type/* GameLandscapeItemEnum.wt1 */.k.wt1,
  _7_rendezvous_wt2 = landscape_type/* GameLandscapeItemEnum.wt2 */.k.wt2;
var _7_rendezvous_playerEmpty = player_type/* GamePlayerIdEnum.playerEmpty */.J8.playerEmpty,
  _7_rendezvous_player1 = player_type/* GamePlayerIdEnum.player1 */.J8.player1,
  _7_rendezvous_player2 = player_type/* GamePlayerIdEnum.player2 */.J8.player2,
  _7_rendezvous_player3 = player_type/* GamePlayerIdEnum.player3 */.J8.player3,
  _7_rendezvous_player4 = player_type/* GamePlayerIdEnum.player4 */.J8.player4;
var _7_rendezvous_castle = building_type/* GameBuildingTypeEnum.castle */.R.castle,
  _7_rendezvous_farm = building_type/* GameBuildingTypeEnum.farm */.R.farm,
  _7_rendezvous_well = building_type/* GameBuildingTypeEnum.well */.R.well,
  _7_rendezvous_temple = building_type/* GameBuildingTypeEnum.temple */.R.temple;
var _7_rendezvous_buildingBroken = building_type/* GameBuildingStateEnum.buildingBroken */.n.buildingBroken,
  _7_rendezvous_buildingOk = building_type/* GameBuildingStateEnum.buildingOk */.n.buildingOk;
var _7_rendezvous_gray = player_type/* GamePlayerColorIdEnum.gray */.Zw.gray,
  _7_rendezvous_red = player_type/* GamePlayerColorIdEnum.red */.Zw.red,
  _7_rendezvous_blue = player_type/* GamePlayerColorIdEnum.blue */.Zw.blue,
  _7_rendezvous_green = player_type/* GamePlayerColorIdEnum.green */.Zw.green,
  _7_rendezvous_black = player_type/* GamePlayerColorIdEnum.black */.Zw.black;
var _7_rendezvous_teamEmpty = player_type/* GamePlayerTeamIdEnum.teamEmpty */.gI.teamEmpty,
  _7_rendezvous_team1 = player_type/* GamePlayerTeamIdEnum.team1 */.gI.team1,
  _7_rendezvous_team2 = player_type/* GamePlayerTeamIdEnum.team2 */.gI.team2,
  _7_rendezvous_team3 = player_type/* GamePlayerTeamIdEnum.team3 */.gI.team3,
  _7_rendezvous_team4 = player_type/* GamePlayerTeamIdEnum.team4 */.gI.team4;
var _7_rendezvous_archer = unit_type/* GameUnitTypeEnum.archer */.D.archer,
  _7_rendezvous_catapult = unit_type/* GameUnitTypeEnum.catapult */.D.catapult,
  _7_rendezvous_crystal = unit_type/* GameUnitTypeEnum.crystal */.D.crystal,
  _7_rendezvous_demonLord = unit_type/* GameUnitTypeEnum.demonLord */.D.demonLord,
  _7_rendezvous_direWolf = unit_type/* GameUnitTypeEnum.direWolf */.D.direWolf,
  _7_rendezvous_dragon = unit_type/* GameUnitTypeEnum.dragon */.D.dragon,
  _7_rendezvous_elemental = unit_type/* GameUnitTypeEnum.elemental */.D.elemental,
  _7_rendezvous_galamar = unit_type/* GameUnitTypeEnum.galamar */.D.galamar,
  _7_rendezvous_golem = unit_type/* GameUnitTypeEnum.golem */.D.golem,
  _7_rendezvous_saeth = unit_type/* GameUnitTypeEnum.saeth */.D.saeth,
  _7_rendezvous_skeleton = unit_type/* GameUnitTypeEnum.skeleton */.D.skeleton,
  _7_rendezvous_soldier = unit_type/* GameUnitTypeEnum.soldier */.D.soldier,
  _7_rendezvous_sorceress = unit_type/* GameUnitTypeEnum.sorceress */.D.sorceress,
  _7_rendezvous_valadorn = unit_type/* GameUnitTypeEnum.valadorn */.D.valadorn,
  _7_rendezvous_wisp = unit_type/* GameUnitTypeEnum.wisp */.D.wisp;
var rendezvous = {
  briefingList: [{
    faceSrc: '',
    markdownLangKey: 'COMPANY_LOCATION__OUTSIDE_THE_CITY'
  }],
  buildingList: [{
    buildingType: _7_rendezvous_well,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingOk,
    x: 13,
    y: 14
  }, {
    buildingType: _7_rendezvous_castle,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingOk,
    x: 0,
    y: 8
  }, {
    buildingType: _7_rendezvous_farm,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingOk,
    x: 3,
    y: 14
  }, {
    buildingType: _7_rendezvous_farm,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingOk,
    x: 0,
    y: 13
  }, {
    buildingType: _7_rendezvous_farm,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingBroken,
    x: 3,
    y: 8
  }, {
    buildingType: _7_rendezvous_farm,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingBroken,
    x: 1,
    y: 10
  }, {
    buildingType: _7_rendezvous_farm,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingBroken,
    x: 8,
    y: 4
  }, {
    buildingType: _7_rendezvous_farm,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingBroken,
    x: 8,
    y: 9
  }, {
    buildingType: _7_rendezvous_farm,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingBroken,
    x: 14,
    y: 9
  }, {
    buildingType: _7_rendezvous_farm,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingBroken,
    x: 11,
    y: 7
  }, {
    buildingType: _7_rendezvous_well,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingOk,
    x: 11,
    y: 8
  }, {
    buildingType: _7_rendezvous_castle,
    gamePlayerId: _7_rendezvous_playerEmpty,
    state: _7_rendezvous_buildingOk,
    x: 12,
    y: 9
  }],
  cemetery: [],
  graveList: [],
  landscape: [[_7_rendezvous_st0, _7_rendezvous_fr0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_st0, _7_rendezvous_fr0, _7_rendezvous_fr1, _7_rendezvous_st0, _7_rendezvous_st0, _7_rendezvous_st0, _7_rendezvous_fr0, _7_rendezvous_fr0, _7_rendezvous_rd0, _7_rendezvous_st0, _7_rendezvous_st0], [_7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt2, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_fr1, _7_rendezvous_st0, _7_rendezvous_fr1, _7_rendezvous_tr0, _7_rendezvous_fr1, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_fr0], [_7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_st0, _7_rendezvous_fr0, _7_rendezvous_hl0, _7_rendezvous_st0, _7_rendezvous_tr0, _7_rendezvous_hl0, _7_rendezvous_rd0, _7_rendezvous_st0], [_7_rendezvous_wt0, _7_rendezvous_wt1, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt2, _7_rendezvous_wt0, _7_rendezvous_hl0, _7_rendezvous_st0, _7_rendezvous_fr0, _7_rendezvous_tr0, _7_rendezvous_fr0, _7_rendezvous_fr1, _7_rendezvous_rd0, _7_rendezvous_fr0], [_7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_tr0, _7_rendezvous_tr0, _7_rendezvous_fr0, _7_rendezvous_st0, _7_rendezvous_st0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_st0], [_7_rendezvous_st0, _7_rendezvous_fr0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_tr0, _7_rendezvous_br0, _7_rendezvous_br0, _7_rendezvous_fr1, _7_rendezvous_hl0, _7_rendezvous_fr0, _7_rendezvous_tr0, _7_rendezvous_st0, _7_rendezvous_hl0, _7_rendezvous_rd0, _7_rendezvous_st0, _7_rendezvous_fr1], [_7_rendezvous_fr0, _7_rendezvous_hl0, _7_rendezvous_fr0, _7_rendezvous_fr1, _7_rendezvous_tr0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_tr0, _7_rendezvous_tr0, _7_rendezvous_fr1, _7_rendezvous_fr0, _7_rendezvous_fr0, _7_rendezvous_fr1, _7_rendezvous_rd0, _7_rendezvous_tr0, _7_rendezvous_fr0], [_7_rendezvous_fr1, _7_rendezvous_tr0, _7_rendezvous_fr1, _7_rendezvous_tr0, _7_rendezvous_st0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_st0, _7_rendezvous_tr0, _7_rendezvous_tr0, _7_rendezvous_tr0, _7_rendezvous_tr0, _7_rendezvous_rd0, _7_rendezvous_tr0, _7_rendezvous_fr0], [_7_rendezvous_rd0, _7_rendezvous_hl0, _7_rendezvous_tr0, _7_rendezvous_tr0, _7_rendezvous_fr1, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_fr1, _7_rendezvous_hl0, _7_rendezvous_tr0, _7_rendezvous_tr0, _7_rendezvous_fr1, _7_rendezvous_rd0, _7_rendezvous_fr0, _7_rendezvous_fr0], [_7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_hl0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_tr0, _7_rendezvous_st0, _7_rendezvous_hl0, _7_rendezvous_tr0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_tr0, _7_rendezvous_st0], [_7_rendezvous_fr1, _7_rendezvous_tr0, _7_rendezvous_hl0, _7_rendezvous_tr0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_br0, _7_rendezvous_br0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_st0, _7_rendezvous_wt0], [_7_rendezvous_tr0, _7_rendezvous_st0, _7_rendezvous_fr1, _7_rendezvous_st0, _7_rendezvous_fr0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_fr0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_br1, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0], [_7_rendezvous_fr0, _7_rendezvous_tr0, _7_rendezvous_tr0, _7_rendezvous_fr0, _7_rendezvous_st0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_br1, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0], [_7_rendezvous_tr0, _7_rendezvous_hl0, _7_rendezvous_tr0, _7_rendezvous_hl0, _7_rendezvous_fr0, _7_rendezvous_hl0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_hl0, _7_rendezvous_rd0, _7_rendezvous_tr0, _7_rendezvous_st0, _7_rendezvous_fr0], [_7_rendezvous_fr0, _7_rendezvous_tr0, _7_rendezvous_fr1, _7_rendezvous_tr0, _7_rendezvous_tr0, _7_rendezvous_fr1, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_fr1, _7_rendezvous_tr0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_fr1, _7_rendezvous_tr0], [_7_rendezvous_st0, _7_rendezvous_fr0, _7_rendezvous_st0, _7_rendezvous_fr0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_st0, _7_rendezvous_fr0, _7_rendezvous_st0, _7_rendezvous_rd0, _7_rendezvous_rd0, _7_rendezvous_tr0, _7_rendezvous_st0], [_7_rendezvous_fr0, _7_rendezvous_fr1, _7_rendezvous_fr0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_fr0, _7_rendezvous_hl0, _7_rendezvous_tr0, _7_rendezvous_tr0, _7_rendezvous_rd0, _7_rendezvous_st0, _7_rendezvous_fr1], [_7_rendezvous_fr0, _7_rendezvous_st0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_wt0, _7_rendezvous_fr0, _7_rendezvous_fr1, _7_rendezvous_st0, _7_rendezvous_fr0, _7_rendezvous_st0, _7_rendezvous_rd0, _7_rendezvous_hl0, _7_rendezvous_fr0]],
  mapId: 'mission-ae2-rendezvous',
  mapName: '',
  mapNameLangKey: 'MAP_NAME__AE2_MISSION_7__RENDEZVOUS',
  mapObjectiveLangKey: 'MAP_NAME__AE2_MISSION_7__RENDEZVOUS__OBJECTIVE',
  mapType: map_type/* MapTypeEnum.companies */.G.companies,
  storyMarkdownLangKeyList: [],
  triggerList: [
  // galamar dead before valadorn arrive
  {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceDefeat */.q.companiesForceDefeat,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allHeroesDied */.m.allHeroesDied,
    dependentTriggerIdList: [],
    forPlayerId: _7_rendezvous_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'defeat--before-valadorn-arrived--mission-ae2-rendezvous',
    turnCount: 0
  },
  // galamar or valadorn dead after arrive
  {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceDefeat */.q.companiesForceDefeat,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.oneHeroLivesOnly */.m.oneHeroLivesOnly,
    dependentTriggerIdList: ['add-unit--mission-ae2-rendezvous'],
    forPlayerId: _7_rendezvous_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'defeat--after-valadorn-arrived--mission-ae2-rendezvous',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.addUnitList */.q.addUnitList,
      addUnitList: [_7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player1,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_golem,
        x: 12,
        y: 16
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player1,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_valadorn,
        x: 13,
        y: 16
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player1,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_dragon,
        x: 14,
        y: 16
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player1,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_wisp,
        x: 13,
        y: 17
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player1,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_archer,
        x: 12,
        y: 17
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_soldier,
        x: 12,
        y: 14
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_golem,
        x: 14,
        y: 14
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_elemental,
        x: 13,
        y: 12
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_sorceress,
        x: 13,
        y: 15
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_demonLord,
        x: 0,
        y: 8
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_soldier,
        x: 1,
        y: 10
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_soldier,
        x: 3,
        y: 8
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_golem,
        x: 4,
        y: 9
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_golem,
        x: 5,
        y: 10
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_dragon,
        x: 2,
        y: 10
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_dragon,
        x: 4,
        y: 8
      }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
        gamePlayerId: _7_rendezvous_player2,
        unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
        unitType: _7_rendezvous_wisp,
        x: 2,
        y: 9
      })],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.turnCount */.m.turnCount,
    dependentTriggerIdList: [],
    forPlayerId: _7_rendezvous_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'add-unit--mission-ae2-rendezvous',
    turnCount: 15
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.showBriefing */.q.showBriefing,
      addUnitList: [],
      briefing: {
        briefingList: [{
          faceSrc: ae2_image/* ae2FaceImage.demonLord.src */.J.demonLord.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_7__BRIEFING_1_DEMON_LORD'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_7__BRIEFING_2_SOLDIER'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_7__BRIEFING_3_GALAMAR'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.valadorn.src */.J.valadorn.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_7__BRIEFING_4_VALADORN'
        }],
        onBriefingEnd: null
      },
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.turnCount */.m.turnCount,
    dependentTriggerIdList: [],
    forPlayerId: _7_rendezvous_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'add-unit--briefing--mission-ae2-rendezvous',
    turnCount: 15
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceWin */.q.companiesForceWin,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDiedAndHasAllCastles */.m.allEnemyUnitDiedAndHasAllCastles,
    dependentTriggerIdList: [],
    forPlayerId: _7_rendezvous_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'win--briefing--mission-ae2-rendezvous',
    turnCount: 0
  }],
  unitList: [_7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _7_rendezvous_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_sorceress),
    unitType: _7_rendezvous_sorceress,
    x: 13,
    y: 1
  }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _7_rendezvous_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
    unitType: _7_rendezvous_archer,
    x: 14,
    y: 1
  }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _7_rendezvous_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_soldier),
    unitType: _7_rendezvous_soldier,
    x: 14,
    y: 2
  }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _7_rendezvous_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_galamar),
    unitType: _7_rendezvous_galamar,
    x: 14,
    y: 3
  }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _7_rendezvous_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_archer),
    unitType: _7_rendezvous_archer,
    x: 13,
    y: 8
  }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _7_rendezvous_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_soldier),
    unitType: _7_rendezvous_soldier,
    x: 13,
    y: 7
  }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _7_rendezvous_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_direWolf),
    unitType: _7_rendezvous_direWolf,
    x: 14,
    y: 7
  }), _7_rendezvous_assign(_7_rendezvous_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _7_rendezvous_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_7_rendezvous_sorceress),
    unitType: _7_rendezvous_sorceress,
    x: 12,
    y: 7
  })]
};
;// CONCATENATED MODULE: ./www/model/map/companies-map-list/ae2/8-heavens-fury.ts


/* eslint-disable id-length, no-unused-vars, @typescript-eslint/no-unused-vars */
var _8_heavens_fury_assign = undefined && undefined.__assign || function () {
  _8_heavens_fury_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _8_heavens_fury_assign.apply(this, arguments);
};











var _8_heavens_fury_br0 = landscape_type/* GameLandscapeItemEnum.br0 */.k.br0,
  _8_heavens_fury_br1 = landscape_type/* GameLandscapeItemEnum.br1 */.k.br1,
  _8_heavens_fury_wt0 = landscape_type/* GameLandscapeItemEnum.wt0 */.k.wt0,
  _8_heavens_fury_st0 = landscape_type/* GameLandscapeItemEnum.st0 */.k.st0,
  _8_heavens_fury_tr0 = landscape_type/* GameLandscapeItemEnum.tr0 */.k.tr0,
  _8_heavens_fury_hl0 = landscape_type/* GameLandscapeItemEnum.hl0 */.k.hl0,
  _8_heavens_fury_fr1 = landscape_type/* GameLandscapeItemEnum.fr1 */.k.fr1,
  _8_heavens_fury_rd0 = landscape_type/* GameLandscapeItemEnum.rd0 */.k.rd0,
  _8_heavens_fury_tr1 = landscape_type/* GameLandscapeItemEnum.tr1 */.k.tr1,
  _8_heavens_fury_tr2 = landscape_type/* GameLandscapeItemEnum.tr2 */.k.tr2,
  _8_heavens_fury_fr0 = landscape_type/* GameLandscapeItemEnum.fr0 */.k.fr0,
  _8_heavens_fury_tr3 = landscape_type/* GameLandscapeItemEnum.tr3 */.k.tr3,
  _8_heavens_fury_tr4 = landscape_type/* GameLandscapeItemEnum.tr4 */.k.tr4,
  _8_heavens_fury_wt1 = landscape_type/* GameLandscapeItemEnum.wt1 */.k.wt1,
  _8_heavens_fury_wt2 = landscape_type/* GameLandscapeItemEnum.wt2 */.k.wt2;
var _8_heavens_fury_playerEmpty = player_type/* GamePlayerIdEnum.playerEmpty */.J8.playerEmpty,
  _8_heavens_fury_player1 = player_type/* GamePlayerIdEnum.player1 */.J8.player1,
  _8_heavens_fury_player2 = player_type/* GamePlayerIdEnum.player2 */.J8.player2,
  _8_heavens_fury_player3 = player_type/* GamePlayerIdEnum.player3 */.J8.player3,
  _8_heavens_fury_player4 = player_type/* GamePlayerIdEnum.player4 */.J8.player4;
var _8_heavens_fury_castle = building_type/* GameBuildingTypeEnum.castle */.R.castle,
  _8_heavens_fury_farm = building_type/* GameBuildingTypeEnum.farm */.R.farm,
  _8_heavens_fury_well = building_type/* GameBuildingTypeEnum.well */.R.well,
  _8_heavens_fury_temple = building_type/* GameBuildingTypeEnum.temple */.R.temple;
var _8_heavens_fury_buildingBroken = building_type/* GameBuildingStateEnum.buildingBroken */.n.buildingBroken,
  _8_heavens_fury_buildingOk = building_type/* GameBuildingStateEnum.buildingOk */.n.buildingOk;
var _8_heavens_fury_gray = player_type/* GamePlayerColorIdEnum.gray */.Zw.gray,
  _8_heavens_fury_red = player_type/* GamePlayerColorIdEnum.red */.Zw.red,
  _8_heavens_fury_blue = player_type/* GamePlayerColorIdEnum.blue */.Zw.blue,
  _8_heavens_fury_green = player_type/* GamePlayerColorIdEnum.green */.Zw.green,
  _8_heavens_fury_black = player_type/* GamePlayerColorIdEnum.black */.Zw.black;
var _8_heavens_fury_teamEmpty = player_type/* GamePlayerTeamIdEnum.teamEmpty */.gI.teamEmpty,
  _8_heavens_fury_team1 = player_type/* GamePlayerTeamIdEnum.team1 */.gI.team1,
  _8_heavens_fury_team2 = player_type/* GamePlayerTeamIdEnum.team2 */.gI.team2,
  _8_heavens_fury_team3 = player_type/* GamePlayerTeamIdEnum.team3 */.gI.team3,
  _8_heavens_fury_team4 = player_type/* GamePlayerTeamIdEnum.team4 */.gI.team4;
var _8_heavens_fury_archer = unit_type/* GameUnitTypeEnum.archer */.D.archer,
  _8_heavens_fury_catapult = unit_type/* GameUnitTypeEnum.catapult */.D.catapult,
  _8_heavens_fury_crystal = unit_type/* GameUnitTypeEnum.crystal */.D.crystal,
  _8_heavens_fury_demonLord = unit_type/* GameUnitTypeEnum.demonLord */.D.demonLord,
  _8_heavens_fury_direWolf = unit_type/* GameUnitTypeEnum.direWolf */.D.direWolf,
  _8_heavens_fury_dragon = unit_type/* GameUnitTypeEnum.dragon */.D.dragon,
  _8_heavens_fury_elemental = unit_type/* GameUnitTypeEnum.elemental */.D.elemental,
  _8_heavens_fury_galamar = unit_type/* GameUnitTypeEnum.galamar */.D.galamar,
  _8_heavens_fury_golem = unit_type/* GameUnitTypeEnum.golem */.D.golem,
  _8_heavens_fury_saeth = unit_type/* GameUnitTypeEnum.saeth */.D.saeth,
  _8_heavens_fury_skeleton = unit_type/* GameUnitTypeEnum.skeleton */.D.skeleton,
  _8_heavens_fury_soldier = unit_type/* GameUnitTypeEnum.soldier */.D.soldier,
  _8_heavens_fury_sorceress = unit_type/* GameUnitTypeEnum.sorceress */.D.sorceress,
  _8_heavens_fury_valadorn = unit_type/* GameUnitTypeEnum.valadorn */.D.valadorn,
  _8_heavens_fury_wisp = unit_type/* GameUnitTypeEnum.wisp */.D.wisp,
  saethHeavensFury = unit_type/* GameUnitTypeEnum.saethHeavensFury */.D.saethHeavensFury;
var heavensFury = {
  briefingList: [{
    faceSrc: '',
    markdownLangKey: 'COMPANY_LOCATION__THE_ANCIENT_CITADEL'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_1_GALAMAR'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.saeth.src */.J.saeth.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_2_SAETH'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.valadorn.src */.J.valadorn.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_3_VALADORN'
  }, {
    faceSrc: '',
    markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_4_NO_IMAGE'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_5_GALAMAR'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.saeth.src */.J.saeth.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_6_SAETH'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.valadorn.src */.J.valadorn.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_7_VALADORN'
  }, {
    faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
    markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_8_SOLDIER'
  }],
  buildingList: [{
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_playerEmpty,
    state: _8_heavens_fury_buildingOk,
    x: 0,
    y: 12
  }, {
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_player2,
    state: _8_heavens_fury_buildingOk,
    x: 6,
    y: 9
  }, {
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_playerEmpty,
    state: _8_heavens_fury_buildingOk,
    x: 3,
    y: 16
  }, {
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_playerEmpty,
    state: _8_heavens_fury_buildingOk,
    x: 4,
    y: 11
  }, {
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_player1,
    state: _8_heavens_fury_buildingOk,
    x: 12,
    y: 15
  }, {
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_player1,
    state: _8_heavens_fury_buildingOk,
    x: 8,
    y: 17
  }, {
    buildingType: _8_heavens_fury_castle,
    gamePlayerId: _8_heavens_fury_player1,
    state: _8_heavens_fury_buildingOk,
    x: 8,
    y: 15
  }, {
    buildingType: _8_heavens_fury_castle,
    gamePlayerId: _8_heavens_fury_player2,
    state: _8_heavens_fury_buildingOk,
    x: 3,
    y: 9
  }, {
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_playerEmpty,
    state: _8_heavens_fury_buildingBroken,
    x: 10,
    y: 9
  }, {
    buildingType: _8_heavens_fury_castle,
    gamePlayerId: _8_heavens_fury_player2,
    state: _8_heavens_fury_buildingOk,
    x: 13,
    y: 4
  }, {
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_playerEmpty,
    state: _8_heavens_fury_buildingBroken,
    x: 12,
    y: 6
  }, {
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_player2,
    state: _8_heavens_fury_buildingOk,
    x: 9,
    y: 1
  }, {
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_player2,
    state: _8_heavens_fury_buildingOk,
    x: 12,
    y: 3
  }, {
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_player2,
    state: _8_heavens_fury_buildingOk,
    x: 4,
    y: 3
  }, {
    buildingType: _8_heavens_fury_farm,
    gamePlayerId: _8_heavens_fury_player2,
    state: _8_heavens_fury_buildingOk,
    x: 7,
    y: 4
  }],
  cemetery: [],
  graveList: [],
  landscape: [[_8_heavens_fury_wt0, _8_heavens_fury_st0, _8_heavens_fury_fr0, _8_heavens_fury_st0, _8_heavens_fury_st0, _8_heavens_fury_st0, _8_heavens_fury_hl0, _8_heavens_fury_tr0, _8_heavens_fury_fr1, _8_heavens_fury_st0, _8_heavens_fury_fr0, _8_heavens_fury_fr1, _8_heavens_fury_fr0, _8_heavens_fury_fr1], [_8_heavens_fury_wt0, _8_heavens_fury_fr1, _8_heavens_fury_st0, _8_heavens_fury_st0, _8_heavens_fury_st0, _8_heavens_fury_fr1, _8_heavens_fury_tr0, _8_heavens_fury_tr4, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_st0, _8_heavens_fury_fr0, _8_heavens_fury_fr1, _8_heavens_fury_hl0], [_8_heavens_fury_wt0, _8_heavens_fury_st0, _8_heavens_fury_fr0, _8_heavens_fury_fr1, _8_heavens_fury_st0, _8_heavens_fury_tr0, _8_heavens_fury_tr1, _8_heavens_fury_tr2, _8_heavens_fury_tr3, _8_heavens_fury_tr0, _8_heavens_fury_st0, _8_heavens_fury_hl0, _8_heavens_fury_fr0, _8_heavens_fury_tr1], [_8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_tr0, _8_heavens_fury_st0, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_st0, _8_heavens_fury_hl0, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_tr0], [_8_heavens_fury_wt0, _8_heavens_fury_wt2, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_st0, _8_heavens_fury_fr0, _8_heavens_fury_fr0, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_fr1, _8_heavens_fury_tr0, _8_heavens_fury_rd0], [_8_heavens_fury_wt1, _8_heavens_fury_wt0, _8_heavens_fury_wt2, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_st0, _8_heavens_fury_fr1, _8_heavens_fury_hl0, _8_heavens_fury_tr0, _8_heavens_fury_hl0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0], [_8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_fr0, _8_heavens_fury_tr0, _8_heavens_fury_rd0, _8_heavens_fury_tr0, _8_heavens_fury_fr1], [_8_heavens_fury_st0, _8_heavens_fury_fr1, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt1, _8_heavens_fury_wt0, _8_heavens_fury_wt2, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_fr0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_hl0, _8_heavens_fury_fr1], [_8_heavens_fury_fr0, _8_heavens_fury_fr0, _8_heavens_fury_fr1, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_st0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_tr0, _8_heavens_fury_st0, _8_heavens_fury_fr0], [_8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_st0, _8_heavens_fury_rd0, _8_heavens_fury_tr0, _8_heavens_fury_st0, _8_heavens_fury_tr0, _8_heavens_fury_hl0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_tr0, _8_heavens_fury_fr1, _8_heavens_fury_wt0, _8_heavens_fury_wt0], [_8_heavens_fury_hl0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_tr0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt2], [_8_heavens_fury_st0, _8_heavens_fury_hl0, _8_heavens_fury_tr0, _8_heavens_fury_rd0, _8_heavens_fury_tr0, _8_heavens_fury_fr0, _8_heavens_fury_fr1, _8_heavens_fury_tr0, _8_heavens_fury_st0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0], [_8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_fr1, _8_heavens_fury_rd0, _8_heavens_fury_st0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_br1, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt1, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0], [_8_heavens_fury_fr0, _8_heavens_fury_st0, _8_heavens_fury_tr0, _8_heavens_fury_rd0, _8_heavens_fury_hl0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_br1, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_fr0, _8_heavens_fury_fr0], [_8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_st0, _8_heavens_fury_rd0, _8_heavens_fury_tr0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_rd0, _8_heavens_fury_hl0, _8_heavens_fury_fr0, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_fr1], [_8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_fr0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_tr0, _8_heavens_fury_rd0, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_hl0, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_st0], [_8_heavens_fury_wt2, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_tr0, _8_heavens_fury_tr0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0, _8_heavens_fury_rd0], [_8_heavens_fury_wt0, _8_heavens_fury_wt1, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_wt0, _8_heavens_fury_fr0, _8_heavens_fury_st0, _8_heavens_fury_rd0, _8_heavens_fury_tr0, _8_heavens_fury_fr0, _8_heavens_fury_fr0, _8_heavens_fury_fr1, _8_heavens_fury_st0, _8_heavens_fury_fr0]],
  mapId: 'mission-ae2-heavens-fury',
  mapName: '',
  mapNameLangKey: 'MAP_NAME__AE2_MISSION_8__HEAVENS_FURY',
  mapObjectiveLangKey: 'MAP_NAME__AE2_MISSION_8__HEAVENS_FURY__OBJECTIVE',
  mapType: map_type/* MapTypeEnum.companies */.G.companies,
  storyMarkdownLangKeyList: ['MAP_NAME__AE2_MISSION__STORY_8_1'],
  triggerList: [{
    action: {
      actionType: game_context_type/* GameActionTypeEnum.companiesForceDefeat */.q.companiesForceDefeat,
      addUnitList: [],
      briefing: null,
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.oneHeroLivesOnly */.m.oneHeroLivesOnly,
    dependentTriggerIdList: [],
    forPlayerId: _8_heavens_fury_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'defeat--mission-ae2-heavens-fury',
    turnCount: 0
  }, {
    action: {
      actionType: game_context_type/* GameActionTypeEnum.showBriefing */.q.showBriefing,
      addUnitList: [],
      briefing: {
        briefingList: [{
          faceSrc: ae2_image/* ae2FaceImage.saeth.src */.J.saeth.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_9_SAETH'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_10_GALAMAR'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.saeth.src */.J.saeth.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_11_SAETH'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.soldier.src */.J.soldier.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_12_SOLDIER'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.tamplier.src */.J.tamplier.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_13_TAMPLIER'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.valadorn.src */.J.valadorn.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_14_VALADORN'
        }, {
          faceSrc: ae2_image/* ae2FaceImage.galamar.src */.J.galamar.src,
          markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_15_GALAMAR'
        }, {
          faceSrc: '',
          markdownLangKey: 'MAP_NAME__AE2_MISSION__STORY_8_2'
        }, {
          faceSrc: '',
          markdownLangKey: 'MAP_NAME__AE2_MISSION_8__BRIEFING_16_NO_IMAGE'
        }],
        onBriefingEnd: {
          actionType: game_context_type/* GameActionTypeEnum.companiesForceWin */.q.companiesForceWin,
          addUnitList: [],
          briefing: null,
          buyUnitType: null,
          movePointList: [],
          toPoint: defaultPoint,
          unitCurrentPoint: defaultPoint,
          unitId: ''
        }
      },
      buyUnitType: null,
      movePointList: [],
      toPoint: defaultPoint,
      unitCurrentPoint: defaultPoint,
      unitId: ''
    },
    conditionName: trigger_type/* GameTriggerConditionEnum.allEnemyUnitDied */.m.allEnemyUnitDied,
    dependentTriggerIdList: [],
    forPlayerId: _8_heavens_fury_player1,
    placeList: {
      rectangleList: [],
      unitTypeList: []
    },
    triggerId: 'win--mission-ae2-heavens-fury',
    turnCount: 0
  }],
  unitList: [_8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_wisp),
    unitType: _8_heavens_fury_wisp,
    x: 6,
    y: 16
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_elemental),
    unitType: _8_heavens_fury_elemental,
    x: 5,
    y: 15
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_valadorn),
    unitType: _8_heavens_fury_valadorn,
    x: 6,
    y: 15
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_golem),
    unitType: _8_heavens_fury_golem,
    x: 7,
    y: 15
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_galamar),
    unitType: _8_heavens_fury_galamar,
    x: 8,
    y: 15
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player1,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_dragon),
    unitType: _8_heavens_fury_dragon,
    x: 10,
    y: 14
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_demonLord),
    unitType: _8_heavens_fury_demonLord,
    x: 3,
    y: 9
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_catapult),
    unitType: _8_heavens_fury_catapult,
    x: 2,
    y: 9
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_elemental),
    unitType: _8_heavens_fury_elemental,
    x: 4,
    y: 9
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_archer),
    unitType: _8_heavens_fury_archer,
    x: 6,
    y: 9
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_demonLord),
    unitType: _8_heavens_fury_demonLord,
    x: 13,
    y: 4
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_wisp),
    unitType: _8_heavens_fury_wisp,
    x: 7,
    y: 9
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(_8_heavens_fury_dragon),
    unitType: _8_heavens_fury_dragon,
    x: 12,
    y: 4
  }), _8_heavens_fury_assign(_8_heavens_fury_assign({}, unit_const/* defaultUnitData */.S$), {
    gamePlayerId: _8_heavens_fury_player2,
    unitId: (0,string/* getRandomStringWithPrefix */.Ip)(saethHeavensFury),
    unitType: saethHeavensFury,
    x: 7,
    y: 2
  })]
};
;// CONCATENATED MODULE: ./www/model/map/companies-map-list/companies-ae2-company-list-async.ts


var companies_ae2_company_list_async_assign = undefined && undefined.__assign || function () {
  companies_ae2_company_list_async_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return companies_ae2_company_list_async_assign.apply(this, arguments);
};









var player1Data = companies_ae2_company_list_async_assign({}, defaultCompanyState.playerList[0]);
var player2Data = companies_ae2_company_list_async_assign({}, defaultCompanyState.playerList[1]);
var companiesAe2CompanyListAsync = [{
  companyState: companies_ae2_company_list_async_assign({}, defaultCompanyState),
  map: templeRaiders
}, {
  companyState: companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, defaultCompanyState), {
    playerList: [companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, player1Data), {
      money: 300
    }), companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, player2Data), {
      money: 300
    })]
  }),
  map: toTheRescue
}, {
  companyState: companies_ae2_company_list_async_assign({}, defaultCompanyState),
  map: pathOfShadows
}, {
  companyState: companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, defaultCompanyState), {
    playerList: [companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, player1Data), {
      money: 400
    }), companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, player2Data), {
      money: 400
    })]
  }),
  map: reinforcements
}, {
  companyState: companies_ae2_company_list_async_assign({}, defaultCompanyState),
  map: escortDuty
}, {
  companyState: companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, defaultCompanyState), {
    playerList: [companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, player1Data), {
      money: 600
    }), companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, player2Data), {
      money: 600
    })]
  }),
  map: northbound
}, {
  companyState: companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, defaultCompanyState), {
    playerList: [companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, player1Data), {
      money: 400
    }), companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, player2Data), {
      money: 400
    })]
  }),
  map: rendezvous
}, {
  companyState: companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, defaultCompanyState), {
    playerList: [companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, player1Data), {
      money: 900
    }), companies_ae2_company_list_async_assign(companies_ae2_company_list_async_assign({}, player2Data), {
      money: 600
    })]
  }),
  map: heavensFury
}];

/***/ })

}]);