import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule,
   MatSelectModule, MatFormFieldModule, MatDatepickerModule, MatDatepickerIntl, MatNativeDateModule, MAT_DATE_LOCALE,
   MatSidenavModule, MatIconModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { DemoMaterialModule } from './material-module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,
    MatInputModule, MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule, MatFormFieldModule,
    MatDatepickerModule, MatNativeDateModule,
    FormsModule,
    DemoMaterialModule,
    HttpClientModule
  ],

  providers: [MatDatepickerIntl, HttpClient, {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
