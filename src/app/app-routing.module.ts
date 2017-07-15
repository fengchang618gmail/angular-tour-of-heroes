import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';

const routers: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path:  'detail/:id', component: HeroesComponent },
	{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routers)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}
