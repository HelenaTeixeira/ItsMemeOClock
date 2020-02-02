let morning=10;
let night=8;
let partyTime=2;
let noon=12;

// show the current time on the page
let showCurrentTime= function(){
    let clock = document.getElementById('clock');
    let currentTime= new Date();
    let hours= currentTime.getHours();
    let minutes= currentTime.getMinutes();
    let seconds= currentTime.getSeconds();
    let meridian ="AM";

    //set time
    if(hours >= noon){
        meridian= "PM";
    }
    if(hours > noon){
        hours = hours -12;
    }
    if(minutes<10){
        minutes= "0"+ minutes;
    }
    if(seconds<10){
        seconds="0"+ seconds;
    }

    //put string together
    let clockTime= hours+ ':'+ minutes +':'+ seconds + " " + meridian;
    clock.innerText= clockTime;

};
//increment clock on its own and change pictures
let updateClock= function(){
    let time= new Date().getHours();
    let image= "https://i.imgflip.com/1m7jcr.jpg";
    let memeTimeImageJS=document.getElementById('memeTimeImage');

    if(time== partyTime){
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwUN2811-UrtzvIJDD_jivzwj7Ps9k5ufkoWvzAdjPxFu-oO7kA&s";
    }
    else if(time>= night){
        image= "https://sayingimages.com/wp-content/uploads/happy-bedtime-meme.jpg";
    }
    else if(time== morning){
        image= "https://images2.memedroid.com/images/UPLOADED5/5064496bbdd52.jpeg";
    }
    memeTimeImageJS.src=image;
    showCurrentTime();
};
updateClock();
let oneSecond=1000;
setInterval(updateClock,oneSecond);

//party time button
let partyButton= document.getElementById("partyTimeButton");
let partyEvent = function(){
    let memeTimeImageJS=document.getElementById('memeTimeImage');
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwUN2811-UrtzvIJDD_jivzwj7Ps9k5ufkoWvzAdjPxFu-oO7kA&s";
    memeTimeImageJS.src=image;
};
partyButton.addEventListener("click",partyEvent);

//morning time button
let morningButton= document.getElementById("morningTimeButton");
let morningEvent = function(){
    let memeTimeImageJS=document.getElementById('memeTimeImage');
    image= "https://images2.memedroid.com/images/UPLOADED5/5064496bbdd52.jpeg";
    memeTimeImageJS.src=image;
};
morningButton.addEventListener("click",morningEvent);

//night time button
let nightButton= document.getElementById("nightTimeButton");
let nightEvent = function(){
    let memeTimeImageJS=document.getElementById('memeTimeImage');
    image= "https://sayingimages.com/wp-content/uploads/happy-bedtime-meme.jpg";
    memeTimeImageJS.src=image;
};
nightButton.addEventListener("click",nightEvent);