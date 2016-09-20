$(function() {
  $(document)
  $('#start').hide();
  //questions
  var questions = [{
      id: 1,
      question: "What’s the best season to visit a winery?",
      choices: ["Spring",
                "Summer",
                "Fall",
                "Every season"],
      answer: 3,
      details: "Every season is wonderful! Spring is when the vineyard is being prepared. In summer everything begins to bloom and ripen. Fall is harvest time and winter is the period for bottling and drinking. You can’t go wrong!"
    }, {
      id: 2,
      question: "What is the most popular wine region in the world?",
      choices: ["Argentina",
                "Brazil",
                "France",
                "Chile"],
      answer: 2,
      details: "France is the most popular wine region in the world."
    }, {
      id: 3,
      question: "What Is wine sediment?",
      choices: ["Alchohole level",
                "Grainy material",
                "Cork",
                "Storage method"],
      answer: 1,
      details: "Wine sediment is the grainy material which settles to the bottom of a wine container. It’s harmless!"
    }, {
      id: 4,
      question: "How do I choose a wine for a dinner party?",
      choices: ["Something sweet",
                "Something with bubbles",
                "Something you enjoy",
                "As long as it's cheap"],
      answer: 2,
      details: "Choose a bottle that you enjoy, and that you think your host will enjoy. A general rule we follow is, if it is a nice dinner party, try to spend at least $20 per bottle. If it’s a more casual affair, $12 should do the trick."
    }, {
      id: 5,
      question: "Why is Rosé pink?",
      choices: ["White grapes were used",
                "Chemical reaction in the barrel",
                "Red grapes were used",
                "Oxidization"],
      answer: 2,
      details: "Red grapes were used to make the wine and a wine gets its color from its skins. When the winemaker crushed the grapes, they allowed the skins to come into contact with the juice for only a brief time, thus the color is pink, instead of red."
    }, {
      id: 6,
      question: "When a label says a wine has certain flavors, are those flavors actually added to the wine?",
      choices: ["No",
                "Only certain ones",
                "Yes",
                "Maybe"],
      answer: 0,
      details: "No, these are just what we call tasting notes. They are a guide for what the wine may taste like to you, but everyone actually tastes different flavors in wine."
    }, {
      id: 7,
      question: "Are all sparkling wines called Champagne?",
      choices: ["No",
                "Yes",
                "Only when there's 14% abv",
                "Sometimes"],
      answer: 0,
      details: "No. Only sparkling wine from the Champagne region of France can be called Champagne."
    }, {
      id: 8,
      question: "What is the most popular red wine in America?",
      choices: ["Pinot Noir",
                "Burgundy",
                "Cabernet Sauvignon",
                "Chardonnay"],
      answer: 2,
      details: "Cabernet Sauvignon in the most popular red wine in America."
    }, {
      id: 9,
      question: "How long does wine last after it's opened?",
      choices: ["8 hours",
                "Two days",
                "One day",
                "1 hour"],
      answer: 2,
      details: "Most wine will last another day open on the counter and up to a week if placed in the fridge."
    }, {
      id: 10,
      question: "Are screwtops bad for A wine?",
      choices: ["Yes",
                "Cork makes the wine",
                "No",
                "Unsophisticated"],
      answer: 2,
      detials: "No, they are actually excellent. They prevent a wine from every being corked. Lots of winemakers are using screwcaps for this very reason. They don’t signify that a wine is cheap."
    }];

    $("#display").hide();
    var container = $('.container-fluid');
    var numberCorrect = 0;
    // Creates and returns the div that contains the questions and the answer selections
    for (i = 0; i < questions.length; i++) {
      container.append("<div class='modal-dialog i-"+i+"' id='"+i+"' ><div class='modal-content'><div class='modal-header'><h3><span class='label label-warning' id='qid'>"+(i+1)+"</span> <span id='question-container'>" + questions[i].question + "</span></h3></div><div class='modal-body'><div class='quiz' id='quiz' data-toggle='buttons'><label class='element-animation1 btn btn-lg btn-primary btn-block' id='0'><span class='btn-label'><i class='glyphicon glyphicon-chevron-right'></i></span>" + questions[i].choices[0]+ "</label><label class='element-animation1 btn btn-lg btn-primary btn-block' id='1'><span class='btn-label'><i class='glyphicon glyphicon-chevron-right'></i></span>" + questions[i].choices[1]+ "</label><label class='element-animation1 btn btn-lg btn-primary btn-block' id='2'><span class='btn-label'><i class='glyphicon glyphicon-chevron-right'></i></span>" + questions[i].choices[2]+ "</label><label class='element-animation1 btn btn-lg btn-primary btn-block' id='3'><span class='btn-label'><i class='glyphicon glyphicon-chevron-right'></i></span>" + questions[i].choices[3]+ "</label></div></div></div></div>");
    }

    $('label.btn').click(function() {
      var questionNum = $(this).closest("div.modal-dialog").attr("id");
      // Convert question number string to number
      var qNum = Number(questionNum);
      console.log("Question number: " + qNum);
      // Correct answer per index
      var correctIndex = questions[questionNum].answer;
      console.log("Correct answer: " + correctIndex);

      var optionPicked = $(this).attr("id");
      console.log("Picked: " + optionPicked);

      // check if answer is correct
      if (optionPicked == correctIndex) {
        swal("Correct");
        numberCorrect++;
        console.log("Number Correct:" + numberCorrect);
      } else {
        swal("Wrong");
      }

      $("div.i-" + questionNum).hide();
      $("div.i-" + (qNum+1) ).show();
      if (qNum > 8) {
        swal("You got " + numberCorrect + " out of 10.");
      }
    })




});
