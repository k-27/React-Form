import React, { useState} from "react";
import Button from 'react-bootstrap/Button'


function EmployeeForm(props) {

    const initialFormState= {
        name:'',
        age:'',
        email: '',
        phone: '',
        isValidName: true,
        isValidAge: true,
        isValidPhone: true,
        isValidEmail: true,
    }
    const [formData, setFormData]= useState(initialFormState);

    const {name,age,email,phone,isValidAge,isValidPhone,isValidEmail,isValidName}= formData;

    const onChange =  e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const resetFormData =()=> {
        setFormData(initialFormState)
    };

    const validateIputs=()=>{
        let isValidName=true;
        let isValidAge=true;
        let isValidEmail=true;
        let isValidPhone=true;
        if(!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)){
            isValidName=false;
        };
        if(!/^\d{10}$/.test(phone)){
            isValidPhone=false;
        };
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            isValidEmail=false;
        };
        if(!/^\d{2}$/.test(age) || age<18 ){
            isValidAge=false;
        };
        if(isValidAge&&isValidEmail&&isValidPhone&&isValidName){
            return true;
        }else {
            setFormData({ ...formData, isValidName, isValidAge, isValidEmail, isValidPhone });
            return false;
        }
    };

    const onFormSubmit = e =>  {
        e.preventDefault();
        if(validateIputs()){
            props.addEmployee((employees)=>[...employees,{
                name,age,email,phone
            }]);
            setFormData(initialFormState);
            window.alert('Employee Added successfully')
        }else{
            window.alert('Please Enter Valid inputs')
        }
    };


    return (
        <div style={styles.formWrapper}>
        <div style={styles.formStyle}>
            <h3>Add Employee</h3>
            <form onSubmit={onFormSubmit}>
                <div >
                    <label styles={styles.inputLabel}>Name</label><br/>
                    <input
                    style={styles.inputTab}
                    placeholder="Full Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                    />
                    {!isValidName ? (
                            <p style={{color: "red"}}>Ivalid name (No digits or Special characters allowed) </p>
                        ) : null
                    }
                </div>
                <div >
                <label styles={styles.inputLabel}>Age</label><br/>
                    <input
                    style={styles.inputTab}
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={age}
                    onChange={onChange}
                    required
                    />
                    {!isValidAge ? (
                            <p style={{color: "red"}}>Ivalid Age (must be a value between 18 and 99 ) </p>
                        ) : null
                    }
                </div>
                <div >
                <label styles={styles.inputLabel}>Email</label><br/>
                    <input
                    style={styles.inputTab}
                    placeholder="example@email.com"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                    />
                    {!isValidEmail ? (
                            <p style={{color: "red"}}>Ivalid Email </p>
                        ) : null
                    }
                </div>
                <div >
                <label styles={styles.inputLabel}>Phone</label><br/>
                    <input
                    style={styles.inputTab}
                    placeholder="10 digit phone number"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    required
                    />
                    {!isValidPhone ? (
                            <p style={{color: "red"}}>Ivalid Phone number (10 digits required!) </p>
                        ) : null
                    }
                </div>
                <div style={styles.buttonGroup}>
                    <Button onClick={resetFormData} style={{margin: "5px"}}>Reset</Button>
                    <Button type="submit" style={{margin: "5px"}}>Add Employee</Button>
                </div>
            </form>
      </div>
    </div>
  )
  
    
}

export default EmployeeForm

const styles = {

    formWrapper: {
        "height": "100vh",
        "width": "100%",
        "display": "flex",
        "flexDirection": "column",
    },
    formStyle: {
            "width": "100%",
            "display": "flex",
            "flexDirection": "column",
            "padding": "20px 40px",
           
    },
    inputLabel: {
        "fontSize": "0.8em",
        "marginBottom": "0.25em",
        "color": "#222",
        "fontWeight": "lighter"
    },
    inputTab: {
        "padding": "10px 10px",
        "borderRadius": "5px",
        "outline": "none",
        "border": "1px solid #cfcfcf"
    },
    buttonGroup: {
        "padding": "10px",
        "width" : "100%",
        "justifyContent": "space-between",
        "alignContent": "center"
    }
  
   };
