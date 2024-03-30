import React, { useState } from 'react';
import '../css/ProjectCards.css'; // Import CSS file for card styling

const Card = ({ title, description, imageUrl,viewUrl }) => {
    return (
      <div className="projectcard">
        <div className="projectcard-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="projectcard-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {/* add viewUrl link */}
      </div>
    );
  };

  const Menu = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
      <div className="projectmenu">
        {categories.map((category, index) => (
          <button
            key={index}
            className={selectedCategory === category ? 'selected' : ''}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };

const ProjectCards = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', 'town house', 'apartment', 'mansion', 'coffee shop', 'hotel', 'restaurant'];
  
  const data = [
    {
      title: 'Example 1',
      description: 'Description for example 1',
      imageUrl: 'istockphoto-524085051-612x612.jpg',
      category: 'town house',
      viewUrl:''
    },
    {
      title: 'Example 2',
      description: 'Description for example 2',
      imageUrl: 'istockphoto-524085051-612x612.jpg',
      category: 'apartment',
      viewUrl:''
    },
    {
        title: 'Example 3',
        description: 'Description for example 3',
        imageUrl: 'istockphoto-524085051-612x612.jpg',
        category: 'mansion',
        viewUrl:''
      },
      {
        title: 'Example 4',
        description: 'Description for example 4',
        imageUrl: 'istockphoto-524085051-612x612.jpg',
        category: 'coffee shop',
        viewUrl:''
      },
      {
        title: 'Example 5',
        description: 'Description for example 5',
        imageUrl: 'istockphoto-524085051-612x612.jpg',
        category: 'hotel',
        viewUrl:''
      },
      {
        title: 'Example 6',
        description: 'Description for example 6',
        imageUrl: 'istockphoto-524085051-612x612.jpg',
        category: 'restaurant',
        viewUrl:''
      },
    // Add more data for other categories
  ];

  const filteredData = selectedCategory === 'all' ? data : data.filter(item => item.category === selectedCategory);
  
  return (
    <div className="projectmain-container">
      <Menu categories={categories} onCategorySelect={setSelectedCategory} />
      <div className="projectcard-container">
        {filteredData.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} imageUrl={item.imageUrl} viewUrl={item.viewUrl} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
