module.exports = (err, req, res, next) => {
	switch (err.name) {
		case "SequelizeUniqueConstraintError":
			res.status(400).json({
				message: "Unique constraint error",
				err_messages: [err.message]
			});
			break;
		case "SequelizeValidationError":
			res.status(400).json({
				message: "Validation error",
				err_messages: err.errors.map((detail) => detail.message)
			});
			break;
		case "invalidLogin":
			res.status(400).json({
				message: "Login error",
				err_messages: err.err_messages
			});
			break;
		case "unauthenticated":
			res.status(401).json({
				message: "Authentication error",
				err_messages: err.err_messages
			});
			break;
		case "JsonWebTokenError":
			res.status(401).json({
				message: "Authentication error",
				err_messages: ["Invalid access_token"]
			});
			break;
		default:
			console.log(err.name);
			res.status(500).json({
				message: "Internal server error",
				err_messages: []
			});
	}
};
