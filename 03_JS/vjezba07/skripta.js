// nizovi, polja, arrays
// nizovi u strukture podataka
// niz omogućuje pohranjivanje više vrijednosti u jednu varijablu

// prazan niz
const prazanNiz = []

console.log(prazanNiz)

// svaki niz ima dužinu
console.log(prazanNiz.length)

// moram pohraniti 12 prosječnih temperatura od siječnja do prosinca u osijeku
const temp = [4, 1, 9, 15, 17, 27, 30, 33, 26, 18, 14, 8,] // nakon zadnjeg elementa može i ne mora ići ,

console.log(temp)
console.table(temp)

// prvi element niza je na indexu 0
console.log(temp[0])

// zadnji element niza
console.log(temp[temp.length-1])

// ispisati vrijednost 27
console.log(temp[5])

// temp = [] Uncaught TypeError: Assignment to constant variable.

// moguće je mijenjati vrijednosti elemenata niza
temp[5] = 28
console.table(temp)

temp.length=10
console.table(temp)

temp.length = temp.length + 1 
console.log(temp)
console.log(temp[temp.length-1])
temp[20]=77
console.log(temp)


const mjesta = [
    'Osijek', // index 0
    'Zagreb', // index 1
    'Split', // index 2
    'Zadar',
    'Dubrovnik',
    'Šibenik'
]

console.table(mjesta)

const grad = document.getElementById('grad')

grad.innerHTML = mjesta[2]

grad.addEventListener('click',()=>{
    grad.innerHTML = mjesta[0]
})

// niz može imati bilo koji tip podatka
// ponavljanje tipova podataka
const ptp = [
    'Edunova', // string
    18, // number
    18.99, //number
    18n, // bigint
    true, //boolean
    [], //array
    undefined,
    null,
    {ime: 'Pero'}, //objekt
    ()=>{}, // funkcija
    Symbol('id')
]

console.log(ptp)
console.log(ptp[8])
console.log(ptp[8].ime)
console.log(ptp[8]['ime'])  // ovo nećemo koristiti

const osobe = [
    {
        ime: 'Tomislav',
        prezime: 'Jakopec',
        godine: 45
    },
    {
        ime: 'Dora',
        prezime: 'Jakopec',
        godine: 19
    },
    {
        ime: 'Lada',
        prezime: 'Jakopec',
        godine: 10
    },
    {
        ime: 'Mara',
        prezime: 'Jakopec',
        godine: 9
    }
]

console.table(osobe)

const suma = osobe[0].godine + osobe[1].godine + osobe[2].godine
            + osobe[3].godine + (osobe[4]?.godine ?? 0)

console.log(suma)


// destrukcija - s lijeve strane = stavlja u [] varijable

const niz = [10, 20, 30]
console.log(niz)
const [n1, n2] = niz // u varijable n1 stavi vrijednost 1 elementa, u n2 stavi vrijednost 2 elementa niza
//const n1 = niz[0] //-> ove dvije linije su zamjenjene gornjoj
//const n2 = niz[1]
console.log(n1, n2)

// način na koji se može isprazniti niz
niz.length = 0

//  = 1 i = 2 su zadane vrijednosti ukoliko ne postoje elementi niza
const [x1 = 1, x2 = 2] = niz

console.log(x1, x2)

// spread operator ...

const brojevi = [1, 2, 3]

const nijeKopija = brojevi // ovo nije kopiranje, već je kreiranje reference na niz brojevi

nijeKopija[0] = 7

console.log(brojevi)

// niz se kopira s spread operator ...

const pravaKopija = [...brojevi]

pravaKopija[0] = 9

console.log(brojevi, pravaKopija)


// kombinacija destrukcija i proširenje
const [t1, ...t2] = brojevi  // t1 uzima vrijdnost iz prvog elementa niza brojevi t2 postaje niz s ostalim elementima iz niza brojevi

console.log(t1, t2)

// spajanje nizova
const temp1 = ['A', 'B', 'C']
const temp2 = ['D', 'E']

const spojeno = [...temp1, ...temp2]

console.log(spojeno)

// OVO GORE su sve jednodimenzionalni nizovi - nazivaju se još i liste

// u JS ES6 postoje i višedimenzionalni nizove

// 2D - tablica, matrica (matrix)

const tablica = [
    [1, 2, 3], // 1. red, index 0
    [4, 5, 6], // 2. red, index 1
    [7, 8, 9]  // 3. red, index 2
]

// želim ispisati broj 6
console.log(tablica[1][2]) // tablica[redIndex][kolonaIndex]

// 3D kocka

// 4D tenzor

