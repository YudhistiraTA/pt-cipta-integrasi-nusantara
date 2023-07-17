const bcrypt = require("bcrypt");
module.exports = {
	hash: (payload) => bcrypt.hashSync(payload, 10),
	compare: (string, hash) => bcrypt.compareSync(string, hash)
};
