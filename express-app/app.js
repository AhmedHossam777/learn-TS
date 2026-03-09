const express = require("express");

const app = express();

app.use(router);

app.listen(3000, () => {
	// connect databse
	console.log("server is running on port 3000");
});
