export class MessageRequest {
    personalData: MessageData;
    requestType: any = '';
    text: string = '';
}
  
export class MessageData {
    textMessage: string = '';
}