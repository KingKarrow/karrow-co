karrow_directives.directive('snapDogs', function ($timeout, $rootScope) {
    return {
        restrict: 'AC',
        templateUrl: 'templates/snapDogs.html',
        link: function () {
            
            $timeout(function () {

                var svgdog1 = Snap(".svg.dog1"),
                    svgdog2 = Snap(".svg.dog2");

                Snap.load("resources/img/dog1.svg", function (f) {
                    var shad = svgdog1.filter(Snap.filter.shadow(4, 8, 4)),
                        g = f.select("g").attr({
                            filter: shad
                        });
                    svgdog1.append(g);
                });

                Snap.load("resources/img/dog2.svg", function (f) {
                    var shad = svgdog2.filter(Snap.filter.shadow(4, 8, 4)),
                        g = f.select("g").attr({
                            filter: shad,
                            width: '100%'
                        });
                    svgdog2.append(g);
                });

                //setTimeout(function () {
                    $('.half').addClass('trans-active');
                //});

                /*$('.svgDogs').click(function () {
                    if (!$(".half").hasClass("outro")) {
                        $(".half").addClass('outro');
                        $(".header-bar").addClass("open");
                    } else {
                        $(".half").removeClass('outro');
                        $(".header-bar").removeClass("open");
                    }
                });*/

            });
            
        }
    };
});