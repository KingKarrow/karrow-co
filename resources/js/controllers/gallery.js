karrow_controllers.controller('GalleryCTRL', function ($scope, $state, $log, $http, $rootScope, $sce) {
    $scope.imageList = [];
    
    $scope.presenting = false;
    
    $scope.present = function (val) {
        var value = val ? true : false;
        $scope.presenting = value;
        if (val) {
            $scope.presentedImage = $scope.focusedImage;
            $scope.$broadcast('set-Cen', $scope.presentedImage, 'p');
        }
    };
    
    $scope.getImages = function (gallType) {
        $scope.imageList = [];
        
        var galleryUrl = 'resources/img/gallery/' + gallType + '/JPEG/';
        
        $scope.galleryType = gallType;
        $scope.galleries = {};
        
        $rootScope.pageSubTitle = $rootScope.capitalizeFirstLetter(gallType);
    
        $http({
            method: 'GET',
            url: 'resources/img/gallery/gallery.json'
        })
        .success(function (result) {
            //result.splice(0, 2);

            var imgElemTemps = [];
            for(var g = 0; g < result.length; g++) {
                var thisGallery = result[g].gallery;
                if(!$scope.galleries[thisGallery]) $scope.galleries[thisGallery] = [];

                $scope.galleries[thisGallery].push(result[g]);
                $scope.galleries[thisGallery][$scope.galleries[thisGallery].length - 1].index = $scope.galleries[thisGallery].length - 1;
                var imgElem = new Image();
                imgElem.title = "imgElem" + g;
                imgElem.onload = function(ev) {
                    var imgInd = parseInt(ev.path[0].title.slice(7));
                    $scope.galleries[thisGallery][imgInd].width = ev.path[0].width;
                    $scope.galleries[thisGallery][imgInd].height = ev.path[0].height;
                    // console.log(ev);
                };
                imgElem.src = 'resources/img/gallery/' + thisGallery + '/JPEG/' + $scope.galleries[thisGallery][$scope.galleries[thisGallery].length - 1].file;
            }
            $scope.imageList = $scope.galleries[thisGallery];

            $scope.imageFocus(0);
            $scope.imageList[0].presented = true;
            $scope.presentedImage = $scope.imageList[0];
        })
        .error(function (result) {
            $log.error(result.responseText);
        });
    };
    
    $scope.imageFocus = function (index) {
        $('.image-large .center-image').addClass('image-loading');
        var i;
        for (i = 0; i < $scope.imageList.length; i++) {
            $scope.imageList[i].focused = false;
        }
        $scope.imageList[index].focused = true;
        $scope.focusedImage = $scope.imageList[index];
        $scope.$broadcast('set-Cen', $scope.focusedImage, 'f');
    };
    
    $scope.imagePresent = function (index, $event) {
        $('.present-img > a').addClass('image-loading');
        var i;
        for (i = 0; i < $scope.imageList.length; i++) {
            $scope.imageList[i].presented = false;
        }
        $scope.imageList[index].presented = true;
        $scope.presentedImage = $scope.imageList[index];
        
        if($event) $event.stopPropagation();
        $scope.$broadcast('set-Cen', $scope.presentedImage, 'p');
    };
    
    $scope.presentCycle = function ($event) {
        if(!!$scope.imageList[$scope.presentedImage.index + 1]) {
            $('.present-img > a').addClass('image-loading');
            $scope.presentedImage = $scope.imageList[$scope.presentedImage.index + 1];
            $scope.$broadcast('set-Cen', $scope.presentedImage, 'p');
        }
        $event.stopPropagation();
    };
    
    $scope.ggbb = '';
    
    $scope.getDB = function () {
        $http({
            method: 'POST',
            data: { imgList: $scope.imageList },
            url: 'resources/img/gallery/galleryDBUpdate.php'
        })
        .success(function (result) {
            if(!!result) {
                if(typeof(result) == 'object') {
                    if(result.outMsg.length) console.log(result.outMsg);
                    $scope.imageList = result.finalList;

                    for(var i = 0; i < $scope.imageList.length; i++) {
                        $scope.imageList[i].index = i;
                    }

                    //$scope.imageList[0].focused = true;
                    $scope.imageFocus(0);
                    //$scope.imagePresent(0);
                    $scope.imageList[0].presented = true;
                    $scope.presentedImage = $scope.imageList[0];
                } else {
                    console.log(result);
                }
            }
        })
        .error(function (result) {
            $log.error(result.responseText);
        });
    };
    
    // $(window).resize(function () {
    //     $scope.$broadcast('set-Cen', $scope.focusedImage, 'f');
    //     if($scope.presenting) {
    //         $scope.$broadcast('set-Cen', $scope.presentedImage, 'p');
    //     }
    // });
    
    /***VIDEO***/
    
    $scope.getVideos = function () {
        var videoListInit = [
            {
                label: 'Crazy Chicks Part 1',
                id: 'lJUZtVHVOuw'
            },
            {
                label: 'Crazy Chicks Part 1',
                id: 'gHp5qDcLuMo'
            },
            {
                label: 'Final',
                id: '2eAqEhmbZOY'
            },
            {
                label: 'Toast',
                id: 'nem_uzGzfKw'
            }
        ];

        $scope.videoList = [];

        angular.forEach(videoListInit, function (video) {
            var url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video.id + "?rel=0");
            video.embed = url;

            $scope.videoList.push(video);
        });
    };
    
});