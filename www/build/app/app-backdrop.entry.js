const h = window.App.h;

class AppModal {
    open() {
        this.backdropEl.style.display = 'block';
    }
    render() {
        return (h("div", { class: "divBg" }));
    }
    static get is() { return "app-backdrop"; }
    static get properties() { return {
        "backdropEl": {
            "elementRef": true
        },
        "open": {
            "method": true
        }
    }; }
    static get style() { return "app-backdrop {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  display: none; }\n  app-backdrop .divBg {\n    width: 100%;\n    height: 100%;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#223c5e), to(#010102));\n    background-image: linear-gradient(#223c5e, #010102);\n    -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n    filter: blur(5px);\n    opacity: 0.5; }"; }
}

export { AppModal as AppBackdrop };
