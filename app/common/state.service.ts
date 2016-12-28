import {Injectable} from '@angular/core';
import {StateMessage} from './state.model';

@Injectable()
export class StateService {
private stateMessage: StateMessage;

/**
 * CTOR
 */
constructor() {  
  this.stateMessage = <StateMessage>{};
  this.stateMessage.message =  'Hello Message';
  this.stateMessage.lastReceived = new Date();
}	

  getMessage(): string {
    return this.stateMessage.message;
  };

  getLastReceivedMessageDate(): Date {
    return this.stateMessage.lastReceived;
  }

  setMessage(newMessage: string): void {
    this.stateMessage.message = newMessage;
    this.stateMessage.lastReceived = new Date();
  };
}
