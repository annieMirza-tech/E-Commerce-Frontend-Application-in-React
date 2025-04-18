import React from 'react';
import Slider from 'react-slick';
import './CategoryCardView.css';

const categories = [
  { id: 1, imageUrl: 'images/cat1.jpg', title: 'Baby boy' },
  { id: 2, imageUrl: 'images/cat2.jpg', title: 'Baby Girl' },
  { id: 3, imageUrl: 'images/cat3.jpg', title: 'Baby Footwear' },
  { id: 4, imageUrl: 'images/cat4.jpg', title: 'Women Eastern' },
  { id: 5, imageUrl: 'images/cat5.jpg', title: 'Women Western' },
  { id: 6, imageUrl: 'images/cat6.jpg', title: 'Women bags' },
  { id: 7, imageUrl: 'images/cat7.jpg', title: 'Women Footwear' },
  { id: 8, imageUrl: 'images/cat8.jpg', title: 'Men Eastern' },
  { id: 9, imageUrl: 'images/cat9.jpg', title: 'Men Footwear' },
];

const CategoryCardView = ({ onCardClick }) => {
  return (
    <div className="category-card-view">
      <Slider
        dots={false}
        infinite={false}
        speed={500}
        slidesToShow={5}
        slidesToScroll={1}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        arrows={true}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 600, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ]}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="card"
            onClick={() => onCardClick(category.id)}
          >
            <img src={category.imageUrl} alt={`Category ${category.id}`} />
            <div className="card-title">{category.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        border: '2px solid white',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        zIndex: 1,
        color: 'black',
        fontSize: '24px',
        textAlign: 'center',
        lineHeight: '50px',
        boxSizing: 'border-box',
      }}
      onClick={onClick}
    >
      <span>&gt;</span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        border: '2px solid white',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        zIndex: 1,
        color: 'black',
        fontSize: '24px',
        textAlign: 'center',
        lineHeight: '50px',
        boxSizing: 'border-box',
      }}
      onClick={onClick}
    >
      <span>&lt;</span>
    </div>
  );
}

export default CategoryCardView;
