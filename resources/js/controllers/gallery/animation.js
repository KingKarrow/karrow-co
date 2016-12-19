karrow_controllers.controller('AnimationCTRL', function ($scope, $state, $rootScope) {
    $scope.getImages('animation');
    $scope.getVideos();
    $rootScope.selectedNav = $state.current.name;
});