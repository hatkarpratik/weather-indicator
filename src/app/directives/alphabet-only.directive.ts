import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive ({
    selector: '[appAlphabetOnly]'
})

export class AlphabetOnlyDirective {
    keyPressed: any;
    constructor() {
        
    }

    @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
        this.keyPressed = event.keyCode; 
  
        if((this.keyPressed >= 15 && this.keyPressed <= 64) || (this.keyPressed >= 123) || (this.keyPressed >= 96 && this.keyPressed <= 105)) {
            event.preventDefault();
        }
    }
}   