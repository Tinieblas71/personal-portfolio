import React from "react";  
import '../styles/portfolio.css';
import { useState } from "react";

const Contact = () => { 

    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        number: "",
        subjet: "",
        message: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "34fc297a-ab72-4048-aeea-566900217b42");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }

        setFormValues({
            fullName: "",
            email: "",
            number: "",
            subjet: "",
            message: "",
          });

      };

      return (

        <form onSubmit={ onSubmit }>
            <div className="input-group">
                <div className="input-box">
                    <input 
                        type="text" 
                        name="fullName" 
                        placeholder="Full Name"
                        value={ formValues.fullName } 
                        onChange={ handleChange } />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="E-Mail"
                        value={ formValues.email } 
                        onChange={ handleChange } />
                </div>
                <div className="input-box">
                    <input 
                        type="number" 
                        name="number" 
                        placeholder="Phone Number"
                        value={ formValues.number } 
                        onChange={ handleChange } />
                    <input 
                        type="text" 
                        name="subjet"
                        placeholder="Subjet"
                        value={ formValues.subjet }
                        onChange={ handleChange } />
                </div>
            </div>
            <div className="input-group-2">
                <textarea 
                    name="message" 
                    id="" cols="30" rows="10"
                    placeholder="Your Message..."
                    value={ formValues.message }
                    onChange={ handleChange }>
                </textarea>
                <input type="submit" value="Send Message" className="btn"/>
            </div>
        </form>

      );

}

export default Contact; 