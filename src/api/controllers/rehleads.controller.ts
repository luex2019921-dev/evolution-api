import { Request, Response } from 'express'
import { RehLeadsService } from '../services/rehleads.service'

export class RehLeadsController {

  static async startCampaign(req: Request, res: Response) {
    const result = await RehLeadsService.startCampaign(req.body)
    return res.json(result)
  }

  static async pauseCampaign(req: Request, res: Response) {
    const result = await RehLeadsService.pauseCampaign(req.body)
    return res.json(result)
  }

  static async resumeCampaign(req: Request, res: Response) {
    const result = await RehLeadsService.resumeCampaign(req.body)
    return res.json(result)
  }

  static async stopCampaign(req: Request, res: Response) {
    const result = await RehLeadsService.stopCampaign(req.body)
    return res.json(result)
  }

  static async processCampaign(req: Request, res: Response) {
    const result = await RehLeadsService.processCampaign(req.body)
    return res.json(result)
  }

}
