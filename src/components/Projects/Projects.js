import React, { useContext, useState } from "react";
import { Wrapper } from "./styles";
import { Subtitle } from "../../global/styles";
import musicatchersScreenshot from "../../assets/musicatchers.PNG";
import musicatchers2 from "../../assets/musicatchers-2.PNG";
import musicatchers3 from "../../assets/musicatchers-3.PNG";
import musicatchers4 from "../../assets/musicatchers-4.PNG";
import musicatchers5 from "../../assets/musicatchers-5.PNG";
import labedditScreenshot from "../../assets/labeddit.PNG";
import labeddit2 from "../../assets/labeddit-2.PNG";
import labeddit3 from "../../assets/labeddit-3.PNG";
import labeddit4 from "../../assets/labeddit-4.PNG";
import astromatchScreenshot from "../../assets/astromatch.PNG";
import astromatch2 from "../../assets/astromatch-2.PNG";
import shoppingOmni1 from "../../assets/shopping-omni/shoppingomni-1.png";
import shoppingOmni2 from "../../assets/shopping-omni/shoppingomni-2.png";
import shoppingOmni3 from "../../assets/shopping-omni/shoppingomni-3.png";
import backgroundImgBefore from "../../assets/mongo-db/background-img-before.png";
import backgroundImgAfter from "../../assets/mongo-db/background-img-after.png";
import cardGridBefore from "../../assets/mongo-db/card-grid-before.png";
import cardGridSmallAfter from "../../assets/mongo-db/card-grid-small-after.png";
import cardGridLargeAfter from "../../assets/mongo-db/card-grid-large-after.png";
import detailsBefore from "../../assets/mongo-db/details-before.png";
import detailsAfter from "../../assets/mongo-db/details-after.png";
import lpNavBefore from "../../assets/mongo-db/lp-nav-before.png";
import lpNavAfter from "../../assets/mongo-db/lp-nav-after.png";
import segaBefore from "../../assets/mongo-db/sega-before.png";
import segaAfter from "../../assets/mongo-db/sega-after.png";
import segaBeforeMobile from "../../assets/mongo-db/sega-before-mobile.png";
import segaAfterMobile from "../../assets/mongo-db/sega-after-mobile.png";
import Gallery from "../Gallery/Gallery";
import ScreenShotsGallery from "../ScreenShotsGallery/ScreenShotsGallery";
import { LanguageContext, Text } from "../../global/LanguagesContext";

