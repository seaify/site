$(function() {
  
  $("#submit_subscribe").click(function () {
    
    console.log('submit subscribe')
    $.ajax({
      method: 'POST',
      data: {email: 'ee.com', apiKey: 'e4afe9c4807e960c18bb4811dcb7f65d-us14', status: 'unsubscribed'},
      dataType: 'json',
      url: 'https://us14.api.mailchimp.com/2.0/lists/288e1bb46c/members',
      success: function(res) {
        console.log(res);
      }
    });
    
  });
  
  
});