import "../../globals.css";
import Link from 'next/link'
import Image from 'next/image'

interface content {
    title : string,
    body : string,
    image : string,
    link ?: string
}
export default function Content(props : content){
    return <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h1>{props.link ? <Link className="text-blue-500 underline" target="_blank" href={props.link}>{props.title} </Link> : props.title}</h1>
        <div>
            <div className="w-1/2 h-1/2 ml-auto mr-auto"><Image src={"/" + props.image} alt=""/></div>
            {props.body}
        </div>
    </div>
}