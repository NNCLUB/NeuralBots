var ChannelWrapper;
(function (ChannelWrapper) {
    function GenChannel() {
        let channel = new MessageChannel();
        return { send: channel.port2, recieve: channel.port1 };
    }
    ChannelWrapper.GenChannel = GenChannel;
})(ChannelWrapper || (ChannelWrapper = {}));
