"use strict";
const { Model } = require("sequelize");
const { hash } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Name is required"
					},
					notEmpty: {
						msg: "Name is required"
					}
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Password is required"
					},
					notEmpty: {
						msg: "Password is required"
					}
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: {
					msg: "Email is already taken"
				},
				validate: {
					notNull: {
						msg: "Email is required"
					},
					notEmpty: {
						msg: "Email is required"
					},
					isEmail: {
						msg: "Invalid email format"
					}
				}
			}
		},
		{
			sequelize,
			modelName: "User",
			hooks: {
				beforeCreate: (user) => (user.password = hash(user.password))
			}
		}
	);
	return User;
};
