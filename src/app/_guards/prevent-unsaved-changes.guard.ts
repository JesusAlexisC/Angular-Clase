import { Injectable } from '@angular/core';
import {  CanDeactivate } from '@angular/router';

import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: MemberEditComponent): boolean {
      if(component.editForm.dirty){
        return confirm("If you leave the page, your pages will be lost, do you want to go somewhere else?");
      }
    return true;
  }
}
