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
            
    $scope.currentPredWeek = 1;

    $scope.homeTeams;
    $scope.sortBy = "HomeTeam";
    
    $http.get("assets/archive/2015Week" + $scope.currentPredWeek + "P.json")
            .success(function(response){
                $scope.homeTeams = response;
                console.log($scope.homeTeams);
            });
            
    $scope.$watch(function(){ return $scope.currentPredWeek; }, function() {
        $http.get("assets/archive/2015Week" + $scope.currentPredWeek + "P.json")
            .success(function(response) {
                $scope.homeTeams = response;
                console.log($scope.homeTeams);
            });
    });
    
    $scope.gotoTop = function(nextChoice){
        $scope.currentPredWeek = nextChoice;
        
        $location.hash('predHeader');
        $anchorScroll();
    }; 
    
});

