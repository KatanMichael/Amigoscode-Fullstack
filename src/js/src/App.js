import React from 'react';
import './App.css';
import getAllStudents from "./client"
import 'antd/dist/antd.css';
import {Table, Avatar, Spin, Icon} from "antd"


const antIcon = <icon type = "LoadingOutlined" style={{ fontSize: 24 }} spin />;


class App extends React.Component
{

  constructor()
  {
    super()
    this.state = 
    {
      students : [],
      isFetching : false
    }
  }

  

  componentDidMount()
  {
    console.log("Did Mount: ", this.state)
    this.fetchAllStudents()
  }

  fetchAllStudents()
  {
    this.setState(
      {
        isFetching : true
      }
    )
    getAllStudents()
    .then(result => result.json())
    .then(data => {
       this.setState(
         {
          students: data,
          isFetching : false
         }
       )
      });
  }

  render()
  {
    const {students, isFetching} = this.state
    console.log("Render: ",this.state)

    if(isFetching)
    {
      return(
        <Spin indicator = {antIcon} />
      )
    }

    if(students && students.length)
    {
      const colums = [
        {
          title: '',
          key : 'Avatar',
          render : function(text, student)
          {
            return(
              <Avatar size = "large">
                {student.firstName.charAt(0).toUpperCase()+student.lastName.charAt(0).toUpperCase() }
              </Avatar>
            )
          }
        },
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

      return (
          <Table dataSource = {students} columns = {colums} rowKey = "studentId" pagination = {false} />
      );
    }
    else{
      return <h1>No students Found</h1>
    }
        
        
      
    
  }
}

export default App;
