const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    jobInfo: {
        designation: String,
        companyName: String,
        Location : String,
        experience: String,
        active: Boolean,
        jobType: {

        fullTime: true,
        fresher: true,
        temporary:true,
        contract: String,
        walkin: String,
        internship: true,
        partTime: true,
        commision: true

        },
        experience: {
            work:Number,
            totalWork: Number,
            developer: Number,
            technology: {
                type: String,
                experience: Number
            }
        },
        city: String,
        state: String,
        educationLevel = {
            level: [Number, 10],
            degree: String 
        }

        
    },
    jobPostDate: '',
    salaryEstimate: '',

  
});

module.exports = mongoose.model('jobSchema', jobSchema);