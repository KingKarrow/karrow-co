'use strict';

var karrow = angular.module('karrow', ['karrow.directives', 'karrow.controllers', 'ui.router', 'ui.bootstrap'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
        
            $stateProvider
                .state('home', {
                    controller: 'KarrowCTRL',
                    templateUrl: 'index.html',
                    url: '/'
                })
            
                .state('gallery', {
                    controller: 'GalleryCTRL',
                    templateUrl: 'templates/gallery.html',
                    url: 'gallery'
                })

                .state('gallery.illustration', {
                    controller: 'IllustrationCTRL',
                    templateUrl: 'templates/gallery/illustration.html',
                    url: '/illustration'
                })

                .state('gallery.animation', {
                    controller: 'AnimationCTRL',
                    templateUrl: 'templates/gallery/animation.html',
                    url: '/animation'
                })

                .state('about', {
                    controller: 'AboutCTRL',
                    templateUrl: 'templates/about.html',
                    url: 'about'
                });
            
            //$urlRouterProvider.otherwise("/");
            
            //$locationProvider.html5Mode(true);
        
        }
    ]);