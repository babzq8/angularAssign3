import { Component } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretExposed = false;
  clickerCount = 0;
  buttonClicks = [];

  onToggleExposure () {
    this.secretExposed = !this.secretExposed;
    this.clickerCount++;
    this.buttonClicks.push(this.clickerCount);
  }
}
