
import { Router } from 'express';

import {
    insertMovements,
    viewMovements,
    viewMovementsByDate,
    viewDeviceType
} from '../controllers/controller.movements';

const router = Router();

router.post('/insertMovements', insertMovements);
router.get('/viewMovements', viewMovements);
router.post('/viewMovementsByDate', viewMovementsByDate);
router.get('/viewDeviceType', viewDeviceType);

module.exports = router;