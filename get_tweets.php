<?php

	require_once('TwitterAPIExchange.php');
	 
	// Set access tokens: https://dev.twitter.com/apps/
	$settings = array(
	    'oauth_access_token' => "429518748-kjlHdwQhUFKFTnQOTlVPe4roA2QDKNJnh0uemnpR",
	    'oauth_access_token_secret' => "0EL8ZHH09WdWjBCvANRIOJ0NeXYf5rz7P0v6EjeAihQLo",
	    'consumer_key' => "SRyDvuOTPvh8lVj5lyTSFPxck",
	    'consumer_secret' => "YKPJB0w9hBKNrgdP7HWGXFgNdVqSiXPk6WrjCG1v45CVGiOs85"
	);

	// $q = $_REQUEST["q"];

	// Choose URL and Request Method
	$url = "https://api.twitter.com/1.1/search/tweets.json";
	$getfield = '?q=chevrolet%20OR%20ford%20OR%20gmc%20OR%20dodge%20OR%20amc%20OR%20chrysler%20OR%20plymouth%20OR%20nash%20OR%20rambler%20OR%20ram%20OR%20pontiac%20OR%20oldsmobile%20OR%20international%20%23forsale-filter:retweets+filter:images&lang=en&result_type=recent&geocode=62,-96,2500mi'; // queries start with ? and are strung together with &
	$requestMethod = "GET";
	
	//Perform the request!
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();

?>

