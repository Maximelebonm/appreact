import { CardGender } from "../component/cardgender";

export function Gender(props) {

    return (
        
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 ">
                        <CardGender src="https://picsum.photos/id/237/400/300" title="Homme" desc="catégorie pour homme" />
                    </div>

                    <div className="col-3">
                        <CardGender src="https://picsum.photos/id/236/400/300" title="Femme" desc="catégorie pour femme" />
                  
                </div>
               
                    <div className="col-3">
                        <CardGender src="https://picsum.photos/id/238/400/300" title="Enfant" desc="catégorie pour enfant" />
                
                </div>
            
                    <div className="col-3">
                        <CardGender src="https://picsum.photos/id/239/400/300" title="Bebe" desc="catégorie pour bebe" />
                 </div>
                </div>
            </div>
        
    );
}