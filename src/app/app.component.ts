import { Component, NgZone } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Client } from 'appwrite';
import { environment } from '../environments/environment';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent{

  // Environment variables - you'll need to set these up in your environment.ts
  endpoint = environment.appwriteEndpoint;
  projectId = environment.appwriteProjectId;
  projectName = environment.appwriteProjectName;

  private client: Client;

  constructor(private zone: NgZone) {
    this.client = new Client()
      .setEndpoint(environment.appwriteEndpoint)
      .setProject(environment.appwriteProjectId);
  }

}
