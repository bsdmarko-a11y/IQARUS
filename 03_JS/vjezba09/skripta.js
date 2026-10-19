// ponavljanje (iteracija), petlje (loops)

// u konzoli ispisati Edunova 10 puta jedno ispod drugog

console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')

// OVO GORE JE NAJGORE MOGUĆE RJEŠENJE i nećemo tako raditi već ćemo naučiti petlje

// klasična for petlja

// for(inicijalna vrijednost varijable; uvjet izlaska iz petlje; uvećanje/umanjenje)

console.log('=========================')

for (let i = 0; i < 10; i++) {
    console.log('Edunova')
}

console.log('=========================')

for (let i = 0; i < 10; i++) {
    console.log(`i=${i + 1}`)
}


console.log('=========================')

let suma = 0

// bilo mi je potrebno 100 koraka (iteracija) da izračunam rezultat
for (let i = 0; i < 100; i++) {
    suma += i + 1
    //debugger
}

console.log(suma)
// bio mi je potreban 1 korak
console.log((100 * (100 + 1)) / 2)

console.log('=========================')

// nekoliko primjera šetanja s petljom
// od većeg prema manjem
for (let i = 10; i > 0; i--) {
    console.log(i)
}

console.log('=========================')

// uvećavam za 2

for (let i = 7; i < 20; i += 2) {
    console.log(i)
}

console.log('=========================')

// simuliram unos od korisnika
const pocetak = 7
const kraj = 20
const uvecanje = 2

// ovo je primjer sintakse kojoj težimo - nema fiksnih vrijednosti
for (let i = pocetak; i < kraj; i += uvecanje) {
    console.log(i)
}

// u for petlju se ne mora ući

for (let i = kraj; i < pocetak; i++) { // i = 20, 20 < 7 -> false
    console.log('Ovo se ne ispisuje jer nije ušao u petlju')
}
console.log('=========================')
// ispiši parne brojeve od 1 do 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// zbroji sve neparne brojeve od 7 do 77

suma = 0
for (let i = 7; i <= 77; i++) {
    if (i % 2 === 1) {
        suma += i
    }
}

console.log(suma)

// prim broj, prosti broj, prime number

let prim = true
const broj = 7300000

for(let i=2;i<broj;i++){
    if(broj % i ===0){
        prim=false
        break
    }else{
        if(i % 10000 === 0){
            console.log(i)
        }
        
    }
    
}

console.log(prim ? 'PRIM' : 'NIJE PRIM')

console.log('=========================')
// petlju možemo preskočiti (nastaviti) i nasilno prekinuti
for(let i=0;i<10;i++){
    if(i === 3){
        continue
    }
    if(i === 7){
        break
    }
    console.log(i)
}

// ugnježđivanje petlji
const x = 10
document.write('<table>')
for(let i=1;i<=x;i++){
    document.write('<tr>')
    for(let j=1;j<=x;j++){
        document.write(`<td>${i*j}</td>`)
    }
    document.write('</tr>')
}
document.write('</table>')

console.log('=========================')

const niz = ['Marija', 'Zvonko', 'Ana', 'Miro', 'Tena', 'Ivo']

for(let i=0; i<niz.length;i++){
    console.log(niz[i])
}


console.log('=========================')
for(let i=niz.length-1; i>=0;i--){
    console.log(niz[i])
}


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
suma=0
for(let i=0;i<osobe.length;i++){
    suma += osobe[i]?.godine ?? 0
}

console.log(suma)

suma=0
for(const o of osobe){ // ovo nije klasični for, ver skraćeni foreach
    suma += o?.godine ?? 0
}

console.log(suma)

// string je niz znakova

const ime='Nina'
// ispisati znak po znak jedno ispod drugog
for(const z of ime){
    console.log(z, z.charCodeAt(0))
    document.write(`&#${z.charCodeAt(0)};`) // html escape char
}

// beskonačna petlja
let brojac = 0
document.write('<hr><h1>')
for(;;){
    document.write(`&amp;#${++brojac}; &#${brojac};<br>`)
    if(brojac>65535){
        break
    }
}
document.write('</h1>')