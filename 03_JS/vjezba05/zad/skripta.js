const rezultat = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click', () => {
    rezultat.innerHTML = ''

    // idem pokupiti vrijednosti koje je unio korisnik (String)
    const aString = document.getElementById('a').value
    const bString = document.getElementById('b').value
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value

    const zadatak = document.getElementById('zadatak').value

    if (zadatak === '1') {

        let poruke = ''

        // počinje 1. zadatak
        if (!aString) { //falsy, aString===''
            poruke += ' Unesite vrijednost A'
        }

        const a = Number(aString)

        if (!a) { // falsy, a je NaN
            poruke += ' A nije broj'
        }

        // ovdje sam 100% siguran da mi je a broj

        if (!bString) {
            poruke += ' Unesite vrijednost B'
        }

        const b = Number(bString)

        if (!b) {
            poruke += ' B nije broj'
        }

        if (poruke) {
            rezultat.innerHTML = poruke
            rezultat.style.color = 'red'
            return
        }

        // ovdje sam 100% siguran da su a i b brojevi

        //rezultat.innerHTML = a > b ? a : b
        if (a === b) {
            rezultat.innerHTML = 'Jednaki su'
        } else if (a > b) {
            rezultat.innerHTML = a
        } else {
            rezultat.innerHTML = b
        }


        //rezultat.innerHTML = a === b ? 'Jednaki su' : a > b ? a : b

        rezultat.style.color = 'green'


        // završava prvi zadatak
    }

    if (zadatak === '2') {
        // počinje drugi zadatak

        // završava drugi zadatak
    }




    // završava click funckija
})