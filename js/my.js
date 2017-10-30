// === Map === 
function myMap() {
	var mapCanvas = document.getElementById("Googlemap");
	var myCenter = new google.maps.LatLng(52.354832, 9.758542); 
	var mapOptions = {
		center: myCenter,
		zoom: 18,
		mapTypeControl: true,
		mapTypeId:google.maps.MapTypeId.HYBRID
	};

	var map = new google.maps.Map(mapCanvas,mapOptions);
	map.setTilt(100);

	var marker = new google.maps.Marker({
		position: myCenter,
		animation: google.maps.Animation.BOUNCE
	});
	marker.setMap(map);

	google.maps.event.addListener(marker,'click',function() {
		var infowindow = new google.maps.InfoWindow({
			content:"Im Haspelfede 15 - 30173 Hannover "
		});
		infowindow.open(map,marker);
	});
}

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}]},{},[1])