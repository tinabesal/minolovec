/*  ustvarimo dokument, vsa naša vsebina se bo zapisala znotraj oklepajev, s tem zagotovimo, da se html file loada pred js
*/

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')  /* piko uporabimo, da povemo js, da iščemo class name. zdaj js ve, da iizbere div ali class iz html dokumenta in ga imenuje grid, da ga lahko uporabimo kasneje v JS kot grid.   */
 /* const flagsLeft = document.querySelector('#flags-left')
  const result = document.querySelector('#result') */
  let width = 10 /* povemo js, da bo mreža iz 10 kvadratkov */
  let squares = [] /*prazen*/

    //create Board
    function createBoard() {     /* poimenujemo funkcijo create board  */
      for(let i = 0; i < width*width; i++) {/* let i = 0 pomeni, da se bo izvajalo as many time as I want. Ker bi rada, da ima moja mreža 1
    100 kvadratkov, določim, da se bo loop izvedel 100x oz širina*višina,... i++ pomeni, da se bo izvedel od 0 do 99, po 1 */
        const square = document.createElement('div')/* <-- to bi radi, da se izvede 100x, da se ustvari 100 divov */
        square.setAttribute('id', i) /* vsakič, ko se ustvari en kvadratek, mu predpišem svoj id, od 0 do 99, set Attridbute je metoda za to  */
        grid.appendChild(square) /* dodan square v grid  */
        squares.push(square)      /* ga poteisnemo v zgornji prazen seznam  */
      }  
    } 

    createBoard()

  })
    
    
    