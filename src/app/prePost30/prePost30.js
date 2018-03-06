angular.module( 'ccfw.prePost30', [
  'ui.router'  
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'prePost30', {
    url: '/prePost30',
    views: {
      "main": {
        controller: 'PrePost30Ctrl',
        templateUrl: 'prePost30/prePost30.tpl.html'
      }
    },
    data:{ pageTitle: 'PrePost30' }
  });
})
.controller( 'PrePost30Ctrl', function PredictionsController( $scope, $http ) {
    var bodyHeight = function(){
        var wHeight = $(window).height();
        var hHeight = $('#header').height();
        var bHeight = wHeight - hHeight - 3;
        $('#underButtons').css({'min-height': bHeight + "px"});
        $('#midOfBody').css({'min-height': bHeight + "px"});
    };
    
    bodyHeight();
});