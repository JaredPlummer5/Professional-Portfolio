import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from 'src/docs/docs.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'docs', component: DocsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
