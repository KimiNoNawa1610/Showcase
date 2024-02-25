// Home.js
import React, { useState, useEffect }  from 'react';
import imageList from '../components/ImageList'; // Import the list of image filenames
import { Slide } from 'react-slideshow-image';
import { faObjectGroup, faBuilding, faHouse, faCampground } from "@fortawesome/free-solid-svg-icons";
import InformationCard from "../components/InformationCard";
import 'react-slideshow-image/dist/styles.css';
import '../css/Home.css';


const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '700px'
  }

const Home = () => {
    // State to track the color of each circle
    const [circleColor, setCircleColor] = useState({});

    // Function to toggle the color of the circle
    const toggleCircleColor = (index) => {
        setCircleColor((prevColor) => ({
        ...prevColor,
        [index]: prevColor[index] === 'red' ? 'blue' : 'red',
        }));
    };
    
    return (
        <div>

            <br/>

            <Slide>
                {imageList.map((slideImage, index)=> (
                    <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        <span style={spanStyle}>{slideImage.caption}</span>
                    </div>
                    </div>
                ))} 
            </Slide>

            <br/>

            <div className='services'>
                <table className="services-table">
                    
                    <tbody>
                        <tr>
                            <td><InformationCard
                                title="Designing"
                                description="We Design ..."
                                icon={faObjectGroup}
                                />
                            </td>
                            <td>
                                <InformationCard
                                title="Constructing"
                                description="Constructing ..."
                                icon={faBuilding}
                                />
                            </td>

                            <td>
                                <InformationCard
                                title="Finishing Appliance"
                                description="Finishing Appliance ..."
                                icon={faHouse}
                                />
                            </td>
                            
                            <td>
                                <InformationCard
                                title="Concrete Flooring"
                                description="Concrete Flooring ..."
                                icon={faCampground}
                                />
                                </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

            <br/>

            <div className='consulting'>
                this is a consulting
            </div>

            <br/>

            <div className='customer-benefits'>
                customer benefits
            </div>

            <br/>

            <footer className='contacts'>
                this is contacts
            </footer>

        </div>
    );
}

export default Home;
