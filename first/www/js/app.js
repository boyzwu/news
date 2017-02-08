  angular.module('ionicApp', ['ionic','ionicApp.controllers'])

    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
        })
        .state('tabs.toutiao', {
          url: "/toutiao",

          views: {
            'toutiao-tab': {
              templateUrl: "templates/tab-toutiao.html",
            }
          }
        })
        .state('tabs.toutiaoDetail', {
          url: "/toutiaoDetail",
          params:{'url':null,'title':null},
          views: {
            'toutiao-tab': {
              templateUrl: "templates/toutiao-news-detail.html",
            }
          }
        })
        .state('tabs.tiyu', {
          url: "/tiyu",
          views: {
            'tiyu-tab': {
              templateUrl: "templates/tab-tiyu.html",
            }
          }
        })
        .state('shoucang', {
          url: "/shoucang",
          views: {
            'slide_right': {
              templateUrl: "templates/shoucang.html",
            }
          }
        })

      $urlRouterProvider.otherwise("/tab/toutiao");

    })

