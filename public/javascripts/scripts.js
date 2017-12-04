// function thanks(){
// 	// if(received == true){
// 	// 	inner.html("Thank You!");
// 	// }
// 	res.render('ughh');
// }

var starFoodieCaption = 'This is an app for easily finding the nearest high rated restaurant near your location'


var shoeboxSkills = {
	python: 'no',
	javascript: 'yes',
	node: 'yes',
	express: 'yes',
	jQuery: 'yes',
	mySQL: 'yes',
	html: 'yes',
	css: 'yes',
	ajax: 'yes',
	bootstrap: 'yes',
	materialize: 'no',
	angular: 'no',
	react: 'no',
	name: 'Shoebox',
	caption: 'A site for allowing foster children the opportunity to have professional photos taken throughout childhood.'


}
var starFoodieSkills = {
	python: 'no',
	javascript: 'yes',
	node: 'no',
	express: 'no',
	jQuery: 'yes',
	mySQL: 'no',
	html: 'yes',
	css: 'yes',
	ajax: 'yes',
	bootstrap: 'yes',
	materialize: 'no',
	angular: 'no',
	react: 'no',
	name: 'StarFoodie',
	caption: 'This is an app for easily finding the nearest high rated restaurant near your location'

}
var projects = [shoeboxSkills, starFoodieSkills]
console.log(projects)



function checkProjects(x){
	returnArray = [];
	returnCaptions = [];
	projectString = "";
	projectString2 = "";
	projectString3 = "";
	projectString4 = "";
	for (i = 0; i < projects.length; i++){
		if(projects[i][x] == 'yes'){
			returnArray.push(projects[i].name)
			returnCaptions.push(projects[i].caption)
		}
	}
	console.log(returnCaptions)
	projectString += returnArray[0];
	var projectLink = "/" + projectString
	projectString2 += returnArray[1];
	var projectLink2 = "/" + projectString2
	projectString3 += returnArray[2];
	var projectLink3 = "/" + projectString3
	projectString4 += returnArray[3];
	var projectLink4 = "/" + projectString4
	var projectObject = {
		[projectString]: projectLink,
		[projectString2]: projectLink2,
		[projectString3]: projectLink3,
		[projectString4]: projectLink4
	};
	console.log(projectObject)
	var cleanProjectObject = _.omit(projectObject, [undefined]);
	var cleanProjectCaptions = _.omit(returnCaptions, [undefined]);
	console.log(cleanProjectCaptions);
	console.log(cleanProjectObject)
	console.log(Object.keys(cleanProjectObject)[0])
	console.log(starFoodieSkills.caption)
	
	// function showProjects(){


	// 	document.getElementById("links").innerHTML = Object.keys(cleanProjectObject);
	// 	document.getElementById("links").href = Object.values(cleanProjectObject);
	// 	document.getElementById("links").target = Object.keys(cleanProjectObject);
		// document.getElementById("pic-link").src = 'images/' + Object.keys(cleanProjectObject)[0] + '.jpg';

		document.getElementById("project1Title").innerHTML = Object.keys(cleanProjectObject)[0];
		document.getElementById("project1Pic").src = 'images/' + Object.keys(cleanProjectObject)[0] + '.jpg';
		document.getElementById("project1Caption").innerHTML = cleanProjectCaptions[0];


		document.getElementById("project2Title").innerHTML = Object.keys(cleanProjectObject)[1];
		document.getElementById("project2Pic").src = 'images/' + Object.keys(cleanProjectObject)[1] + '.jpg';
		document.getElementById("project2Caption").innerHTML = cleanProjectCaptions[1];






	// }	
	// showProjects();


}













