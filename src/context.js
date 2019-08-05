import React, { Component } from 'react'

const RoomContext = React.createContext();
// <RoomContext.Provider value={'hello'} />

class RoomProvider extends Component {
    state = {};
    render() {
        return (
            <RoomContext.Provider value={"provider"}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomContext, RoomProvider, RoomConsumer };
