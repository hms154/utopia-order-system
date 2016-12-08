export const TOGGLE_SMART_OPTION = 'TOGGLE_SMART_OPTION'

export var smartOptionsEnum = {
  LIGHTING: 0,
  THERMOSTAT: 1,
  AUDIO: 2,
  NETWORK: 3,
  VOICE: 4,
  UTOPIA: 5
}

export function toggleSmartOption(option) {
   return { type: TOGGLE_SMART_OPTION, option }
}

export const ROOM_COUNT = 'ROOM_COUNT'

export function updateRooms(count) {
   return { type: ROOM_COUNT, count }
}