import React from 'react';
import {ReactComponent as WorldImage} from '../assets/imgs/word-map-new.svg';
import '../assets/css/Map.css';

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state={activeCharacteristic: "ambasciatore"};
		this.setMapClass=this.setMapClass.bind(this);
	}

	setMapClass(event) {
		this.setState({activeCharacteristic: event.target.id});
	}

	render() {
		return (
			<div className="map">
				<div className="map__wrapper">
					<WorldImage className={"map__image"+(this.state.activeCharacteristic?" map__image--"+this.state.activeCharacteristic:"")}/>
					<div className={"map__info map__info--active-"+this.state.activeCharacteristic}>
						<div id="ambasciatore" onMouseEnter={this.setMapClass}>Ambasciatore</div>
						<div id="console" onMouseEnter={this.setMapClass}>Console</div>
						<div id="primo-segratario" onMouseEnter={this.setMapClass}>Primo segretario</div>
						<div id="rappresentante-permanente" onMouseEnter={this.setMapClass}>Rappresentante permanente</div>
						<div id="vice-ambasciatore" onMouseEnter={this.setMapClass}>Vice ambasciatore</div>
						<div id="direttore-generale" onMouseEnter={this.setMapClass}>Direttore generale</div>
					</div>
				</div>
				<div className="map__footer">
					<h3 className="map__title">Mappa<br/>degli spostamenti</h3>
				</div>
			</div>
		);
	}
}

export default Map;
