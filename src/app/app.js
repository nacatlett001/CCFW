angular.module( 'ccfw', [
  'templates-app',
  'templates-common',
  'ccfw.home',
  'ccfw.predictions',
  'ccfw.preseason',
  'ccfw.preRankings',
  'ccfw.prePost30',
  'ccfw.prePostConf',
  'ccfw.rankings',
  'ccfw.records',
  'ccfw.archive2015Pred',
  'ccfw.archive2015Ranks',
  'ccfw.archive2016Pred',
  'ccfw.archive2016Ranks',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $http, $transitions ) {
  $transitions.onSuccess({}, function($transition){
        if(angular.isDefined($transition.$to().data.pageTitle)){
            $scope.pageTitle = $transition.$to().data.pageTitle + " | CCFW";
        }
  });
  
  $scope.preInfo;
  $http.get("assets/preInfo.json").then(
    function(response){
      $scope.preInfo = response.data;
    }, 
    function(error){
      console.log("Failed to retrieve preInfo.json");
    });
});

