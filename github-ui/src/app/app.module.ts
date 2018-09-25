import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListOpenRequestComponent } from './home/list-open-request/list-open-request.component';
import { ListClosedRequestComponent } from './home/list-closed-request/list-closed-request.component';
import { MergeOpenRequestComponent } from './home/merge-open-request/merge-open-request.component';
import { PullRequestService } from './home/pull-request.service';
import { HttpClientService } from './common/services/http-client.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOpenRequestComponent,
    ListClosedRequestComponent,
    MergeOpenRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [PullRequestService, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
