import React from "react";
import "./About.css"

import NavigationBar from "../../components/NavigationBar/NavigationBar"
import Mentor from "../../assets/mentor.jpeg"
import PeerMentor from "../../assets/peer_mentor.jpeg"

import Mentee1 from "../../assets/mentee1.jpeg"
import Mentee2 from "../../assets/mentee2.jpeg"
import Mentee3 from "../../assets/mentee3.jpeg"
import Mentee4 from "../../assets/mentee4.jpeg"
import Mentee5 from "../../assets/mentee5.jpeg"
import Mentee6 from "../../assets/mentee6.jpeg"


const About = () => {
  return (
    <div className="what">
      <NavigationBar/>
<div className="about-us-section">
        <h1>About the project</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.sad
          on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.sad
        </p>
      </div>
      <div className="team">
      <h1>Meet the team</h1>
      </div>

      <div className="wdc">
<div className="mentors">
<div className="droplet">

            <div className="water-content">

            <div className="info-about">
<img src={Mentor}>
</img>
</div>

                <h2>Shubhi Goyal</h2>
       
                <p>
  Mentor
</p>
            </div>
        </div>
        
        <div className="droplet">
            <div className="water-content">
            <div className="info-about">
<img src={PeerMentor}>
</img>
</div>
              
                <h2>Risham Shah</h2>
                <p>
  Peer Mentor</p>

            </div>
        </div>
        </div>

        <div className="mentees">
        <div className="droplet">
            <div className="water-content">


            <div className="info-about">
<img src={Mentee1}>
</img>
</div>


                <h2>Sulav Sapkota</h2>
                <p>
  Mentee
</p>

            </div>        
        </div>



        <div className="droplet">
            <div className="water-content">


            <div className="info-about">
<img src={Mentee2}>
</img>
</div>
                <h2>Anshu Pradhan</h2>

                <p>
  Mentee
</p>

            </div>        
        </div>


        <div className="droplet">
            <div className="water-content">


            <div className="info-about">
<img src={Mentee5}>
</img>
</div>
                <h2>Sonakshi Shrestha</h2>
                <p>
  Mentee
</p>


            </div>        
        </div>

      

        </div>
  
        <div className="mentees2">
        <div className="droplet">
            <div className="water-content">


            <div className="info-about">
<img src={Mentee3}>
</img>
</div>
                <h2>Abiral Manandhar</h2>

                <p>
  Mentee
</p>

            </div>        
        </div>



        <div className="droplet">
            <div className="water-content">

            <div className="info-about">
<img src={Mentee6}>
</img>
</div>
                <h2>Oshin Gautam</h2>

                <p>
  Mentee
</p>

            </div>        
        </div>


        <div className="droplet">
            <div className="water-content">

            <div className="info-about">
<img src={Mentee4}>
</img>
</div>
                <h2>Archana Pandey</h2>

<p>
  Mentee
</p>

            </div>        
        </div>

      

  

    </div>
  </div>

  </div>


  );
};

export default About;
