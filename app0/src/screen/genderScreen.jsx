import { useEffect, useState } from "react";
import GenericCard from "../components/GenericCard";
import { CardGender } from "../components/cardgender";
import { Gender } from "../models/gender.model";

function GenderScreen() {


    const [genders, setGenders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data = Gender.from(await (await fetch('./data/gender.json')).json());
            setGenders(data);
        }
        fetchData().catch(console.error);
    }, [genders])


    return (
        

        <div className="container-fluid">
            <div className="row">
                {genders.map(gender => {
                    return (
                        <div className="col-3 ">
                            <GenericCard imgSrc={gender.image} title={gender.title} description={gender.description}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default GenderScreen