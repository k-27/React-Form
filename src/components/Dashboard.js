import React, { useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import {EmployeeDataContext} from "../contexts/EmployeeDataContext";

function Dashboard() {

    const [employees, setEmployees]= useState([]);

    return (
        <Container fluid={true}>
            <Row>
                <div style={styles.headerStyle} >
                <h2>Employee Management Application</h2>
                </div>
            </ Row>
            <Row>
                <EmployeeDataContext.Provider value={{employees, setEmployees}}>
                <Col md={6}>
                    <EmployeeForm />
                </Col>
                <Col md={6}>
                    <EmployeeList />
                </Col>
                </EmployeeDataContext.Provider>
            </ Row>
        </Container>
    )
}

export default Dashboard;


const styles = {

    headerStyle: {
    //   border: "1px solid #006AB4",
      allignContents : "center",
      padding: "5px",
      textAlign: "center"
    },
    formWrapper: {
        "height": "100vh",
        "width": "100%",
        "display": "flex",
        "flexDirection": "column",
        // "justifyContent": "center",
        // "alignItems": "center",

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

   