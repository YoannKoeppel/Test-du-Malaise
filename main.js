var data = [
    ['Es tu a l IMAC ?', ['oui','non'], ['YLM', '10', '0']],
    ['Combien de temps as tu déjà porté l écharpe du malaise', ['jamais', 'moins d une journée', 'moins d une semaine', 'moins d un mois', 'moins d un an', 'plus d un an'], ['YLM', '0', '5', '10', '15', '20', '30']],
    ['Fais tu beaucoup de blaques beauf ?', ['oui', 'non'], ['M', '30', '0']],
    ['Quand Olivier Faugere fait une blague, rigoles-tu ?', ['oui', 'non'], ['L', '30', '0']],
    ['Sais-tu faire le bruit du phoque ?', ['oui', 'non'], ['Y', '30', '0']],
    ['T appelles tu Margaux ?', ['oui', 'non'], ['M', '20', '0']],
    ['Trouves-tu les éléphants fun ?', ['oui','non'], ['Y', '10', '0']],
    ['As-tu chanté ?', ['oui','non'], ['Y', '30', '0']],
    ['Fais-tu souvent des blagues qui bident ?', ['oui', 'non'], ['L','30', '0']],
    ['Rigoles-tu aux blagues beauf de Margaux ?', ['oui','non'], ['M', '40', '0']],
    ['Volerais-tu les echarpes de tous tes camarades pour les enrouler autour de ton cou ?', ['oui','non'], ['Y', '40', '0']],
    ['A qui t identifierais-tu le plus ?', ['Yoann', 'Zoé'], ['Y', '30', '0']],
    ['T appelles-tu Lucas ?', ['oui', 'non'], ['L', '20', '0']],
    ['Avec Jeff Tuche', ['Tout le monde en Tuche une !', 'Personne ne reste sur la Tuche !', 'Tuche le monde est content'], ['M', '0', '50', '0']],
    ['T es tu deja fait refouler de la concrete à 6h du matin un dimanche ?', ['oui', 'non'], ['L','40', '0']],
    ['As-tu une panoplie complete d accessoires de Noël ?', ['oui','non'], ['M', '40', '0']],
    ['Question suivante', ['oui','non'], ['Y', '30', '10']],
    ['As-tu ris ?', ['oui','non'], ['Y', '20', '0']],
    ['Est-ce que tu me leche le cul ?', ['oui','non'], ['L', '60', '0']],
    ['T appelles-tu Yoann ?', ['oui','non'], ['Y', '20', '0']],
    ['Es-tu malaisant ?', ['oui','non'], ['YLM', '30', '0']],
    'end_test'
];

var lvlYoann = 0, lvlLucas = 0, lvlMargaux = 0;

var pointeurQuestions = 0;


function _$(Id){
    return(document.getElementById(Id));
}

function addPoints(e) {
    if (e.getAttribute('data-cat') != undefined) {
        var cat = (e.getAttribute('data-cat')); 
    }
    
    switch (cat) {
        case 'Y':
            lvlYoann = lvlYoann + parseInt(e.getAttribute('data-points'));
            break;
        case 'L':
            lvlLucas = lvlLucas + parseInt(e.getAttribute('data-points'));
            break;
        case 'M':
            lvlMargaux = lvlMargaux + parseInt(e.getAttribute('data-points'));
            break;
        case 'YL':
            lvlYoann = lvlYoann + parseInt(e.getAttribute('data-points'));
            lvlLucas = lvlLucas + parseInt(e.getAttribute('data-points'));
            break;
        case 'YM':
            lvlYoann = lvlYoann + parseInt(e.getAttribute('data-points'));
            lvlMargaux = lvlMargaux + parseInt(e.getAttribute('data-points'));
            break;
        case 'LM':
            lvlLucas = lvlLucas + parseInt(e.getAttribute('data-points'));
            lvlMargaux = lvlMargaux + parseInt(e.getAttribute('data-points'));
            break;
        case 'YLM':
            lvlYoann = lvlYoann + parseInt(e.getAttribute('data-points'));
            lvlLucas = lvlLucas + parseInt(e.getAttribute('data-points'));
            lvlMargaux = lvlMargaux + parseInt(e.getAttribute('data-points'));
            break;
        default:
        console.log('ERROR');
    }
    
    console.log(lvlYoann, lvlLucas, lvlMargaux);
}

