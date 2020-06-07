import React from 'react';
import './App.css';
import getAllStudents from "./client"
import 'antd/dist/antd.css';
import {Table} from "antd"

class App extends React.Component
{

  constructor()
  {
    super()
    this.state = 
    {
      students : []
    }
  }


  componentDidMount()
  {
    console.log("Did Mount: ", this.state)
    this.fetchAllStudents()
  }

  fetchAllStudents()
  {
    getAllStudents()
    .then(result => result.json())
    .then(data => {
       this.setState(
         {
          students: data
         }
       )
      });
  }

  render()
  {
    const {students} = this.state
    console.log("Render: ",this.state)

    if(students && students.length)
    {
      const colums = [
        {
          title: 'StudentId',
          dataIndex: "studentId",
          key: 'studentId'
        },
        {
          title: "First Name",
          dataIndex: "firstName",
          key: "firstName"
        },
        {
          title: "Last Name",
          dataIndex: "lastName",
          dataSource: "lastName"
        },
        {
          title: "Email",
          dataIndex: "email",
          dataSource: "email"
        },
        {
          title: "Gender",
          dataIndex: "gender",
          dataSource: "gender"
        } 
      ];

      return <Table dataSource = {students} columns = {colums}/>;
    }
    else{
      return <h1>No students Found</h1>
    }
        
        
      
    
  }
}

export default App;