const Projects = () => {
    const { dictionary } = useContext(LanguageContext);

    const projects = [
        {
            title: "MongoDB Website",
            type: "Full Stack",
            images: [{
                src: backgroundImgAfter,
                alt: "foto da tela de Etiquetas, onde listam pedidos com informações de código, nome do cliente, valor do pedido e método de entrega",
                caption: "BackgroundImage, depois do fix (imagem de fundo na sessão 'Helping you stay ahead' estava cortando)"
            },{
                src: backgroundImgBefore,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "BackgroundImage, antes do fix (imagem de fundo na sessão 'Helping you stay ahead' estava cortando)"
            },{
                src: cardGridBefore,
                alt: "foto da tela de Etiquetas, onde listam pedidos com informações de código, nome do cliente, valor do pedido e método de entrega",
                caption: "CardGrid, antes do fix (sem espaçamento entre os cards e com a propriedade cards per row sem funcionar)"
            },{
                src: cardGridLargeAfter,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "CardGrid, depois do fix (tamanho large)"
            },{
                src: cardGridSmallAfter,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "CardGrid, depois do fix (tamanho small, onde é possível definir a quantidade de cards per row)"
            },{
                src: detailsBefore,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "AccordionGroup, antes do fix (margin branca indesejada no componente)"
            },{
                src: detailsAfter,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "AccordianGroup, depois do fix"
            },{
                src: lpNavBefore,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "NavBar, antes do fix (botão estava sobrepondo logo)"
            },{
                src: lpNavAfter,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "NavBar, depois do fix"
            },{
                src: segaBefore,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "NavBar, antes do fix (estava sobrepondo o título, na página em japonês)"
            },{
                src: segaBeforeMobile,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "NavBar, antes do fix (versão mobile)"
            },{
                src: segaAfter,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "NavBar, depois do fix"
            },{
                src: segaAfterMobile,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "NavBar, depois do fix (versão mobile)"
            }],
            description: dictionary.mongoDBDescription,
            url: "https://www.mongodb.com/",
            tags: ["react", "preact", "react-imgix", "svelte", "styled-components", "express", "jest", "nodejs", "noSql","mongoDB"]
        },
        {
            title: "Shopping Omni",
            type: "Full Stack",
            images: [{
                src: shoppingOmni1,
                alt: "foto da tela de Etiquetas, onde listam pedidos com informações de código, nome do cliente, valor do pedido e método de entrega",
                caption: "Tela Etiquetas, aba 'Gerar etiqueta'"
            },{
                src: shoppingOmni2,
                alt: "foto da tela de Minhas Etiquetas, lista de PLP's com botão para imprimir e botão para desagrupar",
                caption: "Tela Etiquetas, aba 'Minhas etiquetas'"
            },{
                src: shoppingOmni3,
                alt: "foto da tela de Minhas Etiquetas, aba para solicitar coleta, listando código do pedido, nome do cliente e valor do pedido",
                caption: "Tela Etiquetas, aba 'Coleta'"
            }],
            description: dictionary.shoppingOmniDescription,
            url: "https://shoppingomni.com.br/",
            tags: ["react", "redux", "styled-components", "bootstrap", "jest", "nodejs", "mysql", "mocha", "docker", "AWS"]
        },
        {
            title: "MusiCatchers",
            type: "Full Stack",
            images: [{
                src: musicatchersScreenshot,
                alt: "foto da tela de login do projeto Musicatchers. Ondas sonoras em tons de roxo.",
                caption: "Tela de login"
            },{
                src: musicatchers2,
                alt: "tela com cards de todas as músicas, fundo em degradê de roxo, player e controles de mídia.",
                caption: "Tela com todas as músicas"
            },{
                src: musicatchers3,
                alt: "Tela para adicionar uma música, fundo em degradê de roxo.",
                caption: "Tela para adicionar nova música"
            },{
                src: musicatchers4,
                alt: "Tela com lista de todas as playlist, fundo em degradê roxo.",
                caption: "Tela com todas as playlists"
            },{
                src: musicatchers5,
                alt: "Tela de detalhes da música selecionada, com player e controles de mídia.",
                caption: "Tela de detalhes da música"
            }],
            description: dictionary.musicatchersDescription,
            githubLink: {
                frontend: "https://github.com/nyhvignoli/musicatchers-frontend",
                backend: "https://github.com/nyhvignoli/musicatchers-backend"
            },
            url: "",
            tags: ["react", "axios", "styled-components", "material-ui", "nodejs", "mysql", "jest"]
        },
        {
            title: "Labeddit",
            type: "Front-end",
            images: [{
                src: labedditScreenshot,
                alt: "foto do feed do projeto Labeddit, cor base do fundo em branco com a barra de navegação em tons de vermelho.",
                caption: "Feed com todas as postagens"
            },{
                src: labeddit2,
                alt: "tela de detalhes de uma postagem, com caixa de comentários visível.",
                caption: "Tela de detalhes do post"
            },{
                src: labeddit3,
                alt: "Modal para criar postagem, com botões cancelar ou publicar.",
                caption: "Caixa de diálogo para criar nova publicação"
            },{
                src: labeddit4,
                alt: "Tela de login, com campos de e-mail e senha, botões para entrar ou criar uma conta.",
                caption: "Tela de login"
            }],
            description: dictionary.labedditDescription,
            githubLink: "https://github.com/nyhvignoli/labeddit",
            url: "http://nyhv-labeddit.surge.sh",
            tags: ["react", "axios", "styled-components", "material-ui"]
        },
        {
            title: "Astromatch",
            type: "Front-end",
            images: [{
                src: astromatchScreenshot,
                alt: "foto da tela do projeto Astromatch. Um card com uma imagem da peixinha Dory.",
                caption: "Tela principal, exibe perfis aleatoriamente"
            },{
                src: astromatch2,
                alt: "tela com lista de perfis que deram match.",
                caption: "Tela de matches"
            }],
            description: dictionary.astromatchDescription,
            githubLink: "https://github.com/nyhvignoli/astromatch",
            url: "http://nyhv-astromatch.surge.sh/",
            tags: ["react", "axios", "styled-components", "material-ui"]
        },
        {
            title: "Labenu System",
            type: "Back-end",
            description: dictionary.labenuSystemDescription,
            githubLink: "https://github.com/nyhvignoli/labenu-system",
            url: "https://documenter.getpostman.com/view/13242412/TVza9tK7",
            tags: ["express", "knex", "mysql", "uuid", "dotenv", "dayjs", "cors"]
        },
        {
            title: "Labook",
            type: "Back-end",
            description: dictionary.labookDescription,
            githubLink: "https://github.com/nyhvignoli/labook",
            url: "https://github.com/nyhvignoli/labook#endpoints",
            tags: ["express", "knex", "mysql", "uuid", "dotenv", "jasonwebtoken", "bcrypt"]
        },
    ];

    const [imageDetailsOpen, setImageDetailsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(0);

    console.log(projects[0].description)

    const handleImageDetailsOpen = (projectIndex) => {
        setImageDetailsOpen(true);
        setSelectedProject(projectIndex);
    }

    const handleImageDetailsClose = () => {
        setImageDetailsOpen(false);
    }

    return (
        <Wrapper imageDetailsOpen id="projects">
            <Subtitle data-aos="fade-zoom-in" data-aos-duration="1500"><Text tid="projects"/></Subtitle>
            <Gallery 
                imageDetailsOpen={imageDetailsOpen}
                projects={projects}
                handleImageDetailsOpen={handleImageDetailsOpen}
            />
            {imageDetailsOpen && 
                <ScreenShotsGallery 
                    handleImageDetailsClose={handleImageDetailsClose} 
                    images={projects[selectedProject].images}
                />
            }
        </Wrapper>
    );
}

export default Projects;