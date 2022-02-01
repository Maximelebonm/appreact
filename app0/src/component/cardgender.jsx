import './cardgender.css';
export function CardGender(props) {
    const {src, title, desc} = props

    return (
   

        <div className="card text-white bg-dark">          
                <img src={src} className="card-img-top" />           
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"> {desc}</p>
                <a href="#" className="btn btn-light">{title}</a>
                </div>
        </div>
            
       
      
    
    );
}