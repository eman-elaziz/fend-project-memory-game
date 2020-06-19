

 
/* Author : eman abd elaziz    email:eman.elaziz88@gmail.com
content :logic of fend memory game 

*/
//-----------------------------controler area -----------------------

var openCard = []; // only for two card
var counter = 0; //counter of moving
var numberStar=0;// number of star rate 
var ratingStar = document.querySelector('.fa fa-star');//$('i'); // number of rating star
var click =0; // number of click 
var interval;
var timer=document.querySelector('.timer');
timer.innerHTML='0 mins: 00 secs';
var theEnd=false;
CardsList = CardsIniti();//get cards from dom

 const shuffledCard=shuffle(CardsList);
displayCards();
var click=0;
//add eventlistener 
const cardClick= document.getElementsByClassName("card");
for(i=0;i<cardClick.length;i++){
cardClick[i].addEventListener('click',function(){
	click++;
if (click==1){startTimer();}
	fireMatcher(this);
});
};
//----------------------------model area--------------------------

function CardsIniti(){
	// logic to initialize cards

	const cardsDom = document.getElementsByClassName('card');

	const cardsArray=Array.from(cardsDom);// convert object to array 
	return cardsArray ;
	//console.log(cardsDom);                 
}//end of initi card
//-----------------------------------------------

function displayCards(){
	// ---------logic to creat list of card---------------
		const newList= document.createElement('ul');
	for(i=0;i<shuffledCard.length;i++){             // for loop to creat the list of cards
const newElement= document.createElement('li');
newElement.innerHTML=shuffledCard[i].innerHTML
newElement.classList.add('card');
newList.appendChild(newElement);

	}
	
document.getElementsByClassName('deck')[0].innerHTML= newList.innerHTML;//replace old list with anew list created
	

}
//------------end of display function-----------------------------
//-----------start shuffle function

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//------end shuffle function

//-------start firematcher function

function fireMatcher(card){
	if(clicked(card)){return;}
	openSymbol(card);//---------------- open the card /add class show to the open card
	markeOpenCard(card);


}//-------------------------- end of fireMatcher

//----------start open symbol function
function openSymbol(card){// logic to show symbol
//add eventlistener
card.classList.add('open','show') ;

}
 //end of openSymbol

 //--------start mark open function
function  markeOpenCard(card){
// check opencards array 
if (openCard.length>0){
	incrMovies();//increment movies
	openCard.push(card);
	if (matched(openCard)){
		matchedCase(openCard);
		openCard=[];
	}
	else{
		noMatche(openCard);
		openCard=[];
	}
}
else{
	openCard.push(card);
	incrMovies(); //increment moves
}
gameEnd();
}



//---- start function to increment the moves


function incrMovies(){
	counter++;
	rating(); 
		document.getElementsByClassName('moves')[0].innerHTML=counter;
	
	

}// end of function to increment moves

// function matched
function matched(openCard){
openCard[0]
openCard[1]
let case1=openCard[0].innerHTML!=openCard[1].innerHTML;
let case2=$(openCard[0]).is($(openCard[1]));

if(case1 || case2){return false;}
return true;
}

//------start matched case function

function matchedCase(openCard){
	
	markMatched(openCard);

	

}




//-----------end of matched case function

//-------------start no matched function
function noMatche(openCard){
	setTimeout(function(){
	hide(openCard);},1000);
	


//-----------end no matched function


}
//-------------start markMatched function 
function markMatched(openCard){
	for(let i=0;i<openCard.length;i++){
		$(openCard[i]).addClass("match");
	}
	//----------end function markMatched 

}

//----------start hide function
function hide(openCard){
	for (var i = openCard.length - 1; i >= 0; i--) {
		$(openCard[i]).removeClass("open show");
	}

};
//------end of hide function

//------------start function click to control incremet moves when card match or open
function clicked(card){
	if($(card).hasClass('match')|| $(card).hasClass('open')){
		return true;
	}
	return false;
	

}
//-------------end click function


//----------------function to kmow the end of game
function gameEnd(){
	let all=true;
	$('.card').each(function(){
		return all = $(this).hasClass("match");
	});

if(all){
	
	//owsomeAlert();
	showEnd();
theEnd=true;
}
}
//------------------end the game  end function

//---------function to rate game 



const starsContainer = document.querySelector(".stars");
const star = `<li><i class="fa fa-star"></i></li>`;
starsContainer.innerHTML = star + star + star;
function rating() {
   
    if(counter < 30) {
        starsContainer.innerHTML = star + star + star;
        numberStar=3;
    } else if(counter < 40) {
        starsContainer.innerHTML = star + star;
        numberStar=2;
    } 
     else {
        starsContainer.innerHTML = star;
        numberStar=1;
    }
}
//------------end rate function





//------------start function show alert end-----------------
function showEnd (){

	clearInterval(interval);

	var time=getTimer();//to return timer in html
	if(confirm('Congratulation ! wininng with ' +counter+' moves with '+numberStar+' star in' +time +'if you want play again press ok')){
		window.location.reload();
	}



};//end showend


function getTimer(){
	return $('#timer').text();
}

//timer to calculate time of game
var second=0,minute=0, hours=0;

function startTimer(){
interval=setInterval (function(){
	timer.innerHTML=minute+' mins '+second+' secs ';
	second++;
	if(second==60){
		minute++;
		second=0;
	}
	if(minute==60){
		hours++;
		minute=0;
	}

},1000);

}//  end of timer



//----------enentlistener to reload game
var reapet=document.getElementsByClassName('fa fa-repeat');
reapet[0].addEventListener('click',function(){
window.location.reload();
});






 




















 
 