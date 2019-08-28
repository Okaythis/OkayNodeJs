import express from 'express';
import STORE from '../../data/dummy-user';
import {
  AUTH_TYPES
} from '../../util/constants';
import {
  createHashSignature
} from '../../util/helpers';
import axios from 'axios'

const router = express.Router();

router.post('/', (req, res) => {
 const feedback = req.body || null;
 console.log(feedback);
 res.json({
    data: feedback  
 })
})

export default router