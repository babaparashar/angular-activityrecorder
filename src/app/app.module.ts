import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {APP_LAZY_ROUTING} from './app.lazy.routing';

import { AppComponent } from './app.component';

import { WorkselectionComponent } from './workselection/workselection.component';
import { CodingDesigningComponent } from './workselection/coding-designing/coding-designing.component';
import { DocumentationComponent } from './workselection/documentation/documentation.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , APP_LAZY_ROUTING, RouterModule],
  exports: [RouterModule],
  declarations: [ AppComponent, WorkselectionComponent, CodingDesigningComponent, DocumentationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
