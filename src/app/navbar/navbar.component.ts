import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // the styleUrls and styles are competing. Whichever one is desclared last will take priority
  styleUrls: ['./navbar.component.css'],
  styles: [`.btn {background-color: #999999; }`]
})
export class NavbarComponent {

  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();

  refresh(){
    this.onRefresh.emit();
  }

}
