const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
module.exports = {
	generateToken: (payload) => jwt.sign(payload, JWT_SECRET),
	verifyToken: (token) => jwt.verify(token, JWT_SECRET)
};
