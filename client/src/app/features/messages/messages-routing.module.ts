import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from "./messages.component";
import {authGuard} from "../../core/guards/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'messages', pathMatch: 'full' },
  { path: 'messages', component: MessagesComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule { }
