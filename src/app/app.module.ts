import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './form/hero-form.component';
import { FormsModule } from '@angular/forms';
import { ImagesComponent } from './images/images.component';
import { ImageService } from './images/image.service';

import { HttpClientModule, HttpClient} from  '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ImagesComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClient
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
