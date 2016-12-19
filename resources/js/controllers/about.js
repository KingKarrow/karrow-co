karrow_controllers.controller('AboutCTRL', function ($scope, $state, $rootScope, $log) {
    $rootScope.selectedNav = $state.current.name;
    $rootScope.pageSubTitle = '';
});