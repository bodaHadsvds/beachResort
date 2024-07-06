import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import StyledHero from "../components/styledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.params.slug,
      defaultBcg,
      selectedIndex: 0,
    };
  }
  static contextType = RoomContext;
  
  componentDidMount() {
    console.log(this.props.params.slug);
  }
  handleImageClick = (index) => {
    this.setState({ selectedIndex: index });
 
  };
  render() {
    const { getRoom ,loading } = this.context;
    console.log(loading ,"loading");
    console.log(this.state.slug);
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could Be found</h3>
          <Link to="/room" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <>
        <StyledHero
          img={images[this.state.selectedIndex] || this.state.defaultBcg}
        >
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              return to room
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  alt="img"
                  onClick={() =>
               this.handleImageClick(index)
                  }
                />
              );
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>detalis</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6> price: ${price}</h6>
              <h6> size: {size} SQFT</h6>
              <h6> Max Capacity: {capacity > 1 ?`${capacity} people`:`${capacity} person`} </h6>
              <h6>{pets?"pets allowed" :"no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast"} </h6>
            </article>
            </div>  
             </section>
             <section className="room-extras">
              <h6> extras</h6>     
                      <ul className="extras">
{extras.map((extra ,i)=>(
  <li key={i}>- {extra} </li>
))}
             </ul>
             </section>

      </>
    );
  }
}
