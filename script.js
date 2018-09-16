$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown({
        hover: true,
        alignment: 'bottom',
        constrainWidth: false,
        coverTrigger: false
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
  });