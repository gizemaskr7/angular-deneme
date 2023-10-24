// home.component.ts
import { Component } from '@angular/core';
import { CommunicationService } from '../service/communication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private communicationService: CommunicationService) {}

  showLogin() {
    this.communicationService.setCurrentComponent('login');
  }

  showRegister() {
    this.communicationService.setCurrentComponent('register');
  }
}
