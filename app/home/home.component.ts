import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';
import {StateMessage} from '../common/state.model';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  messageState: StateMessage;

    constructor(private _stateService: StateService) {
      this.messageState = <StateMessage>{};
     }

  ngOnInit() {
    this.messageState.message = this._stateService.getMessage();
    this.updateLastMessageDate();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
    this.updateLastMessageDate();
  }

  private updateLastMessageDate(){
    this.messageState.lastReceived = this._stateService.getLastReceivedMessageDate();
  }
}
