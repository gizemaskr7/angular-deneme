import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './service/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  registerMessage: string = "";
  childData(message: string) {
    this.registerMessage = message;
  }
 loginMessage:string="";
 Data(message:string){
  this.loginMessage=message;
 }
  currentComponent: string = '';


  constructor(private communicationService: CommunicationService) {

    this.communicationService.currentComponent$.subscribe((component) => {
      this.currentComponent = component;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {

  }
}
