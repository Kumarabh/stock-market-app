const express = require('express');
const {
    getJob,
    getJobs, 
    createJob,
    updateJob,
    deleteJob
} = require('../controllers/job')

const router = express.Router();

router
.route('/')
.get(getJobs)
.post(createJob);

router
.route('/:id')
.get(getJob)
.put(updateJob)
.delete(deleteJob);

module.exports = router;