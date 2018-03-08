angular.module( 'ccfw.rankings', [
  'ui.router'  
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'rankings', {
    url: '/rankings',
    views: {
      "main": {
        controller: 'RankingsCtrl',
        templateUrl: 'rankings/rankings.tpl.html'
      }
    },
    data:{ pageTitle: 'Rankings' }
  });
})
.controller( 'RankingsCtrl', function PredictionsController( $scope, $http, $location, $anchorScroll ) {
    var bodyHeight = function(){
        var wHeight = $(window).height();
        var hHeight = $('#header').height();
        var bHeight = wHeight - hHeight - 3;
        $('#underButtons').css({'min-height': bHeight + "px"});
        $('#midOfBody').css({'min-height': bHeight + "px"});
    };
    
    bodyHeight();
    
    $scope.currentRankWeek;
    $scope.currentWeek;
    $scope.ranks;
    
    $scope.$watch(function(){ return $scope.currentRankWeek; }, function() {
        $http.get("assets/2017Week" + $scope.currentRankWeek + "R.json").then(
            function(response){
                $scope.ranks = response.data;
            },
            function(error){
                console.log("Failed to retrieve 2017Week" + $scope.currentRankWeek + "R.json");
            });
    });
    
    $http.get("assets/currentWeek.json").then(
        function(response){
            $scope.currentWeek = response.data.currentWeek;
            $scope.currentRankWeek = $scope.currentWeek;
        },
        function(error){
            console.log("Failed to retrieve currentWeek.json");
        });
    
    $scope.gotoTop = function(nextChoice){
        $scope.currentRankWeek = nextChoice;
        
        $location.hash('predHeader');
        $anchorScroll();
    }; 
});