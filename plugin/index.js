const webpack = require('webpack');
const config = require('../webpack.config.js');

module.exports = class CompilerHelperPlugin {
    apply(compiler) {
        webpack(config).run();
    }
};
