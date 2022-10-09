import React, {Fragment} from 'react';
import axios from 'axios';
import SettingContext from './setting-context';
import PulseImage from '/public/assets/imgs/pulse.svg';
import style from '/style/events.module.scss';

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
			<div className={style["events"]}>
				<div className={style["event-wrapper"]}>
				{ 
					this.state.events==null && <p className={style["event-noitems"]}><PulseImage alt="loading.."/></p> 
				}
				{
					this.state.events!=null && (
						<Fragment>
							<div className={style["event-col"]}>
							{
								this.state.events.filter((event, index)=>index<20).map(event=>(
									<div key={event.year} className={style["event"]}>
										<span className={style["event__year"]}>{event.year}: </span>
										<span className={style["event__title"]}>{event.title}</span>
									</div>
								))
							}
							</div>
							<div className={style["event-col"]}>
							{
								this.state.events.filter((event, index)=>index>=20).map(event=>(
									<div key={event.year} className={style["event"]}>
										<span className={style["event__year"]}>{event.year}: </span>
										<span className={style["event__title"]}>{event.title}</span>
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
