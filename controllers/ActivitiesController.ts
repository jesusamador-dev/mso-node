
import { Request, Response } from "express";
import { Activities } from "../app/entity/Activity";
import appDataSource from "../config/db";

export default class ActivitiesController {
  
  private activitesRepository;

  constructor() {
    this.activitesRepository = appDataSource.getRepository(Activities);
  }

  getById(_req: Request, res: Response) {
    let response; 
    try {
      response = this.activitesRepository.findBy({id: 1});
      console.log("Holaaaaaaaaaaaaa!")
    } catch (err) {
      console.log(err);
    }
    return res.send(response);
  }
}