if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
    return;
}
module.exports = require('./dev');