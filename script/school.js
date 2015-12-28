var index;
var schoolName;

function populateLeaderboard(problemID, schoolName, problemIndex) {
<<<<<<< HEAD
	console.log("start");
	$("#leaderboard").empty()
	console.log(problemID)
	console.log(schoolName)
	var entries = getProblemSubmissionsWithSchool(problemID, schoolName);
	console.log("entry")
	console.log(entries);
	for(var a = 0; a < entries.length; a++) {
		var entry = entries[a]
		var user = getUser(entry.userID);
		console.log(entry.score);
=======
	$("#leaderboard").empty()
	var entries = getProblemSubmissionsWithSchool(problemID, schoolName);
	for(var a = 0; a < entries.length; a++) {
		var entry = entries[a]
		var user = getUser(entry.userID);
>>>>>>> origin/master
		$("#leaderboard").append($("<tr><th scope='row'>"+(a+1)+"</th><td><a href='student.php?userID="+user.userID+"'>"+user.firstName+" "+user.lastName+"</a></td><td>"+entry.score+"</td></tr>"))
	}
}

function populateSchoolTabs(school) {
	$("#schoolTabs").empty()
	var schools = getSchools()
	for(var a = 0; a < schools.length; a++) {
		if (schools[a] === school) {
<<<<<<< HEAD
			$("#schoolTabs").append("<li role='presentation' class='schoolTab active' schoolName='"+schools[a]+"'><a href='#' id='tab"+schools[a]+"'>"+schools[a]+"</a></li>");
		} else {
			$("#schoolTabs").append("<li role='presentation' class='schoolTab' schoolName='"+schools[a]+"'><a href='#' id='tab"+schools[a]+"'>"+schools[a]+"</a></li>");
=======
			$("#schoolTabs").append("<li role='presentation' class='schoolTab active' schoolName='"+schools[a]+"'><a href='#' id='tab"+schools[a]+"' class='tabby'>"+schools[a]+"</a></li>");
		} else {
			$("#schoolTabs").append("<li role='presentation' class='schoolTab' schoolName='"+schools[a]+"'><a href='#' id='tab"+schools[a]+"' class='tabby'>"+schools[a]+"</a></li>");
>>>>>>> origin/master
		}
	}
}

function reloadTables() {
	populateLeaderboard(getProblemWithIndex(index).problemID, schoolName, index)
}

function displayProblem(index, schoolName) {
	var problem = getProblemWithIndex(index)
	populateLeaderboard(problem.problemID, schoolName, index)

<<<<<<< HEAD
	var result = $.ajax({
		url: "problems/descriptions/header"+problem.problemName+".html", 
		async: true,
		method: "GET",
		success: function(result) {
			$("#jumbotron").empty()
			$("#jumbotron").append(result);
		}
    });

	var result = $.ajax({
		url: "problems/descriptions/body"+problem.problemName+".html", 
=======
	$("#jHeader").empty()
	$("#jHeader").append(problem.problemFullName);
	$("#jParagraph").empty()
	$("#jParagraph").append(problem.problemDescription);

	var result = $.ajax({
		url: "problems/descriptions/"+problem.problemName+".html", 
>>>>>>> origin/master
		async: true,
		method: "GET",
		success: function(result) {
			$("#rulesPanelBody").empty()
			$("#rulesPanelBody").append(result);
		}
    });
}

$(document).ready(function() {
	schoolName = getGET("schoolName");
	if(schoolName == null || schoolName === "" || schoolName === " ") {
		schoolName = getSchools()[0];
	}
<<<<<<< HEAD
	console.log("scho: "+schoolName)
	populateSchoolTabs(schoolName);
=======
>>>>>>> origin/master

	index = parseInt(getGET("problemIndex"));
	if(isNaN(index) == true || index == null || index === "" || index === " ") {
		index = 0;
	}
<<<<<<< HEAD
	console.log("ind"+index)
=======

	populateSchoolTabs(schoolName);

>>>>>>> origin/master
	var size = getProblemsSize();
	$("#backButton").click(function() {
		index++;
		if(index == size-1) {
			$("#backButton").css("display", "none");
		}
		if(index == 1) {
			$("#nextButton").css("display", "inline");
		}

		displayProblem(index, schoolName)
	})
	$("#nextButton").click(function() {
		index--;
		if(index == 0) {
			$("#nextButton").css("display", "none");
		}
		if(index == size-2) {
			$("#backButton").css("display", "inline");
		}

		displayProblem(index, schoolName)
	})

	if(index == 0) {
		$("#nextButton").css("display", "none");
	}
	if(index == size-1) {
		$("#backButton").css("display", "none");
	}

	displayProblem(index, schoolName)

	$('.schoolTab').click(function() {
		$(".schoolTab").each(function(schoolIndex) {
<<<<<<< HEAD
  			$(this).removeClass("active")
		});
		$(this).addClass("active")
		schoolName = $(this).attr("schoolName")
		populateLeaderboard(getProblemWithIndex(index).problemID, schoolName, index)
	});

	renderMathInElement(document.getElementById("rulesPanelBody"));
})
=======
  			setSelected($(this).children('a')[0],false)
		});
		setSelected($(this).children('a')[0],true)
		schoolName = $(this).attr("schoolName")
		populateLeaderboard(getProblemWithIndex(index).problemID, schoolName, index)
	}); $("#tab"+schoolName).trigger("click");

	renderMathInElement(document.getElementById("rulesPanelBody"));
})

function setSelected(element, isSelected) {
	if (!isSelected) {
		element.style.setProperty("color", "#fff", "important")
  		element.style.setProperty("background", "none", "important")
 		element.style.setProperty("border-style", "none", "important")
		element.style.setProperty("box-shadow","inset 0px 0px 0px 0px #841212","important")
	} else {
		element.style.setProperty("color", "#841212", "important")
		element.style.setProperty("background-color", "#fff", "important")
		element.style.setProperty("border-style", "solid", "important")
		element.style.setProperty("box-shadow","inset 0px 0px 0px 8px #841212","important")
	}
}
>>>>>>> origin/master
