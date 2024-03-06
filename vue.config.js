const {merge} = require('webpack-merge');
const mode = process.env.NODE_ENV || 'development';
const common = require('./config/config.base');
const configDev = require('./config/config.dev');
const configProd = require('./config/config.prod');

const config = () => {
    switch (String(mode)) {
        case "production":
            return merge(common, configProd);
        case "development":
            return merge(common, configDev);
    
        default:
            throw new Error(`Trying to use an unknown mode, ${mode}`);
    }
}
module.exports = config();
