import{Routes,RouterModule,PreloadAllModules,NoPreloading} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AppComponent} from './app.component';
import {WorkselectionComponent} from './workselection/workselection.component'
import { DocumentationComponent } from './workselection/documentation/documentation.component';
import {CodingDesigningComponent} from './workselection/coding-designing/coding-designing.component'

const APP_LAZY_ROUTE: Routes = [
  {path:"",component:WorkselectionComponent},
  {path:"coding",component:CodingDesigningComponent},
  {path:"documentation",component:DocumentationComponent},


];


export const APP_LAZY_ROUTING : ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTE, {
  preloadingStrategy: NoPreloading,
});