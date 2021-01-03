var picSrcHole = "/img/batlogo.jpg"; // the image not to be clicked
var picSrcBuggs = "/img/jokerlogo.jpg"; // the image to be clicked
var timerId, imgTimerId; // timer ids
var nameEntered;

$( function(){
    $("#welcomeScreen").dialog({
        resizable : false,
        width : 400,
        show : {
            effect: "blind",
            duration: 1000
        },
        hide : {
            effect: "explode",
            duration: 1000
        },
        buttons : {
            "Play" : function(){
                if(!$("#usrName").val()){
                    alert("Please enter your name")
                }   
                else{
                    $(this).dialog("close");
                    $("#lightboxContainer").css("display","none");
                }
            },
            "Controls" : function(){
                $(this).children('p').html("Only the mouse is required, you need to click images quickly").css("text-align","center");
            }
        }
    });
    
    $("#scoreScreen").dialog({
        autoOpen : false,
        resizable : false,
        width : 500,
        show : {
            effect : "explode",
            duration : 500
        },
        hide : {
            effect:"blind",
            duration : 500
        },
        buttons : {
            "Share Score" : function(){
                
            },
            "Thanks": function(){
                $(this).dialog("close");
            },
            "Support Us" : function(){
                
            }
        }
    })
});

$(".titleDiv").children('p').click(function(){
    alert("Enjoy the game!!");
})

$(".gameImgs").click(function(){
    if($(this).attr('src') == picSrcBuggs){
        $(this).effect('shake','left', 100);
        var count = parseInt($("#score").html().split(' ')[1]);
        count++;
        $("#score").html("Score: " + count);
    }
})

$("#btnStart").click(function(){
    if($("#btnStart").val() == "Start Game" && $("#usrName").val()){
        $("#btnStart").val("Reset");
        var speed = $("#difficulty").val();
        switch(speed){
            case null :
                speed = 800;
                break;
            case 'easy':
               speed = 1000; 
                break;
            case 'medium':
                speed = 800;
                break;
            case 'hard':
                speed = 600;
                break;
        }
        imgTimerId = setInterval(randomizeImgs,speed);
        decrementTimer();
    }
    else if(!$("#usrName").val()){
        $("#welcomeScreen").dialog("open");
    }
    else if ($("#btnStart").val() == "Reset"){
        stopFunction();
        $("#btnStart").val("Start Game");
    }

})

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeImgs(){
    var buggsId;
    for(var i=0; i<$(".gameDiv").children('img').length; i++){
        if($(".gameDiv").children('img')[i].src.replace(/http:\/\/[0-9]+\.0\.0\.1:[0-9]+/,'') == picSrcBuggs){
            buggsId = parseInt($(".gameDiv").children('img')[i].getAttribute('id').slice(3,4));
        }
    }
    for(var i=0; i<$(".gameImgs").length; i++){
        $(".gameImgs")[i].src = picSrcHole;            
    }
    
    do{
        var newBuggsId = getRandomNumber(1,8);
    }  
    while(newBuggsId == buggsId);
    $("#img" + newBuggsId).attr('src',picSrcBuggs);
}

function decrementTimer(){
    timerId = setTimeout(function decrement(){
        var min = parseInt($("#timer").html().split(' ')[1].split(':')[0]);
        var sec = parseInt($("#timer").html().split(' ')[1].split(':')[1]);
        if(sec == 0){
            sec = 59;
            min--;
        }
        else if(sec < 10){
            sec--;
            sec = '0' + sec;
        }
        else{
            sec--;
        }
        
        $("#timer").html("Timer: "+min+":"+sec);
        
        if(min == 0 & sec == 0){
            $("#btnStart").val("Start Game");
            $("#scoreScreen").dialog("open").html('Your score is ' + parseInt($("#score").html().split(' ')[1])).css("text-align","center");
            stopFunction();
        }
        else{
            timerId = setTimeout(decrement,1000);           
        }

    },1000)
}

function stopFunction(){
    clearTimeout(timerId);
    clearInterval(imgTimerId);
    $("#timer").html("Timer: 1:00");
    $("#score").html("Score: 0");
    for(var i=0; i<$(".gameImgs").length; i++){
        $(".gameImgs")[i].src = picSrcHole;            
    }
}




