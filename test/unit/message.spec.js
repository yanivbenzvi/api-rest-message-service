import {expect} from 'chai'
import Message  from '../../src/api/modules/message'


describe('Message [Unit]', () => {
    let stub   = null
    const data = {
        messageContent: 'text text text',
        sender:         'Yaniv',
        recipient:      'Shon',
    }

    beforeEach(() => {
        stub = new Message(data)
    })

    describe('#Constractor', () => {
        it('should be an object', () => {
            expect(stub).to.be.an('object')
        })

        it('should contain keys', () => {
            expect(Object.keys(stub)).to.be.eql(['entityName', 'id', 'messageContent', 'sender', 'recipient'])
            expect(stub.messageContent).to.be.eql(data.messageContent)
            expect(stub.sender).to.be.eql(data.sender)
            expect(stub.recipient).to.be.eql(data.recipient)
        })
    })

    describe('get message of specific receiver', () => {
        it('should return an array of messages', () => {

            new Message({
                messageContent: 'text2',
                sender:         'Yaniv',
                recipient:      'Shon',
            }).save()

            new Message({
                messageContent: 'text1',
                sender:         'Yaniv',
                recipient:      'Shon',
            }).save()

            new Message({
                messageContent: 'text1',
                sender:         'Yaniv',
                recipient:      'David',
            }).save()

            const stub = Message.findAll((item) => item["recipient"] === 'Shon')
            expect(stub).to.be.an('array').with.lengthOf(2)
            expect(stub[1].messageContent).to.be.eql('text1')
            expect(stub[0].messageContent).to.be.eql('text2')
        })
    })
})
