import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TinderService } from './services/tinder.service';
import { UserComponent } from './user/user.component';
import { MatchesComponent } from './matches/matches.component';
import { FaceDetectionComponent } from './facedetection/facedetection.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PassportComponent } from './passport/passport.component';

import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './services/tinder.messages.service';
import { LoginComponent } from './login/login.component';
import { ProfileLocationComponent } from './profilelocation/profilelocation.component';
import { FastMatchesComponent } from './fastmatches/fastmatches.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    FastMatchesComponent,
    UserComponent,
    ProfilesComponent,
    FaceDetectionComponent,
    NavbarComponent,
    PassportComponent,
    AboutComponent,
    ProfileComponent,
    MessagesComponent,
    LoginComponent,
    ProfileLocationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBuhH3Fi2ofA8t9jfd2iKowr9anDGyXvRA',
    }),
  ],
  providers: [TinderService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
