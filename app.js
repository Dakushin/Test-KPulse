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
}

var callBackGetSuccess = function(data) {
    console.log("données api", data);
    let list = document.getElementById("list");
    while (list.firstChild) {
        list.removeChild(list.lastChild);
      }
    for (let index = 0; index < data.total_results; index++) {
        let newdiv = document.createElement('div');
        let newP = document.createElement('p');
        let btn = document.createElement('BUTTON');
        let pbutton = document.createElement('p');
        pbutton.textContent = "En savoir plus";
        newP.textContent = data.etablissement[index].nom_raison_sociale;
        console.log(newP);
        list.append(newdiv);
        newdiv.append(newP);
        newdiv.append(btn);
        btn.append(pbutton);
    }
}
