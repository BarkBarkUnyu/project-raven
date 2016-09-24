(function() {
  table4A = {};
  $.getJSON("js/data/db/tableSACS/table4A-AlmRange.json",
                function(json) { table4A=json; console.log(json); });

  var appRaven = angular.module('appRaven', []);

  appRaven.controller('ravenAlmCalculator', function($scope, $http) {

    $scope.effectiveAccuracyLevel = 0;
    $scope.skillAccuracyLevel = 0;
    $scope.aimTimeMod = 0;
    $scope.shotAccuracy = 0;
    $scope.targetRange = 0;
    $scope.rangeALM = 0;

    $scope.calculateAlm = function() {
      $scope.shotAccuracy = $scope.skillAccuracyLevel + $scope.aimTimeMod;
      for (var i = 0; i < table4A.length; i++) {
        if ($scope.targetRange === table4A[i].range) {
          $scope.rangeAlm = table4A[i].alm;
        }
      }
      $scope.effectiveAccuracyLevel = $scope.shotAccuracy + $scope.rangeALM;
    }
  });

})();
