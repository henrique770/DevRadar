import socketio from "socket.io-client";

const socket = socketio("http://192.168.0.13:3333", {
  autoConnect: false
});

function subscribeToNewDevs(subribeFunction) {
  socket.on("new-dev", subribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };
  socket.connect();
}

function disconnect() {
  if (socket.connect) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
