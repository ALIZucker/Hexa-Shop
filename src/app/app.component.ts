import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderWebComponent} from "../components/header-web/header-web.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderWebComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hexa-Shop';
}
