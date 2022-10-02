import "../style/Global.scss";

export default function App(page) {
	return <page.Component {...page.pagePropes}/>
}
