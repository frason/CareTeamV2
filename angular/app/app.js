﻿
var app = angular.module('patientsApp', ['ngRoute', 'ui.bootstrap']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/patient-history',
            {
                controller: 'CustomersController',
                templateUrl: 'app/partials/patient-history.html',
                title: 'Patient History'
            })
        .when('/conditions-diagnoses',
            {
                controller: 'ConditionsController',
                templateUrl: 'app/partials/conditions-diagnoses.html',
                title: 'Conditions & Diagnoses'
            })
        .when('/meds-allergies',
            {
                controller: 'MedsController',
                templateUrl: 'app/partials/meds-allergies.html',
                title: 'Meds & Allergies'
            })
        .when('/goals-playlists',
            {
                controller: 'GoalsController',
                templateUrl: 'app/partials/goals-playlists.html',
                title: 'Goals & Playlists'
            })
        .when('/vitals-labs',
            {
                controller: 'VitalsController',
                templateUrl: 'app/partials/vitals-labs.html',
                title: 'Vitals & Labs'
            })
        .when('/assessments',
            {
                controller: 'AssessmentsController',
                templateUrl: 'app/partials/assessments.html',
                title: 'Assessments'
            })
        .when('/procedures-immunizations',
            {
                controller: 'ProceduresController',
                templateUrl: 'app/partials/procedures-immunizations.html',
                title: 'Procedures & Immunizations'
            })
        .when('/docs',
            {
                controller: 'DocsController',
                templateUrl: 'app/partials/docs.html',
                title: 'Docs'
            })
        .when('/customerorders/:customerID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: 'app/partials/customerOrders.html'
            })
        .when('/tasks',
            {
                controller: 'TasksController',
                templateUrl: 'app/partials/tasks.html',
                title: 'Tasks'
            })
        .when('/hotspots',
            {
                controller: 'TasksController',
                templateUrl: 'app/partials/hotspots.html',
                title: 'Today\'s Hotspots'
            })
        .otherwise({ redirectTo: '/patient-history' });
});




