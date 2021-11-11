import Entity from './entity'
import { v4 as uuidv4 } from 'uuid';

/**
 * Message class
 */
export default class Message extends Entity{
    static ENTITY_TYPE = 'message';
    /**
     * Message constructor
     * @param messageContent
     * @param sender
     * @param recipient
     */
    constructor({message, sender, recipient}){
        super(Message.ENTITY_TYPE)

        this.id = uuidv4()
        this.message = message;
        this.sender = sender;
        this.recipient = recipient;
    }
}
