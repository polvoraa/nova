import styled from "styled-components"

export const Page = styled.div`

min-height:100vh;
display:flex;
align-items:center;
justify-content:center;

background:#0a0a0a;

`

export const Container = styled.div`

width:420px;
padding:40px;

background:rgba(255,255,255,0.05);
border-radius:14px;

backdrop-filter:blur(10px);

`

export const Title = styled.h1`

font-size:28px;
margin-bottom:30px;
color:white;

`

export const Form = styled.form`

display:flex;
flex-direction:column;
gap:16px;

`

export const Input = styled.input`

padding:12px;

background:#111;
border:none;
border-radius:8px;

color:white;

`

export const Textarea = styled.textarea`

padding:12px;

background:#111;
border:none;

border-radius:8px;

color:white;

min-height:90px;

`

export const Select = styled.select`

padding:12px;

background:#111;
border:none;

border-radius:8px;

color:white;

`

export const FileInput = styled.input`

color:white;

`

export const Button = styled.button`

padding:14px;

border:none;
border-radius:10px;

background:white;
color:black;

font-weight:600;

cursor:pointer;

transition:0.2s;

:hover{

opacity:0.8;

}

`