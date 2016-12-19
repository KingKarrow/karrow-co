karrow_directives.directive('hoverable', function () {
    return {
        restrict: 'A',
        //templateUrl: 'templates/snapDogs.html',
        link: function (scope, elem) {
            //setTimeout(function() {
                elem.on('touchstart', function(e) {
                    $(this).addClass('hover');
                }).mouseenter( function(e) {
                    $(this).addClass('hover');
                }).mouseleave( function(e) {
                    $(this).removeClass('hover');
                }).click( function(e) {
                    $(this).removeClass('hover');
                });
            //}, 0);
        }
    };
});