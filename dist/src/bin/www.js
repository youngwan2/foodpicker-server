"use strict";
const app = require('../web.js');
const PORT = 3000;
app.listen(PORT, () => {
    console.log("포트:", PORT + ' 가동 중...');
});
