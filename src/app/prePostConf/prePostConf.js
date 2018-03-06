angular.module( 'ccfw.prePostConf', [
  'ui.router'  
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'prePostConf', {
    url: '/prePostConf',
    views: {
      "main": {
        controller: 'PrePostConfCtrl',
        templateUrl: 'prePostConf/prePostConf.tpl.html'
      }
    },
    data:{ pageTitle: 'PrePostConf' }
  });
})
.controller( 'PrePostConfCtrl', function PredictionsController( $scope, $http ) {
    var bodyHeight = function(){
        var wHeight = $(window).height();
        var hHeight = $('#header').height();
        var bHeight = wHeight - hHeight - 3;
        $('#underButtons').css({'min-height': bHeight + "px"});
        $('#midOfBody').css({'min-height': bHeight + "px"});
    };
    
    bodyHeight();
});