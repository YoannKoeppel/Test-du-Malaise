var data = [
    ['Trouves-tu les éléphants fun ?', ['oui','non'], ['Y', '50']],
    ['As-tu ris ?', ['oui','non'], ['Y', '50']]
];

var pointeurQuestions = 0;

function _$(Id){
    return(document.getElementById(Id));
}

function changementQuestion() {
    var reponses = '';
    
    _$("questions").innerHTML = '<p>' + data[pointeurQuestions][0] + '</p>';
   
    data[pointeurQuestions][1].forEach(function(e) {
        reponses += '<p>' + e + '</p>';
    })
    _$("reponses").innerHTML = reponses;
    
    pointeurQuestions++;
}
_$('wrapper').addEventListener('click', changementQuestion, false);

/*function AfficheSelection(){
            var T=Retourne_Info_Selection_Id("Liste1");
            _$("Affiche").innerHTML="Index"+T.I+" <br />Texte="+T.T+" <br />Valeur="+T.V+"<br />";
            _$("Image").src=T.V;
        }     
        _$('Liste1').addEventListener('click', AfficheSelection, false);*/