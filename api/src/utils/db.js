const mongoose = require("mongoose");

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function connectDb(dbUrl) {
	if (cached.conn) {
		console.log("DB already connected!")
		return cached.conn;
	}

	if (!cached.promise) {
		cached.promise = mongoose
			.connect(dbUrl, {
				retryWrites: true,
				w: "majority",
				serverSelectionTimeoutMS: 5000,
			})
			.then((mongooseInstance) => {
				console.log("✅ MongoDB connected successfully!");
				return mongooseInstance;
			});
	}

	cached.conn = await cached.promise;
	return cached.conn;
	
}

module.exports = connectDb;

// if (mongoose.connection.readyState === 1) {
// 	console.log("Already connected to MongoDB");
// 	return;
// }
// try {
// 	await mongoose.connect(dbUrl, {
// 		retryWrites: true,
// 		w: "majority",
// 		serverSelectionTimeoutMS: 5000,
// 	});
// 	console.log("Connected to MongoDB!!!");
// } catch (error) {
// 	console.log("MongoDB connection failed", error);

// }