//suppression du paramètre par défaut de recharge de la page automatique

const form = document.querySelector('form');
// Quand on submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();
});


//validation de l'email
function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}


//verification des champs du formulaire
function verification(){

    let message = [];
    var validname = 0;
    var validemail = 0;
    var validsubject = 0;
    var validmessage = 0;

    //verification du nom
    const yname = document.getElementById("yname");
    if(yname.value  === '' || yname.value == null){
        yname.classList.add('erreur');
        message.push ('Name is required');
        validname = 1;
    }else{
        yname.classList.remove('erreur');
    }

    //verification de l'email
    const ymail = document.getElementById("ymail");
    if(!validateEmail(ymail.value)){
        ymail.classList.add('erreur');
        message.push ('Email is required');
        validemail = 1;
    }else{
        ymail.classList.remove('erreur');
    }
    

    //verification du sujet
    const textsubj = document.getElementById("textsubj");
    if(textsubj.value  === '' || textsubj.value == null){
        textsubj.classList.add('erreur');
        message.push ('Subject is required');
        validsubject = 1;
    }else{
        textsubj.classList.remove('erreur');
    }

    //verification du message
    const textmss = document.getElementById("textmss");
    if(textmss.value  === '' || textmss.value == null){
        textmss.classList.add('erreur');
        message.push ('Message is required');
        validmessage = 1;
    }else{
        textmss.classList.remove('erreur');
    }

    //verification de la validité
    if(validemail == 1 || validmessage == 1 || validname == 1 || validsubject == 1 ){
        const button = document.getElementById("bouton");
        button.classList.add('button');
    }

}


//menu deroulant
function menu(){
    state = document.querySelector('.mobile_nav');
    ancien = document.querySelector('.nav ul');

    if(state.style.display == "none"){
        state.style.display = "block";
    }else{
        state.style.display = "none";
    }
}





