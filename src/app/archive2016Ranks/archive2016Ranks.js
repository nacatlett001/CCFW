angular.module( 'ccfw.archive2016Ranks', [
  'ui.router'  
]) 
.config(function config( $stateProvider ) {
  $stateProvider.state( 'archive2016Ranks', {
    url: '/archive2016Ranks',
    views: {
      "main": {
        controller: 'archive2016RanksCtrl',
        templateUrl: 'archive2016Ranks/archive2016Ranks.tpl.html'
      }
    },
    data:{ pageTitle: 'Rankings from 2016' }
  });
})
.controller( 'archive2016RanksCtrl', function Archive2016RanksController( $scope, $http, $location, $anchorScroll ) {
    var bodyHeight = function(){
        var wHeight = $(window).height();
        var hHeight = $('#header').height();
        var bHeight = wHeight - hHeight - 3;
        $('#underButtons').css({'min-height': bHeight + "px"});
        $('#midOfBody').css({'min-height': bHeight + "px"});
    };
    
    bodyHeight();
    
    $scope.currentRankWeek;
    $scope.ranks;
            
    $scope.$watch(function(){ return $scope.currentRankWeek; }, function() {
        $http.get("assets/archive/2016Week" + $scope.currentRankWeek + "R.json").then(
            function(response){
                $scope.ranks = response.data;
            },
            function(error){
                console.log("Failed to retrieve 2016Week" + $scope.currentRankWeek + "R.json");
            });
    });
    
    $scope.currentRankWeek = "Preseason";
    
    $scope.gotoTop = function(nextChoice){
        $scope.currentRankWeek = nextChoice;
        
        $location.hash('predHeader');
        $anchorScroll();
    }; 
});