// Home.js
import React, { useState }  from 'react';
import imageList from '../components/ImageList'; // Import the list of image filenames
import { Slide } from 'react-slideshow-image';
import { faPenRuler, faHammer, faHouse, faBoreHole } from "@fortawesome/free-solid-svg-icons";
import InformationCard from "../components/InformationCard";
import Process from '../components/Process';
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
                <h3 className="services-title">
                    <span>Dịch Vụ</span>
                </h3>
                <table className="services-table">
                    
                    <tbody>
                        <tr>
                            <td><InformationCard
                                title="THIẾT KẾ NỘI VÀ NGOẠI THẤT"
                                description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
                                icon={faPenRuler}
                                />
                            </td>
                            <td>
                                <InformationCard
                                title="THI CÔNG NỘI VÀ NGOẠI THẤT"
                                description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
                                icon={faHammer}
                                />
                            </td>

                            <td>
                                <InformationCard
                                title="THIẾT KẾ KIẾN TRÚC, KẾT CẤU"
                                description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
                                icon={faHouse}
                                />
                            </td>
                            
                            <td>
                                <InformationCard
                                title="CUNG CẤP, THI CÔNG ĐÓNG, ÉP CỌC"
                                description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
                                icon={faBoreHole}
                                />
                                </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

            <br/>

            <Process/>

            <br/>

            <div className='customer-benefits'>
                customer benefits
            </div>

        </div>
    );
}

export default Home;
