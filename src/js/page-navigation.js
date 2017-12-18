$(document).ready(function () {
  var url = window.location.href;

  if (url.toLowerCase().indexOf("page") >= 0) {
    // alert("page")
    document.onkeyup = function (e) {
      //left = 37, right = 39
      var keycode = (e.keyCode ? e.keyCode : e.which);
      var currentPage = parseInt(getRequestParam("page"));
      var reExp = 'page=' + currentPage;
      var page = 0;

      // go to previous page
      if (keycode == 37) {
        if ($.isNumeric(currentPage) && currentPage > 1) {
          page = currentPage - 1;
        }
      }

      // go to next page
      if (keycode == 39) {
        if ($.isNumeric(currentPage)) {
          page = currentPage + 1;
        } else {
          page = 2;
        }
      }

      url = url.replace(reExp, "page=" + page);
      window.location.href = url;
    }
  }

  // get param from url
  function getRequestParam(param)
  {
    var res = null;
    try{
      var qs = decodeURIComponent(window.location.search.substring(1));//get everything after then '?' in URI
      var ar = qs.split('&');
      $.each(ar, function(a, b){
        var kv = b.split('=');
        if(param === kv[0]){
          res = kv[1];
          return false;//break loop
        }
      });
    }catch(e){}
    return res;
  }
});