"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _dummyUser = _interopRequireDefault(require("../../data/dummy-user"));

var _constants = require("../../util/constants");

var _helpers = require("../../util/helpers");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var PSS_BASE_URL = process.env.PSS_BASE_URL;
var tenantId = process.env.TENANT_ID;
var secret = process.env.SECRET;
router.post('/', function (req, res) {
  var userExternalId = _dummyUser["default"].users[0].uuid;
  var hashStr = "".concat(tenantId).concat(userExternalId).concat(secret);
  var signature = (0, _helpers.createHashSignature)(hashStr);
  (0, _axios["default"])({
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url: "".concat(PSS_BASE_URL, "/gateway/link"),
    data: {
      tenantId: tenantId,
      userExternalId: userExternalId,
      signature: signature
    }
  }).then(function (response) {
    console.log(response.data);
    res.json({
      msg: 'Linking successful',
      data: response.data
    });
  })["catch"](function (error) {
    res.status(500).json({
      msg: 'Linking unsuccessful'
    });
  });
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9yb3V0ZXMvbGlua2luZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwiUFNTX0JBU0VfVVJMIiwicHJvY2VzcyIsImVudiIsInRlbmFudElkIiwiVEVOQU5UX0lEIiwic2VjcmV0IiwiU0VDUkVUIiwicG9zdCIsInJlcSIsInJlcyIsInVzZXJFeHRlcm5hbElkIiwiU1RPUkUiLCJ1c2VycyIsInV1aWQiLCJoYXNoU3RyIiwic2lnbmF0dXJlIiwibWV0aG9kIiwiaGVhZGVycyIsInVybCIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsIm1zZyIsImVycm9yIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG9CQUFRQyxNQUFSLEVBQWY7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsWUFBakM7QUFDQSxJQUFNRyxRQUFRLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxTQUE3QjtBQUNBLElBQU1DLE1BQU0sR0FBR0osT0FBTyxDQUFDQyxHQUFSLENBQVlJLE1BQTNCO0FBRUFULE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLEdBQVosRUFBaUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDN0IsTUFBTUMsY0FBYyxHQUFHQyxzQkFBTUMsS0FBTixDQUFZLENBQVosRUFBZUMsSUFBdEM7QUFDRCxNQUFNQyxPQUFPLGFBQU1YLFFBQU4sU0FBaUJPLGNBQWpCLFNBQWtDTCxNQUFsQyxDQUFiO0FBQ0MsTUFBTVUsU0FBUyxHQUFHLGtDQUFvQkQsT0FBcEIsQ0FBbEI7QUFFRCx5QkFBTTtBQUNIRSxJQUFBQSxNQUFNLEVBQUUsTUFETDtBQUVMQyxJQUFBQSxPQUFPLEVBQUU7QUFDUixzQkFBZ0I7QUFEUixLQUZKO0FBS0hDLElBQUFBLEdBQUcsWUFBS2xCLFlBQUwsa0JBTEE7QUFNTG1CLElBQUFBLElBQUksRUFBRTtBQUNGaEIsTUFBQUEsUUFBUSxFQUFSQSxRQURFO0FBRUZPLE1BQUFBLGNBQWMsRUFBZEEsY0FGRTtBQUdGSyxNQUFBQSxTQUFTLEVBQVRBO0FBSEU7QUFORCxHQUFOLEVBWUVLLElBWkYsQ0FZTyxVQUFDQyxRQUFELEVBQWM7QUFDbkJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNGLElBQXJCO0FBQ0FWLElBQUFBLEdBQUcsQ0FBQ2UsSUFBSixDQUFTO0FBQ0pDLE1BQUFBLEdBQUcsRUFBRSxvQkFERDtBQUVKTixNQUFBQSxJQUFJLEVBQUVFLFFBQVEsQ0FBQ0Y7QUFGWCxLQUFUO0FBSUEsR0FsQkYsV0FtQlEsVUFBQ08sS0FBRCxFQUFXO0FBQ2pCakIsSUFBQUEsR0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLENBQXFCO0FBQ3BCQyxNQUFBQSxHQUFHLEVBQUU7QUFEZSxLQUFyQjtBQUdBLEdBdkJGO0FBd0JBLENBN0JEO2VBK0JlNUIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnO1xyXG5pbXBvcnQgU1RPUkUgZnJvbSAnLi4vLi4vZGF0YS9kdW1teS11c2VyJztcclxuaW1wb3J0IHsgQVVUSF9UWVBFUyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgY3JlYXRlSGFzaFNpZ25hdHVyZSB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IFBTU19CQVNFX1VSTCA9IHByb2Nlc3MuZW52LlBTU19CQVNFX1VSTDtcclxuY29uc3QgdGVuYW50SWQgPSBwcm9jZXNzLmVudi5URU5BTlRfSUQ7XHJcbmNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LlNFQ1JFVDtcclxuXHJcbnJvdXRlci5wb3N0KCcvJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgdXNlckV4dGVybmFsSWQgPSBTVE9SRS51c2Vyc1swXS51dWlkO1xyXG5cdGNvbnN0IGhhc2hTdHIgPSBgJHt0ZW5hbnRJZH0ke3VzZXJFeHRlcm5hbElkfSR7c2VjcmV0fWA7XHJcbiAgY29uc3Qgc2lnbmF0dXJlID0gY3JlYXRlSGFzaFNpZ25hdHVyZShoYXNoU3RyKTtcclxuICBcclxuXHRheGlvcyh7XHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSxcclxuICAgIHVybDogYCR7UFNTX0JBU0VfVVJMfS9nYXRld2F5L2xpbmtgLFxyXG5cdFx0ZGF0YToge1xyXG4gICAgICB0ZW5hbnRJZCxcclxuICAgICAgdXNlckV4dGVybmFsSWQsXHJcbiAgICAgIHNpZ25hdHVyZVxyXG4gICAgfVxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdHJlcy5qc29uKHtcclxuICAgICAgICBtc2c6ICdMaW5raW5nIHN1Y2Nlc3NmdWwnLFxyXG4gICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcblx0XHRcdFx0bXNnOiAnTGlua2luZyB1bnN1Y2Nlc3NmdWwnXHJcbiAgICAgIH0pO1xyXG5cdFx0fSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iXX0=