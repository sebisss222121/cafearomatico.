
$(document).ready(function () {

  var $whatsappButton = $('.whatsapp-button');


  var phoneNumber = '1167946575';


  var popupWidth = 500;
  var popupHeight = 500;


  var popupLeft = (screen.width - popupWidth) / 2;
  var popupTop = (screen.height - popupHeight) / 2;


  $whatsappButton.click(function (e) {
    e.preventDefault();

    var whatsappURL = 'https://web.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent('Hola, estoy interesado en obtener más información.');
    window.open(whatsappURL, 'whatsappPopup', 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + popupLeft + ',top=' + popupTop);
  });
});