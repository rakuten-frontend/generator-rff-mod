'use strict';

var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({

  writing: function () {
    this.template('jshintrc', '.jshintrc');
  }

});

module.exports = Generator;
