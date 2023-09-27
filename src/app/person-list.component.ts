import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { CDFlashingDirective } from './shared/directives/cd-flashing.directive';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatChipsModule,
    CDFlashingDirective
  ],
  template: `
    <h1 cd-flash class="font-semibold text-center" title="Title">
      {{ title | titlecase }}
    </h1>

    <mat-list class="flex w-full">
      <div *ngIf="names?.length === 0" class="empty-list-label">Empty list</div>
      <mat-list-item
        *ngFor="let name of names"
        cd-flash
        class="text-orange-500">
        <div MatListItemLine class="flex justify-between">
          <h3 title="Name">
            {{ name }}
          </h3>
        </div>
      </mat-list-item>
      <mat-divider *ngIf="names?.length !== 0"></mat-divider>
    </mat-list>
  `,
  host: {
    class: 'w-full flex flex-col items-center',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent {
  @Input() names: string[] = [];
  @Input() title = '';
}