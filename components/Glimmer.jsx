import pulseImage from '../assets/imgs/pulse.svg';
import style from '../style/Glimmer.module.scss';
export default props=>{
	return (
		<p className={style["glimmer"]}><img src={pulseImage} alt="loading..."/></p>
	);
};
