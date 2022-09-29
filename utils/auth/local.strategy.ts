import { Strategy } from "passport-local";
import User from "../../app/interfaces/User";
import UserService from "../../services/UserService";

const LocalStrategy = Strategy;
const userService = new UserService();

export const localStrategy = new LocalStrategy(
	{
		usernameField: "email",
		passwordField: "password",
		session: false
	},
	async (email, password, done) => {
		try {
			const user = await userService.findOne(email);
			if (!user) {
				return done(null, false, { httpCode: 404, message: 'El usuario no existe' });
			}
			const validate = await userService.isValidPassword(password, user.password);
			if (!validate) {
				return done(null, false, { httpCode: 401, message: 'Contraseña incorrecta' });
			}
			const data = { _id: user.id, email: user.email, name: user.name }
			return done(null, data, { message: 'Logged' });
		} catch (e) {
			return done(e);
		}
	}
);
