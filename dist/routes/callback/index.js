"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _dummyUser = _interopRequireDefault(require("../../data/dummy-user"));

var _constants = require("../../util/constants");

var _helpers = require("../../util/helpers");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  var feedback = req.body || null;
  res.json({
    data: feedback
  });
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9yb3V0ZXMvY2FsbGJhY2svaW5kZXguanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsInJlcSIsInJlcyIsImZlZWRiYWNrIiwiYm9keSIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBR0E7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG9CQUFRQyxNQUFSLEVBQWY7O0FBRUFGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLEdBQVgsRUFBZ0IsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDN0IsTUFBTUMsUUFBUSxHQUFHRixHQUFHLENBQUNHLElBQUosSUFBWSxJQUE3QjtBQUVBRixFQUFBQSxHQUFHLENBQUNHLElBQUosQ0FBUztBQUNOQyxJQUFBQSxJQUFJLEVBQUVIO0FBREEsR0FBVDtBQUdBLENBTkQ7ZUFRZU4sTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgU1RPUkUgZnJvbSAnLi4vLi4vZGF0YS9kdW1teS11c2VyJztcclxuaW1wb3J0IHtcclxuICBBVVRIX1RZUEVTXHJcbn0gZnJvbSAnLi4vLi4vdXRpbC9jb25zdGFudHMnO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUhhc2hTaWduYXR1cmVcclxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xyXG4gY29uc3QgZmVlZGJhY2sgPSByZXEuYm9keSB8fCBudWxsO1xyXG5cclxuIHJlcy5qc29uKHtcclxuICAgIGRhdGE6IGZlZWRiYWNrICBcclxuIH0pXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIiXX0=