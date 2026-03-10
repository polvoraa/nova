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
const [loading,setLoading] = useState(false)

const handleLogin = async (e) => {

e.preventDefault()

setLoading(true)

try{

const res = await fetch(
"https://nova-09wl.onrender.com/api/auth/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
}
)

const data = await res.json()

if(data.token){

localStorage.setItem("token",data.token)

window.location.hash="/admin/dashboard"

}else{

alert("Login inválido")

}

}catch(err){

console.log("Erro no login:",err)
alert("Erro ao conectar com servidor")

}

setLoading(false)

}

return(

<Page>

<LoginCard>

<Title>Admin Login</Title>

<Form onSubmit={handleLogin}>

<Input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<Input
type="password"
placeholder="Senha"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<Button type="submit">

{loading ? "Entrando..." : "Entrar"}

</Button>

</Form>

</LoginCard>

</Page>

)

}