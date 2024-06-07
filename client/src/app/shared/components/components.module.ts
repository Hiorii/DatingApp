import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TextInputComponent} from "./forms/text-input/text-input.component";

@NgModule({
  declarations: [NavComponent, TextInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  exports: [NavComponent, BsDropdownModule, TextInputComponent]
})
export class ComponentsModule { }
