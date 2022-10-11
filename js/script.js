/*

chiedere all'utente l'email
confrontarla con l'email presente nel archivio 
se cè una email nell'archivio che corrisponde a quella inserita dall'utente stampare a video un messaggio di conferma

*/ 


const wrapper = document.getElementById('wrapper');

const archivio = ['mariorossi@gmail.com','macciocapatonda@gmail.com','mattiarollo89@gmail.com'];
console.log(archivio);

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    const emailUtente = document.getElementById('email').value;
    console.log(emailUtente);
    for(let i = 0; i < archivio.length; i++) {
     console.log(archivio[i]);
    if (emailUtente === archivio[i]) {
        wrapper.append('Email Presente');
        console.log('successo fu');
    }
    }
}
);

/*
giocare a dadi con il compiuter

generare un numero random all'utente tra 1 a 6 e salvarlo in un variabile
generare un numero random al pc e salvarlo in una variabile 
confrontare i due numeri 
se l'utente ha un numero più altro vince
se è più basso perde 
*/






const btnDadi = document.getElementById('genera-numero');
btnDadi.addEventListener('click', function () {
    let message = '';
    //crea un numero random tra 1 e 6 
    let nUtente = Math.floor(Math.random() * 6) +1;
    console.log(nUtente);
    message += ` numero utente ${nUtente}`;

    let nComputer =  Math.floor(Math.random() * 6) +1;
    console.log(nComputer);
    message += ` numero Computer ${nComputer}`;

    if (nUtente > nComputer) {
        console.log('vince utente');
        message += 'hai vinto!!';
    }else if (nUtente == nComputer) {
        console.log('pari');
        message += 'pari';
    }else {
        console.log('vince computer');
        message += 'hai perso, il computer vince'
    }
    wrapper.innerHTML = message;
});
