import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DetailService {
    private detailId: Subject<string> = new Subject<string>();
    public detailId$ = this.detailId.asObservable();
    
    public setSelection(id: string) {
        this.detailId.next(id);
    }
}
