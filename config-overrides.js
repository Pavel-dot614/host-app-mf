const { override, addWebpackPlugin } = require('customize-cra');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = override(
  config => {
    config.output.publicPath = 'auto';
    return config;
  },
  addWebpackPlugin(
    new ModuleFederationPlugin({
      name: 'host_app',
      remotes: {
        remote_app: 'remote_app@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: '^19.1.0',
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '^19.1.0',
        },
      },
    }),
  ),
);
