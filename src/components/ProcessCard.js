import React from 'react';
import '../css/ProcessCard.css' // Import CSS file for styling

// Card component representing a single card with a number, title, image, and description
const Card = ({ number, title, image, description }) => {
  return (
    <div className="processcard">
      <div className="processcard-header">
        {/* Number displayed in a white square */}
        <div className="processcard-number">{number}</div>
        {/* Title of the card with background color */}
        <div className="processcard-title">{title}</div>
      </div>
      <div className="processcard-content">
        {/* Image of the card */}
        <img className="processcard-image" src={image} alt={title} />
        {/* Description of the card */}
        <div className="processcard-description">{description}</div>
      </div>
    </div>
  );
};

// RowOfCards component representing a row of cards
const RowOfCards = ({ data, startIndex }) => {
  return (
    <div className="processrow">
      {/* Map over the data array to render each card */}
      {data.map((item, index) => (
        <Card
          key={index}
          number={startIndex + index + 1} // Calculate the correct number for each card
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

// YourComponent is the main component rendering two rows of cards
const ProcessCard = () => {
  // Sample data for demonstration
  const cardData = [
    {
      title: 'Tiếp Nhận & Khảo Sát',
      image: 'Focus-on-face-to-face-interactions.png',
      description: 'Tiếp nhận nhu cầu khách hàng thông qua hotline, form, tin nhắn từ các kênh facebook, instagram, tiktok, youtube.',
    },
    {
      title: 'Báo Giá Hợp Đồng Thiết Kế',
      image: 'Focus-on-face-to-face-interactions.png',
      description: 'Tiếp nhận nhu cầu khách hàng thông qua hotline, form, tin nhắn từ các kênh facebook, instagram, tiktok, youtube.',
    },
    {
      title: 'Lên Ý Tưởng 2D & Concept 3D',
      image: 'Focus-on-face-to-face-interactions.png',
      description: 'Tiếp nhận nhu cầu khách hàng thông qua hotline, form, tin nhắn từ các kênh facebook, instagram, tiktok, youtube.',
    },
    {
      title: 'Gửi Duyệt Phối Cảnh 3D',
      image: 'Focus-on-face-to-face-interactions.png',
      description: 'Tiếp nhận nhu cầu khách hàng thông qua hotline, form, tin nhắn từ các kênh facebook, instagram, tiktok, youtube.',
    },
    {
      title: 'Khai Triển Chi Tiết Thi Công',
      image: 'Focus-on-face-to-face-interactions.png',
      description: 'Tiếp nhận nhu cầu khách hàng thông qua hotline, form, tin nhắn từ các kênh facebook, instagram, tiktok, youtube.',
    },
    {
      title: 'Chọn & Duyệt Nguyên Vật Liệu',
      image: 'Focus-on-face-to-face-interactions.png',
      description: 'Tiếp nhận nhu cầu khách hàng thông qua hotline, form, tin nhắn từ các kênh facebook, instagram, tiktok, youtube.',
    },
    {
      title: 'Báo Giá Hợp Đồng Thi Công',
      image: 'Focus-on-face-to-face-interactions.png',
      description: 'Tiếp nhận nhu cầu khách hàng thông qua hotline, form, tin nhắn từ các kênh facebook, instagram, tiktok, youtube.',
    },
    {
      title: 'Tiến Hành Thi Công',
      image: 'Focus-on-face-to-face-interactions.png',
      description: 'Tiếp nhận nhu cầu khách hàng thông qua hotline, form, tin nhắn từ các kênh facebook, instagram, tiktok, youtube.',
    },
    // Add more cards as needed
  ];

  return (
    <div>
      {/* Render the first row with cards 1 to 4 */}
      <RowOfCards data={cardData.slice(0, 4)} startIndex={0} />
      {/* Render the second row with cards 5 to 8 */}
      <RowOfCards data={cardData.slice(4, 8)} startIndex={4} />
    </div>
  );
};
// Exporting InformationCard component
export default ProcessCard;
