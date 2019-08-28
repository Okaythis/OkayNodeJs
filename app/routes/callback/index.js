import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
 const feedback = req.body || null;
 console.log(feedback);
 res.json({
    data: feedback  
 })
})

export default router