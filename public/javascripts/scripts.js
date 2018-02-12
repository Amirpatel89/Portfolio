$( document ).ready(function() {
	$(".project1").hide()
	$(".project2").hide()
	$(".project3").hide()
	$(".project4").hide()
	$(".project5").hide()
	$(".button-collapse").sideNav({
		closeOnClick: true
	})
});
const eCommerceSkills = {
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
	react: 'yes',
	name: 'Stockpile Games',
	caption: 'An E-Commerce site made using React/Redux and Node.js(Development Only).',
	github: 'https://github.com/Amirpatel89/E-Commerce-Site',
	website: 'http://stockpilegames.amirpatel.net/',
	all: 'yes'		

}
const easyPCSkills = {
	python: 'yes',
	javascript: 'no',
	node: 'yes',
	express: 'yes',
	jQuery: 'no',
	mySQL: 'yes',
	html: 'yes',
	css: 'yes',
	ajax: 'no',
	bootstrap: 'no',
	materialize: 'yes',
	react: 'no',
	name: 'Easy-PC',
	caption: 'Aggregate prices for PCs and PC parts.  A web scraper made with Python and mySQL(In development).',
	github: 'https://github.com/Amirpatel89/News-Aggregator',
	website: 'https://github.com/Amirpatel89/News-Aggregator',
	all: 'yes'		

}
const pygameSkills = {
	python: 'yes',
	javascript: 'no',
	node: 'no',
	express: 'no',
	jQuery: 'no',
	mySQL: 'no',
	html: 'no',
	css: 'no',
	ajax: 'no',
	bootstrap: 'no',
	materialize: 'no',
	react: 'no',
	name: 'DBZ_Pygame',
	caption: 'A simple game made solely in Python.  Dragon Ball Z theme.',
	github: 'https://github.com/Amirpatel89/DBZ_pygame',
	website: '',
	all: 'yes'
}
const shoeboxSkills = {
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
	react: 'no',
	name: 'Shoebox',
	caption: 'A site that allows foster children the opportunity to have professional photos taken throughout childhood.',
	github: 'https://github.com/Amirpatel89/Shoebox-Amir',
	website: 'http://shoebox.amirpatel.net/',
	all: 'yes'
}
const starFoodieSkills = {
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
	react: 'no',
	name: 'StarFoodie',
	caption: 'This is an app for easily finding the nearest high-rated restaurant using your GPS location.',
	github: 'https://github.com/Amirpatel89/StarFoodie',
	website: 'https://starfoodie.amirpatel.net/',
	all: 'yes'
}
var projects = [easyPCSkills, eCommerceSkills, shoeboxSkills, starFoodieSkills, pygameSkills]
console.log(projects)

	function checkProjects(x){
			returnArray = [];
			returnCaptions = [];
			returnGithub = [];
			returnWebsite = [];
			projectString = "";
			projectString2 = "";
			projectString3 = "";
			projectString4 = "";
			projectString5 = "";
			for (i = 0; i < projects.length; i++){
				if(projects[i][x] == 'yes'){
					returnArray.push(projects[i].name)
					returnCaptions.push(projects[i].caption)
					returnGithub.push(projects[i].github)
					returnWebsite.push(projects[i].website)
				}
			}
			// console.log(returnCaptions)
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
			var cleanProjectGithub = _.omit(returnGithub, [undefined]);
			var cleanProjectWebsite = _.omit(returnWebsite, [undefined]);
			// console.log(cleanProjectWebsite);
			if($(".project1").is(':visible')){
				if(document.getElementById("project3Title").innerHTML == projectString3 && document.getElementById("project2Title").innerHTML == projectString2 && document.getElementById("project1Title").innerHTML == projectString && document.getElementById("project4Title").innerHTML == projectString4 && document.getElementById("project5Title").innerHTML == projectString5){
					console.log('first 5 are same');
					organize(x);
				}
				else if(document.getElementById("project3Title").innerHTML == projectString3 && document.getElementById("project2Title").innerHTML == projectString2 && document.getElementById("project1Title").innerHTML == projectString && document.getElementById("project4Title").innerHTML == projectString4 && document.getElementById("project5Title").innerHTML !== projectString5){
					$('.project5').addClass('animated slideOutRight');
					console.log('first 4 are same');
					setTimeout(organize, 1000, x);
				}
				else if(document.getElementById("project3Title").innerHTML == projectString3 && document.getElementById("project2Title").innerHTML == projectString2 && document.getElementById("project1Title").innerHTML == projectString && document.getElementById("project4Title").innerHTML !== projectString4){
					$('.project4').addClass('animated slideOutRight');
					$('.project5').addClass('animated slideOutRight');
					console.log('first 3 are same');
					setTimeout(organize, 1000, x);
				}
				else if(document.getElementById("project2Title").innerHTML == projectString2 && document.getElementById("project3Title").innerHTML !== projectString3 && document.getElementById("project1Title").innerHTML == projectString){
						$('.project3').addClass('animated slideOutRight');
						$('.project4').addClass('animated slideOutRight');
						$('.project5').addClass('animated slideOutRight');
						console.log('first 2 are same');
					setTimeout(organize, 1000, x);
				}
				else if(document.getElementById("project1Title").innerHTML == projectString && document.getElementById("project2Title").innerHTML !== projectString2){
						$('.project2').addClass('animated slideOutRight');
						$('.project3').addClass('animated slideOutRight');
						$('.project4').addClass('animated slideOutRight');
						$('.project5').addClass('animated slideOutRight');
						console.log('only 1 is same');
					setTimeout(organize, 1000, x);
				}
				else if(document.getElementById("project3Title").innerHTML !== projectString3 && document.getElementById("project3Title").innerHTML !== undefined){					
				$('.project1').addClass('animated slideOutRight');
				$('.project2').addClass('animated slideOutRight');
				$('.project3').addClass('animated slideOutRight');
				$('.project4').addClass('animated slideOutRight');
				$('.project5').addClass('animated slideOutRight');
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
				$('.project5').addClass('animated slideOutRight');
				console.log('2 is not the same');
				setTimeout(organize, 1000, x);
				}
				else if(document.getElementById("project1Title").innerHTML !== projectString){					
				$('.project1').addClass('animated slideOutRight');
				$('.project2').addClass('animated slideOutRight');
				$('.project3').addClass('animated slideOutRight');
				$('.project4').addClass('animated slideOutRight');
				$('.project5').addClass('animated slideOutRight');
				console.log('none are same');
				setTimeout(organize, 1000, x);
				}
			}else{
			console.log('else');
			organize(x);
			}
			function organize(){
					if (Object.keys(cleanProjectObject)[0] && Object.keys(cleanProjectObject)[1] && Object.keys(cleanProjectObject)[2] && Object.keys(cleanProjectObject)[3] && Object.keys(cleanProjectObject)[4]!== undefined){
						document.getElementById("project1Title").innerHTML = Object.keys(cleanProjectObject)[0];
						document.getElementById("project1Pic").src = 'images/' + Object.keys(cleanProjectObject)[0] + '.jpg';
						document.getElementById("project1Caption").innerHTML = cleanProjectCaptions[0];
						document.getElementById("project1Github").href = cleanProjectGithub[0];
						document.getElementById("project1Website").href = cleanProjectWebsite[0];
						document.getElementById("project2Title").innerHTML = Object.keys(cleanProjectObject)[1];
						document.getElementById("project2Pic").src = 'images/' + Object.keys(cleanProjectObject)[1] + '.jpg';
						document.getElementById("project2Caption").innerHTML = cleanProjectCaptions[1];
						document.getElementById("project2Github").href = cleanProjectGithub[1];
						document.getElementById("project2Website").href = cleanProjectWebsite[1];
						document.getElementById("project3Title").innerHTML = Object.keys(cleanProjectObject)[2];
						document.getElementById("project3Pic").src = 'images/' + Object.keys(cleanProjectObject)[2] + '.jpg';
						document.getElementById("project3Caption").innerHTML = cleanProjectCaptions[2];
						document.getElementById("project3Github").href = cleanProjectGithub[2];
						document.getElementById("project3Website").href = cleanProjectWebsite[2];
						document.getElementById("project4Title").innerHTML = Object.keys(cleanProjectObject)[3];
						document.getElementById("project4Pic").src = 'images/' + Object.keys(cleanProjectObject)[3] + '.jpg';
						document.getElementById("project4Caption").innerHTML = cleanProjectCaptions[3];
						document.getElementById("project4Github").href = cleanProjectGithub[3];
						document.getElementById("project4Website").href = cleanProjectWebsite[3];
						document.getElementById("project5Title").innerHTML = Object.keys(cleanProjectObject)[4];
						document.getElementById("project5Pic").src = 'images/' + Object.keys(cleanProjectObject)[4] + '.jpg';
						document.getElementById("project5Caption").innerHTML = cleanProjectCaptions[4];
						document.getElementById("project5Github").href = cleanProjectGithub[4];
						document.getElementById("project5Website").href = cleanProjectWebsite[4];
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
						$(".project5").removeClass("animated slideOutRight");
						$('.project5').addClass('animated slideInRight');
						$(".project5").show();
						console.log('6')
					}
					else if (Object.keys(cleanProjectObject)[0] && Object.keys(cleanProjectObject)[1] && Object.keys(cleanProjectObject)[2] && Object.keys(cleanProjectObject)[3] !== undefined && Object.keys(cleanProjectObject)[4] == undefined){
						document.getElementById("project1Title").innerHTML = Object.keys(cleanProjectObject)[0];
						document.getElementById("project1Pic").src = 'images/' + Object.keys(cleanProjectObject)[0] + '.jpg';
						document.getElementById("project1Caption").innerHTML = cleanProjectCaptions[0];
						document.getElementById("project1Github").href = cleanProjectGithub[0];
						document.getElementById("project1Website").href = cleanProjectWebsite[0];
						document.getElementById("project2Title").innerHTML = Object.keys(cleanProjectObject)[1];
						document.getElementById("project2Pic").src = 'images/' + Object.keys(cleanProjectObject)[1] + '.jpg';
						document.getElementById("project2Caption").innerHTML = cleanProjectCaptions[1];
						document.getElementById("project2Github").href = cleanProjectGithub[1];
						document.getElementById("project2Website").href = cleanProjectWebsite[1];
						document.getElementById("project3Title").innerHTML = Object.keys(cleanProjectObject)[2];
						document.getElementById("project3Pic").src = 'images/' + Object.keys(cleanProjectObject)[2] + '.jpg';
						document.getElementById("project3Caption").innerHTML = cleanProjectCaptions[2];
						document.getElementById("project3Github").href = cleanProjectGithub[2];
						document.getElementById("project3Website").href = cleanProjectWebsite[2];
						document.getElementById("project4Title").innerHTML = Object.keys(cleanProjectObject)[3];
						document.getElementById("project4Pic").src = 'images/' + Object.keys(cleanProjectObject)[3] + '.jpg';
						document.getElementById("project4Caption").innerHTML = cleanProjectCaptions[3];
						document.getElementById("project4Github").href = cleanProjectGithub[3];
						document.getElementById("project4Website").href = cleanProjectWebsite[3];
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
						document.getElementById("project1Github").href = cleanProjectGithub[0];
						document.getElementById("project1Website").href = cleanProjectWebsite[0];
						document.getElementById("project2Title").innerHTML = Object.keys(cleanProjectObject)[1];
						document.getElementById("project2Pic").src = 'images/' + Object.keys(cleanProjectObject)[1] + '.jpg';
						document.getElementById("project2Caption").innerHTML = cleanProjectCaptions[1];
						document.getElementById("project2Github").href = cleanProjectGithub[1];
						document.getElementById("project2Website").href = cleanProjectWebsite[1];
						document.getElementById("project3Title").innerHTML = Object.keys(cleanProjectObject)[2];
						document.getElementById("project3Pic").src = 'images/' + Object.keys(cleanProjectObject)[2] + '.jpg';
						document.getElementById("project3Caption").innerHTML = cleanProjectCaptions[2];
						document.getElementById("project3Github").href = cleanProjectGithub[2];
						document.getElementById("project3Website").href = cleanProjectWebsite[2];
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
					document.getElementById("project1Github").href = cleanProjectGithub[0];
					document.getElementById("project1Website").href = cleanProjectWebsite[0];
					document.getElementById("project2Title").innerHTML = Object.keys(cleanProjectObject)[1];
					document.getElementById("project2Pic").src = 'images/' + Object.keys(cleanProjectObject)[1] + '.jpg';
					document.getElementById("project2Caption").innerHTML = cleanProjectCaptions[1];
					document.getElementById("project2Github").href = cleanProjectGithub[1];
					document.getElementById("project2Website").href = cleanProjectWebsite[1];
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
					document.getElementById("project1Github").href = cleanProjectGithub[0];
					document.getElementById("project1Website").href = cleanProjectWebsite[0];
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