console.log(data);

var questions = ['Aimes-tu les cookies ?',
                 'Penses-tu que les éléphants sont fun ?',
                 'Es-tu malaisant ?'];
var pointeurQuestions = 0;

function _$(Id){
    return(document.getElementById(Id));
}

function changementQuestion() {
    _$("reponses").innerHTML = '<p>' + questions[pointeurQuestions] + '</p>';
    pointeurQuestions++;
}
_$('wrapper').addEventListener('click', changementQuestion, false);

/*function AfficheSelection(){
            var T=Retourne_Info_Selection_Id("Liste1");
            _$("Affiche").innerHTML="Index"+T.I+" <br />Texte="+T.T+" <br />Valeur="+T.V+"<br />";
            _$("Image").src=T.V;
        }     
        _$('Liste1').addEventListener('click', AfficheSelection, false);*/