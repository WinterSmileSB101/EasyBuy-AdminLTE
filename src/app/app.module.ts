import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { Config } from "./app-config";
import { IndexModule } from "./index/index.module";
import { HttpUtil } from "./util/http.util";
import { LoginModule } from "./login/login.module";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

@NgModule({
  imports: [BrowserModule,
    AppRoutingModule,
    LoginModule,
    IndexModule,
    FormsModule,
    BrowserAnimationsModule,
    InputsModule
  ],
  declarations: [AppComponent
  ],
  providers: [
    Config, HttpUtil, { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
