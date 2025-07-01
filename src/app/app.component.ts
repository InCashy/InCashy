import { Component, NgZone } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Client } from 'appwrite';
import { environment } from '../environments/environment';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, LoginComponent],
})
export class AppComponent{

  isLoggedIn = false;

}
