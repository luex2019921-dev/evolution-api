import { Router } from 'express'
import { RehLeadsController } from '../controllers/rehleads.controller'

const router = Router()

router.post('/rehleads/campaign/start', RehLeadsController.startCampaign)
router.post('/rehleads/campaign/pause', RehLeadsController.pauseCampaign)
router.post('/rehleads/campaign/resume', RehLeadsController.resumeCampaign)
router.post('/rehleads/campaign/stop', RehLeadsController.stopCampaign)
router.post('/rehleads/campaign/process', RehLeadsController.processCampaign)

export default router
