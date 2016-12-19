karrow_controllers.controller('KarrowCTRL', function ($scope, $state, $rootScope, $log) {
    $state.go('gallery.illustration');
    
    $rootScope.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    
    $rootScope.invertedColors = false;
    
    $rootScope.invertColors = function () {
        $rootScope.invertedColors = !$rootScope.invertedColors;
    };
});