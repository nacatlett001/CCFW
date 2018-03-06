/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ccfw.predictions', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'predictions', {
    url: '/predictions',
    views: {
      "main": {
        controller: 'PredictionsCtrl',
        templateUrl: 'predictions/predictions.tpl.html'
      }
    },
    data:{ pageTitle: 'Predictions' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'PredictionsCtrl', function PredictionsController( $scope, $http, $anchorScroll, $location) {
    var bodyHeight = function(){
        var wHeight = $(window).height();
        var hHeight = $('#header').height();
        var bHeight = wHeight - hHeight - 3;
        $('#underButtons').css({'min-height': bHeight + "px"});
        $('#midOfBody').css({'min-height': bHeight + "px"});
    };
    
    bodyHeight();
            
    $scope.currentPredWeek;
    if($scope.currentWeek === 'Preseason'){
        $scope.currentPredWeek = 1;
    }
    else if($scope.currentWeek === 14){
        $scope.currentPredWeek = 'Bowls';
    }
    else{
        $scope.currentPredWeek = $scope.currentWeek + 1;
    }
    
    $scope.homeTeams;
    $scope.sortBy = "HomeTeam";
    
    $http.get("assets/2017Week" + $scope.currentPredWeek + "P.json")
            .success(function(response){
                $scope.homeTeams = response;
                console.log($scope.homeTeams);
            });
            
    $scope.$watch(function(){ return $scope.currentPredWeek; }, function() {
        $http.get("assets/2017Week" + $scope.currentPredWeek + "P.json")
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

