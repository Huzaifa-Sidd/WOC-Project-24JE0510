

let str1 = "apple banana cat dog elephant fish grape house ice juice kite lion moon notebook orange pen queen rabbit sun tree umbrella vase water xray yellow zebra air ball car drum egg frog game hat insect jam key lamp mouse net owl pillow quilt rock ship table uncle van whale yoyo ant box chair desk ear fan goat hill ink jar kite leaf moon nail octopus pan quilt ring star tent umbrella vase window yolk zebra acorn boat cloud desk eye flag gate hand ice jelly kite lamp mug nail ocean pig quilt ring snake tent unicorn vase wheel yarn zipper animal bread cheese drum egg feather grass house island jacket king lemon mountain nest owl pot quill river shell toad umbrella vest worm yacht zero arrow balloon cup dog elephant feather garden hat island jacket kite leaf moon net octopus pan quilt rock star tent umbrella vase window xylophone yarn zebra arm ball cat doll egg fan gate hat ink jar kite lamp moon net octopus pot quilt rock star tent umbrella vase wheel yarn zebra ant ball chair desk ear fish gate hat ink jar key lamp moon net owl pot quilt ring star tent umbrella vase window xylophone yarn zebra apple bag cup doll egg fan gate hat ice jar kite lamp moon net octopus pot quilt rock star tent umbrella";
let str2 = "In quaint village , peculiar box was stumbled upon by little Mia . Hidden under roots , the lid was lifted Out sprang tiny dragon startling her . A cheerful greeting was given by the dragon Astonishment was felt by Mia A whisper about wish granting was heard . After careful thought , courage was requested With a nod the dragon vanished Years passed Strength and fearlessness were gained by Mia Numerous trials were faced , and every obstacle was conquered Vivid memories of that magical encounter remained in her heart . Life brimmed with adventures , each day a testament to newfound bravery . Noticed by villagers , her transformation was shared through tales One evening story was recounted under the starry sky . A gift of courage from a dragon was mentioned Captivation and inspiration were felt by listeners Strength and resilience became symbols attributed to Mia Her legend continued to inspire countless souls for generations";
let str3 = "anathema Antediluvian anthropomorphize apotheosis appellation apropos arcane ascetic asperity assiduous bromide byzantine cacophony Cajole calumny captious castigate cataclysm chicanery circumlocution circumspect coalesce cogent commensurate complaisant Concomitant conflagration trenchant truculent tumultuous turpitude ubiquitous vacillate variegated Veracity verbose vicissitude vilify vindicate virulent vitiate vituperative vociferous Voluble voracious wanton wistful zany zealous legerdemain libertine lissome loquacious luminous magnanimous malinger manifold mendacious mercurial meretricious munificent myopic nefarious neophyte obdurate obfuscate germane grandiloquent gregarious Halcyon hegemony heterodox homogeneous iconoclast idiosyncratic ignominious imbroglio impecunious impugn Incendiary incipient indefatigable indolent ineffable ineluctable insouciant internecine intransigent inveterate irascible ebullient eclectic edify effulgent egregious egress encomium enervate enigmatic ennui ephemeral Equanimity eschew evanescent exacerbate exculpate execrable exigent exorbitant expatiate expiate expunge Extricate facetious fatuous fecund felicitous ferrous";



let bawal = document.querySelector(".time");
timeButtons = document.querySelectorAll(".timeu");
let timer = 30;
let difficulty = 'easy';
let difficultyBtns = document.querySelectorAll(".diffi");
console.log(bawal);
console.log(timeButtons);
let maiBtataHaiWords = str1;
let selectedBttn = 30;
let xx;

console.log(timeButtons[0]);

// let t = timeButtons[0].innerHTML;

timeButtons.forEach(tymBt => {
    tymBt.addEventListener('click', (e)=> {
        document.querySelector('.timeu.selectedd')?.classList.remove('selectedd');
        tymBt.classList.add('selectedd');
        timer = e.target.innerHTML;
        tymBt.blur();

        if(timer == 120)
        {
            xx = 120;
        }
        else if(timer == 60)
        {
            xx = 60;
        }
        else if(timer == 30)
        {
            xx = 30;
        }
        selectedBttn = xx;
        newGame();
        
    })
});


