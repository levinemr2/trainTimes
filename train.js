
var config = {
    apiKey: "AIzaSyB7_qOVMBZ1uQ8DffenLGIvVMQOS8UZnvE",
    authDomain: "trainhomework-5e2e1.firebaseapp.com",
    databaseURL: "https://trainhomework-5e2e1.firebaseio.com",
    projectId: "trainhomework-5e2e1",
    storageBucket: "trainhomework-5e2e1.appspot.com",
    messagingSenderId: "7853129790"
  };
  firebase.initializeApp(config);

$("#addTrainBtn").on("click", function(){

	
	var trainName = $("#trainNameInput").val().trim();
	var trainDest = $("#destInput").val().trim();
	var trainStart = moment($("#startInput").val().trim(), "DD/MM/YY").format("X");
	var trainFreq = $("#freqInput").val().trim();

	
	var newTrain = {
		name:  trainName,
		dest: trainDest,
		start: trainStart,
		freq: trainFreq
	}

	
	trainData.push(newTrain);

	
	console.log(newTrain.name);
	console.log(newTrain.dest);
	console.log(newTrain.start);
	console.log(newTrain.freq)

	
	alert("train successfully added");

	
	$("#trainNameInput").val("");
	$("#destInput").val("");
	$("#startInput").val("");
	$("#freqInput").val("");

	
	return false;
});



trainData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	
	var trainName = childSnapshot.val().name;
	var trainDest = childSnapshot.val().dest;
	var trainStart = childSnapshot.val().start;
	var trainFreq = childSnapshot.val().freq;

	
	console.log(trainName);
	console.log(trainDest);
	console.log(trainStart);
	console.log(trainFreq);

	
	var trainStartPretty = moment.unix(trainStart).format("MM/DD/YY");
	
	var trainMonths = moment().diff(moment.unix(trainStart, 'X'), "months");
	console.log(trainMonths);

	
	var trainBilled = trainMonths * trainFreq;
	console.log(trainBilled);

	
	var trainNextArr


	var trainMinsAway

	
	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" + trainNextArr + "</td><td>" + trainMinsAway + "</td><td>");

});

	