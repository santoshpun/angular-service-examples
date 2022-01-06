import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistService } from './artist/artist.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EcommerceComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
