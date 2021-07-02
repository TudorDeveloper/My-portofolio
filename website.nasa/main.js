/*-------------------------- Galerie de imagini -------------------*/

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
      panel.classList.add('active'); 
    });
});

function removeActiveClasses(){
    panels.forEach((panel) => {
    panel.classList.remove('active');
    });
}

/*-------------------------- Validare e-mail -------------------*/

var mail = document.getElementById('email');
var mail_e = document.getElementById('email_err');

function verifica1(){
    var mail_text = mail.value;
    if (
        //mail_text.indexOf('@') == -1 ||
        mail_text.indexOf('@') != mail_text.lastIndexOf('@') ||
        mail_text.indexOf('@') < 2  ||
        mail_text.lastIndexOf('.') < mail_text.indexOf('@') + 3 ||
        mail_text.lastIndexOf('.') > mail_text.length - 3
    ){
        // afisam mesaj de eroare in paragraf
        mail_e.innerHTML = 'The email address is incorrect';
    } else {
        // stergem mesajul de eroare din paragraf
        mail_e.innerHTML = '';
    }
} 

/*------------------- Buton de submit ----------------------*/

var check = document.getElementById('bifa')
var send = document.getElementById('abc')

function verifica2(){
   if (check.checked == true ){
       send.removeAttribute('disabled')
   } else {
       send.setAttribute('disabled','disabled')
   }
}
