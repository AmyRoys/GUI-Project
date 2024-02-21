import '../styles/About.css';
import plant11 from '../assets/plant11.png';
import plant13 from '../assets/plant13.png';

const About: React.FC = () => {
    return (
        <div className='about-container'>
            <div className='about-box'>
                <div className='container-about'>
                    <h1 className='text-about'>About</h1>
                    <h2 className='text-divider'>Broad User Group</h2>
                    <p>The broad user group I chose is..</p>
                    <h2 className='text-divider'>Segmentation Method</h2>
                    <p>The segmentation method I chose is..</p>
                    <h2 className='text-divider'>User Persona</h2>
                    <p>My ideal user is...</p>
                </div>
            </div>
            <div>
            <img src={plant11} alt='plant2' className='plant2'/>
        </div>
        <div>
            <img src={plant13} alt='plant3' className='plant3'/>
        </div>
        </div>
    );
}
export default About;