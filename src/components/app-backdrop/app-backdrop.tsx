import { Component, Method, Element } from '@stencil/core';

@Component({
    tag: 'app-backdrop',
    styleUrl: 'app-backdrop.scss'
})
export class AppModal {

    @Element() backdropEl: HTMLElement;

    @Method()
    open() {
        this.backdropEl.style.display = 'block';
    }


    render() {
        return (
            <div class="divBg"></div>
        );
    }
}