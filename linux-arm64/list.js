
var soljsonSources = [
  "solc-linux-arm64-v0.8.31+commit.fd3a2265"
];
var soljsonReleases = {
  "0.8.31": "solc-linux-arm64-v0.8.31+commit.fd3a2265"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
