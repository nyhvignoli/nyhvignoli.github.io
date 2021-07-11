import React, { useContext } from "react";
import { Subtitle } from "../../global/styles";
import { Wrapper, Content, Arrow } from "./styles";
import TimelineContent from "./TimelineContent/TimelineContent";
import guitarIcon from "../../assets/guitar-128.png";
import tattooIcon from "../../assets/tattoo-machine-128.png";
import devIcon from "../../assets/notebook-128.png";
import whiteArrow from "../../assets/white-arrow.png";
import { LanguageContext, Text } from "../../global/LanguagesContext";

const Timeline = () => {
    const { dictionary } = useContext(LanguageContext);

    const music = {
        title: dictionary.music,
        icon: { 
            image: guitarIcon,
            alt: "Um ícone de violão branco" 
        },
        description: `Nasci na periferia de Rio Grande, interior do RS. Sou a filha mais nova de mãe solteira, numa família com mais dois irmãos e uma irmã. Meu irmão mais velho é músico, e foi assim que tive meu primeiro contato com instrumentos musicais. Aos 15 anos, aprendi violão como autodidata, lendo aquelas revistinhas de cifras. No segundo grau, montei minha primeira banda com mais duas amigas: Uma banda de New Metal chamada Cacofonia, onde eu cantava e tocava guitarra. Quando a banda acabou, eu segui o meu caminho fazendo voz e violão em barzinhos da cidade. Além do meu interesse em música, eu lembro de gostar muito de desenhar (pois meu irmão do meio sempre teve muito talento com desenhos). Sim, eu tive a sorte de nascer numa família de pessoas talentosas, mas que infelizmente não tiveram muitas oportunidades. Minha irmã sempre foi ótima em artesanatos, costura e coisas criativas. Hoje ela faz docinhos lindos e divertidos para vender por lá. Sei que tô sendo meio prolixa falando da minha família, mas não estaria contando a minha história de uma maneira justa se eu não mencionasse de onde eu vim e como me tornei a pessoa que sou. Aos 18 anos saí do armário como lésbica. Minha mãe foi incrível e sempre me apoiou muito. Aos 19 anos minha mãe me deu uma máquina de tatuagem e mudei para Tramandaí, próximo à Porto Alegre, para ficar mais perto da capital e tentar ganhar a vida como música e tatuadora, o que me leva à próxima etapa da minha história...`
    }

    const tattoo = {
        title: dictionary.tattoo,
        icon: { 
            image: tattooIcon,
            alt: "Um ícone de uma máquina de tatuar branca" 
        },
        description: `Em Tramandaí morei cerca de 1 ano com minha prima. Tatuei como autônoma nesse período e pela internet conheci a Kika, uma guitarrista incrível de Porto Alegre que tinha ouvido minhas músicas no MySpace. Fui encontrar ela pessoalmente e montamos uma banda só de mulheres chamada Electric Mind. Sei que estou misturando música e tattoo, mas é que essas duas paixões seguiram me acompanhando por um bom tempo. Com a Electric Mind a gente fez shows em Porto Alegre, São Paulo e Buenos Aires, foi uma fase incrível da minha vida, mas infelizmente não ganhávamos dinheiro com isso. Foi aí que eu eu comecei a trabalhar oficialmente como tatuadora num estúdio de POA. Tive algumas idas e vindas no estúdio pois o proprietário tinha uma visão muito conservadora e preconceituosa e não me sentia à vontade lá. No final de 2013 eu conheci e me apaixonei pela Germana, minha companheira. Ela sempre esteve do meu lado e sempre me apoiou em tudo, e num certo momento sentimos que Porto Alegre não fazia mais sentido pra gente. A gestão mudou, a cidade ficou violenta, então resolvemos tentar a sorte em Floripa. Lá inauguramos um estúdio de tattoo, Feminink. A idéia era ser um espaço seguro e acolhedor para todas as pessoas, onde só trabalhariam mulheres. Conseguimos manter o estúdio por 2 anos, comigo tatuando e a Gê administrando e cuidando de todo o resto: Mídias sociais, eventos, recepção de clientes, etc. Com o novo governo no país, economia decadente e enfrentando muita lesbofobia e misoginia, o movimento no estúdio diminui bastante. Decidimos mudar o nome do estúdio para Corpo Fechado, pois notamos que o nome Feminink estava mais afastando do que trazendo clientes. Logo Corpo Fechado também não vingou e tivemos que fechar as portas. Com a pandemia a minha carreira como tatuadora estagnou e eu resolvi aproveitar o isolamento para buscar uma nova profissão...`
    }

    const development = {
        title: dictionary.programming,
        icon: { 
            image: devIcon,
            alt: "Um ícone de um notebook branco" 
        },
        description: `Comecei comprando um curso de Desenvolvimento Android da Udemy e fui estudando no meu próprio tempo, de maneira autônoma. O curso tinha duração de 100 horas, e quando eu estava chegando nos 50% do progresso vi no Instagram uma postagem de uma escola de tecnologia inovadora chamada Labenu. Lembro que o post era sobre o incentivo de mais mulheres e diversidade na tecnologia e foi assim que eu me apaixonei. O curso era bem diferente do que eu estava estudando, era focado em Programação Web e empregabilidade, o que me chamou bastante a atenção pois queria algo mais profissional. Me inscrevi para participar do processo seletivo na modalidade ISA(Income Share Agreement) e passei. Foram 6 meses intensos de aprendizados práticos em programação e a Labenu sempre foi um ambiente muito seguro e acolhedor. A escola não só me construiu enquanto programadora mas enquanto pessoa, pois um de seus pilares é que o emocional vem à frente do técnico, o que na prática foi muito enriquecedor pra mim. Hoje me sinto segura e qualificada para encarar os desafios do mercado, claro que tenho muito a evoluir e a crescer, mas já estou super feliz com a minha caminhada e pronta para mergulhar de cabeça nesse novo universo! :)`
    }

    return (
        <Wrapper>
            <Subtitle data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out"><Text tid="myJourney"/></Subtitle>
            <Content>
                <TimelineContent 
                    step={music}
                />
                <Arrow src={whiteArrow}/>
                <TimelineContent 
                    step={tattoo}
                />
                <Arrow src={whiteArrow}/>
                <TimelineContent 
                    step={development}
                />
            </Content>            
        </Wrapper>
    );
}

export default Timeline;