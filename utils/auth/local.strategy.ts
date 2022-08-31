import { Strategy } from "passport-local";
import UserService from "../../services/UserService";

const LocalStrategy = Strategy;
const userService = new UserService();

export const localStrategy = new LocalStrategy(
	{
		usernameField: "email",
		passwordField: "password",
	},
	(email, password, cb) =>
		userService
			.findOne(email, password)
			.then((user) => {
				if (!user) {
					return cb(null, false, { message: "Incorrect email or password." });
				}

				return cb(null, user, {
					message: "Logged In Successfully",
				});
			})
			.catch((err: Error) => {
				return cb(err);
			})
);
