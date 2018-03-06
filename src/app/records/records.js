angular.module( 'ccfw.records', [
  'ui.router'  
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'records', {
    url: '/records',
    views: {
      "main": {
        controller: 'RecordsCtrl',
        templateUrl: 'records/records.tpl.html'
      }
    },
    data:{ pageTitle: 'Records' }
  });
})
.controller( 'RecordsCtrl', function PredictionsController( $scope, $http, $location, $anchorScroll) {
    var bodyHeight = function(){
        var wHeight = $(window).height();
        var hHeight = $('#header').height();
        var bHeight = wHeight - hHeight - 3;
        $('#underButtons').css({'min-height': bHeight + "px"});
        $('#midOfBody').css({'min-height': bHeight + "px"});
    };
    
    bodyHeight();
    
    $scope.currentYearTotal;
    $scope.weeklys;
    $scope.pastYears;
            
    $http.get("assets/records.json")
    .success(function(response){
        $scope.currentYearTotal = response.currentYear[0];
        $scope.weeklys = response.currentYear[1];
        $scope.pastYears = response.pastYears;
    });
    
    $scope.gotoWeekly = function(){
        $location.hash("weekly");
        $anchorScroll();
    };
    
    $scope.gotoPast = function(){
        $location.hash("past");
        $anchorScroll();
    };
});