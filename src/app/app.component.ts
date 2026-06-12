import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="text-align:center;padding:2rem;">
      <h1>🅰️ Angular 18 on NevTan Cloud</h1>
      <p>Deployed successfully!</p>
    </div>
  `
})
export class AppComponent {
  title = 'angular-demo';
}
