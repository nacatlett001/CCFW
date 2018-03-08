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
            
    $http.get("assets/records.json").then(
        function(response){
            $scope.currentYearTotal = response.data.currentYear[0];
            $scope.weeklys = response.data.currentYear[1];
            $scope.pastYears = response.data.pastYears;
        },
        function(error){
            console.log("Failed to retrieve records.json");
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