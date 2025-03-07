import "../../globals.css";

interface content {
    title : string,
    body : string,
    image : string
}
export default function Content(props : content){
    return <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h1>{props.title}</h1>
        <div>
            <div className="w-1/2 h-1/2"><img src="/cool.jpg" /></div>
            {props.body}
        </div>
    </div>
}