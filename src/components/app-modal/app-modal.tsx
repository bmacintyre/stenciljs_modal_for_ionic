import { Component, Element, Method, Prop } from '@stencil/core';

@Component({
    tag: 'app-modal',
    styleUrl: 'app-modal.scss'
})
export class AppModal {

    @Element() modalEl: HTMLElement;

    CLOSE_MODAL = 'CLOSE_MODAL';
    
    @Prop() buttons = [];
    @Prop() title: string;
    @Prop() content: string;

    showOptions = true;

    @Method()
    open() {
        this.modalEl.style.display = 'block';
    }

    fetchUrl(url: string) {

        if (url === this.CLOSE_MODAL) {
            this.closeOptionsHandler();
        } else {
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
            options = (
                this.buttons.map(btn => (
                    <ion-button onClick={this.fetchUrl.bind(this, btn.url)}>{btn.title}</ion-button>
                )));
        }

        return (
            <div>
                <h1>{this.title}</h1>
                <p>{this.content}</p>
                <hr/>
                {options}
            </div>);
    }
}