import { useEffect, useState } from "react";
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
} from "./styles";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadProjects() {
    try {
      const res = await fetch("https://nova-09wl.onrender.com/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.log("Erro ao carregar itens:", err);
    }
    setLoading(false);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.hash = "/admin/login";
      return;
    }
    loadProjects();
  }, []);

  async function deleteProject(id) {
    const confirmDelete = window.confirm("Remover item?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await fetch(`https://nova-09wl.onrender.com/api/projects/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      loadProjects();
    } catch (err) {
      console.log("Erro ao deletar:", err);
      alert("Erro ao remover item");
    }
  }

  if (loading) {
    return (
      <Page>
        <Container>
          <Title>Carregando itens...</Title>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container>
        <Header>
          <Title>Dashboard</Title>
          <AddButton onClick={() => window.location.hash = "/admin/add"}>
            Adicionar Item
          </AddButton>
        </Header>

        <Grid>
          {projects.map(project => (
            <Card key={project._id}>
              {project.fileType === 'image' && (
                <Image src={project.fileUrl} alt={project.title} />
              )}
              {project.fileType === 'video' && (
                <div style={{ height: 200, background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <video width="100%" height="100%" controls>
                    <source src={project.fileUrl} type="video/mp4" />
                  </video>
                </div>
              )}
              {project.fileType === 'pdf' && (
                <div style={{ height: 200, background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8DECC' }}>
                  PDF: {project.title}
                </div>
              )}
              <CardContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <DeleteButton onClick={() => deleteProject(project._id)}>
                  Deletar
                </DeleteButton>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}