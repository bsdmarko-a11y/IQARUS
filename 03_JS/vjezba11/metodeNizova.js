/**
 * JavaScript Array Methods Cheat Sheet
 * Prema tvojoj slici, s ispisima u konzolu.
 */

let arr = [1, 2, 3, 4, 5];
console.log("Početni niz:", arr);

// 1. push - Dodaje element na kraj
arr.push(6);
console.log("push(6):", arr); // [1, 2, 3, 4, 5, 6]

// 2. pop - Uklanja zadnji element
arr.pop();
console.log("pop():", arr); // [1, 2, 3, 4, 5]

// 3. shift - Uklanja prvi element
arr.shift();
console.log("shift():", arr); // [2, 3, 4, 5]

// 4. unshift - Dodaje element na početak
arr.unshift(0);
console.log("unshift(0):", arr); // [0, 2, 3, 4, 5]

// 5. concat - Spaja nizove (vraća novi niz)
let concatArr = arr.concat([6, 7]);
console.log("concat([6, 7]):", concatArr); // [0, 2, 3, 4, 5, 6, 7]

// 6. slice - Izrezuje dio niza (od indeksa 1 do 3, bez 3)
let slicedArr = arr.slice(1, 3);
console.log("slice(1, 3):", slicedArr); // [2, 3]

// 7. splice - Uklanja elemente (od indeksa 1, ukloni 2 komada)
arr.splice(1, 2);
console.log("splice(1, 2):", arr); // [0, 4, 5]

// 8. reverse - Okreće redoslijed
arr.reverse();
console.log("reverse():", arr); // [5, 4, 0]

// 9. sort - Sortira elemente
arr.sort();
console.log("sort():", arr); // [0, 4, 5]

// 10. indexOf - Pronalazi indeks elementa
console.log("indexOf(4):", arr.indexOf(4)); // 1

// 11. includes - Provjerava postoji li element
console.log("includes(3):", arr.includes(3)); // false

// 12. find - Vraća PRVI element koji zadovoljava uvjet
console.log("find(x => x > 3):", arr.find(x => x > 3)); // 4

// 13. filter - Vraća SVE elemente koji zadovoljavaju uvjet
console.log("filter(x => x > 3):", arr.filter(x => x > 3)); // [4, 5]

// 14. map - Transformira svaki element
console.log("map(x => x * 2):", arr.map(x => x * 2)); // [0, 8, 10] - (Napomena: na slici je [10, 8, 0] zbog prethodnog reverse-a)

// 15. reduce - Smanjuje niz na jednu vrijednost (suma)
console.log("reduce((sum, x) => sum + x, 0):", arr.reduce((sum, x) => sum + x, 0)); // 9

// 16. join - Spaja elemente u string
console.log("join('-'):", arr.join('-')); // "0-4-5"

// 17. every - Provjerava zadovoljavaju li SVI uvjet
console.log("every(x => x > 2):", arr.every(x => x > 2)); // false

// 18. some - Provjerava zadovoljava li BAREM JEDAN uvjet
console.log("some(x => x > 4):", arr.some(x => x > 4)); // true

// 19. findIndex - Vraća indeks prvog koji zadovoljava uvjet
console.log("findIndex(x => x > 4):", arr.findIndex(x => x > 4)); // 2 (u [0, 4, 5], 5 je na indeksu 2)

// 20. fill - Puni niz istom vrijednošću
arr.fill(9);
console.log("fill(9):", arr); // [9, 9, 9]

// 21. copyWithin - Kopira dio niza na drugu poziciju unutar istog niza
arr.copyWithin(0, 1);
console.log("copyWithin(0, 1):", arr); // [9, 9, 9]

// 22. flatMap - Mapira pa "spljošti" niz
console.log("flatMap(x => [x, x * 2]):", arr.flatMap(x => [x, x * 2])); // [9, 18, 9, 18, 9, 18]

// Iteratori (Vraćaju objekte niza za petlje)
console.log("entries():", arr.entries());
console.log("keys():", arr.keys());
console.log("values():", arr.values());