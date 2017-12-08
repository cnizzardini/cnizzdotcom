import styles from './scss/styles.scss';
import Terminal from './terminal';

class Nizz {

    constructor() {
        this.isParty = null;
        this.music = null;
        this.Terminal = new Terminal('/home/chris', this);
        this.Terminal.launch();
        this.init();
    }
    
    init() {
        //this.flip();
        this.rotate();
        document.querySelector('#wrapper').classList.add('pretty');
    }
    
    help() {
        this.Terminal.output('Options:');
        this.Terminal.output('about - a little bit about me');
        this.Terminal.output('github - go to my github');
        this.Terminal.output('party - starts a party');
        this.Terminal.output('pause - pauses the party');
    }
    
    about() {
        this.Terminal.output('Name: Chris Nizzardini');
        this.Terminal.output('Location: Salt Lake City, UT');
        this.Terminal.output('Occupation: Software Engineer');
        this.Terminal.output('Skills: Linux, Apache, Mysql, PHP, JavaScript, CakePHP, all those icons in the background and more...');
        this.Terminal.output('Freelancing: Yes, I am available for freelance work.');
        this.Terminal.output('Contact: For now you can mention me or direct message me on twitter @cnizzardini');
    }
    
    github() {
        this.Terminal.output('Launching https://github.com/cnizzardini');
        window.open('https://github.com/cnizzardini', '_blank').focus();
    }
    
    party(music) {        
        this.reset();
        var boxes = document.querySelectorAll('.box');

        if (music != 0) {
            this.music = new Audio('/nizzardini/assets/mp3/sabrepulse-massive-damage-fighter-x-remix.mp3');
            this.music.play();
            this.Terminal.output({
                string: 'Turn up your volume. Lets party!'
            });
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

new Nizz();