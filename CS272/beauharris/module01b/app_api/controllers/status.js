const mongoose = require('mongoose')
const Loc = mongoose.model('Location')
//contains no error handling
//get the current "busy" status of specified location
const locationStatus = (req, res) => {
    Loc
        .findById(req.params.locationid)
        .select('currentStatus')
        .exec((err, location) => {
            const response = {
                    status: location.currentStatus
            }
            return res
                .status(200)
                .json(response);
        });
};
//update current status
const statusLocationUpdate = (req, res) => {
    Loc
        .findById(req.params.locationid)
        .select('currentStatus')
        .exec((err, location) => {
            const thisStatus = req.body.status;
            location.currentStatus = thisStatus;
            location.save();
            return res
                .status(200)
                .json(thisStatus);
        });
};

module.exports = {
    statusLocationUpdate,
    locationStatus
}