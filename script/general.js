function fileChanged() {
	var score = storeSubmissionDatabase("submitForm", false);
<<<<<<< HEAD
	console.log("score: " + score)
=======
>>>>>>> origin/master
	if (isNaN(score)) parseError()
	else congratsError(score)

	reloadTables()
}

function login(user) {
	$("#loginNav").css("display", "none");
	$("#logoutNav").css("display", "inline");

	$("#submitForm").append("<input type='hidden' name='userID' value='"+user.userID+"'>");
}

function logOut() {
	$("#loginNav").css("display", "inline");
	$("#logoutNav").css("display", "none");

}

function populateSchools() {
	$("#schoolsDropdown").empty()
	var schools = getSchools()
	for(var a = 0; a < schools.length; a++) {
		$("#schoolsDropdown").append("<li><a href='school.php?schoolName="+schools[a]+"'>"+schools[a]+"</a></li>");
	}
}

$(document).ready(function() {
<<<<<<< HEAD
	populateSchools();

	var user = getSession();
	console.log(user);
=======
	$(".pageContent").css("display", "none");
	populateSchools();

	var user = getSession();
>>>>>>> origin/master

	// not logged in
	if(user == null) {
		logOut();
	} else {
		login(user)
	}

	$('.dropdown-toggle').dropdown();
	$('.dropdown input, .dropdown label').click(function(e) {
		e.stopPropagation();
	});

	$('.dropdown').on('show.bs.dropdown', function(e){
		var $dropdown = $(this).find('.dropdown-menu');
		var orig_margin_top = parseInt($dropdown.css('margin-top'));
		$dropdown.css({'margin-top': (orig_margin_top + 10) + 'px', opacity: 0}).animate({'margin-top': orig_margin_top + 'px', opacity: 1}, 300, function(){
			$(this).css({'margin-top':''});
		});
	});

	$('.dropdown').on('hide.bs.dropdown', function(e){
		var $dropdown = $(this).find('.dropdown-menu');
		var orig_margin_top = parseInt($dropdown.css('margin-top'));
		$dropdown.css({'margin-top': orig_margin_top + 'px', opacity: 1, display: 'block'}).animate({'margin-top': (orig_margin_top + 10) + 'px', opacity: 0}, 300, function(){
			$(this).css({'margin-top':'', display:''});
		});
	});

	$("#loginButton").click(function() {
		var email = $("#login_user").val();
		var password = $("#login_pass").val();
		
<<<<<<< HEAD
		// Does not exist. LOG IN FAIL
		if(getUser(null, email, password) == null) {
			loginError("That email password combination does not exist")
		} else {
			storeUserSession(null, email, password, false);
			console.log(getSession());
=======
		if(getUser(null, email, password) == null) {
			loginError("Email password combination could not be found.")
		} else {
			storeUserSession(null, email, password, false);
>>>>>>> origin/master
			login(getSession());
		}
	})
	
	$("#registerButton").click(function() {
		var email = $("#register_email").val();
		var password = $("#register_pass").val();
		var firstName = $("#register_first").val();
		var lastName = $("#register_last").val();
<<<<<<< HEAD
		var schoolName = $("#register_school").val();
		console.log(email+""+password+firstName+lastName+schoolName)

		storeUserBackend(email, password, firstName, lastName, schoolName, false);
		storeUserSession(null, email, password, false);
		console.log(getSession())
		login(getSession());
=======

		var resp = storeUserBackend(email, password, firstName, lastName, false, function(resp) {
			if (resp === "Success") {
				$("#errorBox").empty()
				storeUserSession(null, email, password, false);
				login(getSession());
			} else registerError(resp);
		});

	})

	$("#register_email").keyup(function() {
		var email = $('#register_email').val();
		var ind = email.indexOf("@");
		var domain = email.slice((ind+1),email.length);
		
		var response = "Enter your school email.";
		if (domain === "horacemann.org") response = "Horace Mann School";
		else if (domain === "dalton.org") response = "The Dalton School";
		else if (domain === "stuy.edu") response = "Stuyvesant High School";
		else if (domain === "ecfs.org") response = "Ethical Culture Fieldston School";
		else if (domain === "trinityschoolnyc.org") response = "Trinity School";

		$("#schoolField").html(response);
>>>>>>> origin/master
	})

	$('#submitButton').click(function() {
		$('#myFile').click();
	})
	
	$('#logoutButton').click(function() {
		destroySession(false);
		logOut();
	})

<<<<<<< HEAD
=======
	$("#register_email").val('');
	$("#register_pass").val('');
	$("#register_first").val('');
	$("#register_last").val('');
	$("#login_user").val('');
	$("#login_pass").val('');

>>>>>>> origin/master
	$.material.init()
})

$(window).load(function() {
<<<<<<< HEAD
	$(".pageContent").fadeIn(500);
=======
	$(".pageContent").fadeIn(300);

	$("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        if (linkLocation.indexOf("#") == -1) $(".pageContent").fadeOut(200, redirectPage);
    });

    function redirectPage() {
		window.location = linkLocation;
    }
>>>>>>> origin/master
});

function loginError(errorMessage) {
	$("#errorBox").empty()
	$("#errorBox").append($("<div class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Login failed.</strong>&nbsp;&nbsp;"+errorMessage+"</div>"))
}

<<<<<<< HEAD
=======
function registerError(errorMessage) {
	$("#errorBox").empty()
	$("#errorBox").append($("<div class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Registration failed.</strong>&nbsp;&nbsp;"+errorMessage+"</div>"))
}

>>>>>>> origin/master
function parseError() {
	$("#errorBox").empty()
	$("#errorBox").append($("<div class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Grading failed.</strong>&nbsp;&nbsp;Please check your output file and try again.</div>"))
}

function congratsError(score) {
	$("#errorBox").empty()
	$("#errorBox").append($("<div class='alert alert-success alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Congratulations!</strong>&nbsp;&nbsp;You got a score of <strong>"+score+"</strong>.</div>"))
}

function getGET(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}