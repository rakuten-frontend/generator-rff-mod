'use strict';

var yeoman = require('yeoman-generator');
var _ = require('lodash');

var Generator = yeoman.generators.Base.extend({

  initializing: function () {
    // jscs:disable requireDotNotation
    this.skipInstall = this.options['skip-install'] || this.options['s'] || false;
    this.skipInstallMessage = this.options['skip-install-message'] || false;
    // jscs:enable requireDotNotation
  },

  writing: function () {
    var options = _.merge({}, this.options, {skipInstall: true});
    this.composeWith('rff',
      {
        options: options
      },
      {
        local: require.resolve('generator-rff')
      }
    );
    this.composeWith('rff-mod:overrides',
      {
        options: {
          force: true
        }
      },
      {
        local: require.resolve('../overrides')
      }
    );
  },

  end: function () {
    this.installDependencies({
      skipInstall: this.skipInstall,
      skipMessage: this.skipInstallMessage
    });
  }

});

module.exports = Generator;
