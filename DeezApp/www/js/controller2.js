
angular .module('Deezapp')
// controlleur audio


.controller("songCTRL", function($scope, $cordovaMedia, $ionicLoading) {


    $scope.play = function(src) {
        console.log('lama'); // vérification du lancement de la fonction

        var media = new Media(src, null, null, mediaStatusCallback);
        $cordovaMedia.play(media);
    };

    var mediaStatusCallback = function(status) {
        if(status == 1) {
            $ionicLoading.show({template: 'Loading...'});
        } else {
            $ionicLoading.hide();
        }
    }
});



