import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-boten',
  standalone: true,
  imports: [],
  templateUrl: './boten.component.html',
  styleUrl: './boten.component.css'
})
export class BotenComponent {


  @Input({required: true}) Title!: string

  @Output() clicked: EventEmitter<string> = new EventEmitter()

  pressClick() {
    this.clicked.emit(this.Title);
  }
}
