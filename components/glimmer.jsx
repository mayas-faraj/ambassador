import PulseImage from '/public/assets/imgs/pulse.svg';
import style from '/style/glimmer.module.scss';
export default props=>{
	return (
		<p className={style["glimmer"]}><PulseImage alt="loading..."/></p>
	);
};
