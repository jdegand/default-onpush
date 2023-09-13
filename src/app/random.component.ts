import { CDFlashingDirective } from './shared/directives/cd-flashing.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-random',
  standalone: true,
  template: `<div cd-flash>I do nothing but I'm here</div>`,
  imports: [CDFlashingDirective],
})
export class RandomComponent {}