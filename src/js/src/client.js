import fetch from "unfetch"

export default function getAllStudents () {
    return fetch('http://localhost:8080/students');
}