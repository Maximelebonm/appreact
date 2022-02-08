import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import GenericCard from "../components/GenericCard";
import { CardGender } from "../components/cardgender";
import { Product } from "../models/product.model";
import { Gender } from "../models/gender.model";
import { Link } from "react-router-dom";


const GenderScreen = () => {


    const [genders, setGenders] = useState([]);
    const { id } = useParams();
    const genderRef = useRef(null);
    const productsRef = useRef([]);
    let page = 1;
    let startElement = 0;
    let endElement = 9;
  

    useEffect(() => {
        const fetchData = async () => {
            const genders = Gender.from(await (await fetch('/data/gender.json')).json()
            );
            if (id){
                const products = Product.from(
                    await(await (await fetch("/data/product.json")).json())
                );
                genderRef.current = genders.find((g) => g.id === +id);
                productsRef.current = products.filter((p)=> p.gender_id === +id).slice(startElement, endElement);
              console.log(genderRef)  
            }
            setGenders(genders);       
        }
        fetchData().catch(console.error);
    }, [id]);

    const gender = genderRef.current;
    console.log(gender)
    const products = productsRef.current;
    console.log(products)

    return (       
        <>
        <h1>GenderScreen</h1>
        {!id &&(        
        <div className="container-fluid">
            <div className="row">
                {genders.map((g) => {
                    return (
                        <div className="col-3" key={g.id}>
                         
                            <GenericCard 
                            imgSrc={g.image} 
                            title={g.title} 
                            description={g.description}
                            route={"/gender/" + g.id}
                            />                     
                        </div>
                    );
                })}
            </div>
        </div>
                
        )}
        {id && gender && (
            <div className="row">
                <h2>Gender {gender.title}</h2>
                {products.map(p => {
                    return <div key={p.id}> {p.title} : {p.price.toFixed(2)}€ </div>;
                })}
            
            </div>
        )}
        </>
    );
};

export default GenderScreen;