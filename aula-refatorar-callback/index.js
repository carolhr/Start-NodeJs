function mensagemgabriel() {
    const promiseMensagemgabriel = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('beba água');
            resolve();
            }, 0); 
    })
    return promiseMensagemgabriel;
}

function mensagemrafael() {
    console.log('bora pra cima');
}

mensagemgabriel().then(mensagemrafael);