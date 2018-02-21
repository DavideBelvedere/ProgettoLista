import { Injectable } from '@angular/core';
import { HeaderService } from './headerService';

@Injectable()
export class DetailToEditService {

  constructor(private headerService: HeaderService) {

  }

  private callFromEdit = false;
  private id;

  setCallFromEdit(callFromEdit: boolean) {
    this.callFromEdit = callFromEdit;
  }
  getCallFromEdit(): boolean {
    return this.callFromEdit;
  }

  setId(id: string) {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }

  goToEdit(id: string) {
    this.setCallFromEdit(true);
    this.setId(id);
    this.headerService.setSelection('Edit');

  }

}
