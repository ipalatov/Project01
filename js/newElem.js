class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    makeDiv() {
        let newEl = document.createElement('div');
        newEl.style.cssText = `height: ${this.height}px;
                            width: ${this.width}px; 
                            background: ${this.bg};    
                            font-size: ${this.fontSize}px;
                            text-align: ${this.textAlign}`;
        newEl.textContent = 'Hello, NEW element!';
        return newEl;
    }

}

let divEl = new Options(100, 100, 'green', 20, 'center');

let newDiv = divEl.makeDiv();
document.body.appendChild(newDiv);
