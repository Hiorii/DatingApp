import {NgModule} from "@angular/core";
import {MembersRoutingModule} from "./members-routing.module";
import {MemberListComponent} from "./member-list/member-list.component";
import {MemberDetailsComponent} from "./member-details/member-details.component";

@NgModule({
  declarations: [MemberListComponent, MemberDetailsComponent],
  imports: [MembersRoutingModule],
  providers: []
})
export class MembersModule { }
