import "../css/contributorsSlide.css";
import {contributors} from '../../../dummyData/contributors';

export default function LogoSlider() {

    return (
        <div className="sliderBox">
            <div className="contributors-slide">
            {contributors().map((contributor, index) => (
                <span key={index}>{contributor}</span>
            ))}
            </div>
            <div className="contributors-slide">
            {contributors().map((contributor, index) => (
                <span key={index}>{contributor}</span>
            ))}
            </div>
        </div>
    )
}