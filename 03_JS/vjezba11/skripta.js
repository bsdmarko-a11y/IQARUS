
const isDev = true

// funkcija je skup naredbi s određenom svrhom, s ciljem višestrukog poziva
// DRY - don't repeat yourselfe

// "klasične" funkcije

// 2 koraka rada s funkcijama: definicija i pozivanje

// 1. ne prima parametre, ne vraća vrijednost - void

// "klasična" funkcija se može pozvati neovisno gdje je definirana
odradi()

// 1.1. definicija
function odradi(){
    let i = 0
    i += 3
    console.log('poziv funkcije 1. odradi', i)
}

// 1.2. poziv
odradi()


document.getElementById('gumb2').addEventListener('click',odradi)

document.getElementById('gumb3').addEventListener('click',function(){
    console.log('Poziv iz bezimene funkcije')
})


// 2. prima parametre, ne vraća vrijednost

// 2.1. definicija
function parniBrojevi(odBroja, doBroja){ // odBroja, doBroja su parametri, odvajaju se zarezom
    for(let i = odBroja; i <= doBroja; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}

parniBrojevi(2,8)
parniBrojevi(100,110)

// korisni primjer 2. vrste funkcije

function log(poruka){
    if(!isDev){
        return // prekida izvođenje funkcije - short curcuiting
    }
    console.log('\n')  // Alt Gr + Q je escape znak a \n je novi red
    console.log('+--------------------------+')
    console.log(poruka)
    console.log('+--------------------------+')
}

log('testiranje log funkcije')


log('Edunova')

// 3. ne prima parametre, vraća vrijednost

// 3.1. definicija
/**
 * Funkcija radi kako je opisano
 * - bez parametara decimalni slučajni broj između 0 i 1
 * - jedan parametar cijeli broja od 0 do parametra
 * - dva parametar cijeli broja između prvog i drugog parametra
 * @param {*} odBroja cijeli broj
 * @param {*} doBroja cijeli broj
 * @returns slučajni broj
 */
function slucajniBroj(odBroja=0, doBroja=0){ // opcionalni parametri: kada varijabli dojelim zadanu vrijednost
    if(odBroja && doBroja){ // koristim truely
        return (Math.random()*(doBroja - odBroja) + odBroja).toFixed(0)
    }

    if(odBroja && !doBroja){ // poslao si prvi parametar, nisi poslao drugi parametar
        return (Math.random()*odBroja).toFixed(0)
    }
    
    
    return Math.random()
}

// 3.2. poziv
slucajniBroj() // funkcija se izvela i rezultat funkcije je "bačen u vjetar"


const sb = slucajniBroj()

log(sb)

log(slucajniBroj())

for(let i=0;i<6;i++){
    console.log(slucajniBroj(1,45))
}

log(slucajniBroj(20))

// 4. prima parametre, vraća vrijednost

// 4.1. definicija
function zbrojPrimBrojeva(odBroja, doBroja, ispis=false){
    let suma = 0, prim = false
    for(let i = odBroja; i <= doBroja; i++){
        if(i < 2){
            continue
        }
        prim = true
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                prim = false
                break
            }
        }
        if(prim){
            if(ispis){
                console.log(i)
            }
            suma += i
        }
    }
    return suma
}

log(zbrojPrimBrojeva(-2,10)) // 17

log(zbrojPrimBrojeva(100,120,true))


// korištenje funkcija (metoda) unutar JS

const ime = 'pero'

// 4. slučaj
log(ime.charCodeAt(0)) // ASCII https://ctf.xfer.hr/images/osint/ascii.png

// 3. slučaj
log(ime.toUpperCase())

// 2. slučaj
console.log('Primio parametar a nije vratio vrijednost')

// 1. slučaj
// OBRADA DOGAĐAJA na stranici


// rekurzija je kada funkcija zove samu sebe uz uvijek prekida rekurzije
// u rekurziji treba paziti na stackoverflow (ne forum)

function zbroji(broj){
    if(broj === 1){
        return 1
    }
    return broj + zbroji(broj - 1)
}


log(zbroji(100))

// hello() Uncaught ReferenceError: Cannot access 'hello' before initialization


// "moderne" funkcije - arrow
// definicija
const hello = () => log('Arrow hello')
// poziv
hello()


const brojevi = (a,b) => {
    const c = a + b
    return [a,b,c]
}

log(brojevi(1,2))

// IIFE - detaljnije čitati

;(()=>{
    console.log('Bezimena funkcija koja se nakon definiranja odmah pozove')
})()



