angular.module( 'ccfw.archive2015Pred', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'archive2015Pred', {
    url: '/archive2015Pred',
    views: {
      "main": {
        controller: 'archive2015PredCtrl',
        templateUrl: 'archive2015Pred/archive2015Pred.tpl.html'
      }
    },
    data:{ pageTitle: 'Predictions from 2015' }
  });
})
.controller( 'archive2015PredCtrl', function Archive2015PredController( $scope, $http, $anchorScroll, $location) {
    var bodyHeight = function(){
        var wHeight = $(window).height();
        var hHeight = $('#header').height();
        var bHeight = wHeight - hHeight - 3;
        $('#underButtons').css({'min-height': bHeight + "px"});
        $('#midOfBody').css({'min-height': bHeight + "px"});
    };
    
    bodyHeight();
            
    $scope.currentPredWeek;
    $scope.homeTeams;
    $scope.sortBy = "HomeTeam";
            
    $scope.$watch(function(){ return $scope.currentPredWeek; }, function() {
        $http.get("assets/archive/2015Week" + $scope.currentPredWeek + "P.json").then(
            function(response){
                $scope.homeTeams = response.data;
            },
            function(error){
                console.log("Failed to retrieve 2015Week" + $scope.currentPredWeek + "P.json");
            });
    });
    
    $scope.currentPredWeek = 1;
    
    $scope.gotoTop = function(nextChoice){
        $scope.currentPredWeek = nextChoice;
        
        $location.hash('predHeader');
        $anchorScroll();
    }; 
    
});

