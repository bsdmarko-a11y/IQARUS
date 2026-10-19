// switch je višestruko grananje
// switch rad s svim tipovima podataka i provjerava s === -> provjera po vrijednosti i po tipu
// sve što se može s switch može se i s if

const ocjena = 5 // ovdje simuliram da je korisnik unio vrijednost

switch(ocjena){
    case 1:
        console.log('Nedovoljan')
        break
    case 2:
        console.log('Dovoljan')
        break
    case 3:
        console.log('Dobar')
        break
    case 4:
        console.log('Vrlo dobar')
        break
    case 5:
        console.log('Izvrstan')
        break
    default:
        console.log('Nije ocjena')
}

const dan = 'sri'

switch(dan){
    case 'Ponedjeljak':
    case 'Utorak':
    case 'Srijeda':
    case 'Četvrtak':
    case 'Petak':
        console.log('Radni dan')
        break
    case 'Subota':
    case 'Nedjelja':
        console.log('Vikend')
        break
    default:
        console.log('Neispravan dan')
}