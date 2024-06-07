import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {ComponentsModule} from "../shared/components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [HomeComponent, RegisterComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule, FormsModule],
  exports: [HomeComponent, RegisterComponent]
})
export class FeaturesModule { }
