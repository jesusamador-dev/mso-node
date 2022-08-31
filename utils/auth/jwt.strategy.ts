import { Strategy, ExtractJwt } from "passport-jwt";
import UserService from "../../services/UserService";

const JWTStrategy = Strategy;
const ExtractJWT = ExtractJwt;
const userService = new UserService();

export const jwtStrategy = new JWTStrategy(
	{
		jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
		secretOrKey: "your_jwt_secret",
	},
	(jwtPayload, cb) =>
		//find the user in db if needed
		userService
			.findOneById(jwtPayload.id)
			.then((user) => {
				return cb(null, user);
			})
			.catch((err: Error) => {
				return cb(err);
			})
);
