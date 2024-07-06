import React from 'react'

const Hero = ( {children , hero = "defaultHero" }) => {
    console.log(hero ,"hero");
  return (
    <header className={hero}>{children}</header>
  )
}

export default Hero 