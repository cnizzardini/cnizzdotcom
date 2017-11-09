App = {} || App;
App.shell = document.querySelector('#shell');
App.isParty = null;
App.music = null;

class Nizz {

    constructor() {
        this.shell = document.querySelector('#shell');
        this.isParty = null;
        this.music = null;
    }
    
    init() {
        this.shell.focus();
        this.command();
        //this.flip();
        this.rotate();
        document.querySelector('#wrapper').classList.add('pretty');
        this.listeners();
        this.party(0);
        var me = this;
        setTimeout(function(){
            me.reset();
        },3000);
    }
    
    listeners() {
        var me = this;
        document.addEventListener('shellExec', function(e){
            me.shell.value = '';
        });
    }
    
    command() {
        var me = this;
        this.shell.addEventListener('keypress', function (e) {
            var key = e.which || e.keyCode;
            var error = null;

            if (key === 13) {
                var error = false;
                var cmd = me.shell.value;
                if (me[ cmd ] !== undefined) {
                    me.shell.value = '';
                    return me[ cmd ](cmd);
                } else {
                    me.shell.value = 'Command not found';
                    error = true;
                }
            }

            if (error == false) {
                new CustomEvent("shellExec", {});
            }
        });
    };
    
    help() {
        this.shell.value = 'Generate a list of commands';
    }
    
    party(music) {
        this.reset();
        var boxes = document.querySelectorAll('.box');

        if (music != 0) {
            this.music = new Audio('/nizzardini/mp3/sabrepulse-massive-damage-fighter-x-remix.mp3');
            this.music.play();
        }

        var me = this;

        this.isParty = setInterval(function(){
            var index = Math.floor(Math.random() * boxes.length);
            if (boxes[ index ] != undefined) {
                boxes[ index ].classList.toggle('over');
                var opacity = Math.random() * .9;
                boxes[ index ].setAttribute("style", 'background: rgba(255, 255, 255, ' + opacity + ')');
            }
            if (music != 0 && me.music != null && me.music.paused) {
                clearInterval(me.isParty);
                me.reset();
            }
        }, 75);
    };
    
    pause() {
        this.reset();
        var boxes = document.querySelectorAll('.box');
        console.log(boxes);
        for (var i=0; i<boxes.length; i++) {
            console.log(i)
            boxes[i].removeEventListener('mouseover', null, true);
        }
    };
    
    flip() {
        this.reset();

        var boxes = document.querySelectorAll('.box');
        var me = this;
        for (var i=0; i<boxes.length; i++) {
            boxes[i].removeEventListener('mouseover', null, true);
            boxes[i].addEventListener('mouseover', function(){
                this.classList.add('over');
                var flipped = document.querySelectorAll('.over');
                if (flipped.length == boxes.length) {
                    me.reset();
                }
            });
        }
    };

    rotate() {
        this.reset();

        var boxes = document.querySelectorAll('.box');
        var me = this;
        for (var i=0; i<boxes.length; i++) {
            boxes[i].removeEventListener('mouseenter', null);
            boxes[i].addEventListener('mouseenter', function(){
                if (this.querySelector('a')) {
                    this.classList.add('linkable');
                }
            });
            boxes[i].addEventListener('mouseleave', function(){
                if (this.querySelector('a')) {
                    this.classList.remove('linkable');
                }
            }); 
        }
    };

    reset() {
        var flipped = document.querySelectorAll('.over');

        if (this.music != null) {
            this.music.pause();
        }

        if (this.isParty != null) {
            clearInterval(this.isParty);
        }

        if (flipped.length == 0) {
            return false;
        }

        var boxes = document.querySelectorAll('.box');
        for (var i=0; i<boxes.length; i++) {
            boxes[i].setAttribute("style", '');
        }

        var reset = setInterval(function(){
            var index = Math.floor(Math.random() * flipped.length);
            if (flipped[ index ] != undefined) {
                flipped[ index ].setAttribute("style", '');
                flipped[ index ].classList.remove('over');
            }

            flipped = document.querySelectorAll('.over');

            if (flipped.length <= 0) {
                clearInterval(reset);
            }
        }, 50);
    };
}

var nizz = new Nizz();
nizz.init();