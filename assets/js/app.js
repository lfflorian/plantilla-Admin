
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "dashboard.html"
    })
    .when("/ui", {
        templateUrl : "ui.html"
    })
    .when("/tab-panel", {
        templateUrl : "tab-panel.html"
    })
    .when("/chart", {
        templateUrl : "chart.html"
    })
    .when("/table", {
        templateUrl : "table.html"
    })
    .when("/form", {
        templateUrl : "form.html"
    })
    .when("/blank", {
        templateUrl : "blank.html"
    })
    .when("/otroLink", {
        templateUrl : "second-page.html"
    });
});

app.controller('menu', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };    
});


