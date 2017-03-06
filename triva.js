
$(document).ready(function(){
// create an array of questions & answers
var questionsAnswers = [
	["What is the legal drinking age", "18",["21",true],"19", "22"],
	["How many drinks can 1 guest have",["2",true],"10","3",["no limit",false]],
	["Whats the garnish for the captins mule?",["lime wedge",false] ,["lemon wedge",false] ,["orange wedge",true],["no garnish",false]],
	["How many ounces are in a glass of wine",["6",true],"9" ,"8", "5"],

];
function checkAnswer(){

};

var question;
var choiceA, choiceB, choiceC, choiceD;
var i = -1 ;
console.log(questionsAnswers);
// give values to the buttons and display the question

$(".btn-success").on("click", function(){

	++i;
	question = questionsAnswers[i];
	choiceA = question[1];
	choiceB = question[2];
	choiceC = question[3];
	choiceD = question[4];



	$(".answer1").html(choiceA[0]);
	$(".answer2").html(choiceB[0]);
	$(".answer3").html(choiceC[0]);
	$(".answer4").html(choiceD[0]);


$(".questions").html(question[0]);



});



$(".answer1").on("click", function(){
	if (choiceA[1] === true){
		alert("Correct");
	}else{ 
		alert("Incorrect");
	}
	
	console.log(choiceA);

});
$(".answer2").on("click", function(){
if (choiceB[1] === true){
		alert("Correct");
	}else{ 
		alert("Incorrect");
	}
	console.log(choiceB);

});
$(".answer3").on("click", function(){
	if (choiceC[1] === true){
		alert("Correct");
	}else{ 
		alert("Incorrect");
	}
	console.log(choiceC);

});
$(".answer4").on("click", function(){
	if (choiceD[1] === true){
		alert("Correct");
	}else{ 
		alert("Incorrect");
	}
	console.log(choiceD);

});






// create a function to check if the answer is correct


// make on click events to use function and check if the answer is correct


// if/else statement if correct add ++ to correct answers, then displays new question and set of answers


// when test is complete display total correct answers














});
	
	
	
	












	


		



	





