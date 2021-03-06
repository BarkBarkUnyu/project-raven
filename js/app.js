table4A = {};
$.getJSON("js/data/db/tableSACS/table4A-AlmRange.json",
    function(json) {
        table4A = json;
        console.log("table4A loaded!");
    });
table4B = {};
$.getJSON("js/data/db/tableSACS/table4B-AlmStance.json",
    function(json) {
        table4B = json;
        console.log("table4B loaded!");
    });
table4C = {};
$.getJSON("js/data/db/tableSACS/table4C-AlmVisibility.json",
    function(json) {
        table4C = json;
        console.log("table4C loaded!");
    });

var appRaven = angular.module('appRaven', []);

appRaven.controller('ravenAlmCalculator', function($scope, $http) {

    $scope.effectiveAccuracyLevel = 0;
    $scope.skillAccuracyLevel = 0;
    $scope.aimTimeMod = 0;
    $scope.shotAccuracy = 0;
    $scope.targetRange = 0;
    $scope.rangeAlm = 0;
    $scope.shooterStance = 0;
    $scope.stanceAlm = 0;
    $scope.visibilityAlm=0;

    $scope.table4B = table4B;
    $scope.table4C = table4C;

    $scope.calculateAlm = function() {
        $scope.shotAccuracy = $scope.skillAccuracyLevel + $scope.aimTimeMod;
        for (var i = 0; i < table4A.length; i++) {
            if ($scope.targetRange === table4A[i].range) {
              $scope.rangeAlm = table4A[i].alm;
            } else if ($scope.targetRange >= table4A[i].range && $scope.targetRange < table4A[i+1].range) {
              $scope.rangeAlm = table4A[i].alm;
            } else if ($scope.targetRange >= table4A[i].range && $scope.targetRange > table4A[table4A.length-1].range) {
              $scope.rangeAlm = table4A[table4A.length-1].alm;
            }
        }
        $scope.stanceAlm = 0;
        for (var i = 0; i < $scope.selectMultipleAlmShooterStance.length; i++) {
            $scope.stanceAlm = $scope.stanceAlm + parseInt($scope.selectMultipleAlmShooterStance[i]);
        }
        $scope.visibilityAlm = 0;
        for (var i = 0; i < $scope.selectMultipleAlmVisibility.length; i++) {
            $scope.visibilityAlm = $scope.visibilityAlm + parseInt($scope.selectMultipleAlmVisibility[i]);
        }
        $scope.effectiveAccuracyLevel = $scope.shotAccuracy + $scope.rangeAlm + $scope.stanceAlm + $scope.visibilityAlm;
    }
});
