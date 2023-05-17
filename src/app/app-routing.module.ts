import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'edit/:id', component: EditComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'update', component: UpdateComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
