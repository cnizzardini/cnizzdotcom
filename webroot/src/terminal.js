class Terminal {
    
    constructor(name, app) {
        this.name = name;
        this.app = app;
        //this.launch();
    }
    
    /**
     * launches the terminal
     * @returns {undefined}
     */
    launch() {
        // create terminal
        this.terminal = document.createElement('div');
        this.terminal.id = 'terminal';
        
        // create title bar
        this.titleBar = document.createElement('p');
        this.titleBar.className = 'title';
        this.titleBar.textContent = this.name;
        this.terminal.appendChild(this.titleBar);
        
        // create list
        this.list = document.createElement('ul');
        var item = document.createElement('li');
        
        // add help context
        item.textContent = 'Type "help" for commands, press enter to execute command';
        this.list.appendChild(item);
        
        // add command prompt
        var item = document.createElement('li');
        this.command = document.createElement('input');
        item.id = 'prompt';
        this.command.autocomplete = 'off';
        item.appendChild(this.command);
        this.list.appendChild(item);
        
        // add list
        this.terminal.appendChild(this.list);
        
        // add all to document
        document.body.prepend(this.terminal);
        
        // focus command prompt
        this.command.focus();
        
        // listen for commands
        this.listen();
        this.move();
    }
    
    /**
     * listens for commands
     * @returns {undefined}
     */
    listen() {
        var me = this;
        this.terminal.addEventListener('keypress', function (e) {
            var key = e.which || e.keyCode;
            me.execute(key);
        }); 
    }
    
    /**
     * executes commands
     * @param integer key
     * @returns {Shell@arr;@call;app|Boolean}
     */
    execute(key) {
        console.log('exec')
        if (key !== 13) {
            return false;
        }
        
        var cmd = this.command.value;
        
        this.output({
            string: cmd,
            cls: 'executed'
        });
        
        if (this.app[ cmd ] !== undefined) {    
            return this.app[ cmd ](cmd);
        }
        
        switch (cmd) {
            case 'clear':
                this.clear();
                break;
            case 'reload':
                location.reload();
                break;
            default:
                this.output('No command "' + cmd + '" found, try "help"');
        }
    }
    
    /**
     * sends output to terminal
     * @param object obj
     * @returns {undefined}
     */
    output(variable) {
        var items = this.list.querySelectorAll('li');
        var item = document.createElement('li');
        
        if (typeof(variable) == 'string') {
            item.textContent = variable;
        } else {
            if (variable.string !== undefined) {
                item.textContent = variable.string;
            }
            if (variable.cls !== undefined) {
                item.className = variable.cls;
            }
            if (variable.id !== undefined) {
                item.id = variable.id;
            }
        }
        
        this.list.insertBefore(item, this.list.childNodes[items.length-1]);
        this.command.value = '';
        this.command.focus();
        this.list.scrollTop = this.list.scrollHeight;
    }
    
    /**
     * clears the terminal
     * @returns {undefined}
     */
    clear() {
        var items = this.list.querySelectorAll('li');
        for (var i=0; i<items.length; i++) {
            if (items[ i ].id != 'prompt') {
                this.list.removeChild(items[i]);
            }
        }
        this.output('Type "help" for commands, press enter to execute command');
    }
    
    move() {
        this.titleBar.addEventListener('mousedown', mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);

        function mouseUp() {
            window.removeEventListener('mousemove', move, true);
        }

        function mouseDown(e) {
            window.addEventListener('mousemove', move, true);
        }

        function move(e) {
            this.terminal.style.top = e.clientY - 100 + 'px';
            this.terminal.style.left = e.clientX + 'px';
            e.preventDefault();
        };
    }
    
    minimize() {
        console.log('@todo will minimuze the terminal');
    }
    
    maximize() {
        console.log('@todo');
    }
    
    close() {
        console.log('@todo');
    }
}
export default Terminal;