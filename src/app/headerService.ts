import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderService {
    private menuSelected: Subject<string> = new Subject<string>();
    public menuSelected$ = this.menuSelected.asObservable();
    
    public setSelection(id: string) {
        this.menuSelected.next(id);
    }
}