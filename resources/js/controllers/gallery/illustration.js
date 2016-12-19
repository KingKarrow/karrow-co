karrow_controllers.controller('IllustrationCTRL', function ($scope, $state, $rootScope) {
    $scope.getImages('illustration');
    $rootScope.selectedNav = $state.current.name;
});