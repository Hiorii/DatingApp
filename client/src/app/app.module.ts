import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ComponentsModule} from "./shared/components/components.module";
import {RouterModule} from "@angular/router";
import {FeaturesModule} from "./features/features.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentsModule,
    RouterModule,
    FeaturesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
