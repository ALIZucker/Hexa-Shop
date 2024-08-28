import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderWebComponent} from "../components/header-web/header-web.component";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderWebComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hexa-Shop';
}
