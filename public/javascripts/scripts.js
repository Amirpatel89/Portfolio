$( document ).ready(function() {
	$(".project1").hide()
	$(".project2").hide()
	$(".project3").hide()
	$(".project4").hide()
	$(".project5").hide()
});
const eCommerceSkills = {
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
	react: 'yes',
	redux: 'yes',
	name: 'ECommerce',
	caption: 'An E Commerce Site...in production',
	all: 'yes'		

}
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
var projects = [finalProjectSkills, eCommerceSkills, shoeboxSkills, starFoodieSkills, pygameSkills]
console.log(projects)

	// 	else if($(".project2").show()){
	// 	console.log('showing')
	// 	$('.project2').addClass('animated slideOutRight');
	// 	setTimeout(checkProjects, 1000, x);
	// }
	// if (Object.keys(cleanProjectObject)[0] && Object.keys(cleanProjectObject)[1] && Object.keys(cleanProjectObject)[2] !== undefined){

	// }
	// if (Object.keys(cleanProjectObject)[0] && Object.keys(cleanProjectObject)[1] !== undefined && Object.keys(cleanProjectObject)[2] == undefined){

	// }
	// if (Object.keys(cleanProjectObject)[0] !== undefined && Object.keys(cleanProjectObject)[1] == undefined){

	// }
	// setTimeout(checkProjects(x)), 3000;
	function checkProjects(x){
			returnArray = [];
			returnCaptions = [];
			projectString = "";
			projectString2 = "";
			projectString3 = "";
			projectString4 = "";
			projectString5 = "";
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
			projectString5 += returnArray[4];
			var projectLink5 = "/" + projectString5
			var projectObject = {
				[projectString]: projectLink,
				[projectString2]: projectLink2,
				[projectString3]: projectLink3,
				[projectString4]: projectLink4,
				[projectString5]: projectLink5
			};
			var cleanProjectObject = _.omit(projectObject, [undefined]);
			var cleanProjectCaptions = _.omit(returnCaptions, [undefined]);
			console.log(cleanProjectObject);
			if($(".project1").is(':visible')){
				if(document.getElementById("project3Title").innerHTML == projectString3 && document.getElementById("project2Title").innerHTML == projectString2 && document.getElementById("project1Title").innerHTML == projectString && document.getElementById("project4Title").innerHTML == projectString4){
					$('.project1').addClass('animated flash');
					$('.project2').addClass('animated flash');
					$('.project3').addClass('animated flash');
					$('.project4').addClass('animated flash');

					// $('.project1').removeClass('animated pulse');
					// $('.project2').removeClass('animated pulse');
					// $('.project3').removeClass('animated pulse');
					console.log('sames');
					organize(x);
				}
				// else if(document.getElementById("projectTitle").innerHTML == projectString2 && document.getElementById("project3Title").innerHTML !== projectString3 && document.getElementById("project1Title").innerHTML == projectString){
				// 		$('.project4').addClass('animated slideOutRight');
				// 		console.log('first 2 are same');

				// 	setTimeout(organize, 1000, x);
				// }
				if(document.getElementById("project3Title").innerHTML == projectString3 && document.getElementById("project2Title").innerHTML == projectString2 && document.getElementById("project1Title").innerHTML == projectString && document.getElementById("project4Title").innerHTML !== projectString4){
					$('.project4').addClass('animated slideOutRight');


					// $('.project1').removeClass('animated pulse');
					// $('.project2').removeClass('animated pulse');
					// $('.project3').removeClass('animated pulse');
					console.log('first 3 are same');
					setTimeout(organize, 1000, x);
				}
				else if(document.getElementById("project2Title").innerHTML == projectString2 && document.getElementById("project3Title").innerHTML !== projectString3 && document.getElementById("project1Title").innerHTML == projectString){
						$('.project3').addClass('animated slideOutRight');
						$('.project4').addClass('animated slideOutRight');
						console.log('first 2 are same');


					setTimeout(organize, 1000, x);
				}
				else if(document.getElementById("project1Title").innerHTML == projectString && document.getElementById("project2Title").innerHTML !== projectString2){
						$('.project2').addClass('animated slideOutRight');
						$('.project3').addClass('animated slideOutRight');
						$('.project4').addClass('animated slideOutRight');

						console.log('only 1 is same');

					setTimeout(organize, 1000, x);
				}
				else if(document.getElementById("project3Title").innerHTML !== projectString3 && document.getElementById("project3Title").innerHTML !== undefined){					
				$('.project1').addClass('animated slideOutRight');
				$('.project2').addClass('animated slideOutRight');
				$('.project3').addClass('animated slideOutRight');
				$('.project4').addClass('animated slideOutRight');
				console.log('3 is not the same');
				console.log(projectString3)
				console.log(document.getElementById("project3Title").innerHTML);
				
				setTimeout(organize, 1000, x);
				}
				else if(document.getElementById("project2Title").innerHTML !== projectString2 && document.getElementById("project2Title").innerHTML !== undefined){					
				$('.project1').addClass('animated slideOutRight');
				$('.project2').addClass('animated slideOutRight');
				$('.project3').addClass('animated slideOutRight');
				$('.project4').addClass('animated slideOutRight');
				console.log('2 is not the same');
				setTimeout(organize, 1000, x);
				}
				else if(document.getElementById("project1Title").innerHTML !== projectString){					
				$('.project1').addClass('animated slideOutRight');
				$('.project2').addClass('animated slideOutRight');
				$('.project3').addClass('animated slideOutRight');
				$('.project4').addClass('animated slideOutRight');

				console.log('none are same');
				setTimeout(organize, 1000, x);
				}
				// if(document.getElementById("project2Title").innerHTML !== projectString2){					
				// $('.project2').addClass('animated slideOutRight');
				// setTimeout(organize, 1000, x);
				// }
				// if(document.getElementById("project3Title").innerHTML !== projectString3){					
				// $('.project3').addClass('animated slideOutRight');
				// setTimeout(organize, 1000, x);
				// }
				// console.log('showing')
				// $('.project1').addClass('animated slideOutRight');
				// $('.project2').addClass('animated slideOutRight');
				// $('.project3').addClass('animated slideOutRight');
				// console.log('0')
				// setTimeout(organize, 1000, x);
			}else{
			console.log('else');
			organize(x);
			}
			function organize(){
					if (Object.keys(cleanProjectObject)[0] && Object.keys(cleanProjectObject)[1] && Object.keys(cleanProjectObject)[2] && Object.keys(cleanProjectObject)[3] !== undefined){
						document.getElementById("project1Title").innerHTML = Object.keys(cleanProjectObject)[0];
						document.getElementById("project1Pic").src = 'images/' + Object.keys(cleanProjectObject)[0] + '.jpg';
						document.getElementById("project1Caption").innerHTML = cleanProjectCaptions[0];
						document.getElementById("project2Title").innerHTML = Object.keys(cleanProjectObject)[1];
						document.getElementById("project2Pic").src = 'images/' + Object.keys(cleanProjectObject)[1] + '.jpg';
						document.getElementById("project2Caption").innerHTML = cleanProjectCaptions[1];
						document.getElementById("project3Title").innerHTML = Object.keys(cleanProjectObject)[2];
						document.getElementById("project3Pic").src = 'images/' + Object.keys(cleanProjectObject)[2] + '.jpg';
						document.getElementById("project3Caption").innerHTML = cleanProjectCaptions[2];
						document.getElementById("project4Title").innerHTML = Object.keys(cleanProjectObject)[3];
						document.getElementById("project4Pic").src = 'images/' + Object.keys(cleanProjectObject)[3] + '.jpg';
						document.getElementById("project4Caption").innerHTML = cleanProjectCaptions[3];
						$(".project1").removeClass("animated slideOutRight");
						$(".project2").removeClass("animated slideOutRight");
						$('.project1').addClass('animated slideInRight');
						$('.project2').addClass('animated slideInRight');
						$(".project1").show();
						$(".project2").show();
						$(".project3").removeClass("animated slideOutRight");
						$('.project3').addClass('animated slideInRight');
						$(".project3").show();
						$(".project4").removeClass("animated slideOutRight");
						$('.project4').addClass('animated slideInRight');
						$(".project4").show();
						console.log('5')
					}
				else if (Object.keys(cleanProjectObject)[0] && Object.keys(cleanProjectObject)[1] && Object.keys(cleanProjectObject)[2] !== undefined){
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
						$(".project1").show();
						$(".project2").show();
						$(".project3").removeClass("animated slideOutRight");
						$('.project3').addClass('animated slideInRight');
						$(".project3").show();
						console.log('4')
				}
				else if (Object.keys(cleanProjectObject)[0] && Object.keys(cleanProjectObject)[1] !== undefined && Object.keys(cleanProjectObject)[2] == undefined){
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
					$(".project1").show();
					$(".project2").show();
					$('.project3').addClass('animated slideOutRight');
					console.log('1');
				}
				else if (Object.keys(cleanProjectObject)[0] !== undefined && Object.keys(cleanProjectObject)[1] == undefined){
					document.getElementById("project1Title").innerHTML = Object.keys(cleanProjectObject)[0];
					document.getElementById("project1Pic").src = 'images/' + Object.keys(cleanProjectObject)[0] + '.jpg';
					document.getElementById("project1Caption").innerHTML = cleanProjectCaptions[0];
						$(".project1").removeClass("animated slideOutRight");
						$(".project1").show();
						$('.project1').addClass('animated slideInRight');
						$('.project2').addClass('animated slideOutRight');
						$('.project3').addClass('animated slideOutRight');
						console.log('2');
				}
				else{
					$('.project1').addClass('animated slideOutRight');
					$('.project2').addClass('animated slideOutRight');
					$('.project3').addClass('animated slideOutRight');
					console.log('3');
				}
			}

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







