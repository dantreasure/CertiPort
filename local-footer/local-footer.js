$(document).ready(function(){
	var students = [
		{
			name: "Reagan Beavers",
			location: "Fayetteville, GA, United States<br />Student at FCHS",
			link: "Read her story >",
			image: "../images/students/reagan.png"
		},
		{
			name: "Ryan Miguel",
			location: "Danbury, CT, United States<br />Product Advisor",
			link: "Read his story >",
			image: "../images/students/ryan.png"
		},
		{
			name: "Samantha Knupp",
			location: "Cape Town, South Africa<br />Student at Elkanah House<br />High School",
			link: "Read her story >",
			image: "../images/students/samantha.png"
		},
		{
			name: "Jeffrey Crowley",
			location: "Hoover, AL, United States<br />Student at Hoover High School",
			link: "Read his story >",
			image: "../images/students/jeffrey.png"
		},
		{
			name: "Ashley Masters",
			location: "Kalama, WA, United States<br />Student at Kalama High School",
			link: "Read her story >",
			image: "../images/students/ashley.png"
		},
		{
			name: "Brandon Jacobson",
			location: "West Jordan, United States<br />Teacher at Copper Hills<br />High School",
			link: "Read hist story >",
			image: "../images/students/brandon.png"
		},
		{
			name: "Chelsea",
			location: "Piscataway, NJ, United States<br />Student at Piscataway<br />High School",
			link: "Read her story >",
			image: "../images/students/chelsea.png"
		}
	]

	var randomStudent = students[Math.floor(Math.random()*7)];
	
	$(".bio-image").attr("src", randomStudent.image);
	$(".bio-image").attr("alt", randomStudent.name);
	$(".bio-name").html(randomStudent.name);
	$(".bio-location").html(randomStudent.location);
	$(".bio-link").html(randomStudent.link);
})