difficultyBtns.forEach(dBttn => {
    dBttn.addEventListener('click', (e)=>{
        document.querySelector('.diffi.selectedd')?.classList.remove('selectedd');
        dBttn.classList.add('selectedd');
        difficulty = e.target.innerHTML;
        console.log(difficulty);
        dBttn.blur();
        
        if(difficulty ==='easy')
        {
            maiBtataHaiWords = str1;
        }
        else if(difficulty === 'medium')
        {
            maiBtataHaiWords = str2;
        }
        else if(difficulty === 'hard')
        {
            maiBtataHaiWords = str3;
        }
        newGame();

    })
});










// let maiBtataHaiWords = str1;
// if(difficulty ==='easy')
// {
//     maiBtataHaiWords = str1;
// }
// else if(difficulty === 'medium')
// {
//     maiBtataHaiWords = str2;
// }
// else if(difficulty === 'hard')
// {
//     maiBtataHaiWords = str3;
// }




























// const words= maiBtataHaiWords.split(" ");
















//     allTimeBtns.forEach(bt => {
//         bt.addEventListener('click', (e) => {
//             selectedBttn = e.target.innerHTML;
            
//         })
//     });

// allTimeBtns.forEach(bt => {
//     bt.addEventListener('click', (e) => {
//         selectedBttn = e.target.innerHTML;
        
//     })
// });
























































// const wordsCount=words.length;


































// let x = selectedBttn;
// const gameTime= (x-1)*1000;
































window.timer= null;
window.gameStart = null;

function addClass(el, name){
    el.className+=' ' +name;
}

function removeClass(el, name){
    el.className=el.classList.remove(name);
}
//SELECTING A TIME BUTTON
//make selection

//register click event




// allTimeBtns.forEach(bt => {
//     bt.addEventListener('click', (e) => {
//         selectedBttn = e.target.innerHTML;
//         console.log(selectedBttn);
//     })
// });


// function selectTimeDur(){
//     // let thirty = document.querySelector("#30");
//     // let sixty = document.querySelector("#60");
//     // let onetwenty = document.querySelector("#120");
    


// }

 var gameTime;





// function randomWord(){
//     const randomIndex=Math.floor(Math.random() * wordsCount);
//     return words[randomIndex];
// }
let z=0;
function formatWords(word){
    return `<div class="word"><span class="letter">${word.split("").join('</span><span class="letter">')}</span></div>`;
}
var gameTime;
function newGame(){
    window.timer= null;
    z = 0;
    const words= maiBtataHaiWords.split(" ");
    const wordsCount=words.length;
    function randomWord(){
        const randomIndex=Math.floor(Math.random() * wordsCount);
        return words[randomIndex];
    }

    let x = selectedBttn;
    gameTime= (x-1)*1000;


    let generdText = document.getElementById("words");
    generdText.innerHTML="";
    for(let i=0; i<=200; i++)
    {
        generdText.innerHTML += formatWords(randomWord());
    }
    addClass(document.querySelector(".word"), "current");
    addClass(document.querySelector(".letter"), "current");
    document.querySelector("#wordsWrapper").classList.remove("over");
    document.querySelector("#restartTestButton").classList.remove("over");
    document.querySelector("#spacegiver").classList.remove("over");
    document.querySelector("#result").classList.remove("over");
    document.querySelector(".statss").classList.remove("over");
    document.querySelector(".morestats").classList.remove("over");
    document.querySelector(".bottom").classList.remove("over");
    document.querySelector(".restarttt").classList.remove("over");


}

function resetTimer(){
    clearInterval(window.timer);
    window.timer = null;
    window.gameStart = null;
    document.querySelector(".time").innerHTML = "game resetted";
    let spacewow = document.querySelector("#spacegiver");
    spacewow.style.height = "47.5px";

    //move cursor in resetTimer
    // const nextLetter = document.querySelector(".letter.current");
    // const nextWord= document.querySelector(".word.current");
    const cursor = document.getElementById("cursor");
    cursor.style.top = '285px';
    cursor.style.left = '128px';
} 
// WPMMMM

