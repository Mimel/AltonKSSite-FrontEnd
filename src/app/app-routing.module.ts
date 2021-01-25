import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './components/community/community.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'events', component: EventsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'organizations', component: OrganizationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
