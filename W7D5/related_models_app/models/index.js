// This is requiring in the connection that's linking to my Mongo Atlas
// require('../config/db.connection')

module.exports = {
    Singer: require('./Singer'),
    Song: require('./Song')
}