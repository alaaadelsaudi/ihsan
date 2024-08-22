import React from 'react';
import Title from '../Home/Title';
import FirstSection from '../sections/FirstSection';

const donationCards = [
  {
    imgSrc: "src/Components/imges/causes001.jpg",
    title: "Help the poor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    percentage: "57%",
    raised: "$85,551",
    goal: "$150,000"
  },
  {
    imgSrc: "src/Components/imges/causes002.jpg",
    title: "Healthcare Facility",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    percentage: "96%",
    raised: "$45,320",
    goal: "$140,000"
  },
  {
    imgSrc: "src/Components/imges/causes003.jpg",
    title: "Monthly Food Items",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    percentage: "32%",
    raised: "$301,730",
    goal: "$300,000"
  },
  {
    imgSrc: "src/Components/imges/causes004.jpg",
    title: "Build The Mosques",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    percentage: "31%",
    raised: " $1.05 million",
    goal: "$3.45 million"
  },
  {
    imgSrc: "src/Components/imges/causes005.jpg",
    title: "Hajj For Elderly",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    percentage: "71%",
    raised: "$35,430",
    goal: "$50,000"
  },
  {
    imgSrc: "src/Components/imges/causes006.jpg",
    title: " Books For Children ",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    percentage: "48%",
    raised: "$963",
    goal: " $2,000"
  },
  
];

const DonationCard = ({ card }) => (
 
  <div className="donations-card" >
    <div className='our-card-img'>
      <img style={{ width: '100%', height: '100%' }} src={card.imgSrc} alt={card.title} />
    </div>
    <div className='donations'>
      <h4>{card.title}</h4>
      <p>{card.description}</p>
      <div className='rang'>
        <span style={{ fontSize: "24px", position: 'absolute', right: '20px', top: "-15px", margin: "auto" }}>
          {card.percentage}
        </span>
      </div>
      <div>
        <span>Raised: {card.raised} </span> 
        <span>Goal: {card.goal}</span>
      </div>
      <button>Donate Now</button>
    </div>
  </div>

);

const Donation = () => {
  return (<>
   <FirstSection titlepage={'Our Causes'} spanpage={'Our Causes'}/>
    <div style={{padding:'70px 0px',marginTop:'40px'}} className='photo'>
    <Title img={ <img src="src/Components/imges/logo_mosq-1.png" alt=""/>}
    h2={'Support Our Causes'} h4={'Give charity without delay, for it stands in the way of calamity!'}/>
    </div>
    <div className="donation-cards-container" style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
      {donationCards.map((card, index) => (
        <DonationCard card={card} key={index} />
      ))}
    </div>
    </>
  );
};

export default Donation;
