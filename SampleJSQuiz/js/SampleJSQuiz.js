function submitAnswers() {
  var total = 5;
  var score = 0;

  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;

  //alert(q1);



  for (var i = 1; i <= total; i++) {

    if ( eval ('q'+i) == null || eval('q'+i) == '') {
    alert('You missed question  '+ i);
    return false;

    }

  }

  var ans = ["b","a","d","b","d"];

  for (var i = 1; i <= total; i++) {
    if ( eval('q'+i) == ans[i-1]) {
      score++;
    }
  }
  //
  // if (q1 == ans[0]) {
  //   score++;
  // }
  //
  //   if (q2 == ans[1]) {
  //     score++;
  //   }
  //
  //     if (q3 == ans[2]) {
  //       score++;
  //     }
  //
  //       if (q4 == ans[3]) {
  //         score++;
  //       }
  //
  //         if (q5 == ans[4]) {
  //           score++;
  //         }

 var results = document.getElementById('results');
 results.innerHTML= '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span> </h3>';
          alert("your total score is "+score + 'out of'+total);

return false;
}
