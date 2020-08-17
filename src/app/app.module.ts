import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductListFooterComponent} from './products/product-list-footer.component';
import {FormsModule} from '@angular/forms';
import {convertToSpacesPipe} from './shared/convertToSpaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListFooterComponent,
    convertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
