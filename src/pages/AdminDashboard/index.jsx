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
const [loading,setLoading] = useState(true)

async function loadProjects(){

try{

const res = await fetch("https://nova-09wl.onrender.com/api/projects")

const data = await res.json()

setProjects(data)

}catch(err){

console.log("Erro ao carregar projetos:",err)

}

setLoading(false)

}

useEffect(()=>{

const token = localStorage.getItem("token")

if(!token){
window.location.hash="/admin/login"
return
}

loadProjects()

},[])

async function deleteProject(id){

const confirmDelete = window.confirm("Remover projeto?")

if(!confirmDelete) return

try{

const token = localStorage.getItem("token")

await fetch(`https://nova-09wl.onrender.com/api/projects/${id}`,{
method:"DELETE",
headers:{
"Authorization":`Bearer ${token}`
}
})

loadProjects()

}catch(err){

console.log("Erro ao deletar:",err)
alert("Erro ao remover projeto")

}

}

if(loading){

return(

<Page>
<Container>
<Title>Carregando projetos...</Title>
</Container>
</Page>

)

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