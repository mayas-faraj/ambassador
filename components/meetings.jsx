import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import SettingContext from './setting-context';
import Glimmer from './glimmer';
import style from '/style/meetings.module.scss';

class Meetings extends React.Component {
	constructor(props) {
		super(props);
		this.state={ meetings: null };
	}

	static contextType=SettingContext;

	componentDidMount() {
		axios.post(this.context.backendApiUrl, {"operation": "read-articles", "count": 5})
		.then(result=>this.setState({meetings: result.data}))
		.catch(err=>console.error(err.data));
	}

	render() {
		return (
			<div className={style["meetings"]}>
				<h2 className={style["meetings__title"]}>il diplomatico, lo scrittore, il saggista</h2>
				<div className={style["meetings-items"]}>
				{ this.state.meetings==null && <Glimmer/> }
				{ this.state.meetings!=null && this.state.meetings.length===0 && <p className={style["meetings-noitems"]}>gli articoli arriveranno presto</p> }
				{ this.state.meetings!=null && this.state.meetings.status!=="failed" && this.state.meetings.map(meeting=>(
						<div key={meeting.title} className={style["meetings-item"]}>
							<Link href={"/article/"+meeting.slug}>
								<a><img src={this.context.imagesUrl+"/"+meeting.image} className={style["meetings-item__image"]} alt={"Claudio Pacifico meeting, "+meeting.title}/></a>
							</Link>

							<h3 className={style["meetings-item__title"]}>
								<Link href={"/article/"+meeting.slug}>
									<a className={style["meetings-item__link"]}> 
										{meeting.title.replaceAll("\\n", "\n")}
									</a>
								</Link>
							</h3>
						</div>
				)) }
				</div>
			</div>
		);
	}
}

export default Meetings;
