var url = "php/"
<<<<<<< HEAD
getUser(1, null, "test");
=======

>>>>>>> origin/master
function getUser(userID, email, password) {
	if(userID != null && password != null) {
		var result = $.ajax({
			url: url+"user", 
			async: false,
			method: "GET",
			data: {userID: userID, password: password}
	    });
	    return result.responseJSON;
	} else if(email != null && password != null) {
		var result = $.ajax({
			url: url+"user", 
			async: false,
			method: "GET",
			data: {email: email, password: password}
	    });
	    return result.responseJSON;
	}else if(userID != null) {
		var result = $.ajax({
			url: url+"user", 
			async: false,
			method: "GET",
			data: {userID: userID}
	    });
	    return result.responseJSON;
	} else {
<<<<<<< HEAD
		console.log("Your arguements are messed up");
	}
}

function storeUserBackend(email, password, firstName, lastName, schoolName, async) {
=======
		console.log("Your arguments are messed up");
	}
}

function storeUserBackend(email, password, firstName, lastName, async, callback) {
>>>>>>> origin/master
	var result = $.ajax({
		url: url+"user", 
		async: async,
		method: "POST",
<<<<<<< HEAD
		data: {email: email, password: password, firstName: firstName, lastName: lastName, schoolName: schoolName, async: async}
=======
		data: {email: email, password: password, firstName: firstName, lastName: lastName, async: async},
    	success: function (data) {
        	callback(data);            
    	}
>>>>>>> origin/master
    });
}

function storeUserSession(userID, email, password, async) {
	if(userID != null && password != null) {
		var result = $.ajax({
			url: url+"session", 
			async: async,
			method: "POST",
			data: {userID: userID, password: password}
	    });
	} else if(email != null && password != null) {
		var result = $.ajax({
			url: url+"session", 
			async: async,
			method: "POST",
			data: {email: email, password: password},
<<<<<<< HEAD
			success: function(result) {
				console.log(result)
			},
=======
			success: function(result) {},
>>>>>>> origin/master
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.responseText);
				console.log(thrownError);
			}
	    });
	} else {
<<<<<<< HEAD
		console.log("Your arguements are messed up");
=======
		console.log("Your arguments are messed up");
>>>>>>> origin/master
	}
}

function getSession() {
	var result = $.ajax({
		url: url+"session", 
		async: false,
		method: "GET"
    });
	return result.responseJSON;
}

function destroySession(async) {
	var result = $.ajax({
		url: url+"session", 
		async: async,
		method: "DELETE"
    });
}

function getProblem(problemID) {
	var result = $.ajax({
		url: url+"problem", 
		async: false,
		method: "GET",
		data: {problemID: problemID}
    });
    return result.responseJSON;
}

function getProblemSubmissions(problemID) {
	if(problemID == null) {
		var result = $.ajax({
			url: url+"submission", 
			async: false,
			method: "GET",
<<<<<<< HEAD
			success: function(result) {
				console.log(result)
			},
=======
			success: function(result) {},
>>>>>>> origin/master
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.responseText);
				console.log(thrownError);
			}
	    });
<<<<<<< HEAD
	    console.log(result)
=======
>>>>>>> origin/master
	    return result.responseJSON;
	} else {
		var result = $.ajax({
			url: url+"submission", 
			async: false,
			method: "GET",
			data: {problemID: problemID},
<<<<<<< HEAD
			success: function(result) {
				console.log(result)
			},
=======
			success: function(result) {},
>>>>>>> origin/master
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.responseText);
				console.log(thrownError);
			}
	    });
<<<<<<< HEAD
	    console.log(result)
=======
>>>>>>> origin/master
	    return result.responseJSON;
	}
}

function getProblemSubmissionsWithSchool(problemID, schoolName) {
	var result = $.ajax({
		url: url+"submission", 
		async: false,
		method: "GET",
		data: {problemID: problemID, schoolName: schoolName},
<<<<<<< HEAD
		success: function(result) {
			console.log(result)
		},
=======
		success: function(result) {},
>>>>>>> origin/master
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(xhr.responseText);
			console.log(thrownError);
		}
    });
<<<<<<< HEAD
    console.log(result)
=======
>>>>>>> origin/master
    return result.responseJSON;
}

function getUserSubmissions(userID) {
	var result = $.ajax({
		url: url+"submission", 
		async: false,
		method: "GET",
		data: {userID: userID}
    });
    return result.responseJSON;
}

function getSubmission(submissionID) {
	var result = $.ajax({
		url: url+"submission", 
		async: false,
		method: "GET",
		data: {submissionID: submissionID}
    });
    return result.responseJSON;
}

function getSchools() {
	var result = $.ajax({
		url: url+"schools", 
		async: false,
		method: "GET",
<<<<<<< HEAD
		success: function(result) {
			console.log(result)
		},
=======
		success: function(result) {},
>>>>>>> origin/master
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(xhr.responseText);
			console.log(thrownError);
		}
    });
    return result.responseJSON;
}

function getProblemWithIndex(index) {
	var result = $.ajax({
		url: url+"problem", 
		async: false,
		method: "GET",
		data: {index: index}
    });
    return result.responseJSON;
}

function getProblemsSize() {
	var result = $.ajax({
		url: url+"problem", 
		async: false,
		method: "GET",
		data: {size: 1}
    });
    return result.responseJSON;
}

function getRankOfSubmission(submissionID) {
	var result = $.ajax({
		url: url+"rank", 
		async: false,
		method: "GET",
		data: {submissionID: submissionID}
    });
    return result.responseJSON;
}

function problemIDToIndex(problemID) {
	var result = $.ajax({
		url: url+"toIndex", 
		async: false,
		method: "GET",
		data: {problemID: problemID}
    });
    return result.responseJSON;
}

// FORM MUST HAVE: userID, outputFile
function storeSubmissionDatabase(formID) {
	var formData = new FormData($("#"+formID)[0]);
	var result = $.ajax({
		url: url+"submission", 
		async: false,
		method: "POST",
		data: formData,
		processData: false,
		contentType: false,
		xhr: function() {
			var myXhr = $.ajaxSettings.xhr();
			return myXhr;
		},
<<<<<<< HEAD
		success: function(result) {
			console.log(result)
		},
=======
		success: function(result) {},
>>>>>>> origin/master
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(xhr.responseText);
			console.log(thrownError);
		}
	})
	return result.responseJSON;
}