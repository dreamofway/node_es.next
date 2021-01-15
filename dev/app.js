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

import express from 'express';
import formidableMiddleware from 'express-formidable';
import routers from './server/routers';

const app = express();

app.set('port', process.env.PORT || 3002);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});

app.use(express.static(__dirname + '/views'));
app.use(formidableMiddleware());
app.use('/', (req, res, next) => {
    console.log( app.get('views')  );
    next();
});
app.use('/', routers);