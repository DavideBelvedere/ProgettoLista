import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuItem';
import { HeaderService } from '../headerService';
@Component({
  selector: 'navbar',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  liComponents: MenuItem[] = [new MenuItem("Home", "Home", true),
  new MenuItem("List", "List", false),
  new MenuItem("Edit", "Edit", false)];

  constructor(private headerService: HeaderService) {


  }

  ngOnInit() {
  }

  selectSection(id: string) {

    this.liComponents.forEach(item => {
      if (id == item.id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });

    this.headerService.setSelection(id);
  }
}





//import { CommunicatorService } from '../communicator.service';

