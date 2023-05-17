import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Dashboard() {

    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        getConditions();
    }, []);

    function getConditions() {
        axios.get('https://www.dnd5eapi.co/api/conditions')
            .then(response => {
                setConditions(response.data.results);
            });
    }
    return (
        <div>
            <div>
                <h1>D&D 5e Conditions</h1>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conditions.map((c, key) =>
                            <tr key = {key}>
                                <td><Link to={`/conditions/${c.index}`}>{c.name}</Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}