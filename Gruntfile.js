﻿module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        copy: {
            dev: {
                files: [
                    { expand: true, cwd: 'bower_components/backbone/', src: 'backbone.js', dest: 'src/js/libs' },
                    { expand: true, cwd: 'bower_components/jquery/dist/', src: 'jquery.js', dest: 'src/js/libs' },
                    { expand: true, cwd: 'bower_components/requirejs/', src: 'require.js', dest: 'src/js/libs' },
                    { expand: true, cwd: 'bower_components/underscore/', src: 'underscore.js', dest: 'src/js/libs' },
                    { expand: true, cwd: 'bower_components/bootstrap/dist/css/', src: 'bootstrap.css', dest: 'src/css/libs' }
                ]
            }
        },

        sass: {
            dev: {
                files: {
                    'css/main.css': 'sass/main.scss'
                },
                options: {
                    compass: true,
                    style: 'expanded',
                    debugInfo: true
                }
            },
            prod: {
                files: {
                    'css/main.build.css': 'sass/main.scss'
                },
                options: {
                    compass: true,
                    style: 'compressed'
                }
            }
        }

        //concat: {
        //    options: {
        //        separator: ';'
        //    },
        //    libs: {
        //        src: 'bower_components'
        //    }
        //},

        //watch: {
        //    sass: {
        //        files: ['sass/**/*.sass', 'sass/**/*.scss'],
        //        task: 'sass'
        //    },
        //    js: {
        //        files: ['js/**/*.js', '!js/main.build.js'],
        //        task: 'requirejs'
        //    }
        //}
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-contrib-requirejs');
    //grunt.loadNpmTasks('grunt-contrib-watch');

   //grunt.registerTask('default', ['sass', 'requirejs']);
}