import express from 'express';
import { createApt, getapt, createAptDetails, getAPTDetailsById ,aptsCount} from '../controllers/aptController.js';


const router = express.Router();

router.get('/create',createApt );
router.get('/',getapt );
router.get('/createaptdetails', createAptDetails)
router.get('/details/:id', getAPTDetailsById)
router.get('/aptscount', aptsCount);

export default router;