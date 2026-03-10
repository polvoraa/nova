import { useEffect, useState } from "react"

import {
Page,
Container,
Header,
Title,
AddButton,
Grid,
Card,
Image,
CardContent,
ProjectTitle,
DeleteButton
} from "./styles"

export default function AdminDashboard(){

const [projects,setProjects] = useState([])

async function loadProjects(){

const res = await fetch("http://localhost:5000/api/projects")

const data = await res.json()

setProjects(data)

}

useEffect(()=>{

const token = localStorage.getItem("token")

if(!token){
window.location.hash="/admin/login"
}

loadProjects()

},[])

async function deleteProject(id){

const confirmDelete = confirm("Remover projeto?")

if(!confirmDelete) return

await fetch(`http://localhost:5000/api/projects/${id}`,{
method:"DELETE"
})

loadProjects()

}

return(

<Page>

<Container>

<Header>

<Title>Dashboard</Title>

<AddButton
onClick={()=>window.location.hash="/admin/add"}
>
Adicionar Projeto
</AddButton>

</Header>

<Grid>

{projects.map(project=>(

<Card key={project._id}>

<Image src={project.image}/>

<CardContent>

<ProjectTitle>
{project.title}
</ProjectTitle>

<DeleteButton
onClick={()=>deleteProject(project._id)}
>
Deletar
</DeleteButton>

</CardContent>

</Card>

))}

</Grid>

</Container>

</Page>

)

}