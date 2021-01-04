$(function () {
    var arrbox1 = []; //list of arrays saving every single object that ground consist of 
    var arrbox2 = [];
    var arrbox3 = [];
    var arrbox4 = [];
    var arrbox5 = [];
    var arrbox6 = [];
    var arrbox7 = [];
    var arrbox8 = [];
    var arrbox9 = [];
    var arrbox10 = [];
    var arrbox11 = [];
    var arrbox12 = [];
    var arrbox13 = [];
    var arrbox14 = [];
    var arrbox15 = [];
    var arrFire = []; // list of shoot objects to keep track of them
    var enemyFire;
    var arrEnemyFire = [];
    var starCraftLeftSpace = 400; // initial posiion for aircraft
    var GroundTimer; // timer for ground generating
    var Shot; // it's an object of Shoot class -- the bullet
    var win = false; // it turns to true when i win
    var upTimerId;
    var EnemyBulletTimer;
    var enemyBottomPos = 580; // initial position for Enemy
    var starCraft = document.getElementById("starCraft");
    var grid = document.querySelector(".grid");
    var enemy = document.getElementById("enemy");
    var enemyLeftPos = enemyLeftPos = parseInt(getComputedStyle(document.images[0]).left);
    var Ground = function (Bottom, Left, className) {
        this.bottom = Bottom;
        this.left = Left;
        this.visual = document.createElement("div");
        var visual = this.visual;
        visual.classList.add(className);
        visual.style.left = this.left + "px";
        visual.style.bottom = this.bottom + "px";
        grid.appendChild(visual);
    }
    var Shoot = function (Bottom, Left, ImgSrc) {
        this.bottom = Bottom;
        this.left = Left;
        this.visual = document.createElement("img");
        var visual = this.visual;
        visual.style.left = this.left + "px";
        visual.style.bottom = this.bottom + "px";
        visual.src = ImgSrc;
        visual.style.position = "absolute";
        visual.style.zIndex = "15";
        visual.style.width = "50px";
        grid.appendChild(visual);
    }

    function CreateGround() {
        for (var i = 0; i < 11; i++) {
            createBox(i);
        }
    }
    //IFFI block to execute those function to start game
    (function startGame() {
        CreateGround();
        document.addEventListener("keydown", control);
        animateEnemy();
    })();

    function createBox(i) {
        var g = new Ground(i * 60, 30, "ground");
        arrbox1.push(g);
        g = new Ground(i * 60, 85, "ground")
        arrbox2.push(g);
        g = new Ground(i * 60, 140, "ground")
        arrbox3.push(g);
        g = new Ground(i * 60, 195, "ground")
        arrbox4.push(g);
        g = new Ground(i * 60, 250, "ground")
        arrbox5.push(g);
        g = new Ground(i * 60, 305, "ground")
        arrbox6.push(g);
        g = new Ground(i * 60, 360, "ground")
        arrbox7.push(g);
        g = new Ground(i * 60, 415, "ground")
        arrbox8.push(g);
        g = new Ground(i * 60, 470, "ground")
        arrbox9.push(g);
        g = new Ground(i * 60, 525, "ground")
        arrbox10.push(g);
        g = new Ground(i * 60, 580, "ground")
        arrbox11.push(g);
        g = new Ground(i * 60, 635, "ground")
        arrbox12.push(g);
        g = new Ground(i * 60, 690, "ground")
        arrbox13.push(g);
        g = new Ground(i * 60, 745, "ground")
        arrbox14.push(g);
        g = new Ground(i * 60, 800, "ground")
        arrbox15.push(g);
    }
    GroundTimer = setInterval(function () {
        for (var i = 0; i < 11; i++) {
            arrbox1[i].bottom -= 5;
            arrbox2[i].bottom -= 5;
            arrbox3[i].bottom -= 5;
            arrbox4[i].bottom -= 5;
            arrbox5[i].bottom -= 5;
            arrbox6[i].bottom -= 5;
            arrbox7[i].bottom -= 5;
            arrbox8[i].bottom -= 5;
            arrbox9[i].bottom -= 5;
            arrbox10[i].bottom -= 5;
            arrbox11[i].bottom -= 5;
            arrbox12[i].bottom -= 5;
            arrbox13[i].bottom -= 5;
            arrbox14[i].bottom -= 5;
            arrbox15[i].bottom -= 5;
            if (arrbox1[i].bottom < 0) {
                $(arrbox1[0].visual).remove();
                $(arrbox2[0].visual).remove();
                $(arrbox3[0].visual).remove();
                $(arrbox4[0].visual).remove();
                $(arrbox5[0].visual).remove();
                $(arrbox6[0].visual).remove();
                $(arrbox7[0].visual).remove();
                $(arrbox8[0].visual).remove();
                $(arrbox9[0].visual).remove();
                $(arrbox10[0].visual).remove();
                $(arrbox11[0].visual).remove();
                $(arrbox12[0].visual).remove();
                $(arrbox13[0].visual).remove();
                $(arrbox14[0].visual).remove();
                $(arrbox15[0].visual).remove();
                arrbox1.shift();
                arrbox2.shift();
                arrbox3.shift();
                arrbox4.shift();
                arrbox5.shift();
                arrbox6.shift();
                arrbox7.shift();
                arrbox8.shift();
                arrbox9.shift();
                arrbox10.shift();
                arrbox11.shift();
                arrbox12.shift();
                arrbox13.shift();
                arrbox14.shift();
                arrbox15.shift();
                createBox(11 + Math.floor(Math.random()));
            } else {
                arrbox1[i].visual.style.bottom = arrbox1[i].bottom + "px";
                arrbox2[i].visual.style.bottom = arrbox2[i].bottom + "px";
                arrbox3[i].visual.style.bottom = arrbox3[i].bottom + "px";
                arrbox4[i].visual.style.bottom = arrbox4[i].bottom + "px";
                arrbox5[i].visual.style.bottom = arrbox4[i].bottom + "px";
                arrbox6[i].visual.style.bottom = arrbox4[i].bottom + "px";
                arrbox7[i].visual.style.bottom = arrbox4[i].bottom + "px";
                arrbox8[i].visual.style.bottom = arrbox4[i].bottom + "px";
                arrbox9[i].visual.style.bottom = arrbox4[i].bottom + "px";
                arrbox10[i].visual.style.bottom = arrbox4[i].bottom + "px";
                arrbox11[i].visual.style.bottom = arrbox4[i].bottom + "px";
                arrbox12[i].visual.style.bottom = arrbox4[i].bottom + "px";
                arrbox13[i].visual.style.bottom = arrbox4[i].bottom + "px";
                arrbox14[i].visual.style.bottom = arrbox4[i].bottom + "px";
                arrbox15[i].visual.style.bottom = arrbox4[i].bottom + "px";
            }
        }
    }, 30);

    function control(e) {
        if (e.key == "ArrowLeft")
            moveLeft();
        else if (e.key == "ArrowRight")
            moveRight();
        else if (e.keyCode == 32)
            if (!(win || GameIsOver))
                Fire();
    }

    function moveLeft() {
        if (starCraftLeftSpace >= 20) {
            starCraftLeftSpace -= 20;
            starCraft.style.left = starCraftLeftSpace + "px";
        } else moveRight();
    }

    function moveRight() {
        if (starCraftLeftSpace <= 780) {
            starCraftLeftSpace += 20;
            starCraft.style.left = starCraftLeftSpace + "px";
        } else moveLeft();
    }

    function Fire() {
        Shot = new Shoot(100, starCraftLeftSpace + 20, "pic/fire.png");
        arrFire.push(Shot);
        Animate();
    }

    function Animate() {
        clearInterval(upTimerId);
        upTimerId = setInterval(function () {
            for (i in arrFire) {
                //enemy is moving so update his position
                enemyLeftPos = parseInt(getComputedStyle(enemy).left);
                arrFire[i].bottom += 20;
                arrFire[i].visual.style.bottom = arrFire[i].bottom + "px";
                if (arrFire[i].bottom > 680)
                    Clear(arrFire[i].visual);
                else if (
                    (enemyLeftPos + 50 >= arrFire[i].left) &&
                    (enemyLeftPos <= arrFire[i].left + 20) &&
                    (enemyBottomPos == arrFire[i].bottom)
                ) {
                    $("#enemyblood").animate({
                        width: '-=80'
                    }, 300);
                    //fire enemy with real fire for 600 ms and fade out
                    var firImg = $("<img src='pic/firegif.gif'></img>");
                    firImg.css({
                        position: "absolute",
                        left: enemyLeftPos,
                        top: "-50px",
                        width: "100px",
                        zIndex: "15"
                    });
                    $('.grid').append(firImg);
                    firImg.fadeOut(600, function () {
                        $(this).remove();
                    });
                    //Show off randomly
                    if (Math.round($("#enemyblood").width()) % 3 == 0) {
                        var firImg = $("<img src='pic/showOff.gif'></img>");
                        firImg.css({
                            position: "absolute",
                            right: 0,
                            bottom: "250px",
                            width: "350px",
                            height: "300px",
                            zIndex: "15"
                        });
                        $('.grid').append(firImg);
                        firImg.fadeOut(3000, function () {
                            $(this).remove();
                        });
                    }
                    if ($("#enemyblood").width() <= 0) {
                        enemy.src = "pic/showOff.gif";
                        $(enemy).css({
                            width: "300px"
                        });
                        Clear(arrFire[i].visual);
                        Win();
                    }
                }
            }
        }, 30)
    }

    function Clear(shot) {
        grid.removeChild(shot);
        arrFire.shift();
    }
    var GameIsOver = false;

    function animateEnemy() {
        enemyLeftPos = parseInt(getComputedStyle(enemy).left);
        var newPos = starCraftLeftSpace;
        $('#enemy').animate({
            left: newPos
        }, 1500, function () {
            enemyFire = new Shoot(495, newPos + 25, "pic/enemy_fire.png");
            arrEnemyFire.push(enemyFire);
            if (!GameIsOver)
                $(enemyFire.visual).animate({
                    bottom: "10"
                }, 1000);
            else {
                $(enemyFire.visual).remove();
                arrEnemyFire.shift();
            }
            EnemyBulletTimer = setInterval(function () {
                for (i in arrEnemyFire) {
                    var bullet = parseInt(getComputedStyle(arrEnemyFire[i].visual).bottom);
                    if (
                        ((bullet <= 80) && (bullet >= 70)) &&
                        (starCraftLeftSpace + 40 >= arrEnemyFire[i].left) &&
                        (starCraftLeftSpace <= arrEnemyFire[i].left + 20)
                    ) { //minuc my blood and animate a fire 
                        $(arrEnemyFire[i].visual).stop();
                        grid.removeChild(arrEnemyFire[i].visual);
                        arrEnemyFire.shift();
                        $("#myblood").animate({
                            width: '-=60'
                        }, 300);
                        //fire Me with real fire for 600 ms and fade out
                        var firImg = $("<img src='pic/firegif.gif'></img>");
                        firImg.css({
                            position: "absolute",
                            left: starCraftLeftSpace,
                            bottom: "20px",
                            width: "100px",
                            zIndex: "15"
                        });
                        $('.grid').append(firImg);
                        firImg.fadeOut(600, function () {
                            $(this).remove();
                        });
                        if ($("#myblood").width() < 150) {
                            $('#myblood').animate({
                                backgroundColor: "red"
                            }, 100);
                        }
                        if ($("#myblood").width() <= 23) {
                            clearInterval(EnemyBulletTimer);
                            GameOver();
                        }
                    } else if (bullet <= 25) {
                        $(arrEnemyFire[i].visual).stop();
                        grid.removeChild(arrEnemyFire[i].visual);
                        arrEnemyFire.shift();
                    }
                }
            }, 5)
            if (!win)
                animateEnemy();
        });
    }

    function reSet() {
        win = false;
        GameIsOver = false;
        $("#myblood").animate({
            width: '100%',
            backgroundColor: "green"
        }, 300);
        $("#enemyblood").animate({
            width: '100%',
            backgroundColor: "red"
        }, 300);
    }

    function GameOver() {
        $(enemyFire.visual).stop();
        $(enemyFire.visual).remove();
        reSet();
        var cnfrm = confirm("You loose! Do you want to play again ?");
        if (!cnfrm) {
            GameIsOver = true;
            clearInterval(GroundTimer);
           // win = true; // i wan't enemy simulate me when it's over
            clearInterval(EnemyBulletTimer);
            clearInterval(upTimerId);
        }
    }

    function Win() {
        reSet();
        $(enemyFire.visual).stop();
        $(enemyFire.visual).remove();
        var cnfrm = confirm("You Won! Do you want to play again ?");
        if (cnfrm) {
            enemy.src = "Pic/enemy1.png";
            $(enemy).css({
                width: "110px"
            });
            animateEnemy();
        } else {
            win = true;
            clearInterval(GroundTimer);
            clearInterval(upTimerId);
            clearInterval(EnemyBulletTimer);
            arrEnemyFire.length = 0;
        }
    }
})
