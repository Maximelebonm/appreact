import { useEffect } from "react";
import GenericForm from "../generic/GenericForm";

const ContactScreen = () => {
    const handleSubmit = async (response) => {
        console.log(await response.text());
      };

      useEffect(()=>{
        const fetchData = async () => {
          const contact = 
            await(await (await fetch("http://localhost:5001/contact")).json())      
          console.log(contact)
        }
        fetchData().catch(console.error);
      })


    return (
      <>
        <h1>ContactScreen</h1>
        <GenericForm
        endpoint="http://localhost:5001/contact"
        submitButtonText="Envoyer"
        callback={handleSubmit}
        validation={true}
        id="myForm"
        >

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Adresse mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Nom
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Prénom
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea style={{resize:"none"}}
              className="form-control"
              id="message"
              name="message"
              rows="5"
              
            ></textarea>
          </div>
        </GenericForm>
      </>
    );
  };
  
  export default ContactScreen;