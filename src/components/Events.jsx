import React, {Fragment} from 'react';
import axios from 'axios';
import SettingContext from '../SettingContext';
import pulseImage from '../assets/imgs/pulse.svg';
import '../assets/css/Events.css';

class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			events: null 
		};
	}

	static contextType=SettingContext;

	componentDidMount() {
		axios.post(this.context.backendApiUrl, {"operation": "read-events"})
		.then(result=>this.setState({events: result.data}))
		.catch(err=>console.error(err.data));
	}

	render() {
		return (
			<div className="events">
				<div className="event-wrapper">
				{ 
					this.state.events==null && <p className="event-noitems"><img src={pulseImage} alt="loading.."/></p> 
				}
				{
					this.state.events!=null && (
						<Fragment>
							<div className="event-col">
							{
								this.state.events.filter((event, index)=>index<20).map(event=>(
									<div key={event.year} className="event">
										<span className="event__year">{event.year}: </span>
										<span className="event__title">{event.title}</span>
									</div>
								))
							}
							</div>
							<div className="event-col">
							{
								this.state.events.filter((event, index)=>index>=20).map(event=>(
									<div key={event.year} className="event">
										<span className="event__year">{event.year}: </span>
										<span className="event__title">{event.title}</span>
									</div>
								))
							}
							</div>
						</Fragment>
					)
				}
				</div>
			</div>
		);
	}
}

export default Events;
