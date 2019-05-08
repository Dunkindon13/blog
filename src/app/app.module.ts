import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './view/main/posts/posts.component';
import { PostComponent } from './view/main/post/post.component';
import { NotFoundComponent } from './view/main/not-found/not-found.component';
import { StubPipe } from './controller/pipes/stub.pipe';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    NotFoundComponent,
    StubPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    ToggleButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
