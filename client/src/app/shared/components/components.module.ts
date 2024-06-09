import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TextInputComponent} from "./forms/text-input/text-input.component";
import {RouterModule} from "@angular/router";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [NavComponent, TextInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  exports: [NavComponent, BsDropdownModule, TextInputComponent, ToastrModule]
})
export class ComponentsModule { }
