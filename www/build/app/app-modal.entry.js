const h = window.App.h;

class AppModal {
    constructor() {
        this.CLOSE_MODAL = 'CLOSE_MODAL';
        this.buttons = [];
        this.showOptions = true;
    }
    open() {
        this.modalEl.style.display = 'block';
    }
    fetchUrl(url) {
        if (url === this.CLOSE_MODAL) {
            this.closeOptionsHandler();
        }
        else {
            window.open(url, '_blank');
        }
        this.showOptions = true;
    }
    closeOptionsHandler() {
        this.modalEl.style.display = 'none';
        var backdrop = document.querySelector('app-backdrop');
        if (!!backdrop && backdrop.style.display === 'block') {
            backdrop.style.display = 'none';
        }
        this.showOptions = false;
    }
    render() {
        let options = null;
        if (this.showOptions) {
            options = (this.buttons.map(btn => (h("ion-button", { onClick: this.fetchUrl.bind(this, btn.url) }, btn.title))));
        }
        return (h("div", null,
            h("h1", null, this.title),
            h("p", null, this.content),
            h("hr", null),
            options));
    }
    static get is() { return "app-modal"; }
    static get properties() { return {
        "buttons": {
            "type": "Any",
            "attr": "buttons"
        },
        "content": {
            "type": String,
            "attr": "content"
        },
        "modalEl": {
            "elementRef": true
        },
        "open": {
            "method": true
        },
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
    static get style() { return "app-modal {\n  font-family: Arial, Helvetica, sans-serif;\n  border: 1px solid rgba(46, 46, 46, 0.63);\n  border-radius: 7px;\n  -webkit-box-shadow: 1px 8px 8px rgba(0, 0, 0, 0.3);\n  box-shadow: 1px 8px 8px rgba(0, 0, 0, 0.3);\n  background-color: #858484;\n  color: #FFF;\n  position: fixed;\n  top: 30%;\n  width: 350px;\n  left: calc(50% - 175px);\n  z-index: 1000;\n  display: none;\n  padding: 16px; }\n  app-modal h1 {\n    margin-top: 0; }\n  app-modal ion-button {\n    font-size: 0.74em; }"; }
}

export { AppModal };
