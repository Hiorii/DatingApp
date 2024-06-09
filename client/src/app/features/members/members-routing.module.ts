import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MemberListComponent} from "./member-list/member-list.component";
import {MemberDetailsComponent} from "./member-details/member-details.component";
import {authGuard} from "../../core/guards/auth.guard";

const routes: Routes = [
  {path: '', canActivate: [authGuard], children: [
      {path: 'members', component: MemberListComponent},
      {path: 'members/:id', component: MemberDetailsComponent},
    ]},
  {path: '', redirectTo: 'members', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule {}
