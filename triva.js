$(document).ready(function() {
    const config = {
        apiKey: "AIzaSyD5eqGeGoJKiDUXQA36Qi5_Qtoqs3aVqL0",
        authDomain: "portfolio-messenger.firebaseapp.com",
        databaseURL: "https://portfolio-messenger.firebaseio.com",
        projectId: "portfolio-messenger",
        storageBucket: "portfolio-messenger.appspot.com",
        messagingSenderId: "51564714549"
    };
    var newArray = [];
    firebase.initializeApp(config);
    database = firebase.database();


    // Pulling scores from the Database

    var ref = database.ref('users');
    ref.on('value', gotData, errData);

    // Naving through objects

    function gotData(data) {

        // Deletes the scoreling before appending so no repeats show up

        var scorelisting = $('.scorelisting');
         var newArray = [];
        

        for (var i = 0; i < scorelisting.length; i++) {

            scorelisting[i].remove();

        }

        var users = data.val();
        var keys = Object.keys(users);



        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var userInput = {
                Name: " " + users[k].name + " ",
                Score: " " + parseInt(users[k].percentCorrect)
               
               

            }
           
            newArray.push(userInput);

            newArray.sort(function(a, b) {
                return b.Score - a.Score

            })

        }
        for (var i = 0; i <= 10; i++) {
            

            var send = JSON.stringify(newArray[i]);
            send = send.replace(/[""]/g, "").replace(/[{}]/g, "").replace(/[,]/g, "|| ");

            $("#scorelist").append("<li>" + send + "%" + "</li>");
            $('li').addClass('scorelisting');
       
        }

    }


    function errData(err) {
        consle.log('Error');
    };

    $(".high-scores").on("click", function(){
        $("#scorelist").toggle();
    });


    // create an array of questions & answers
    var newScore;
    var name = 'brad';
    var incorrect = 0;
    var correct = 0;
    var selectQuestion = 0;
   
    var questionNumber = 0;
    var scorelist = 0;
   


    var allQuestions = [

        questionsSet1 = [
            question1 = {
                question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
                answer1: "The User's machine running a Web browser",
                answer2: "The Web server",
                answer3: "A central machine deep within Netscape's corporate offices",
                answer4: "None of the above",

                correctAnswer: "The User's machine running a Web browser"

            },
            question2 = {
                question: "______ JavaScript is also called client-side JavaScript.",
                answer1: "Microsoft",
                answer2: "Navigator",
                answer3: "LiveWire",
                answer4: "Native",
                correctAnswer: "Navigator"

            },
            question3 = {
                question: " __________ JavaScript is also called server-side JavaScript.",
                answer1: "Microsoft",
                answer2: "Navigator",
                answer3: "LiveWire",
                answer4: "Native",
                correctAnswer: "LiveWire"

            },
            question4 = {
                question: "What are variables used for in JavaScript Programs?",
                answer1: "Storing numbers, dates, or other values",
                answer2: "Varying randomly",
                answer3: "Causing high-school algebra flashbacks",
                answer4: "None of the above",
                correctAnswer: "Storing numbers, dates, or other values"

            },
            question5 = {
                question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
                answer1: "Client-side",
                answer2: "Server-side",
                answer3: "Local",
                answer4: "Native",
                correctAnswer: "Client-side"

            },
            question6 = {
                question: "Which of the following is not a valid JavaScript variable name?",
                answer1: "2names",
                answer2: "_first_and_last_names",
                answer3: "FirstAndLast",
                answer4: "None of the above",
                correctAnswer: "2names"

            },
            question7 = {
                question: "Which of the following can't be done with client-side JavaScript?",
                answer1: "Validating a form",
                answer2: "Sending a form's contents by email",
                answer3: "Storing the form's contents to a database file on the server",
                answer4: "None of the above",
                correctAnswer: "Storing the form's contents to a database file on the server"

            },
            question8 = {
                question: "Which of the following are capabilities of functions in JavaScript?",
                answer1: "Return a value",
                answer2: "Accept parameters and Return a value",
                answer3: "Accept parameters",
                answer4: "None of the above",
                correctAnswer: "Accept parameters"

            },
            question9 = {
                question: " ______ tag is an extension to HTML that can enclose any number of JavaScript ",
                answer1: "<SCRIPT>",
                answer2: "<BODY>",
                answer3: "<HEAD>",
                answer4: "<TITLE>",
                correctAnswer: "<SCRIPT>"

            },
            question10 = {
                question: "Which of the following attribute can hold the JavaScript version?",
                answer1: "LANGUAGE",
                answer2: "SCRIPT",
                answer3: "VERSION",
                answer4: "None of the above",
                correctAnswer: "LANGUAGE"
            }

        ],
        questionsSet2 = [
            question1 = {
                question: "Who is your favorite super hero?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question2 = {
                question: "How many dinos in a mb?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question3 = {
                question: "What is your favorite football team ",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question4 = {
                question: "How many people come from earth",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question1 = {
                question: "So many questions wtf?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question2 = {
                question: "Do you like chicken?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question3 = {
                question: "Wtf boy?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question4 = {
                question: "dam huh?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question1 = {
                question: "So many questions wtf?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question2 = {
                question: "Do you like chicken?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question3 = {
                question: "Wtf boy?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question4 = {
                question: "dam huh?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            }



        ],
        questionsSet3 = [
            question1 = {
                question: "So many questions wtf?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question2 = {
                question: "Do you like chicken?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question3 = {
                question: "Wtf boy?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question4 = {
                question: "dam huh?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question1 = {
                question: "So many questions wtf?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question2 = {
                question: "Do you like chicken?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question3 = {
                question: "Wtf boy?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question4 = {
                question: "dam huh?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question1 = {
                question: "So many questions wtf?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question2 = {
                question: "Do you like chicken?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question3 = {
                question: "Wtf boy?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            },
            question4 = {
                question: "dam huh?",
                answer1: 21,
                answer2: 13,
                answer3: 18,
                answer4: 22,
                correctAnswer: 21

            }



        ]
    ];

    selectQuestions = allQuestions[Math.floor(Math.random() * allQuestions.length)];

    var selectedSet = selectQuestions;

    // Start button
    var continueTest = function() {

        selectQuestion = selectedSet[questionNumber];
        $(".questions").html(selectQuestion.question);
        $(".answer1").html(selectQuestion.answer1);
        $(".answer2").html(selectQuestion.answer2);
        $(".answer3").html(selectQuestion.answer3);
        $(".answer4").html(selectQuestion.answer4);
        questionNumber++;

    };



    $(".start-test").on("click", function() {
        continueTest();
        $(".test-container").addClass("show");
        $(".header").addClass("hide");
    });

    // Fucntion for checking if user has finished the test

    var checkFinished = function() {
        if (correct + incorrect === 10) {
            console.log("done with test");
            console.log("Correct" + correct);
            console.log("incorrect" + incorrect);
            $(".test-container").removeClass("show");
            $(".display-finished").removeClass("hide");
            var percentCorrect = parseInt(correct / 10 * 100);
            $(".display-finished").append("<h1>" + "Score: " + percentCorrect + "%" + "</h1>");
        }


    };
    // Function for checking if answers are correct

    // TODOs make this more DRY


    $(".answer1").on("click", function() {
       

        if (selectQuestion.answer1 === selectQuestion.correctAnswer) {
            console.log("correct");
            correct++;
            console.log(correct);
            
        } else {
            console.log("incorrect");
            incorrect++;
            console.log(incorrect);
        }
        checkFinished();      
        continueTest();
       

    });
    $(".answer2").on("click", function() {

        if (selectQuestion.answer2 === selectQuestion.correctAnswer) {
            console.log("correct");
            correct++;
            console.log(correct);

        } else {
            console.log("incorrect");
            incorrect++;
            console.log(incorrect);
        }
        checkFinished();
        continueTest();

    });
    $(".answer3").on("click", function() {

        if (selectQuestion.answer3 === selectQuestion.correctAnswer) {
            console.log("correct");
            correct++;
            console.log(correct);
        } else {
            console.log("incorrect");
            incorrect++;
            console.log(incorrect);
        }
        checkFinished();
        continueTest();

    });
    $(".answer4").on("click", function() {
        checkFinished();
        if (selectQuestion.answer4 === selectQuestion.correctAnswer) {
            console.log("correct");
            correct++;
            console.log(correct);
        } else {
            console.log("incorrect");
            incorrect++;
            console.log(incorrect);
        }
        checkFinished();
        continueTest();

    });

    $('.finished').on('click', event => {
        event.preventDefault();
        var percentCorrect = correct / 10 * 100;
        console.log(percentCorrect);
        var data = {
            name: "brad",
            rightAnswer: percentCorrect,
            wrongAnswers: incorrect
        }


        firebase.database().ref('users').push({
            name,
            percentCorrect,
            incorrect



        });



    });




});
