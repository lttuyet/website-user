import React, { PureComponent } from 'react';
import img from './banner.png';
import '../App.css';

class Banner extends PureComponent {
    render() {
        return (
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    />
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" />
                </ol>
                <div className="carousel-inner banner">
                    <div className="carousel-item active">
                        <img src={img} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a
                    className="carousel-control-prev ml-md-8"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next mr-md-8"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Banner;
