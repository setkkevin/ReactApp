import React from "react";
import "./AppComponents.css";

export default function Form() {

    const [formData, setFormData] =React.useState(
     {firstName:"",lastName:"",email:"",comments:"" , 
     isFriendly: true, employment: "", favColor: ""}   
    )
   //  const [lastName, setLastName] =React.useState("")
    //console.log(formData.firstName, formData.comments)
   console.log(formData.favColor)

    function handleChange(event) {
        // setFirstName(event.target.value)
        // console.log(event.target.name)
        //console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return { 
            ...prevFormData,
            [name] :type ==="checkbox" ? checked : value
        }
    }) 

    }

    // function handleLastNameChange(event) {
    //     setLastName(event.target.value)
    // }
    function handleSubmit(event){
       event.preventDefault()
       console.log(formData)
    }


    return(
        <div className="loginPage">
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            /> 
 
             <input
             type="text"
             placeholder="Last Name"
             onChange={handleChange} 
             name="lastName"
             value={formData.lastName}
            /> 

            <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            /> 
            <textarea  
            value={formData.comments} 
            placeHolder="comments"
            onChange={handleChange} 
            name="comments"
            />
            <input 
            type="checkbox"  
            id="isFriendly"
            checked={formData.isFriendly }
            onChange={handleChange} 
            name="isFriendly"

            />
            <label htmlFor="isFriendly">Are you friendly</label>
            <br />
            <br />
            <fieldset>

                        <legend> Current employment status</legend>
                        <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment ==="unemployed"}
                        onChange={handleChange}
                        />
                        <label htmlFor="unemployed">Unempoyed</label>
                        <br />

                        <input
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment ==="part-time"}
                        onChange={handleChange}
                        />
                        <label htmlFor="part-time">Part-time</label>
                        <br />
                        <input
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment ==="full-time"}
                        onChange={handleChange}
                        />
                        <label htmlFor="full-time">Full-time</label>
                        <br />
            </fieldset>
            <br />

            <label htmlFor="favColor">Choose color </label>
            <br />
            <select 
            id="favColor"
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"
            >
            <option value="red"> Red</option>
            <option value="yellow"> Yellow</option>
            <option value="blue"> Blue</option>
            </select> 
            <br />
            <br />
            <button>Submit</button>

        </form>
        </div>
    )

}