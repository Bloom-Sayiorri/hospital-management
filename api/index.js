const app = require("./app");
const connectDb = require("./src/utils/db");

const PORT = process.env.PORT;
const DBURL = process.env.DB_URL;

async function startServer() {
	await connectDb(DBURL);
	app.listen(PORT, () => {
		console.log(`Server running on http://localhost:${PORT}`);
	});
}

startServer();