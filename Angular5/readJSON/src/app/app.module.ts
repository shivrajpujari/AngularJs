import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { ReadFileService } from './read-file.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ReadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
