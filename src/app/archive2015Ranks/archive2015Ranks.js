angular.module( 'ccfw.archive2015Ranks', [
  'ui.router'  
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'archive2015Ranks', {
    url: '/archive2015Ranks',
    views: {
      "main": {
        controller: 'archive2015RanksCtrl',
        templateUrl: 'archive2015Ranks/archive2015Ranks.tpl.html'
      }
    },
    data:{ pageTitle: 'Rankings from 2015' }
  });
})
.controller( 'archive2015RanksCtrl', function Archive2015RanksController( $scope, $http, $location, $anchorScroll ) {
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
        $http.get("assets/archive/2015Week" + $scope.currentRankWeek + "R.json").then(
            function(response){
                $scope.ranks = response.data;
            },
            function(error){
                console.log("Failed to retrieve 2015Week" + $scope.currentRankWeek + "R.json");
            });
    });
    
    $scope.currentRankWeek = "Preseason";
    
    $scope.gotoTop = function(nextChoice){
        $scope.currentRankWeek = nextChoice;
        
        $location.hash('predHeader');
        $anchorScroll();
    }; 
});