'use strict';
/**
 * @ngdoc overview
 * @name marketApp
 * @description
 * # marketApp
 *
 * Main module of the application.
 */
var app = angular
    .module('resume', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'ngCookies',
        'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$compileProvider',
        function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $compileProvider) {

            $compileProvider.debugInfoEnabled(false);

            $ocLazyLoadProvider.config({
                debug: false,
                events: true,
            });


            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('main', {
                    templateUrl: 'views/template.html',
                    url: '/',
                    controller: 'DetailCtrl',
                    resolve: {
                        loadMyFile: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'resume',
                                files: ['scripts/controllers/detailContoller.js']
                            })
                        },
                        loadScript: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'resume',
                                files: [
                                    'plugins/jquery-rss/dist/jquery.rss.min.js',
                                    'plugins/github-calendar/dist/github-calendar.min.js',
                                    'plugins/github-activity/src/github-activity.js'
                                ]
                            })
                        }
                    }
                });
        }
    ])

    .run(['$rootScope', '$location', '$cookieStore', '$http', '$state', '$stateParams',
        function($rootScope, $location, $cookieStore, $http, $state, $stateParams) {

        }
    ]);
