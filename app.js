'use strict'



function AppelAPI()
{
    var input = document.getElementById("site-search");
    var url = "https://entreprise.data.gouv.fr/api/sirene/v1/full_text/" + input.value + "?per_page=5&page=1";

    /*var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';*/

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        var element = document.getElementById("test");
        element.innerHTML = input.value;
      })
}

var callBackGetSuccess = function(data) {
    console.log("données api", data);
    /*var element = document.getElementById("test");
    element.innerHTML = data;*/
}
