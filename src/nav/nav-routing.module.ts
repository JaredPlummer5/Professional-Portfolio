import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from 'src/docs/docs.component';

const routes: Routes = [

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule {
 // helloworld = "Hello World";
}
