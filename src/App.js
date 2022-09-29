import React, {Fragment, Suspense} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Glimmer from "./components/Glimmer";
import './assets/css/App.css';

const Cover=React.lazy(()=>import("./layout/Cover"));
const Home=React.lazy(()=>import("./layout/Home"));
const Book=React.lazy(()=>import("./layout/Book"));
const Essay=React.lazy(()=>import("./layout/Essay"));
const AboutIt=React.lazy(()=>import("./layout/AboutIt"));
const Honor=React.lazy(()=>import("./layout/Honor"));
const Articles=React.lazy(()=>import("./layout/Articles"));
const Article=React.lazy(()=>import("./layout/Article"));
const Travel=React.lazy(()=>import("./layout/Travel"));
const DiplomacyReport=React.lazy(()=>import("./layout/DiplomacyReport"));

function App() {
	return (
		<Suspense fallback={<Glimmer/>}>
			<BrowserRouter basename="/">
				<Routes>
					<Route exact path="/" element={<Cover className="home"/>}/>
					<Route exact path="/adad" element={<Home className="home"/>}/>
					<Route exact path="/adad/libri/:slug" element={<Book className="book"/>}/>
					<Route exact path="/adad/saggi/:slug" element={<Essay className="book"/>}/>
					<Route exact path="/adad/about" element={<AboutIt className="about"/>}/>
					<Route exact path="/adad/honor" element={<Honor className="honor"/>}/>
					<Route exact path="/adad/travel" element={<Travel className="travel"/>}/>
					<Route exact path="/adad/diplomacy-report" element={<DiplomacyReport className="diplomacy-report"/>}/>
					<Route exact path="/adad/articles" element={<Articles className="articles"/>}/>
					<Route exact path="/adad/article/:slug" element={<Article className="article"/>}/>
					<Route path="*" element={<PageNotFound/>}/>
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
