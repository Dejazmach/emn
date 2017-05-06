var specificProductControllers = angular.module('specificProductControllers', ['ngAnimate']);

specificProductControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get("http://localhost:8080/marketServerNew/webapi/specificProduct/spva").success(function(data) {
    $scope.specificProducts = data;
    $scope.specificProductOrder = 'specificProductName';
  });
}]);

specificProductControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('datas/data.json').success(function(data) {
    $scope.specificProducts = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.specificProducts.length-1;
    }

    if ($routeParams.itemId < $scope.specificProducts.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

})}]);


specificProductControllers.controller('LoginController', []);
specificProductControllers.controller('SpecificProductOrServiceAddController', []);
specificProductControllers.controller('AdminPageController', []);
specificProductControllers.controller('SpecificProductsController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:8080/marketServerNew/webapi/specificProduct/spva').success(function(data) {
    $scope.specificProducts = data;
    $scope.specificProductOrder = 'specificProductName';
  });
}]);

specificProductControllers.controller('OrganizationsController', ['$scope', '$http', function($scope, $http) {
  $http.get('datas/organizations.json').success(function(data) {
    $scope.organizations = data;
    $scope.organizationOrder = 'organizationMainName';
  });
}]);

specificProductControllers.controller('SpecificProductOrServiceDetailController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('http://localhost:8080/marketServerNew/webapi/specificProduct/spva').success(function(data) {
    $scope.specificProducts = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.specificProducts.length-1;
    }

    if ($routeParams.itemId < $scope.specificProducts.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

specificProductControllers.controller('SpecificProductOrServiceEditController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('http://localhost:8080/marketServerNew/webapi/specificProduct/spva').success(function(data) {
    $scope.specificProducts = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.specificProducts.length-1;
    }

    if ($routeParams.itemId < $scope.specificProducts.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

specificProductControllers.controller('SpecificProductOrServiceAddController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  
  var myApp = this;
  $scope.addSpecificProduct = function(specificProduct) {
      $http.post("http://localhost:8080/marketServerNew/webapi/specificProduct/spa", specificProduct)
        .success(function(data) {
          myApp.specificProduct = data;
        })
  }

  $http.get('datas/specificProducts.json').success(function(data) {
    $scope.specificProducts = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.specificProducts.length-1;
    }

    if ($routeParams.itemId < $scope.specificProducts.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);