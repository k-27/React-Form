import React,{useContext} from "react";
import { Container, Row, Accordion} from 'react-bootstrap'
import {EmployeeDataContext} from "../contexts/EmployeeDataContext";

function EmployeeList() {
    const {employees} = useContext(EmployeeDataContext);

    const renderEmployees =()=>{
        if(employees.length===0){
            return (
                <p>No Data</p>
            )
        }else{
            return(
                <Accordion defaultActiveKey="0">
                    {
                        employees.map( employee=>{
                            return(
                                <Accordion.Item >
                                    <Accordion.Header>{employee.name}</Accordion.Header>
                                    <Accordion.Body>
                                        <table >
                                            <tbody>
                                                <tr>
                                                    <td id="left"> Name   </td>
                                                    <td id="right">: {employee.name}</td>
                                                </tr>
                                                <tr>
                                                    <td id="left">Age     </td>
                                                    <td id="right">: {employee.age}</td>
                                                </tr>
                                                <tr>
                                                    <td id="left">Email   </td>
                                                    <td id="right">: {employee.email}</td>
                                                </tr>
                                                <tr>
                                                    <td id="left">Phone    </td>
                                                    <td id="right">: {employee.phone}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        })
                    }
                </Accordion>
            )
        }
    };

    return (
        <Container>
            <Row>
                <div style={styles.wrapper}>
                    <div style={styles.contentStyle}>
                        <h3>Employee List</h3>
                        {renderEmployees()}
                    </div>
                </div>  
            </Row>
        </Container>

    )
}

export default EmployeeList

const styles = {


    wrapper: {
        "height": "100vh",
        "width": "100%",
        "display": "flex",
        "flexDirection": "column",
    },
    contentStyle: {
            "width": "100%",
            "display": "flex",
            "flexDirection": "column",
            "padding": "20px 40px",
           
    },
   };

   