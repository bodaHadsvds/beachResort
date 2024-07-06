import React, { Component } from "react";
import Title from "../Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free Cocktails",
          info: "Enjoy our complimentary cocktails crafted by expert mixologists. Whether you prefer a classic Margarita, a refreshing Mojito, or something more exotic, our selection will delight your taste buds and enhance your experience.",
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info: "Explore the great outdoors with our endless hiking opportunities. From scenic trails to challenging terrains, there's something for every adventurer. Discover breathtaking views and connect with nature like never before.",
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info: "Our free shuttle service ensures convenient and comfortable transportation throughout your stay. Whether you're heading to local attractions, dining spots, or back to your room, we've got you covered with reliable and timely shuttles.",
        },
        {
          icon: <FaBeer />,
          title: "Strongest Beer",
          info: "Savor the bold flavors of our strongest beers, brewed to perfection for beer enthusiasts. Each sip offers a rich and robust experience, perfect for relaxing after a day of adventure or enjoying with friends.",
        },
      ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
