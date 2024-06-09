import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {AuthenticationModule} from "../authentication/authentication.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AuthenticationModule],
  exports: [HomeComponent]
})
export class HomeModule { }
