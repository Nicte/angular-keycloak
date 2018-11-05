import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
  { path: 'read', component: ReadComponent },
  { path: 'write', component: WriteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
