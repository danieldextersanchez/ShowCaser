import "../../globals.css";

interface content {
    title : string,
    body : string
}
export default function Content(props : content){
    return <div>
        <h1>{props.title}</h1>
        <div>
            {props.body}
        </div>
    </div>
}