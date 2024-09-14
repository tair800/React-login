import React from 'react'
import Banner from '../../Components/Banner'
import Textarea from '../../Components/Textarea';
import "./index.css"
import Button from '../../Components/Button';


const Home = () => {
  return (
    <div>
      <Banner
        title="Clean Blog"
        text="A Blog Theme by Start Bootstrap"
        image="home-bg.jpg"
      />
      <Textarea
      text1={"Man must explore, and this is exploration at its greatest"}
      text2={"Problems look mighty small from 150 miles up"}
      text3={"Posted by Start Bootstrap on September 24, 2023"}
      />
         <Textarea
      text1={"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."}
      text2={"Posted by Start Bootstrap on September 18, 2023"}
      />
        <Textarea
      text1={"Science has not yet mastered prophecy"}
      text2={"We predict too much for the next year and yet far too little for the next ten."}
      text3={"Posted by Start Bootstrap on August 24, 2023"}
      />
       <Textarea
      text1={"Failure is not an option"}
      text2={"Many say exploration is part of our destiny, but it’s actually our duty to future generations."}
      text3={"Posted by Start Bootstrap on July 8, 2023"}
      />
      <Button
      name={"Older Posts →"}
      tcolor={"White"}
      bgcolor={"#0085a1"}
      />
      <br /><hr /><br />
    </div>
  )
}

export default Home
