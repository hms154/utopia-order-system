import {toggleSmartOption, smartOptionsEnum, TOGGLE_SMART_OPTION, ROOM_COUNT} from './actions'

const initialState = {
  numberOfRooms: 12,
  options: [
    {
        smartOption: smartOptionsEnum.LIGHTING,
        ON: true
    },
    {
        smartOption: smartOptionsEnum.THERMOSTAT,
        ON: true
    },
    {
        smartOption: smartOptionsEnum.AUDIO,
        ON: false
    },
    {
        smartOption: smartOptionsEnum.NETWORK,
        ON: true
    },
    {
        smartOption: smartOptionsEnum.VOICE,
        ON: true
    },
    {
        smartOption: smartOptionsEnum.UTOPIA,
        ON: true
    }    
  ]
}

const smartOptions = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SMART_OPTION:
          return Object.assign({}, state, { 
            options: state.options.map((option, smartOption) => {
                if (smartOption === action.option) {
                    console.log("Data Store STATE")
                    console.log(option)
                    console.log("Data Store STATE END")
                    return Object.assign({}, option, {
                      smartOption: action.option,
                      ON: !option.ON  
                    })
                }
                else return option
            })
          })
        case ROOM_COUNT:
          console.log("Number of Rooms: %s", action.count)
          return Object.assign({}, state, {numberOfRooms:action.count})
        default:
          return state
    }
}

export default smartOptions