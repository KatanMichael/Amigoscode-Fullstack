import fetch from "unfetch"

export default function getAllStudents () {
    return fetch('https://amigoscode-fullstack.herokuapp.com/students');
}