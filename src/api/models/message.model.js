import EntityModel      from './entity.model'
import { v4 as uuidv4 } from 'uuid';

/**
 * MessageModel class
 */
export default class MessageModel extends EntityModel{
    static ENTITY_TYPE = 'message';
    /**
     * MessageModel constructor
     * @param message
     * @param sender
     * @param recipient
     */
    constructor({message, sender, recipient}){
        super(MessageModel.ENTITY_TYPE)

        this.id = uuidv4()
        this.message = message;
        this.sender = sender;
        this.recipient = recipient;
    }
}
