$(document).on('click', '.card', function() {
    var card = $(this);


    clickHandlers: function() {
        $('.card').on('click', function() {
          $(this).html('<p>'+$(this).data('cardValue')+'</p>').addClass('selected');
          app.checkMatch();
        })
      },
