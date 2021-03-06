// @ Promesas video 13 Carpeta  3

// ==================================
import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () =>  {
//         // Tarea
//         // importen el 
//         const p1 = getHeroeById(2);
//         resolve( p1 );
//         // reject( 'No se pudo encontrar el héroe' );
//     }, 2000 )

// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ) );

// const getHeroeByIdAsync = ( id ) => {

//     return new Promise( (resolve, reject) => {

//         setTimeout( () =>  {
//             // Tarea
//             // importen el 
//             const p1 = getHeroeById( id );
//             if ( p1 ) {
//                 resolve( p1 );
//             } else {
//                 reject( 'No se pudo encontrar el héroe' );
//             }
//         }, 2000 )

//     });


// }


// getHeroeByIdAsync(1)
//     .then( console.log )
//     .catch( console.warn );

// ================================= ( yo ) ===============================================
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const p1 = getHeroeById(id)

            // console.table(p1)

            if (p1 === undefined) {
                reject('No se pudo encontrar el heroe')
            } else {

                resolve(p1)
            }

        }, 2000);
    })
}

getHeroeByIdAsync(1)
    .then(heroe => console.log('Heroe', heroe))
    .catch(err => console.warn(err))


// -------------  otra  forma ===============
// .then(console.log)
// .catch(console.warn) //couando llama a otra funcion recive por para metroa la funcion el el warn()