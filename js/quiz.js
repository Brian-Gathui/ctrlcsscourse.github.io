//VARIABLES
// quizTotal = the total number of questions in the registration quiz
var quizTotal = 5;
// quizScore = the initial quiz score which is set to zero
var quizScore = 0;
// quizPoints = the total number of points per correct answer
var quizPoints = 1;
// quizHighest = the total amount of points that can be possible earned by the end of the registration quiz. It is a simple math formula of the quizTotal multiplied with the quizPoints
var quizHighest = quizPoints * quizTotal;
//VARIABLES END


//FUNCTION FOR SESSION STORAGE
function init(){
  // Session Storage is used so that when the browser is reloaded the answers are wiped clean.
  // Session Storage stores the answers for each question (form)
  sessionStorage.setItem("a1","b");
  sessionStorage.setItem("a2","c");
  sessionStorage.setItem("a3","correct")
  sessionStorage.setItem("a4","d");
  sessionStorage.setItem("a5","a");
};
//FUNCTION FOR SESSION STORAGE END


// Event listener to ensure that the function init() runs
window.addEventListener("load", init, false)


//FUNCTIONS THAT OCCUR WHEN WEBPAGE LOADS
// To ensure that all JS actions or functions are only performed when the document has full loaded
$(document).ready(function(){
  // This will hide all questions by grabbing the class .question-form
  $(".quiz-form").hide();
  // This will hide all question answers
  $(".answer-hidden").hide();
  //this will hide all congratulations for correct answers
  $(".correct-answer-congratulations").hide();

  // This is to just display the first question. I grabbed the first question with its id q1
  $("#q1").show();
//FUNCTIONS THAT OCCUR WHEN WEBPAGE LOADS END



  // CLICK FUNCTION #next
  $("#q1 #next").click(function(){
    // Hides all the questions again when clicking the submit button, however this time it will now show the second question (this will be for all questions except the last question (#5))
    $(".quiz-form").hide();
    // function for processing the question 
    process("#q1");
    $("#q2").fadeIn(1500);
    return false;
  });
  $("#q2 #next").click(function(){
    $(".quiz-form").hide();
    // function for processing the question 
    process("#q2");
    $("#q3").fadeIn(1000);
    return false;
  });
  $("#q3 #next").click(function(){
    $(".quiz-form").hide();
    // function for processing the question 
    process("#q3");
    $("#q4").fadeIn(1000);
    return false;
  });
  $("#q4 #next").click(function(){
    $(".quiz-form").hide();
    // function for processing the question 
    process("#q4");
    $("#q5").fadeIn(1000);
    return false;
  });
  $("#q5 #next").click(function(){
    $(".quiz-form").hide();
    // function for processing the question 
    process("#q5");
    $("#quiz-results").fadeIn(1000);
    return false;
  });
  //CLICK FUNCTION #next END



  // CLICK FUNCTION #previous
  $("#q5 #previous").click(function(){
    $(".quiz-form").hide();
    $("#q4").fadeIn(1000);
    return false;
    // function for processing the question will be down below
  });
  $("#q4 #previous").click(function(){
    $(".quiz-form").hide();
    $("#q3").fadeIn(1000);
    return false;
    // function for processing the question will be down below
  });
  $("#q3 #previous").click(function(){
    $(".quiz-form").hide();
    $("#q2").fadeIn(1000);
    return false;
    // function for processing the question will be down below
  });
  $("#q2 #previous").click(function(){
    $(".quiz-form").hide();
    $("#q1").fadeIn(1000);
    return false;
    // function for processing the question will be down below
  });
  // CLICK FUNCTION #previous END



  // LOCK-IN RADIO AND CHECKBOX CHOICE
  // This click function lock in a choice once selected in the questions with radio options
  $('input[type ="radio"][name ="q1"]').click(function(){
    var radioName = "q1";
    $('input[name = "' + radioName + '"]:not(:checked)').attr("disabled", true)
  });

  // This click function lock in a choice once selected in the questions with radio options
  $('input[type ="radio"][name ="q2"]').click(function(){
    var inputRadioName = "q2";
    $('input[name = "' + inputRadioName + '"]:not(:checked)').attr("disabled", true)
  });

  // This click function lock in a choice once selected in the questions with radio options
  $('input[type ="radio"][name ="q4"]').click(function(){
    var inputRadioName = "q4";
    $('input[name = "' + inputRadioName + '"]:not(:checked)').attr("disabled", true)
  });

  // This click function lock in a choice once selected in the questions with radio options
  $('input[type ="radio"][name ="q5"]').click(function(){
    var inputRadioName = "q5";
    $('input[name = "' + inputRadioName + '"]:not(:checked)').attr("disabled", true)
  });

  // This click function locks in a selected checkboxes once a check box is checked
  $('input[type ="checkbox"][name ="q3"]').click(function(){
    var checkBoxName = "q3";
    $('input[name = "' + checkBoxName + '"]:checked').attr("disabled", true)
  });
  // LOCK IN RADIO AND CHECKBOX CHOICE END



  //DISPLAYING MESSAGE BASED ON CORRECT AND INCORRECT ANSWERS
  $('input[type ="radio"][name ="q1"]').click(function(){
    var submitted = $("input[name = q1]:checked") .val();
    if (submitted == sessionStorage.a1){
        $("#c1").show();
    }
    else if (submitted !== sessionStorage.a1){
      $("#i1").show();
    }
  });
  $('input[type ="radio"][name ="q2"]').click(function(){
    var submitted = $("input[name = q2]:checked") .val();
    if (submitted == sessionStorage.a2){
        $("#c2").show();
    }
    else if (submitted !== sessionStorage.a2){
      $("#i2").show();
    }
  });
  $("input[type ='checkbox'][name ='q3']").click(function(){
    var submitted1 = $("input[name ='q3'][id = 'option1']:checked") .val();
    var submitted3 = $("input[name ='q3'][id = 'option3']:checked") .val();
    var submitted2 = $("input[name ='q3'][id = 'option3']:checked") .val();
    var submitted4 = $("input[name ='q3'][id = 'option3']:checked") .val();
    if (submitted1 == sessionStorage.a3 && submitted3 == sessionStorage.a3){
      $("#c3").show();
      $("#i3").hide()
    }
    else if (submitted1 !== sessionStorage.a3 && submitted3 !== sessionStorage.a3){
      $("#i3").show();
      $("#c3").hide();
    }
  });
  $('input[type ="radio"][name ="q4"]').click(function(){
    var submitted = $("input[name = q4]:checked") .val();
    if (submitted == sessionStorage.a4){
        $("#c4").show();
    }
    else if (submitted !== sessionStorage.a4){
      $("#i4").show();
    }
  });
  $('input[type ="radio"][name ="q5"]').click(function(){
    var submitted = $("input[name = q5]:checked") .val();
    if (submitted == sessionStorage.a5){
        $("#c5").show();
    }
    else if (submitted !== sessionStorage.a5){
      $("#i5").show();
    }
  });
  //DISPLAYING MESSAGE BASED ON CORRECT AND INCORRECT ANSWERS END
});
//FUNCTIONS THAT OCCUR WHEN WEBPAGE LOADS

