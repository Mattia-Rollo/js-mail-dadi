/*

chiedere all'utente l'email
confrontarla con l'email presente nel archivio 
se cè una email nell'archivio che corrisponde a quella inserita dall'utente stampare a video un messaggio di conferma

*/ 




const archivio = ['mariorossi@gmail.com','macciocapatonda@gmail.com','mattiarollo89@gmail.com'];
console.log(archivio);

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    const emailUtente = document.getElementById('email').value;
    console.log(emailUtente);
    for(let i = 0; i < archivio.length; i++) {
     console.log(archivio[i]);
    if (emailUtente === archivio[i]) {
        document.getElementById('wrapper').innerHTML = "Email confermata";
    }
    }
}
);