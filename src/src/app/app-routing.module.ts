import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ImageClassificatorComponent } from './image-classificator/image-classificator.component';

const routes: Routes = [
  { path: '', component: ImageClassificatorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
