import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CultureComponent } from './culture/culture.component';
import { HomeComponent } from './home/home.component';
import { MagicComponent } from './magic/magic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  { path: 'culture', component: CultureComponent },
  { path: 'magic', component: MagicComponent },
  { path: 'world', component: WorldComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
