import React from 'react';

const BackgroundShapes: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '0%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          backgroundColor: 'lightblue',
          filter: 'blur(200px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-5%',
          right: '0%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          backgroundColor: '#f472b6 ',
          filter: 'blur(200px)',
        }}
      />
    </div>
  );
};

export default BackgroundShapes;