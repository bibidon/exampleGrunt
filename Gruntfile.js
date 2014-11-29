module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({


        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: false,
                eqnull: true,
                browser: true,
            },
            src: ['src/js/**/*.js', '!src/js/libs/*.js']
        },


        copy: {
            dev: {
                files: [
                    { expand: true, cwd: 'bower_components/backbone/', src: 'backbone.js', dest: 'src/js/libs/' },
                    { expand: true, cwd: 'bower_components/jquery/dist/', src: 'jquery.js', dest: 'src/js/libs/' },
                    { expand: true, cwd: 'bower_components/requirejs/', src: 'require.js', dest: 'build/libs/' },
                    { expand: true, cwd: 'bower_components/underscore/', src: 'underscore.js', dest: 'src/js/libs/' },
                    { expand: true, cwd: 'bower_components/bootstrap/dist/css/', src: 'bootstrap.min.css', dest: 'build/css/' },
                    { expand: true, cwd: 'bower_components/bootstrap/dist/', src: 'fonts/*', dest: 'build/' }
                ]
            }
        },

        sass: {
            dev: {
                files: {
                    'src/css/main.css': 'src/sass/main.scss'
                },
                options: {
                    compass: true,
                    style: 'expanded',
                    debugInfo: true
                }
            },
            prod: {
                files: {
                    'build/css/main.build.css': 'src/sass/main.scss',
                },
                options: {
                    compass: true,
                    style: 'compressed'
                }
            }
        },

        requirejs: {
            build: {
                options: {
                    baseUrl: 'src/js',
                    mainConfigFile: "src/js/main.js",
                    name: 'main',
                    out: 'build/main.build.js',
                    preserveLicensecomments: false
                }
            }
        },

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
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    //grunt.registerTask('default', ['sass', 'requirejs']);
}