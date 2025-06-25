import Carousel from "../components/Carousel/Carousel";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { HomeContainer } from "../styles/Home.styles";

type HomeProps = {};
const Home = ({}: HomeProps) => {
  const newReleases = [
    {
      id: "new1",
      title: "Proyecto Hail Mary",
      author: "Andy Weir",
      description:
        "Un astronauta despierta solo en una nave espacial sin recordar cómo llegó allí, con la misión de salvar a la humanidad.",
      price: 29.99,
      image:
        "https://i.pinimg.com/736x/29/e3/47/29e3471249c2498e024eb6130b9fb7e4.jpg",
      category: "Ciencia Ficción",
      rating: 4.8,
      isbn: "978-0593135204",
      publishedDate: "2021-05-04",
      pages: 496,
    },
    {
      id: "new2",
      title: "Klara y el Sol",
      author: "Kazuo Ishiguro",
      description:
        "La historia de Klara, una Amiga Artificial que observa el mundo desde el escaparate de una tienda.",
      price: 27.99,
      image:
        "/https://i.pinimg.com/736x/29/e3/47/29e3471249c2498e024eb6130b9fb7e4.jpg",
      category: "Ficción Literaria",
      rating: 4.4,
      isbn: "978-0571364886",
      publishedDate: "2021-03-02",
      pages: 320,
    },
    {
      id: "new3",
      title: "Los Siete Maridos de Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      description:
        "Una leyenda de Hollywood revela finalmente sus secretos más íntimos a una joven periodista.",
      price: 25.99,
      image:
        "https://i.pinimg.com/736x/29/e3/47/29e3471249c2498e024eb6130b9fb7e4.jpg",
      category: "Ficción Histórica",
      rating: 4.6,
      isbn: "978-1501161933",
      publishedDate: "2017-06-13",
      pages: 400,
    },
    {
      id: "new4",
      title: "Educated",
      author: "Tara Westover",
      description:
        "Una memoria poderosa sobre una mujer que nunca fue a la escuela pero acabó con un doctorado de Harvard.",
      price: 24.99,
      image:
        "https://i.pinimg.com/736x/29/e3/47/29e3471249c2498e024eb6130b9fb7e4.jpg",
      category: "Biografía",
      rating: 4.7,
      isbn: "978-0399590504",
      publishedDate: "2018-02-20",
      pages: 334,
    },
    {
      id: "new5",
      title: "Donde Cantan los Cangrejos",
      author: "Delia Owens",
      description:
        "Un misterio ambientado en las marismas de Carolina del Norte sobre una joven que vive aislada de la sociedad.",
      price: 26.99,
      image:
        "https://i.pinimg.com/736x/29/e3/47/29e3471249c2498e024eb6130b9fb7e4.jpg",
      category: "Misterio",
      rating: 4.5,
      isbn: "978-0735219090",
      publishedDate: "2018-08-14",
      pages: 384,
    },
    {
      id: "new6",
      title: "Donde Cantan los Cangrejos",
      author: "Delia Owens",
      description:
        "Un misterio ambientado en las marismas de Carolina del Norte sobre una joven que vive aislada de la sociedad.",
      price: 26.99,
      image:
        "https://i.pinimg.com/736x/29/e3/47/29e3471249c2498e024eb6130b9fb7e4.jpg",
      category: "Misterio",
      rating: 4.5,
      isbn: "978-0735219090",
      publishedDate: "2018-08-14",
      pages: 384,
    },
    {
      id: "new7",
      title: "Donde Cantan los Cangrejos",
      author: "Delia Owens",
      description:
        "Un misterio ambientado en las marismas de Carolina del Norte sobre una joven que vive aislada de la sociedad.",
      price: 26.99,
      image:
        "https://i.pinimg.com/736x/29/e3/47/29e3471249c2498e024eb6130b9fb7e4.jpg",
      category: "Misterio",
      rating: 4.5,
      isbn: "978-0735219090",
      publishedDate: "2018-08-14",
      pages: 384,
    },
    {
      id: "new8",
      title: "Donde Cantan los Cangrejos",
      author: "Delia Owens",
      description:
        "Un misterio ambientado en las marismas de Carolina del Norte sobre una joven que vive aislada de la sociedad.",
      price: 26.99,
      image:
        "https://i.pinimg.com/736x/29/e3/47/29e3471249c2498e024eb6130b9fb7e4.jpg",
      category: "Misterio",
      rating: 4.5,
      isbn: "978-0735219090",
      publishedDate: "2018-08-14",
      pages: 384,
    },
    {
      id: "new9",
      title: "Donde Cantan los Cangrejos",
      author: "Delia Owens",
      description:
        "Un misterio ambientado en las marismas de Carolina del Norte sobre una joven que vive aislada de la sociedad.",
      price: 26.99,
      image:
        "https://i.pinimg.com/736x/29/e3/47/29e3471249c2498e024eb6130b9fb7e4.jpg",
      category: "Misterio",
      rating: 4.5,
      isbn: "978-0735219090",
      publishedDate: "2018-08-14",
      pages: 384,
    },
    {
      id: "new10",
      title: "Donde Cantan los Cangrejos",
      author: "Delia Owens",
      description:
        "Un misterio ambientado en las marismas de Carolina del Norte sobre una joven que vive aislada de la sociedad.",
      price: 26.99,
      image:
        "https://i.pinimg.com/736x/29/e3/47/29e3471249c2498e024eb6130b9fb7e4.jpg",
      category: "Misterio",
      rating: 4.5,
      isbn: "978-0735219090",
      publishedDate: "2018-08-14",
      pages: 384,
    },
  ];

  return (
    <HomeContainer>
      <SectionHeader />
      <Carousel books={newReleases} title="llos mejores" />
    </HomeContainer>
  );
};

export default Home;
