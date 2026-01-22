const clientName = '/client'
const serverName = '/server'

// Client Side Packets start here
export const CLIENT_TEST = `${clientName}/join_room`;
export const CLIENT_MOVE_TOPIC = `${clientName}/player_movement`;
export const CLIENT_ADD_PLAYER = `${clientName}/add_player`;
export const CLIENT_CHAT = `${clientName}/player_chat`;
export const CLIENT_PLAY_ANIMATION = `${clientName}/play_animation`;
export const CLIENT_STOP_ANIMATION = `${clientName}/stop_animation`;
export const CLIENT_DISCONNECT = `${clientName}/disconnect`;
export const CLIENT_CONNECTION_DISCONNECTED = `/user/client_disconnected`;
// Client Side Packets end here

// Server Side packets start here
export const SERVER_VERIFY_PACKET = `${serverName}/gateway`
// Server Side packets end here