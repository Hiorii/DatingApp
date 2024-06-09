import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListsComponent} from "./lists.component";
import {authGuard} from "../../core/guards/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
  { path: 'lists', component: ListsComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsRoutingModule { }
