const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");
module.exports = async (req, res, next) => {
	try {
		const { access_token } = req.headers;
		if (!access_token)
			throw {
				name: "unauthenticated",
				err_messages: ["access_token not provided"]
			};
		const { id } = verifyToken(access_token);
		if (!id)
			throw {
				name: "unauthenticated",
				err_messages: ["Invalid access_token"]
			};
		const user = await User.findByPk(id, {
			attributes: ["id", "name", "email"]
		});
		if (!user)
			throw {
				name: "unauthenticated",
				err_messages: ["Invalid access_token"]
			};
		req.userData = user;
		next();
	} catch (error) {
		next(error);
	}
};
