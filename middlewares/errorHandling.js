module.exports = (err, req, res) => {
	switch (err.name) {
		default:
            console.log(err);
			res.status(500).json({ message: "Internal server error" });
	}
};
