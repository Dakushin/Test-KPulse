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
    /*DeleteChild(list)*/
    for (let index = 0; index < data.total_results; index++) {
        let newdiv = document.createElement('div');
        let div = document.createElement('div')
        let newP = document.createElement('p');
        let btn2 = document.createElement('BUTTON');
        let pbutton = document.createElement('p');
        pbutton.textContent = "En savoir plus";
        newP.textContent = data.etablissement[index].nom_raison_sociale;
        console.log(newP);
        list.append(newdiv);
        newdiv.append(newP);
        newdiv.append(btn2);
        newdiv.append(div)
        btn2.append(pbutton);
        btn2.addEventListener("click", function() {
            DeleteChild(div)
            let infosup1 = document.createElement('p');
            let infosup2 = document.createElement('p');
            let infosup3 = document.createElement('p');
            infosup1.textContent = "siren : " + data.etablissement[index].siren
            infosup2.textContent = "siret : " + data.etablissement[index].siret
            infosup3.textContent = "localisation : " + data.etablissement[index].geo_adresse
            div.append(infosup1);
            div.append(infosup2);
            div.append(infosup3);
          });
    }
}

function DeleteChild(object)
{
    while(object.firstChild)
    {
        object.removeChild(object.lastChild)
    }
    
}
