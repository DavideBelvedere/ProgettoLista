import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../MenuItem';
import { MenuService } from '../Menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private menuService: MenuService) { 
    this.items = this.menuService.getMenuItems();
  }

  ngOnInit() {
  }

  selectSection(id:string){

    this.items.forEach(item => {
      if(id == item.id){
        item.selezionato = true;
      }else{
        item.selezionato = false;
      }
    });

    this.menuService.setSelection(id);
  }

}
