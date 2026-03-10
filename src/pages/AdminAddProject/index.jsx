import { useState, useEffect } from "react";
import {
  Page,
  Container,
  Title,
  Form,
  Input,
  Textarea,
  Select,
  FileInput,
  Button
} from "./styles";

export default function AdminAddProject() {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [category,setCategory] = useState("branding")
  const [link,setLink] = useState("")
  const [image,setImage] = useState(null)
  const [loading,setLoading] = useState(false)

  useEffect(()=>{

    const token = localStorage.getItem("token")

    if(!token){
      window.location.hash="/admin/login"
    }

  },[])

  async function handleSubmit(e){

    e.preventDefault()

    if(!image){
      alert("Selecione uma imagem")
      return
    }

    setLoading(true)

    try{

      const token = localStorage.getItem("token")

      const formData = new FormData()
      formData.append("image",image)

      // upload da imagem
      const uploadResponse = await fetch(
        "https://nova-09wl.onrender.com/api/upload",
        {
          method:"POST",
          body:formData
        }
      )

      const uploadData = await uploadResponse.json()

      if(!uploadData.url){
        throw new Error("Erro no upload da imagem")
      }

      // salvar projeto
      const projectResponse = await fetch(
        "https://nova-09wl.onrender.com/api/projects",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          },
          body:JSON.stringify({
            title,
            description,
            category,
            link,
            image:uploadData.url
          })
        }
      )

      const data = await projectResponse.json()

      if(projectResponse.ok){

        alert("Projeto publicado 🚀")

        window.location.hash="/admin/dashboard"

      }else{

        throw new Error(data.message)

      }

    }catch(err){

      console.log(err)
      alert("Erro ao publicar projeto")

    }

    setLoading(false)

  }

  return(

    <Page>

      <Container>

        <Title>Novo Projeto</Title>

        <Form onSubmit={handleSubmit}>

          <Input
            placeholder="Título"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Descrição"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />

          <Select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          >

            <option value="branding">
              Branding
            </option>

            <option value="landing">
              Landing Page
            </option>

          </Select>

          <Input
            placeholder="Link do projeto (opcional)"
            value={link}
            onChange={(e)=>setLink(e.target.value)}
          />

          <FileInput
            type="file"
            accept="image/*"
            onChange={(e)=>setImage(e.target.files[0])}
          />

          <Button type="submit">

            {loading ? "Publicando..." : "Publicar Projeto"}

          </Button>

        </Form>

      </Container>

    </Page>

  )

}