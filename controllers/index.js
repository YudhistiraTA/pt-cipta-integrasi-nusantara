const { compare } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
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
			const { email, password } = req.body;
			if (!email || !password)
				throw {
					name: "invalidLogin",
					err_messages: ["All fields are required"]
				};
			const foundData = await User.findOne({ where: { email } });
			if (!foundData)
				throw {
					name: "invalidLogin",
					err_messages: ["Email not registered"]
				};
			if (!compare(password, foundData.password))
				throw {
					name: "invalidLogin",
					err_messages: ["Invalid password"]
				};
			res.status(200).json({
				message: "Login success",
				access_token: generateToken({
					id: foundData.id
				})
			});
		} catch (error) {
			next(error);
		}
	}
	static async detail(req, res, next) {
		try {
			res.status(200).json(req.userData);
		} catch (error) {
			next(error);
		}
	}
};
