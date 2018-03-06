angular.module( 'ccfw.preseason', [
  'ui.router'  
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'preseason', {
    url: '/preseason',
    views: {
      "main": {
        controller: 'PreseasonCtrl',
        templateUrl: 'preseason/preseason.tpl.html'
      }
    },
    data:{ pageTitle: 'Preseason' }
  });
})
.controller( 'PreseasonCtrl', function PredictionsController( $scope, $http ) {
    var bodyHeight = function(){
        var wHeight = $(window).height();
        var hHeight = $('#header').height();
        var bHeight = wHeight - hHeight - 3;
        $('#underButtons').css({'min-height': bHeight + "px"});
        $('#midOfBody').css({'min-height': bHeight + "px"});
    };
    
    bodyHeight();
});