import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { ResultUsersComponent } from './result-users/result-users.component';
import { ResultUserComponent } from './result_users/result-user/result-user.component';
import { TopBarMessageComponent } from './top-bar-message/top-bar-message.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { DispoComponent } from './dispo/dispo.component';
import { ProfilComponent } from './profil/profil.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageBarComponent } from './message-bar/message-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuComponent,
    SearchComponent,
    ResultUsersComponent,
    ResultUserComponent,
    TopBarMessageComponent,
    ChatroomComponent,
    DispoComponent,
    ProfilComponent,
    SearchBarComponent,
    MessagesComponent,
    MessageBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
