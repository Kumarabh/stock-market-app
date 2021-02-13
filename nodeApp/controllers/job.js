exports.getJobs = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all jobs'})
}

exports.getJob = (req, res, next) => {
    res.status(200).json({ success : true, msg : `Show the job ${req.params.id}`});
}
//for many
exports.createJob = (req, res, next) => {
    res.status(200).json({ success : true, msg :'Create new job '});

}

exports.updateJob = (req, res, next) => {
    res.status(200).json({ success : true, msg : `Update the job ${req.params.id}`});
}
exports.deleteJob = (req, res, next) => {
    res.status(200).json({ success : true, msg : `Delete the job ${req.params.id}`});
}