module ChannelWrapper {
    export interface IChannel {
        send: MessagePort
        recieve: MessagePort
    }

    export function GenChannel(): IChannel {
        let channel = new MessageChannel()
        return { send: channel.port2, recieve: channel.port1 }
    }
}
