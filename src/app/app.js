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

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $http ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | CCFW' ;
    }
  });
  
  $scope.preInfo;
  $http.get("assets/preInfo.json").success(function(response){
        $scope.preInfo = response;
  });
});

