import style from "/style/pagination.module.scss";

export default function(props) {
	let pages=Array(props.pagesCount);
	for(let i=0; i<props.pagesCount; i++)
		pages[i]=i+1;

	const onPageChange=(pageNumber)=>{
		if(props.onPageChange) props.onPageChange(pageNumber);
	};

	return (
		<div className={style["pagination"]}>
		{
			pages.map((v, index)=><div key={index} title={`Pagin (${index+1})`} className={style["pagination__item"]+" "+(props.activePage==index+1?style["pagination__item--active"]:"")} onClick={()=>onPageChange(index+1)}></div>)
		}
		</div>
	);
}
