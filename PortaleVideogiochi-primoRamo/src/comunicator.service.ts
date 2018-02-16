import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GameItem } from './GameItem';

@Injectable()
export class ComunicatorService {
  private mySubject = new Subject<GameItem>();
  public mySubject$ = this.mySubject.asObservable();

  changeSubject(value: GameItem) {

    this.mySubject.next(value); 
  
  }

}