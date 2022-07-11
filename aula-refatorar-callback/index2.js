import { error } from 'console';
import fs from 'fs';
import {promisify} from 'util';

const readFilePromise = promisify(fs.readFile)


let alunos;

// fs.readFile('./alunos.json', (erro, dados) => {
    // if(erro) {
        // console.error(erro);
        // return;
    // }
    // alunos = JSON.parse(dados);
    // console.log('alunos', alunos);
// 
//  });

readFilePromise('./alunos.json').then((dados) => {
 alunos = JSON.parse(dados);
 console.log('alunos', alunos);
}).catch((error) => {
console.error(error);
});