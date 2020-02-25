$(window).scroll(function () {
   if ($(this).scrollTop() > 489) {
      $('#nav-bar').addClass('nav-scrolled');
   } else {
      $('#nav-bar').removeClass('nav-scrolled');
   }

   if ($(this).scrollTop() > 325) {
      $('#nav-bar-auth').addClass('nav-scrolled');
   } else {
      $('#nav-bar-auth').removeClass('nav-scrolled');
   }
});