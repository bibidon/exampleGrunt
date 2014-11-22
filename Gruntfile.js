module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        sass: {
            dev: {
                files: {
                    'css/main.css': 'sass/main.sass'
                },
                options: {
                    compass: true,
                    style: 'expanded',
                    debugInfo: true
                }
            },
            prod: {
                files: {
                    'css/main.build.css': 'sass/main.sass'
                },
                options: {
                    compass: true,
                    style: 'compressed'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};
