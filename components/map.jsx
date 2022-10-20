import React from 'react';
import WorldImage from '/public/assets/imgs/word-map-new.svg';
import style from '/style/map.module.scss';

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state={activeCharacteristic: "ambasciatore"};
		this.setMapClass=this.setMapClass.bind(this);
	}

	componentDidMount() {
		this.beepAudio=new window.Audio('/assets/sounds/beep.mp3');
	}

	setMapClass(event) {
		this.setState({activeCharacteristic: event.target.id});
		try {
			this.beepAudio.currentTime=0;
			this.beepAudio.play();
		}
		catch (ex) {
			console.log("audio error: ", ex);
		}
	}

	render() {
		return (
			<div className={style["map"]}>
				<div className={style["map__wrapper"]}>
					<WorldImage viewBox="0 0 1700 870" className={"map__image--"+this.state.activeCharacteristic+" "+style["map__image"]+" "+(this.state.activeCharacteristic?style["map__image--"+this.state.activeCharacteristic]:"")}/>
					<div className={style["map__info"] + " " + style["map__info--active-"+this.state.activeCharacteristic]}>
						<div id="ambasciatore" className={style["label--ambasciatore"]} onMouseEnter={this.setMapClass}>Ambasciatore</div>
						<div id="console" className={style["label--console"]} onMouseEnter={this.setMapClass}>Console</div>
						<div id="primo-segratario" className={style["label--primo-segratario"]} onMouseEnter={this.setMapClass}>Primo segretario</div>
						<div id="rappresentante-permanente" className={style["label--rappresentante-permanente"]} onMouseEnter={this.setMapClass}>Rappresentante permanente</div>
						<div id="vice-ambasciatore" className={style["label--vice-ambasciatore"]} onMouseEnter={this.setMapClass}>Vice ambasciatore</div>
						<div id="direttore-generale" className={style["label--direttore-generale"]} onMouseEnter={this.setMapClass}>Direttore generale</div>
					</div>
				</div>
				<div className={style["map__footer"]}>
					<h3 className={style["map__title"]}>mappa<br/>degli spostamenti</h3>
				</div>
			</div>
		);
	}
}

export default Map;
