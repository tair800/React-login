import React from 'react'
import Banner from '../../Components/Banner'
import "./index.css"


const Contact = () => {
  return (
    <div>
      <Banner
        title="About Me"
        text="This is what I do."
        image="about-bg.jpg"
      />
    <div className="text">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
   <p>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!  </p>
   <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
    <br /><hr />
    <br />
    </div>
    </div>
  )
}

export default Contact
