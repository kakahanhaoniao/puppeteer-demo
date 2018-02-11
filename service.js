var express = require('express');
var PORT = 8888;
var app = express();
const image = require('./module/image');
const Puppr = require('./puppeteer');

app.get('/', async function (req, res) {
	await new Puppr().pages();
	res.end('open a puppeteer page');
});
// 控制台输出图片
app.get('/backimg', () => {
	image.consoleImageString('习近平招手');
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
