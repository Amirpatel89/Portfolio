// function thanks(){
// 	// if(received == true){
// 	// 	inner.html("Thank You!");
// 	// }
// 	res.render('ughh');
// }





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
	name: 'Shoebox'

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
	name: 'StarFoodie'

}
var projects = [shoeboxSkills, starFoodieSkills]
console.log(projects)



function checkPython(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].python == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}
function checkJavascript(){
	returnArray = [];
	projectString = "";
	projectString2 = "";
	projectString3 = "";
	for (i = 0; i < projects.length; i++){
		if(projects[i].javascript == 'yes'){
			returnArray.push(projects[i].name)
		}
	}
	projectString += returnArray[0];
	var projectLink = "/" + projectString
	projectString2 += returnArray[1];
	var projectLink2 = "/" + projectString2
	projectString3 += returnArray[2];
	var projectLink3 = "/" + projectString3

	var projectObject = {
		[projectString]: projectLink,
		[projectString2]: projectLink2,
		[projectString3]: projectLink3

	};
	var cleanProjectObject = clean(projectObject)
	console.log(cleanProjectObject)


	

	console.log(projectObject);
	console.log(projectObject[projectLink])
	console.log(Object.values(projectObject))
	console.log(Object.keys(projectObject))
	function showProjects(){
			document.getElementById("links").innerHTML = Object.keys(projectObject);
			document.getElementById("links").href = Object.values(projectObject);
			document.getElementById("links").target = Object.keys(projectObject);

	}
	showProjects();
}
function checkNode(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].node == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}
function checkExpress(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].express == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}
function checkJQuery(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].jquery == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}
function checkMySql(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].mysql == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}

function checkHTML(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].html == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}
function checkCSS(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].css == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}
function checkAjax(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].ajax == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}
function checkBootstrap(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].bootstrap == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}
function checkMaterialize(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].materialize == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}
function checkAngular(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].angular == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}
function checkReact(){
	returnArray = [];
	for (i = 0; i < projects.length; i++){
		if(projects[i].react == 'yes'){
			returnArray.push(projects[i].name)
			document.getElementById("Project-box").innerHTML = returnArray;
		}
	}
}








