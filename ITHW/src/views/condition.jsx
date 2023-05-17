import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Condition() {
    const {index} = useParams()
    const [condition, setCondition] = useState({
        index: null,
        name: '',
        desc: []
    })

    if (index) {
        useEffect(() => {
            axios.get(`https://www.dnd5eapi.co/api/conditions/${index}`)
                .then(response => {
                    setCondition(response.data);
                });
        })
    }

    return (
        <div className="card animated fadeInDown">
            <h1>{condition.name}</h1>
            {condition.desc.map((c, key) =>
                <div key = {key}>
                    <div>{c}</div>
                </div>
            )}
        </div>
    )
}