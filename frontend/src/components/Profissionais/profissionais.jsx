import * as React from "react";
import { styled } from "@mui/material/styles";
import Navbar from "../Navbar/index";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const Profissionais = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar />
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Carina Assunção" subheader="Nº de Cédula: 21560" />
        <CardMedia
          component="img"
          height="350"
          image="https://oteulugar.pt/wp-content/uploads/2025/03/CARINA-III-scaled-e1741649528108.jpg"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Psicologia Clínica e da Saúde Avaliação Psicológica (Personalidade e
            Dinâmica Emocional) Especialização Avançada Pós-Universitária em
            Medicina Psicossomática (a frequentar)
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Sobre Mim:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Sou Psicóloga Clínica e da Saúde, e dou consultas presenciais, em
              Coimbra, e também online, para qualquer parte do mundo. A sub-área
              clínica que abraço, a que dou primazia e que preconizo, enquanto
              terapeuta, é de orientação Psicodinâmica – querendo isso dizer que
              a minha aposta, em contexto terapêutico, será, sempre, a de um
              pleno investimento na construção de uma Relação de transparência,
              não perdendo de vista, jamais, a singularidade de cada pessoa que
              me procure, bem como a essência do sofrimento que possa trazer
              consigo, do mesmo modo que o empenho, dedicação e respeito serão
              coordenadas das quais não abdicarei, decerto, em cada processo de
              seguimento clínico.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Liliana Marques" subheader="Nº de Cédula: 22932" />
        <CardMedia
          component="img"
          height="350"
          image="https://oteulugar.pt/wp-content/uploads/2024/03/Liliana-2-scaled.jpg"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Psicologia Clínica e da Saúde Terapeuta EMDR (nº369 da AEMDR
            Portugal)
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Sobre Mim:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Sou Psicóloga Clínica, com formação em Psicopatologia e
              Psicoterapias Dinâmicas pela Universidade de Coimbra, e dou
              consultas presenciais em Coimbra, e online para qualquer lugar
              onde estejas. Ainda que a minha base seja a teoria psicodinâmica,
              a minha intervenção é integrativa e direcionada à individualidade
              de cada um.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Ana Fidalgo" subheader="Nº de Cédula: 20735" />
        <CardMedia
          component="img"
          height="350"
          image="https://oteulugar.pt/wp-content/uploads/2025/03/Ana-2.jpg"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Psicologia Clínica e da Saúde Terapia de Casal Sexologia Clínica
            Educação Afetivo-Sexual Terapeuta EMDR (nº632 da AEMDR Portugal)
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Sobre Mim:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              A forma como trabalho enquanto psicóloga e formadora diz muito
              sobre como sou enquanto pessoa: integrativa, construtiva,
              dinâmica, eclética – tento encontrar um bom balanço entre o
              suporte e o desafio, o poético e o produtivo. Dou consultas
              presenciais em Coimbra, e em formato online para qualquer parte do
              mundo.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Pedro Fernandes" subheader="Nº de Cédula: 23037" />
        <CardMedia
          component="img"
          height="350"
          image="https://oteulugar.pt/wp-content/uploads/2024/04/Pedro-Fernandes2-1-scaled.jpg"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Psicologia Clínica e da Saúde Avaliação e Reabilitação
            Neuropsicológica da infância à idade adulta Terapia Assistida por
            Animais Intervenção na crise
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Sobre Mim:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Sou Psicólogo Clínico por paixão e por vocação. A capacidade de
              escuta empática e de construir uma boa relação terapêutica com as
              pessoas com quem contacto são duas das minhas maiores
              competências, às quais alio o sentido ético, o respeito pela
              singularidade de cada experiência humana e o forte propósito de
              crescimento profissional, incrementado com cada aprendizagem e
              formação que procuro realizar de forma constante.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Soraia Almeida" subheader="Nº de Cédula: 22494" />
        <CardMedia
          component="img"
          height="350"
          image="https://oteulugar.pt/wp-content/uploads/2024/04/Soraia-Almeida-1.jpg"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Psicologia Clínica e da Saúde (Psicodinâmica)
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Sobre Mim:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Sou a Soraia e sou Psicóloga Clínica e da Saúde. O interesse pela
              análise do pensamento e comportamento das pessoas surgiu com as
              demandas da minha adolescência, altura em que me voltei com maior
              sentir para a minha interioridade, procurando respostas acerca da
              criança que terei sido e imaginando que Soraia adulta teria
              recursos para construir. Esta dinâmica de passado, presente e
              futuro levou-me ao encontro da Psicologia, um lugar de confortos e
              desconfortos, onde sempre me perco e me encontro.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Raquel Pinto" subheader="Nº de Cédula: 26678" />
        <CardMedia
          component="img"
          height="350"
          image="https://oteulugar.pt/wp-content/uploads/2025/03/Raquel-II-1-scaled-e1743509143386.jpg"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Psicologia Clínica e da Saúde Terapeuta EMDR (nº588 da AEMDR
            Portugal) Neuropsicologia Hiperatividade e Défice de Atenção:
            Avaliação e Intervenção da Infância à Idade Adulta
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Sobre Mim:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              No decorrer da minha experiência profissional desempenhei funções
              de psicóloga clínica em vários contextos, com várias faixas
              etárias. Atualmente trabalho maioritariamente com jovens e
              adultos, nas problemáticas de ansiedade, depressão, processo de
              luto e doença oncológica.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Fábio Pereira" subheader="Nº de Cédula: 24684" />
        <CardMedia
          component="img"
          height="350"
          image="https://oteulugar.pt/wp-content/uploads/2024/04/Fabio-Pereira-1.jpg"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Psicologia Clínica e da Saúde Psicoterapia (em formação)
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Sobre Mim:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Apaixonado pelo desporto, sou psicólogo clínico e da saúde, com
              formação em psicologia e mestrado em psicologia clínica. Além
              disso, sou membro efetivo da ordem dos psicólogos e tenho uma
              especialização avançada em psicologia clínica e da saúde, com foco
              específico no tratamento de perturbações de humor, tais como
              depressão, perturbações de ansiedade, luto, perturbação
              obsessivo-compulsiva e dependências com base no modelo
              cognitivo-comportamental
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Carolina Almeida" subheader="Nº de Cédula: 63378" />
        <CardMedia
          component="img"
          height="350"
          image="https://oteulugar.pt/wp-content/uploads/2024/08/Carolina-Almeida-e1723192857170.jpg"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Médica Psiquiatra (Presencial em Coimbra e Online) Grandes áreas de
            atuação: depressão e ansiedade, stress e burnout, perturbações do
            sono, perturbação de hiperatividade e défice de atenção, demências,
            obsessões e compulsões, doença bipolar, psicose, adições,
            comportamento alimentar.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Sobre Mim:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Sou Médica Psiquiatra e genuinamente apaixonada pela complexidade
              do cérebro humano, pensamento, emoções, comportamentos e relações
              interpessoais. Desde cedo descobri o encanto pela especialidade de
              Psiquiatria e hoje dedico-me a compreender de forma holística e
              integrada as histórias únicas das pessoas que acompanho. O meu
              compromisso é de oferecer um espaço seguro e acolhedor para que
              possam expressar-se livremente.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default Profissionais;
