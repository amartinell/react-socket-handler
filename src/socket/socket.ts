const joinedChannels = new Map()

export const makeSocketConnection = ({
  handleDataMessage,
  handleDoneMessage,
  handleUpdateMessage,
}: any) => {
  // Create a socket connection
  // ...

  // You can also do here the logic of handling pagination messages
  // socket.on('data', handleDataMessage)
  // socket.on('done', handleDoneMessage)
  // socket.on('update', handleUpdateMessage)

  const joinChannel = (channelToJoin: string) => {
    console.log(`joining ${channelToJoin}`)
    joinedChannels.set(channelToJoin, channelToJoin)

    // Fake data received
    setTimeout(() => handleDataMessage([
      { id: 1, label: 'a' },
      { id: 2, label: 'b' },
      { id: 3, label: 'c' },
    ]), 2000)
    setTimeout(() => handleDataMessage([
      { id: 4, label: 'd' },
      { id: 5, label: 'e' },
      { id: 6, label: 'f' },
    ]), 4000)
    setTimeout(() => handleDoneMessage(), 4050)

    setTimeout(() => handleUpdateMessage({
      id: 1,
      label: 'a-updated',
    }), 10000)
  }
  const leaveChannel = (channelToLeave: string) => {
    console.log(`leaving ${channelToLeave}`)
    joinedChannels.delete(channelToLeave)
  }
  const removeAllSocketListeners = () => {}

  return {
    joinChannel,
    leaveChannel,
    removeAllSocketListeners,
    joinedChannels,
  }
}