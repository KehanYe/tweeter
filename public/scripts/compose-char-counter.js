$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const $length = $(this).val().length; //added $ on advice of James B -> signals const uses Jqueery
    // console.log($length)
    const charRemaining = 140 - $length;
    // console.log(charRemaining)
    const $counter = $(this).siblings('.tweet-counter').children('.counter').html(charRemaining);
    console.log(typeof($counter));
    
    (charRemaining < 0) ? $counter.addClass('fontRed') : $counter.removeClass('fontRed');


    // if (charRemaining < 0) {
    //   $counter.addClass('fontRed');
    // } else {
    //   $counter.removeClass('fontRed');
    // }
  });
  

});