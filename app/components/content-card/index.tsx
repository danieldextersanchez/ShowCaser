import "../../globals.css";

interface content {
    title : string,
    body : string,
    image : string,
    link ?: string
}
export default function Content(props : content){
    return <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h1>{props.link ? <a className="text-blue-500 underline" target="_blank" href={props.link}>{props.title} </a> : props.title}</h1>
        <div>
            <div className="w-1/2 h-1/2 ml-auto mr-auto"><img src={"/" + props.image}/></div>
            {props.body}
        </div>
    </div>
}