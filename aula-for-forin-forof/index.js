import {getPeople} from './starwarsS.js';

async function main() {
    const starwarspeople = await getPeople(1);
    const totalheight = starwarspeople.reduce((total, person) => {
        total += Number(person.height);
        return total;
    }, 0);
    console.log('média de altura:', totalheight / starwarspeople.length);





        // filter
    // const starwarspeoplefiltered = starwarspeople
    // .filter(person => {
        //  return person.height > 200;
    // })
    // .map(person => {
    // return  {name: person.name, height: person.height}
    // });
    // console.log(starwarspeoplefiltered);



        // . Map
    // const starwarspeoplenames = starwarspeople
    // .map((person) => {
    // const name = person.name;
    // const heigth = person.heigth;
    // const {name, heigth, gender} = person;
    // return { name, heigth, gender };
    // });
    // console.log(starwarspeoplenames);


    // for ,forin, forof 
    //    for (let i=0; i<starwarspeople.length; i++) {
    // console.log(starwarspeople[i].name);
    //    }

    // for(let propPerson in starwarspeople[0]) {
    // console.log(starwarspeople[0][propPerson]);
    // }

    // for(let person of starwarspeople) {
    // console.log(person.name);
    // }

}

main();