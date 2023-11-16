import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app/app-routing.module';
import { DocsComponent } from '../docs/docs.component';
import { NavComponent } from '../nav/nav.component';
// import { NavRoutingModule } from '../nav/nav-routing.module';
@NgModule({
  declarations: [

    DocsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DocsComponent]
})
export class DocsModule { }

