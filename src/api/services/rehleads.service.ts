export class RehLeadsService {

  static async startCampaign(payload: any) {
    return { success: true, message: 'Campaign started', payload }
  }

  static async pauseCampaign(payload: any) {
    return { success: true, message: 'Campaign paused', payload }
  }

  static async resumeCampaign(payload: any) {
    return { success: true, message: 'Campaign resumed', payload }
  }

  static async stopCampaign(payload: any) {
    return { success: true, message: 'Campaign stopped', payload }
  }

  static async processCampaign(payload: any) {
    return { success: true, message: 'Processing campaign', payload }
  }

}
