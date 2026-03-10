import { useState } from "react";

import {
Page,
LoginCard,
Title,
Form,
Input,
Button
} from "./styles";

export default function AdminLogin(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = async (e) => {

e.preventDefault()

const res = await fetch("http://localhost:5000/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password
})

})

const data = await res.json()

if(data.token){

localStorage.setItem("token",data.token)

window.location.hash="/admin"

}else{

alert("Login inválido")

}

}

return(

<Page>

<LoginCard>

<Title>Admin Login</Title>

<Form onSubmit={handleLogin}>

<Input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<Input
type="password"
placeholder="Senha"
onChange={(e)=>setPassword(e.target.value)}
/>

<Button type="submit">
Entrar
</Button>

</Form>

</LoginCard>

</Page>

)

}