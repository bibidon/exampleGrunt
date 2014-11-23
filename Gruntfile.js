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
        },

        coffee: {
            dev: {
                expand: true,
                cwd: 'coffee',
                src: ['*.coffee'],
                dest: 'js',
                ext: '.js'
            },
            options: {
                sourceMap: true
            }
        },

        requirejs: {
            prod: {
                options: {
                    baseUrl: 'js',
                    mainConfigFile: 'js/main.js',
                    name: 'main',
                    out: 'js/main.build.js',
                    preserveLicenseComments: false
                }
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '_img',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: 'img'
                }]
            }
        },

        watch: {
            sass: {
                files: ['sass/**/*.sass', 'sass/**/*.scss'],
                tasks: 'sass'
            },
            coffee: {
                files: 'coffee/**/*.coffee',
                tasks: 'coffee'
            },
            js: {
                files: ['js/**/*.js', '!js/main.build.js'],
                tasks: 'requirejs'
            },
            img: {
                files: ['_img/**/*.jpg', '_img/**/*.png'],
                tasks: 'imagemin'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['sass', 'coffee', 'requirejs']);
};
