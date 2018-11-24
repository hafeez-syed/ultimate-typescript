const express = require('express');
const app = express();
const port = 3000;

app.use('/static', express.static('assets'));

app.listen(port, function () {
	console.log(`Server listening on port ${port}`);
});

