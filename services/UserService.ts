import { Request, Response } from "express";
import { Users } from "../app/entity/Users";
import { HttpCode, HttpMessage } from "../app/enum/Http";
import User from "../app/interfaces/User";
import { AppError } from "../app/models/AppError";
import HttpResponse from "../app/models/HttpResponse";
import appDataSource from "../config/db";

export default class UserService {
	private userRepository;
	private user!: User;

	constructor() {
		this.userRepository = appDataSource.getRepository(Users);
	}

	findOneById(id: number) {
		return this.userRepository.findOneBy({
			id: id,
		});
	}

	findOne(email: string, password: string) {
		return this.userRepository.findOne({
			where: { email, password },
		});
	}
}
