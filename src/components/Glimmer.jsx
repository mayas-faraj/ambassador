import pulseImage from '../assets/imgs/pulse.svg';
import '../assets/css/Glimmer.css';
export default props=>{
	return (
		<p className="glimmer"><img src={pulseImage} alt="loading..."/></p>
	);
};
