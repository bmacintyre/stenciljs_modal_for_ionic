const h = window.App.h;

class AppHome {
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "primary" },
                    h("ion-title", null, "Home"))),
            h("ion-content", { padding: true },
                h("p", null,
                    "Welcome to the PWA Toolkit. You can use this starter to build entire apps with web components using Stencil and ionic/core! Check out the README for everything that comes in this starter out of the box and check out our docs on ",
                    h("a", { href: "https://stenciljs.com" }, "stenciljs.com"),
                    " to get started."),
                h("ion-button", { expand: "block" }, "Test Custom Web Component Modal"))
        ];
    }
    static get is() { return "app-home"; }
    static get style() { return "app-home {\n  font-size: 2em; }"; }
}

export { AppHome };
