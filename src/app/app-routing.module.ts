import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '@app/core/components/page-not-found/page-not-found.component';
import { UserComponent } from '@app/user/user.component';
import { TagComponent } from './tag/tag.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: 'user', component: UserComponent},
      {path: 'user/:username', component: UserComponent},
      {path: 'tag', component: TagComponent},
      {path: 'tag/:tag', component: TagComponent}
    ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