// const totWords=[...document.querySelectorAll('.word')];
// const lastTypedWord = document.querySelector('.word.current');
// const lastTypedLetter = document.querySelector('.letter.current');
// const lastTypedWordIdx = totWords.indexOf(lastTypedWord);
// const lastTypedLetterIdx = lastTypedWord.slice(0, lastTypedWord.indexOf(lastTypedLetter));
// const typedWords = totWords.slice(0, lastTypedWordIdx);
// const correctWords = typedWords.filter((word) =>{
//     const letters = [...word.children];
//     const redLetters = letters.filter(letter => {letter.className.includes('wrong')});
//     const correctLetters = letters.filter(letter => {letter.className.includes('correct')});
// })




// //COUNT CORRECTLY TYPED LETTERS
// let correctLetterCount = 0;
// typedWords.forEach((word) => {
//     const letters = [...word.children];
//     const correctLetters = letters.filter(letter => {letter.className.includes('correct')});
//     correctLetterCount += correctLetters.length;
// })


// //COUNT WRONGLY TYPED LETTERS
// let wrongLetterCount = 0;
// typedWords.forEach((word) => {
//     const letters = [...word.children];
//     const wrongLetters = letters.filter(letter => {letter.className.includes('wrong')});
//     wrongLetterCount += wrongLetters.length;
// })



    const totWords=[...document.querySelectorAll('.word')];
    const lastTypedWord = document.querySelector('.word.current');
    const lastTypedLetter = document.querySelector('.letter.current');
    const lastTypedWordIdx = totWords.indexOf(lastTypedWord);
    const typedWords = totWords.slice(0, lastTypedWordIdx);





function getWPM(){
    const wpmm = ((z)/(5 * gameTime)) * 60000;
    const wpm = (Math.round(wpmm*100))/100;
    console.log("WPM is", wpm);
    return wpm;
}

function getAccuracy(){
    const totWords=[...document.querySelectorAll('.word')];
    const lastTypedWord = document.querySelector('.word.current');
    const lastTypedWordIdx = totWords.indexOf(lastTypedWord);
    const typedWords = totWords.slice(0, lastTypedWordIdx+1);

    let correctLetterCount = 0;
    let wrongLetterCount = 0;
    typedWords.forEach((word) => {
        console.log(word);
        const letters = [...word.children];

        for(let letter of letters){
            if(letter.classList.contains("correct")){
                correctLetterCount++;
            }
            if(letter.classList.contains("wrong")){
                wrongLetterCount++;
            }
        }
        // const correctLetters = letters.filter((letter) => letter.classList.contains='correct');
        // correctLetterCount += correctLetters.length;
        // const wrongLetters = letters.filter((letter) => letter.classList.contains='wrong');
        // wrongLetterCount += wrongLetters.length;
        console.log(correctLetterCount);
        console.log(wrongLetterCount);
    })

    console.log(correctLetterCount);
    console.log(wrongLetterCount);

    const accuracyyy = ((correctLetterCount)/((correctLetterCount)+(wrongLetterCount))) * 100;
    const accuracy = (Math.round(accuracyyy*100))/100;
    console.log("Accuracy is", accuracy+'%');
    return accuracy;
}


function gameOver(){
    clearInterval(window.timer);
    addClass(document.querySelector("#wordsWrapper"), "over");
    addClass(document.querySelector("#restartTestButton"), "over");
    addClass(document.querySelector("#spacegiver"), "over");
    addClass(document.querySelector("#result"), "over");
    addClass(document.querySelector(".statss"), "over");
    addClass(document.querySelector(".morestats"), "over");
    addClass(document.querySelector(".bottom"), "over");
    addClass(document.querySelector(".restarttt"), "over");
    console.log(z);
    const a = getWPM()
    const b = getAccuracy()
    document.querySelector(".wpm").innerHTML = `WPM : ${a}`;
    document.querySelector(".accuracy").innerHTML = `Accuracy is ${b}%`;
    document.querySelector(".timetaken").innerHTML = `Time taken: ${(gameTime+1)/1000}`;
}


// const modal1 = document.querySelectorAll("#modal1");
// const modal2 = document.querySelectorAll("#modal2");
//INITIALIZE KARTE HI ERROR AARHA HAI...



newGame();




