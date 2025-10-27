const { withAndroidManifest } = require('@expo/config-plugins');

const withNetworkSecurityConfig = (config) => {
  return withAndroidManifest(config, (config) => {
    const { manifest } = config.modResults;
    
    // Add networkSecurityConfig to application tag
    if (manifest.application?.[0]?.$) {
      manifest.application[0].$['android:networkSecurityConfig'] = '@xml/network_security_config';
    }
    
    return config;
  });
};

module.exports = withNetworkSecurityConfig;