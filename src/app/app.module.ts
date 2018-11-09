import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JbNavComponent } from './jb-nav/jb-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ViewMessagesComponent } from './view-messages/view-messages.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { AddMessageComponent } from './add-message/add-message.component';
import { PostListComponent } from './post-list/post-list.component';
import { DivPostListComponent } from './div-post-list/div-post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JbNavComponent,
    AddMessageComponent,
    ViewMessagesComponent,
    AddMessageComponent,
    PostListComponent,
    DivPostListComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '', component: JbNavComponent, children: [
          { path: 'add-message', component: AddMessageComponent },
          { path: 'view-messages', component: ViewMessagesComponent },
          { path: 'post-list', component: PostListComponent }
        ]
      },
    ]),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  FormsModule,
  MatNativeDateModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
