"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHashSignature = createHashSignature;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createHashSignature(hashStr) {
  return _crypto["default"].createHash('sha256').update(hashStr).digest('base64');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC91dGlsL2hlbHBlcnMuanMiXSwibmFtZXMiOlsiY3JlYXRlSGFzaFNpZ25hdHVyZSIsImhhc2hTdHIiLCJjcnlwdG8iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiZGlnZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFTyxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFDM0MsU0FBT0MsbUJBQ05DLFVBRE0sQ0FDSyxRQURMLEVBRU5DLE1BRk0sQ0FFQ0gsT0FGRCxFQUdOSSxNQUhNLENBR0MsUUFIRCxDQUFQO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0bydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIYXNoU2lnbmF0dXJlKGhhc2hTdHIpIHtcclxuICByZXR1cm4gY3J5cHRvXHJcbiAgLmNyZWF0ZUhhc2goJ3NoYTI1NicpXHJcbiAgLnVwZGF0ZShoYXNoU3RyKVxyXG4gIC5kaWdlc3QoJ2Jhc2U2NCcpXHJcbn0iXX0=