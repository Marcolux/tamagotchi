console.log("I'm working!")



//Starting the Game

const message = document.getElementById('message')

const head = document.getElementById('head')
const age = document.getElementById('age')
const buttonName = document.getElementById('userName')
const gameOver = document.createElement('h1')  
            gameOver.style.color='red'
const start = document.getElementById('start')
const oval = document.getElementById('oval')

const nameIn = document.getElementById('spanName')

//three Bars and three numbers to count food sleep and play

const foodBar = document.getElementById('foodBar')
const playBar = document.getElementById('playBar')
const sleepBar = document.getElementById('sleepBar')

const foodBarStat = document.getElementById('foodBarStat')
const playBarStat = document.getElementById('playBarStat')
const sleepBarStat = document.getElementById('sleepBarStat')

const need = document.getElementById('please')
//button to decrease the counts

const foodButton = document.getElementById('foodButton');
const sleepButton = document.getElementById('sleepButton');
const playButton = document.getElementById('playButton');


let intervalSleep; //globally scoped to use it to use it in other functions
let intervalFood;
let intervalPlay;

//Game Over Message


//Adding the name to the Tamagotchi
buttonName.addEventListener("click", function(){

nameIn.append(`${document.getElementById('nameInput').value} `)

oval.style.display='flex '
head.style.display = 'none '

})

//helper functions

function increment(value, step){ return value+=step}
function renderNum(num){console.log(`${num}`)}




// Four different counts start with the button start

start.addEventListener('click', init)

function  init(){
    initFood()
    initPlay()
    initSleep()
    initAge()
    myMove()
    start.disabled = true ;
    start.style.display='none';
    
}

function initAge(){
    
    let ageCount=0 
    
    intervalAge = setInterval(()=>{
        
        renderNum(ageCount)        
        ageCount = increment(ageCount, 1)
        age.innerText= `${ageCount} `
        
        
        if( sleepBarStat.innerText === '10' || playBarStat.innerText === '10' || foodBarStat.innerText === '10' ) {
            clearInterval(intervalAge)
        } 
        
    }, 6000)   
}

function initFood(){
    
    let foodCount=0 
    let base =750
    
    
    intervalFood = setInterval(()=>{
        
        
        renderNum(foodCount)        
        foodCount = increment(foodCount, 1)
        
        foodBar.style.width = foodCount + "0%";
        foodBarStat.innerText = foodCount 
        
        if (foodCount == 6){
            need.append(' Food, ')
            
        }else if(foodCount >= 10){
            
            gameOver.innerText = `Oh no I Starved!!`
            
            message.append(gameOver)
            
            clearInterval(intervalSleep)
            clearInterval(intervalFood)
            clearInterval(intervalPlay)
        } 
        
        foodButton.addEventListener('click', function (){foodCount = 0})   
        
        
        
        
    }, base)   
    
}

function initPlay(){
    
    
    let playCount=0; 
    let base = 600;
    
    
    intervalPlay= setInterval(()=>{
        
        renderNum(playCount)  
        
        playCount = increment(playCount, 1)
        
        playBar.style.width = playCount + "0%"; 
        playBarStat.innerText = playCount ;
        if (playCount == 6 ){
            need.append('to Play, ')
            
        } else if(playCount >= 10){
            const gameOver = document.createElement('h1')
            gameOver.innerText = `Oh no I Die!!`
            message.append(gameOver)
            
            clearInterval(intervalSleep)
            clearInterval(intervalFood)
            clearInterval(intervalPlay)
        }
        
        playButton.addEventListener('click', function (){playCount = 0} )   
        
    }, base) 
    
}


function initSleep(){
    
    
    let sleepCount =0;
    let base = 500;
    
    
    
    intervalSleep = setInterval(()=>{
        
        
        renderNum(sleepCount)  
        sleepCount = increment(sleepCount,1)
        
        sleepBar.style.width = sleepCount + "0%"; 
        sleepBarStat.innerText = sleepCount ;
        
        if (sleepCount == 6 ){
            
            need.innerText =' to Sleep, '
            
        }else if(sleepCount >= 10){
            
            gameOver.innerText = `Oh no I Die!!`
            message.append(gameOver)
            
            clearInterval(intervalSleep)
            clearInterval(intervalFood)
            clearInterval(intervalPlay)
        }else if (sleepCount < 6) {
            need.innerText =' '
        }
        
        sleepButton.addEventListener('click', function(){ sleepCount=0 })
        
    }, base)
    
}


let moving = null;

function myMove() {

  let elem = document.getElementById("animation");
  let pos = 0;
  clearInterval(moving);

  moving = setInterval(()=>{
    renderNum(pos)  
    pos = increment(pos,.5)
    
    elem.style.left = pos + 'vh';

    if( sleepBarStat.innerText === '10' || playBarStat.innerText === '10' || foodBarStat.innerText === '10' ) {
        clearInterval(moving)
        elem.style.background = `url('/css/doh.jpeg')`
        elem.style.backgroundSize = `cover`
        elem.style.backgroundPosition = `center`
        elem.style.height = `17vh`
        elem.style.width = `23vh`
        

    } else if(pos > 35){
        pos = 0
    }
  }, 100);
  
  console.log(pos)
  }

class Tamagotchi {
    constructor(name, age, food, play, sleep){
    
        this.name = nameIn.append(`${document.getElementById('nameInput').value} `)
        this.age = ageCount;
        this.food = foodCount;
        this.play = playCount;
        this.sleep = sleepCount;
     
        init()
        
    }
  
}








 