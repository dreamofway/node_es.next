/** 
 * ---------------------------------------------------
 * server start
 * ---------------------------------------------------
 * History
 * ---------------------------------------------------
 * 
 * [v1.0.0] 21.01.13 - 이정훈
 * 
 * ---------------------------------------------------
*/
'use strict';

var _express = _interopRequireDefault(require("express"));

var _expressFormidable = _interopRequireDefault(require("express-formidable"));

var _routers = _interopRequireDefault(require("./server/routers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('port', process.env.PORT || 3002);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
app.use(_express["default"]["static"](__dirname + '/views'));
app.use((0, _expressFormidable["default"])());
app.use('/', function (req, res, next) {
  console.log(app.get('views'));
  next();
});
app.use('/', _routers["default"]);