const keyPp = document.getElementById('words');
console.log(keyPp);
document.addEventListener('keyup',  (ev)=>{
    const key= ev.key;
    const currentWord = document.querySelector(".word.current");
    const currentLetter = document.querySelector(".letter.current");
    const expected = currentLetter?.innerHTML || " ";
    const isLetter = key.length ===1 && key !==" ";
    const isSpace = key.length ===1 && key ===" ";
    const isBackspace = key === 'Backspace';
    const isFirstLetter = currentLetter === currentWord.firstChild;
    
    let spacewow = document.querySelector("#spacegiver");
    const timerShow = document.querySelector(".time");

    
    if(document.querySelector("#wordsWrapper.over"))
    {
        return;
    }
    console.log({key, expected});


    if(!window.timer && isLetter)
    {
        window.timer = setInterval(() =>{
            if(!window.gameStart)
            {
                window.gameStart = (new Date()).getTime();
            }
            const currentTime = (new Date()).getTime();
            const msPassed = currentTime - window.gameStart;
            const sPassed = Math.round(msPassed/1000);
            const sLeft = (gameTime / 1000) - sPassed;

            if(sLeft > 0){
                document.querySelector(".time").innerHTML = sLeft +'';
            }
            else{
                document.querySelector(".time").innerHTML = 'Time Over';
                gameOver();
                return;
            }
            
        }, 1000)
        // alert("start timer");
    }

    if(isLetter)
    {
        z++;
        timerShow.style.color='#F9C700';
        spacewow.style.height = "47.5px";
        if(currentLetter)
        {
            addClass(currentLetter, key === expected ? 'correct' : 'wrong');
            currentLetter.classList.remove("current");
            if(currentLetter.nextSibling)
            {
                addClass(currentLetter.nextSibling, 'current');
            }
        }
        else
        {
            const incorrectLetter = document.createElement('span');
            incorrectLetter.innerHTML = key;
            incorrectLetter.className = 'letter incorrect extra';
            currentWord.appendChild(incorrectLetter);
        }
    }

    if(isSpace)
    {
        z++;
        if(expected!== ' ')
        {
            const lettersToInvalidate = [...document.querySelectorAll('.word.current .letter:not(.correct)')];
            lettersToInvalidate.forEach(letter => {
                addClass(letter, 'wrong');
            });
        }
        currentWord.classList.remove("current");
        addClass(currentWord.nextSibling, 'current');
        if(currentLetter)
        {
            currentLetter.classList.remove("current");
        }
        addClass(currentWord.nextSibling.firstChild, 'current');
    }

    if(isBackspace)
    {
        if(currentLetter && isFirstLetter)
        {
            //make prev word current, last letter of it current
            currentWord.classList.remove("current");
            addClass(currentWord.previousSibling, "current");
            currentLetter.classList.remove("current");
            addClass(currentWord.previousSibling.lastChild, "current");
            currentWord.previousSibling.lastChild.classList.remove("wrong");
            currentWord.previousSibling.lastChild.classList.remove("correct");

        }
        if(currentLetter && !isFirstLetter)
        {
            //move back one letter, invalidate letter
            currentLetter.classList.remove("current");
            addClass(currentLetter.previousSibling, "current");
            currentLetter.previousSibling.classList.remove("wrong");
            currentLetter.previousSibling.classList.remove("correct");
        }
        if(!currentLetter)
        {
            addClass(currentWord.lastChild, 'current');
            currentWord.lastChild.classList.remove("wrong");
            currentWord.lastChild.classList.remove("correct");
        }
    }


    //move lines/words
    if(currentWord.getBoundingClientRect().top > 365)
    {
        const words = document.querySelector("#words");
        const margin = parseInt(words.style.marginTop || '0px');

        words.style.marginTop = (margin-55) + 'px';
    }
    



    // move cursor
    const nextLetter = document.querySelector(".letter.current");
    const nextWord= document.querySelector(".word.current");
    const cursor = document.getElementById("cursor");
    cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 2 + 'px';
    cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';
    if(nextLetter)
    {
        cursor.style.left = nextLetter.getBoundingClientRect().left + 'px';
    }
    else
    {
        cursor.style.left = nextWord.getBoundingClientRect().right + 'px';
    }
    
});



const retry = document.querySelector("#restartTestButton");
console.log(retry);
retry.addEventListener('click', () => {
    resetTimer();
    retry.blur();
    newGame()
})

const restartGame = document.querySelector(".restarttt");
restartGame.addEventListener('click', () => {
    resetTimer();
    restartGame.blur();
    newGame()
})