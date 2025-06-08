import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Navbar from "../components/Navbar/index";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Sobre Nós</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Duas psicólogas clínicas, apaixonadas pela arte da terapia, decidiram
          criar O Teu Lugar depois de se depararem, com alguma frequência, com
          experiências perturbadoras partilhadas no contexto dos cuidados de
          saúde e também na sua prática clínica, onde testemunharam relatos
          tanto comoventes como chocantes de pessoas de todo o país.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">O Nosso Compromisso</Typography>
        </AccordionSummary>
        <AccordionDetails>
          A nossa abordagem baseia-se nos princípios dos direitos humanos e num
          compromisso que todos os nossos profissionais e parceiros devem
          cumprir para colaborar com O Teu Lugar. Esse compromisso é avaliado e
          validado pela própria entidade, através de uma entrevista e formação
          inicial, acompanhamento contínuo e assinatura de uma declaração de
          honra, além da avaliação de cada cliente, cuja experiência é o melhor
          indicador da qualidade dos nossos serviços.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Marca Uma Consulta Connosco</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Vamos ajudar-te a trabalhar a tua autoestima e o
          reconhecimento/regulação dos teus sentimentos e emoções. Como efeitos
          secundários, poderás sentir melhorias nas relações interpessoais,
          sentimentos de bem estar e capacidade de lidar de forma adaptativa com
          os desafios da vida.
        </AccordionDetails>
        <AccordionActions>
          <Button href="/marcacoes">Agendar</Button>
        </AccordionActions>
      </Accordion>
    </>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1522134239946-03d8c105a0ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1666362755385-1856fca1a330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHNpY29sb2dpYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBzaWNvbG9naWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBzaWNvbG9naWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1593444286621-98245b7d4530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBzaWNvbG9naWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1556695725-3cc4a29d4ef7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBzaWNvbG9naWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1551649446-81ea0f822ba2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBzaWNvbG9naWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1586807480822-0e95ba6666ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBzaWNvbG9naWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1653130892581-7c0ae1f4e8e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHBzaWNvbG9naWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1592947945242-69312358628b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHN5Y2hpYXRyaXN0fGVufDB8fDB8fHww",
  },
  {
    img: "https://images.unsplash.com/photo-1650848200302-22e62d26a75a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHN5Y2hpYXRyaXN0fGVufDB8fDB8fHww",
  },
  {
    img: "https://images.unsplash.com/photo-1742280618915-cc271318ada5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBzeWNoaWF0cmlzdHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default HomePage;
