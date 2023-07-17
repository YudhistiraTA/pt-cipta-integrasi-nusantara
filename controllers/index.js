const { User } = require("../models");
module.exports = class UserController {
	static async register(req, res, next) {
		try {
			const { name, email, password } = req.body;
			const data = await User.create({
				name,
				email,
				password
			});
			res.status(201).json({
				message: "success",
				data: {
					id: data.id,
					name: data.name,
					email: data.email
				}
			});
		} catch (error) {
			next(error);
		}
	}
	static async login(req, res, next) {
		try {
			// placeholder
		} catch (error) {
			next(error);
		}
	}
	static async detail(req, res, next) {
		try {
			// placeholder
		} catch (error) {
			next(error);
		}
	}
};
