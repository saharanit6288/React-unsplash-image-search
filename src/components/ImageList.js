import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
   
    render() {
        return (
            <div className="image-list">
                {this.props.foundImages.map(img => {
                    return <ImageCard key={img.id} image={img} />
                })}
            </div>
        )
    }
}

export default ImageList;