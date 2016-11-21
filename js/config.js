/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/login");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('login', {
            url: "/login",
            templateUrl: "views/login.html",
            controller: 'LoginCtrl'
        })
        .state('index', {
            abstract: true,
            url: "",
            templateUrl: "views/common/content.html",
        })
        .state('index.dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            controller: 'DashboardCtrl'
        })
        .state('index.grupos', {
            url: "/grupos",
            templateUrl: "views/grupos.html",
            controller: 'GruposCtrl'
        })
        .state('index.retos', {
            url: "/retos",
            templateUrl: "views/retos.html",
            controller: 'RetosCtrl'
        })
        .state('index.estudiantes', {
            url: "/estudiantes",
            templateUrl: "views/estudiantes.html",
            controller: 'EstudiantesCtrl'
        })
        .state('index.resultados', {
            url: "/resultados",
            templateUrl: "views/resultados.html",
            controller: 'ResultadosCtrl'
        });
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
