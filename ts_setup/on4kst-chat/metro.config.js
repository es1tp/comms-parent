const { getDefaultConfig } = require('expo/metro-config');
const makeResolver = require('@rnx-kit/metro-resolver-symlinks');

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = makeResolver();

module.exports = config;