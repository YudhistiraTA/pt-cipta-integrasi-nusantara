const User = require("../models");
module.exports = class UserController {
	static async register(req, res, next) {
		try {
			const { name, email, password } = req.body;
			const { password_hashed, ...data } = await User.create({name, email, password});
            res.status(201).json(data);
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
