import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyDh5SWzyVr6lt7Xp52fmQ9HqzuNDJqHC1M",
  authDomain: "act2-42a57.firebaseapp.com",
  databaseURL: "https://act2-42a57.firebaseio.com",
  projectId: "act2-42a57",
  storageBucket: "act2-42a57.appspot.com",
  messagingSenderId: "827946065437"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  
    AngularFirestoreModule,
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
