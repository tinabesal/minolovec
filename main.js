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
      square.setAttribute('id', i) /* vsakič, ko se ustvari en kvadratek, mu predpišem svoj id, od 0 do 99, set Attridbute je metoda za to  */
      square.classList.add(shuffledArray[i])  //to izvede 100krat
      grid.appendChild(square) /* dodan square v grid  */
      squares.push(square)      /* ga poteisnemo v zgornji prazen seznam  */
  

      //normal click
      square.addEventListener('click', function(e) {
        click(square) //na klik bom prilkicala funkcijo, ki sem jo poimenovala 'click' in
      })
  }

  //zdaj moram dodati sosede - številke zraven bomb: lahko so up, down, east, west, north-east 
//morajo se izpisatu igralcu - to pomeni, da moramo preveriti vseh 8 polj naokrog - naredimo loop:

//add numbers
    for (let i = 0; i < squares.length; i++) { //loop over lenght = 1000
      let total = 0
      const isLeftEdge = (i % width === 0)//js moramo povedati, da nebi preverjali kvadratkov na skrajnem levem ali desnem robu - če je deljiv z width in je ostanek 0, pomeni, da je na levi strani
      const isRightEdge = (i % width === width -1) //to so vrednosti 9, 19, 29,...

      if(squares[i].classList.contains('valid')) { //če vsebuje polje 'valid', pomeni da ni bomba
        if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) total ++ 
          //če je i več kot nič IN ni na levi strani in ne vsebuje bombe, dodamo 1 (če vse 3 držijo!)
          //ta korak moramo narediti še 7x
        if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('bomb')) total ++
          //če je i večji od 9 in ni na desni strani roba in če polje +1 minus cel width vsebuje bombo, we can add one to the total
        if (i > 10 && squares[i - width].classList.contains('bomb')) total ++ //directly above the square, ne preverjamo elvo in sesno
        if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('bomb')) total ++
          // večji od enajst in ni na levi, je upper
        if (i < 98 && !isRightEdge && squares[i +1].classList.contains('bomb')) total ++
          //spodaj, ni na desni
        if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('bomb')) total ++
        if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('bomb')) total ++
        if (i < 89 && squares[i +width].classList.contains('bomb')) total ++
        squares[i].setAttribute('data', total)
      }
    }
  }
  createBoard()

  //napišem click funkcijo zunaj createBoard funkcije
  //CLICK ON SQUARE ACTION
  function click(square) {
    if (square.classList.contains('bomb')) {   //če kliknem na bombo se izpiše game over
      alert('GAME OVER') //namesto alert daš lahko console.log, pop-up, scoreboard,...
    } else {
      let total = square.getAttribute('data') //pomeni get data attribute=get number
      if (total !=0) {   //če vsebuje 0 nas ne zanima, rabimo od 1 naprej, torej če ne vsebuje 0, dodamo v class, da vemo, da je bilo polje preverjeno - dodaj v css barvo, da vemo katerega smo že preverili
        square.classList.add('checked') 
        square.innerHTML = total //rada bi, da hkrati izpiše številka na strani (na html)
        return
      }
    }
  }



})

  
