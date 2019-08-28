import express from 'express';
import fetch from 'cross-fetch';
import STORE from '../../data/dummy-user';
import { AUTH_TYPES } from '../../util/constants';
import { createHashSignature } from '../../util/helpers';
import axios from 'axios'

const router = express.Router();
const PSS_BASE_URL = process.env.PSS_BASE_URL;
const tenantId = process.env.TENANT_ID;
const secret = process.env.SECRET;

router.post('/', (req, res) => {
  const userExternalId = STORE.users[0].uuid;
	const hashStr = `${tenantId}${userExternalId}${secret}`;
  const signature = createHashSignature(hashStr);
  
	axios({
    method: 'post',
		headers: {
			'Content-Type': 'application/json'
    },
    url: `${PSS_BASE_URL}/gateway/link`,
		data: {
      tenantId,
      userExternalId,
      signature
    }
	})
		.then((response) => {
			console.log(response.data);
			res.json({
        msg: 'Linking successful',
        data: response.data
			});
		})
		.catch((error) => {
			res.status(500).json({
				msg: 'Linking unsuccessful'
      });
		});
});

export default router;
