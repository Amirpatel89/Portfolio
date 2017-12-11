$( document ).ready(function() {
	$(".project1").hide()
	$(".project2").hide()
	$(".project3").hide()
	$(".project-python").hide()


});
const finalProjectSkills = {
	python: 'no',
	javascript: 'yes',
	node: 'yes',
	express: 'yes',
	jQuery: 'yes',
	lodash: 'yes',
	mySQL: 'yes',
	html: 'yes',
	css: 'yes',
	ajax: 'yes',
	bootstrap: 'yes',
	materialize: 'yes',
	react: 'yes',
	redux: 'yes',
	name: 'FinalProject',
	caption: 'My Final Project',
	all: 'yes'		

}
const pygameSkills = {
	python: 'yes',
	javascript: 'no',
	node: 'no',
	express: 'no',
	jQuery: 'no',
	lodash: 'no',
	mySQL: 'no',
	html: 'no',
	css: 'no',
	ajax: 'no',
	bootstrap: 'no',
	materialize: 'no',
	react: 'no',
	redux: 'no',
	name: 'Pygame',
	caption: 'A simple game made solely in Python',
	all: 'yes'
}
const shoeboxSkills = {
	python: 'no',
	javascript: 'yes',
	node: 'yes',
	express: 'yes',
	jQuery: 'yes',
	lodash: 'no',
	mySQL: 'yes',
	html: 'yes',
	css: 'yes',
	ajax: 'yes',
	bootstrap: 'yes',
	materialize: 'no',
	react: 'no',
	redux: 'no',
	name: 'Shoebox',
	caption: 'A site for allowing foster children the opportunity to have professional photos taken throughout childhood.',
	all: 'yes'
}
const starFoodieSkills = {
	python: 'no',
	javascript: 'yes',
	node: 'no',
	express: 'no',
	jQuery: 'yes',
	lodash: 'no',
	mySQL: 'no',
	html: 'yes',
	css: 'yes',
	ajax: 'yes',
	bootstrap: 'yes',
	materialize: 'no',
	react: 'no',
	redux: 'no',
	name: 'StarFoodie',
	caption: 'This is an app for easily finding the nearest high rated restaurant near your location.',
	all: 'yes'
}
var projects = [finalProjectSkills, shoeboxSkills, starFoodieSkills]
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
	var cleanProjectObject = _.omit(projectObject, [undefined]);
	var cleanProjectCaptions = _.omit(returnCaptions, [undefined]);
	console.log(cleanProjectObject)
			if (Object.keys(cleanProjectObject)[0] && Object.keys(cleanProjectObject)[1] && Object.keys(cleanProjectObject)[2] !== undefined){
				document.getElementById("project1Title").innerHTML = Object.keys(cleanProjectObject)[0];
				document.getElementById("project1Pic").src = 'images/' + Object.keys(cleanProjectObject)[0] + '.jpg';
				document.getElementById("project1Caption").innerHTML = cleanProjectCaptions[0];
				document.getElementById("project2Title").innerHTML = Object.keys(cleanProjectObject)[1];
				document.getElementById("project2Pic").src = 'images/' + Object.keys(cleanProjectObject)[1] + '.jpg';
				document.getElementById("project2Caption").innerHTML = cleanProjectCaptions[1];
				document.getElementById("project3Title").innerHTML = Object.keys(cleanProjectObject)[2];
				document.getElementById("project3Pic").src = 'images/' + Object.keys(cleanProjectObject)[2] + '.jpg';
				document.getElementById("project3Caption").innerHTML = cleanProjectCaptions[2];
				$(".project1").removeClass("animated slideOutRight");
				$(".project2").removeClass("animated slideOutRight");
				$('.project1').addClass('animated slideInRight');
				$('.project2').addClass('animated slideInRight');
				$(".project1").show()
				$(".project2").show()
				$(".project3").removeClass("animated slideOutRight");
				$('.project3').addClass('animated slideInRight');
				$(".project3").show()
				console.log('4')
		}
		if (Object.keys(cleanProjectObject)[0] && Object.keys(cleanProjectObject)[1] !== undefined && Object.keys(cleanProjectObject)[2] == undefined){
			document.getElementById("project1Title").innerHTML = Object.keys(cleanProjectObject)[0];
			document.getElementById("project1Pic").src = 'images/' + Object.keys(cleanProjectObject)[0] + '.jpg';
			document.getElementById("project1Caption").innerHTML = cleanProjectCaptions[0];
			document.getElementById("project2Title").innerHTML = Object.keys(cleanProjectObject)[1];
			document.getElementById("project2Pic").src = 'images/' + Object.keys(cleanProjectObject)[1] + '.jpg';
			document.getElementById("project2Caption").innerHTML = cleanProjectCaptions[1];
			$(".project1").removeClass("animated slideOutRight");
			$(".project2").removeClass("animated slideOutRight");
			$('.project1').addClass('animated slideInRight');
			$('.project2').addClass('animated slideInRight');
			$(".project1").show()
			$(".project2").show()
			$('.project3').addClass('animated slideOutRight');
			console.log('1')
		}
		else if (Object.keys(cleanProjectObject)[0] !== undefined && Object.keys(cleanProjectObject)[1] == undefined){
			document.getElementById("project1Title").innerHTML = Object.keys(cleanProjectObject)[0];
			document.getElementById("project1Pic").src = 'images/' + Object.keys(cleanProjectObject)[0] + '.jpg';
			document.getElementById("project1Caption").innerHTML = cleanProjectCaptions[0];
				$(".project1").removeClass("animated slideOutRight");
				$(".project1").show()	
				$('.project1').addClass('animated slideInRight');
				$('.project2').addClass('animated slideOutRight');
				$('.project3').addClass('animated slideOutRight');
				console.log('2')
		}
		// if (Object.keys(cleanProjectObject)[0] && Object.keys(cleanProjectObject)[1] !== undefined && Object.keys(cleanProjectObject)[1] == undefined){
		// }
		// else{
		// 	$('.project1').addClass('animated slideOutRight');
		// 	$('.project2').addClass('animated slideOutRight');
		// 	console.log('3')
		// }
}


// function checkPython(){
// 			document.getElementById("pythonTitle").innerHTML = 'Pygame';
// 			document.getElementById("pythonPic").src = 'images/' + 'Pygame' + '.jpg';
// 			document.getElementById("pythonCaption").innerHTML = pygameSkills.caption;

// 				$(".project1").removeClass("animated slideOutRight");
// 				$(".project1").show()	
// 				$('.project1').addClass('animated slideInRight');
// 				$('.project2').addClass('animated slideOutRight');
// }








