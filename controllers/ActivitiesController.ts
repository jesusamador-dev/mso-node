import { Request, Response } from "express";
import { Activities } from "../app/entity/Activities";
import { HttpCode, HttpMessage } from "../app/enum/Http";
import Activity from "../app/interfaces/Activity";
import { AppError } from "../app/models/AppError";
import HttpResponse from "../app/models/HttpResponse";
import appDataSource from "../config/db";

export default class ActivitiesController {
	private activitesRepository;
	private activity!: Activity;

	constructor() {
		this.activitesRepository = appDataSource.getRepository(Activities);
	}

	async get(_req: Request, res: Response) {
		let httpResponse;
		const data = await this.activitesRepository.find();

		httpResponse = new HttpResponse({ status: HttpMessage.OK, result: data });

		return res.status(HttpCode.OK).json(httpResponse.response());
	}

	async getById(req: Request, res: Response) {
		let httpResponse;
		const { id } = req.params;
		const data = await this.activitesRepository.findBy({ id: Number(id) });
		if (data.length === 0) {
			throw new AppError({
				httpCode: HttpCode.NOT_FOUND,
				message: HttpMessage.NOT_FOUND,
			});
		}

		httpResponse = new HttpResponse({ status: HttpMessage.OK, result: data });

		return res.status(HttpCode.OK).json(httpResponse.response());
	}

	async create(req: Request, res: Response) {
		let response;
		try {
			this.activity = req.body;
			response = await this.activitesRepository.save(this.activity);
		} catch (err) {
			console.log(err);
		}
		return res.json(response);
	}

	async delete(req: Request, res: Response) {
		let response;
		try {
			const { id } = req.params;
			response = await this.activitesRepository.delete({ id: Number(id) });
		} catch (err) {
			return res.status(404).json({ message: "No encontrado" });
		}
		return res.json(response);
	}
}
