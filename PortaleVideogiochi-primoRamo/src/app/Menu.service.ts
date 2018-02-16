import { Injectable } from '@angular/core';
import { MenuItem } from '../MenuItem';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MenuService {

  items: MenuItem[] = [new MenuItem("modifica","modifica", false),new MenuItem("lista","lista", false),new MenuItem("home","home", true)];
  private sectionSelected: Subject<string> = new Subject<string>();
  public sectionSelected$ = this.sectionSelected.asObservable();

  getMenuItems(): MenuItem[]{
    return this.items;
  }
  public setSelection(id: string) {
    this.sectionSelected.next(id);
  }

}
