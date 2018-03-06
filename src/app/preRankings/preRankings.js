angular.module( 'ccfw.preRankings', [
  'ui.router'  
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'preRankings', {
    url: '/preRankings',
    views: {
      "main": {
        controller: 'PreRankingsCtrl',
        templateUrl: 'preRankings/preRankings.tpl.html'
      }
    },
    data:{ pageTitle: 'PreRankings' }
  });
})
.controller( 'PreRankingsCtrl', function PredictionsController( $scope, $http ) {
    var bodyHeight = function(){
        var wHeight = $(window).height();
        var hHeight = $('#header').height();
        var bHeight = wHeight - hHeight - 3;
        $('#underButtons').css({'min-height': bHeight + "px"});
        $('#midOfBody').css({'min-height': bHeight + "px"});
    };
    
    bodyHeight();
});