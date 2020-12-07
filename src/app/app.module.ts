import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TreePipe } from './tree.pipe';
import { CheckChildrenDirective } from './check-children.directive';
import { SelectGroupDirective } from './select-group.directive';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TreePipe,
    CheckChildrenDirective,
    SelectGroupDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }