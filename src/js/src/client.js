import fetch from "unfetch"

export default function getAllStudnets()
{
    return fetch("/student");
}