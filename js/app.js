var myApp = angular.module('myApp', [
  'ngRoute',
  'specificProductControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginController'
  }).
  when('/specificProductOrServiceAdd', {
    templateUrl: 'partials/specificProductOrServiceAdd.html',
    controller: 'SpecificProductOrServiceAddController'
  }).
  when('/adminPage', {
    templateUrl: 'partials/adminPage.html',
    controller: 'AdminPageController'
  }).
  when('/specificProducts', {
    templateUrl: 'partials/specificProducts.html',
    controller: 'SpecificProductsController'
  }).
  when('/organizations', {
    templateUrl: 'partials/organizations.html',
    controller: 'OrganizationsController'
  }).
  when('/organizationAdd', {
    templateUrl: 'partials/organizationAdd.html',
    controller: 'OrganizationAddController'
  }).
  when('/specificProducts/:itemId', {
    templateUrl: 'partials/specificProductOrServiceDetail.html',
    controller: 'SpecificProductOrServiceDetailController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);