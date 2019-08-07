import React from 'react';

class ImageCard extends React.Component {
    
    render() {
        return (
            <div className="image-list">
                <img src={this.props.image.urls.regular}
                    alt={this.props.image.alt_description} />
            </div>
        )
    }
}

export default ImageCard;