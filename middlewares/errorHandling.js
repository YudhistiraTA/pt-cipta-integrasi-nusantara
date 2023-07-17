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
		default:
			console.log(err.name);
			res.status(500).json({
				message: "Internal server error",
				err_messages: []
			});
	}
};
