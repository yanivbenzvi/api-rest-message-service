import { v4 as uuidv4 } from 'uuid';

export class Message {
    constructor(id, messageContent, sender, recipient){

        this.id = uuidv4()
        this.messageContent = messageContent;
        this.sender = sender;
        this.recipient = recipient;
    }
}
