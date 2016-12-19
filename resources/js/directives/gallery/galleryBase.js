karrow_directives.directive('galleryBase', function ($timeout) {
    return {
        restrict: 'E',
        templateUrl: 'templates/gallery/galleryBase.html',
        link: function (scope, el) {
            var setCenImgCss = function () {
                //$('.image-large .center-image').css('padding-top', '0');
                
                var cenImgCon = cenImg.parent(),
                    cenImgConH = cenImgCon.height(),
                    cenImgConW = cenImgCon.width(),
                    cenImgRatio = targetImage.width / targetImage.height,
                    pTop = 0;
                
                if(cenImgRatio > (cenImgConW / cenImgConH)) {
                    var cenImgH = cenImgConW / (cenImgRatio),
                        pTop = (cenImgConH - cenImgH) / 2;
                }
                cenImg.css({'padding-top': pTop + 'px', 'padding-bottom': pTop + 'px'});
                if(modeType == "f") {
                    $('.hover-info').css('bottom', pTop + 'px');
                } else if(modeType == "p") {
                    $('.full-view > div:nth-child(2)').css({'padding-top': pTop + 'px', 'padding-bottom': pTop + 'px'});
                }
            };
            
            //scope.loading = { 'f' : false, 'p' : false };
            
            var imgLoad = function () {
                cenImg.imagesLoaded()
                    .always(function (instance) {
                        //console.log('all images loaded');
                        //setCenImgCss();
                        //scope.loading[modeType] = false;
                        cenImg.removeClass('image-loading');
                    });
            };
            
            var targetImage = {},
                modeType = '',
                cenImg;
            
            scope.$on('set-Cen', function (e, tImg, mm) {
                modeType = mm;
                targetImage = tImg;
                
                if(modeType == "f") {
                    cenImg = $('.image-large .center-image');
                } else if(modeType == "p") {
                    cenImg = $('.present-img > a');
                }
                
                //scope.loading[modeType] = true;
                //cenImg.addClass('image-loading');
                imgLoad();
                // setCenImgCss();
            });
        }
    };
});