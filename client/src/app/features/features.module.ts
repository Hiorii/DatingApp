import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "../shared/components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeModule} from "./home/home.module";
import {MembersModule} from "./members/members.module";
import {AuthenticationModule} from "./authentication/authentication.module";
import {ListsModule} from "./lists/lists.module";
import {MessagesModule} from "./messages/messages.module";
@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule, FormsModule, HomeModule, MembersModule, AuthenticationModule, ListsModule, MessagesModule],
  exports: [HomeModule]
})
export class FeaturesModule { }
