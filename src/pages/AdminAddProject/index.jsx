import { useState, useEffect } from "react";
import { MdDriveFolderUpload } from "react-icons/md";
import {
  Page,
  Container,
  Title,
  Form,
  Input,
  Textarea,
  FileInput,
  Button,
  FileInputWrapper
} from "./styles";

export default function AdminAddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.hash = "/admin/login";
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!file) {
      alert("Selecione um arquivo");
      return;
    }
    if (!category.trim()) {
      alert("Digite uma categoria");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await fetch(
        "https://nova-09wl.onrender.com/api/upload",
        {
          method: "POST",
          body: formData
        }
      );

      const uploadData = await uploadResponse.json();

      if (!uploadData.url) {
        throw new Error("Erro no upload do arquivo");
      }

      const projectResponse = await fetch(
        "https://nova-09wl.onrender.com/api/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            title,
            description,
            category,
            link,
            fileUrl: uploadData.url,
            fileType: uploadData.fileType
          })
        }
      );

      const data = await projectResponse.json();

      if (projectResponse.ok) {
        alert("Item publicado 🚀");
        window.location.hash = "/admin/dashboard";
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Erro ao publicar item");
    }

    setLoading(false);
  }

  return (
    <Page>
      <Container>
        <Title>Novo Item</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Input
            placeholder="Categoria (ex: Branding, Motion, Web)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <Input
            placeholder="Link do projeto (opcional)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <FileInputWrapper>
            Escolher Arquivo (imagem, vídeo ou PDF)
            <MdDriveFolderUpload style={{ marginLeft: "12px", fontSize: "20px" }} />
            <FileInput
              type="file"
              accept="image/*,video/*,application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </FileInputWrapper>
          {file && <span style={{ color: '#E8DECC' }}>{file.name}</span>}
          <Button type="submit">
            {loading ? "Publicando..." : "Publicar Item"}
          </Button>
        </Form>
      </Container>
    </Page>
  );
}