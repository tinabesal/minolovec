/*  ustvarimo dokument, vsa naša vsebina se bo zapisala znotraj oklepajev, s tem zagotovimo, da se html file loada pred js
*/

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')  /* piko uporabimo, da povemo js, da iščemo class name. zdaj js ve, da iizbere div ali class iz html dokumenta in ga imenuje grid, da ga lahko uporabimo kasneje v JS kot grid.   */
 /* const flagsLeft = document.querySelector('#flags-left')
  const result = document.querySelector('#result') */
  let width = 10 /* povemo js, da bo mreža iz 10 kvadratkov */
  let squares = [] /*prazen*/
  let bombAmount = 20 /* ali je pomemben vrstni red tukaj?*/ 

    //create Board
    function createBoard() {     /* poimenujemo funkcijo create board  */
     
     
          //random dodaj bombe
      const bombsArray = Array(bombAmount).fill('bomb') //arrays so nizi - podobno seznamu, lahko se jih poljubno spreminja,... tukaj naredimo niz dvajsetih indeksov, each index we fill with a string of 'bomb' Metoda fill() spremeni vse elemente v matriki v statično vrednost, vrne spremenjeno matriko
      const emptyArray = Array(width*width - bombAmount).fill('valid')
      //na enak način naredimo še za prosta polja - torej vsa polja - št bomb = 80, poimenujemo valid
      //console.log(bombsArray)
      //console.log(emptyArray)
      // izpišemo, pogledamo v brskalnik v konzolo, da imamo izpisanih 20 bomb in 80 preostalih polj

      //zdaj jih moramo poljubno razvrstiti:
      const gameArray = emptyArray.concat(bombsArray) //ustvari now array iz teh dveh v tem vrstnem redu
      //console.log(gameArray)
      //ustvarimo še zadnji array v katerem premešamo (shuffle) vso vsebino
      const shuffledArray = gameArray.sort(() => Math.random() -0.5) //zakaj -0.5??
      //console.log(shuffledArray)

        
      for(let i = 0; i < width*width; i++) {/* let i = 0 pomeni, da se bo izvajalo as many time as I want. Ker bi rada, da ima moja mreža 1
    100 kvadratkov, določim, da se bo loop izvedel 100x oz širina* višina,... i++ pomeni, da se bo izvedel od 0 do 99, po 1 */
        const square = document.createElement('div')/* <-- to bi radi, da se izvede 100x, da se ustvari 100 divov */
        square.classList.add(shuffledArray[i])  //to izvede 100krat
        square.setAttribute('id', i) /* vsakič, ko se ustvari en kvadratek, mu predpišem svoj id, od 0 do 99, set Attridbute je metoda za to  */
        grid.appendChild(square) /* dodan square v grid  */
        squares.push(square)      /* ga poteisnemo v zgornji prazen seznam  */
      }  
    } 

    createBoard()

  })
    
    
    