// ANSWER PROCESSING FUNCTION
function process(q){
  if (q == "#q1"){
    var submitted = $("input[name = q1]:checked") .val();
    // We take this submitted value and compare it to the sessionStorage and increment quizScore by one if submitted is equal to sessionStorage of the answer for the question.
    if (submitted == sessionStorage.a1){
      quizScore++;
    }
  };
  if (q == "#q2"){
    var submitted = $("input[name = q2]:checked") .val();
    // We take this submitted value and compare it to the sessionStorage and increment quizScore by one if submitted is equal to sessionStorage of the answer for the question.
    if (submitted == sessionStorage.a2){
      quizScore++;
    }
  };
  if (q == "#q3"){
    var submitted1 = $("input[name = q3][id = 'option1']:checked") .val();
    var submitted3 = $("input[name = q3][id = 'option3']:checked") .val();
    // We take this submitted value and compare it to the sessionStorage and increment quizScore by one if submitted is equal to sessionStorage of the answer for the question.
    if (submitted1 == sessionStorage.a3 && submitted3 == sessionStorage.a3){
      quizScore++;
    }
  };
  if (q == "#q4"){
    var submitted = $("input[name = q4]:checked") .val();
    // We take this submitted value and compare it to the sessionStorage and increment quizScore by one if submitted is equal to sessionStorage of the answer for the question.
    if (submitted == sessionStorage.a4){
      quizScore++;
    }
  };
  if (q == "#q5"){
    var submitted = $("input[name = q5]:checked") .val();
    // We take this submitted value and compare it to the sessionStorage and increment quizScore by one if submitted is equal to sessionStorage of the answer for the question.
    if (submitted == sessionStorage.a5){
      quizScore++;
    }
  };
    // RESULTS NAVIGATION/ SHOW FUNCTION
    $("#quiz-results").html("<h1>Your Final Score is "+ quizScore +" out of 5</h1><p><strong>You will be contacted within three working days <br><i> with your customized course.</i><strong></p><p>Thank You for Participating,<br> Please Navigate to the Registration Form <br> to Continue your Course Registration.</p>")
    // RESULTS NAVIGATION/ SHOW FUNCTION END

};
// ANSWER PROCESSING FUNCTION END
