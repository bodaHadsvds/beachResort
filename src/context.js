import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();
class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      isDarkTheme: false,
      loading: true,
      type: "all",
      capacity: 0,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakFast: false,
      pets: false,
    };
  }

  componentDidMount() {
    let rooms = this.formateData(items);
    console.log(rooms, "rooms");

    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formateData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = (slug) => {
    let tempItems = [...this.state.rooms];
    const Room = tempItems.find((room) => room.slug === slug);
    return Room;
  };
  handleChange = (event) => {
    const target = event.target;

    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  toggleDarkTheme = () => {
    let { isDarkTheme } = this.state;
    const DarkTheme =!isDarkTheme 
    this.setState({ isDarkTheme: DarkTheme});
    const body = document.querySelector("body")
    body.classList.toggle('dark-theme' ,DarkTheme)
  };
  filterRooms = () => {
    let { rooms, capacity, minSize, breakFast, type, price, maxSize, pets } =
      this.state;
    let tempRooms = [...rooms];

    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    //filtr by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    //filer by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    //filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakFast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms,
    });
  };
  render() {
    console.log(this.state);
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
          toggleDarkTheme: this.toggleDarkTheme,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
