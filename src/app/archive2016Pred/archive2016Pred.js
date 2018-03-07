angular.module( 'ccfw.archive2016Pred', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'archive2016Pred', {
    url: '/archive2016Pred',
    views: {
      "main": {
        controller: 'archive2016PredCtrl',
        templateUrl: 'archive2016Pred/archive2016Pred.tpl.html'
      }
    },
    data:{ pageTitle: 'Predictions from 2016' }
  });
})
.controller( 'archive2016PredCtrl', function Archive2016PredController( $scope, $http, $anchorScroll, $location) {
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
    
    $http.get("assets/archive/2016Week" + $scope.currentPredWeek + "P.json")
            .success(function(response){
                $scope.homeTeams = response;
            });
            
    $scope.$watch(function(){ return $scope.currentPredWeek; }, function() {
        $http.get("assets/archive/2016Week" + $scope.currentPredWeek + "P.json")
            .success(function(response) {
                $scope.homeTeams = response;
            });
    });
    
    $scope.gotoTop = function(nextChoice){
        $scope.currentPredWeek = nextChoice;
        
        $location.hash('predHeader');
        $anchorScroll();
    }; 
    
});