function changementQuestion() {
    var reponses = '';
    var i = 1;
    
    _$("questions").innerHTML = '<p>' + data[pointeurQuestions][0] + '</p>';
   
    data[pointeurQuestions][1].forEach(function(e) {
        reponses += '<p class="reponses" data-cat="' + data[pointeurQuestions][2][0] + '" data-points ="'+ data[pointeurQuestions][2][i] +'">' + e + '</p>';
        i++; 
    })
    _$("reponses").innerHTML = reponses;
    
    pointeurQuestions++;
}

function graphRes() {
    var elementOfHtml = '';
    
    lvlYoann = Math.trunc((lvlYoann / 310) * 200);
    lvlLucas = Math.trunc((lvlLucas / 260) * 200);
    lvlLucas = Math.trunc((lvlMargaux / 270) * 200);
    
    elementOfHtml += '<div id="gauges">';
    elementOfHtml += '<div class="gauge"><div class="fullGauge"><div id="yoannGauge" style="height:'+ lvlYoann +'px;background-color:#3498db;"></div></div><p>Jauge de Yoann</p></div>';
    elementOfHtml += '<div class="gauge"><div class="fullGauge"><div id="lucasGauge" style="height:'+ lvlLucas +'px;background-color:#2ecc71;"></div></div><p>Jauge de Lucas</p></div>';
    elementOfHtml += '<div class="gauge"><div class="fullGauge"><div id="margauxGauge" style="height:'+ lvlMargaux +'px;background-color:#e67e22;"></div></div><p>Jauge de Margaux</p></div>';
    elementOfHtml += '</div>';
    
    
    if (lvlYoann == 200 && lvlLucas == 200 && lvlMargaux == 200) {
        elementOfHtml += "<p>FELICITATION TU AS GAGNE L'ECHARPE DU MALAISE !!!!!</p>";
    }
    else if (lvlYoann > 150 && lvlLucas > 150 && lvlMargaux > 150) {
        elementOfHtml += "<p>WOUAHHHHHHH, mais tu es tellement malaisant que je suis mal à l'aise !</p>";
    }
    else if (lvlYoann > 190) {
        elementOfHtml += "<p>Je crois que je peux te dire bienvenue dans le TD3 :)</p>";
    }
    else if (lvlLucas > 190) {
        elementOfHtml += "<p>Toi tu es du genre gentil mais pas drôle...ça va aller ?</p>";
    }
    else if (lvlMargaux > 190) {
        elementOfHtml += "<p>DU RHUM, DES FEMMES...oh pardon, on dirait que tu m'as contaminé</p>";
    }
    else if (lvlYoann > 100 || lvlLucas > 100 || lvlMargaux > 100) {
        elementOfHtml += "<p>T'es génant mais pas encore assez pour que tout le monde le pense !</p>";
    }
    else if (lvlYoann > 10 && lvlLucas > 10 && lvlMargaux > 10) {
        elementOfHtml += "<p>Des fois ça vient, des fois ça vient pas, mais t'inquiètes pas, y'a pire que toi ;)</p>";
    }
    else if (lvlYoann < 10 && lvlLucas < 10 && lvlMargaux < 10) {
        elementOfHtml += "<p>Euhhhhhhh...tu es sûr d'avoir répondu honnêtement ? </p>";
    }
    else {
        elementOfHtml += "<p>Si tu as ce message c'est que j'ai oublié une possibilité :(</p>";
    }
    
    elementOfHtml += "<p>Ton score est de : "+ (lvlLucas + lvlMargaux + lvlYoann) +"</p>";
    
    _$('mainSection').innerHTML = elementOfHtml;
}

function gestionQuestions(e) {
    console.log(e.target);
    
    if(e.target.className == "reponses") {
        if (data[pointeurQuestions] != 'end_test') {
            addPoints(e.target);
            changementQuestion();
        }
        else {
            graphRes();
        }
    }
}
_$('reponses').addEventListener('click', gestionQuestions, false);