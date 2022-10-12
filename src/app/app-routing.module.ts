import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosCortosComponent } from './pages/cursos-cortos/cursos-cortos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cursos-cortos', component: CursosCortosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
