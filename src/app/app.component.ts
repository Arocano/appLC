import { Component } from '@angular/core';

@Component({
  selector: 'lc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appLC';
  expanded=true;
  toggleExpanded(expanded:boolean){
    this.expanded=expanded;
  }
}
