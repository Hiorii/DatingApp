import {NgModule} from "@angular/core";
import {RegisterComponent} from "./register/register.component";
import {CommonModule} from "@angular/common";
import {ComponentsModule} from "../../shared/components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, ComponentsModule, FormsModule, ReactiveFormsModule],
  exports: [RegisterComponent],
})
export class AuthenticationModule { }
