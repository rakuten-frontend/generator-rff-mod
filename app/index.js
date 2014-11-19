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

  writing: {
    baseFiles: function () {
      var options = _.merge({}, this.options, {skipInstall: true});
      var done = this.async();
      this.invoke('rff', {
        options: options
      }, done);
    },

    overrides: function () {
      this.conflicter.force = true;
      this.template('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    this.installDependencies({
      skipInstall: this.skipInstall,
      skipMessage: this.skipInstallMessage
    });
  }

});

module.exports = Generator;
