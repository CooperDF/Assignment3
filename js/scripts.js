window.onload = init;

function init() {
	// function getTweets(){

		var xhr = new XMLHttpRequest();
	    xhr.open('GET','get_tweets.php',true); //this changes the state of xmlhttp
	    xhr.send(null);
	    xhr.onload = function() {

	    	var map;
	    	var geocoder;
	      
	    	if(xhr.status == 200){

	            var tweets = JSON.parse(xhr.responseText);

	            tweets = tweets.statuses;

	            // console.log(tweets);

	            tweets.forEach(function(tweet){
	            	var place = tweet.user.location;
	            	console.log(place);

	            	var address = [place];
	            	map = new google.maps.Map(document.getElementById('map'), {
	  					center: {lat: 49, lng: -110},
	  					zoom: 5
				});
	            	geocoder = new google.maps.Geocoder();


	            	geocodeAddress(geocoder, map);

	            	function geocodeAddress(geocoder, map) {
	            		geocoder.geocode({'address': address}, function(results, status) {
	            			if(status === 'OK') {
	            				map.setCenter(results[0].geometry.location);
	            				var marker, i;

	            				for (i = 0; i < locations.legnth; i++)
	            				marker = new google.maps.Marker({
	            					map: map,
	            					position: results[0].geometry.location
	            				});
	            			}
	            		});
	            	}
			});

	            //  EXAMPLE OUTPUT TO A LIST
	    //         var tweetList = "<ul>";
	    //         tweets.forEach(function(tweet) {
	    //             tweetList += "<li>" + tweet.text + "</li>";
	    //         });
	    //         tweetList += "</ul>";

	    // 		document.getElementById("results").innerHTML = tweetList;
	    		
	    // 	} else {
	    //         console.log(xhr);
	    //         document.getElementById("results").innerHTML = xhr.responseText;
	        // }
	    }
	}
}
