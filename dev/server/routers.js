/** 
 * ---------------------------------------------------
 * service router 설정
 * ---------------------------------------------------
 * History
 * ---------------------------------------------------
 * 
 * [v1.0.0] 21.01.11 - 이정훈
 * 
 * ---------------------------------------------------
*/

'use strict';

import express from 'express';
import path from 'path';

const router = express.Router();
const server_root = path.dirname( __dirname );

router.use((req, res, next) => {    
    
    console.log( 'server_root : ' + server_root );
    console.log('접속 기록 적재');

    res.locals.server_root = path.join( server_root, 'views' ) ;

    next();
});

router.get('/', ( req, res, next ) => {
    console.log('첫 페이지');
    // res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.render('html/index', {
        data : ''
    });

});

module.exports = router;