import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Output() sendMessage = new EventEmitter<string>(); 

  constructor(private menu: MenuController) { }

  ngOnInit() {}

  moveToTitle(title: string) {
    this.sendMessage.emit(title);
    this.menu.close();
  }
}
