const express = require('express');
const serveIndex = require('serve-index');

var app = express();

app.use(express.static('./dist'));
app.use(serveIndex('./dist', {
	icons: true
}));

app.use('/dany/en/home', (req, res, next) => {
	res.sendFile('./dist/dany/en/index.html', {root: __dirname});
});

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

const port = 8000;
app.listen(port, function () {
	console.log(`server started on port ${port}`);
});