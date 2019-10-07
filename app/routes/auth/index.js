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
const PSS_BASE_URL = process.env.PSS_BASE_URL;
const tenantId = process.env.TENANT_ID;
const secret = process.env.SECRET;

router.post('/', (req, res) => {
  // const userExternalId = STORE.users[0].uuid;
  const userExternalId = req.query.userExternalId || null;
  const authParams = {
    guiText: 'Do you okay this transaction',
    guiHeader: 'Authorization requested'
  };
  const type = AUTH_TYPES.OK
  const hashStr = `${tenantId}${userExternalId}${authParams.guiHeader}${authParams.guiText}${type}${secret}`;
  const signature = createHashSignature(hashStr);
  console.log(signature);

  axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      url: `${PSS_BASE_URL}/gateway/auth`,
      data: {
        tenantId,
        userExternalId,
        type,
        authParams,
        signature
      }
    })
    .then((response) => {
      res.json({
        //msg: 'Authentication successful',
        data: response.data
      });
    })
    .catch((error) => {
      res.status(500).json({
        msg: 'Authentication unsuccessful',
        data: error.response.data
      });
    });

})

export default router