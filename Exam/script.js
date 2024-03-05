$("#btn").click(()=>{
    $("body").toggleClass("dark");
});
  
$(document).ready(function() {
  $('#addTask').click(function() {
    var task = $('#taskInput').val().trim();
    if (task !== '') {
      $('#taskList').append('<li>' + task + '<button class="delete">Delete</button></li>');
      $('#taskInput').val('');
    }
  });

  $(document).on('click', '.delete', function() {
    $(this).parent().remove();
  });

  // Function to vibrate the phone
  function vibratePhone() {
    if ('vibrate' in navigator) {
      navigator.vibrate(200); // Vibrate for 200 milliseconds
    }
  }

  // Trigger vibratePhone function when a task is added or completed
  $('#addTask, .complete').click(function() {
    vibratePhone();
  });
});

