import { Strategy, ExtractJwt } from "passport-jwt";

const JWTStrategy = Strategy;
const ExtractJWT = ExtractJwt;

export const jwtStrategy = new JWTStrategy(
	{
		secretOrKey: 'TOP_SECRET',
		jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
	},
	async (token, done) => {
		try {
			return done(null, token.user);
		} catch (error) {
			done(error);
		}
	}
);
