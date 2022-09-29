import { Users } from "../app/entity/Users";
import appDataSource from "../config/db";

export default class UserService {
	private userRepository;

	constructor() {
		this.userRepository = appDataSource.getRepository(Users);
	}

	findOneById(id: number) {
		return this.userRepository.findOneBy({
			id: id,
		});
	}

	findOne(email: string) {
		return this.userRepository.findOneBy({
			email: email
		});
	}

	isValidPassword(password: string, passwordLocal: string) {
		return password == passwordLocal;
	}
}
