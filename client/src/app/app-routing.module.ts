import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {authGuard} from "./core/guards/auth.guard";

const routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  { path: 'members', loadChildren: () => import('./features/members/members.module').then(m => m.MembersModule) },
  { path: 'messages', loadChildren: () => import('./features/messages/messages.module').then(m => m.MessagesModule) },
  { path: 'lists', loadChildren: () => import('./features/lists/lists.module').then(m => m.ListsModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [RouterModule]
})
export class AppRoutingModule { }
