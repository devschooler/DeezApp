angular .module('Deezapp')

// controlleur de recherche

    .controller('searchCTRL', function($http) {

        var music_search = this;


        music_search.results = [];


        music_search.onSearch = function() {



// api deezer
            $http.jsonp('http://api.deezer.com/search/?callback=JSON_CALLBACK&output=jsonp&q='+music_search.q)
                .then(function(response) {
                    music_search.results = response.data.data;
                });


        };

        // fonction de lecture audio

        music_search.playAudio = function(url) {
            console.log('lama');

            var my_media = new Media(url




            );

            my_media.play()

        };
        music_search.pauseAudio = function(url) {
            console.log('lama');

            var my_media = new Media(url




            );

            my_media.play()

        };
    });
