import { imagem4,imagem5,imagem6} from "../images/images.tsx"

const comentariosIniciais = [
    {
        id: 1,
        UserId: 2,
        FeedId: 2,
        foto: `${imagem6}`,
        nome: "Caroline Ferreira",
        comentario: "Est aspernatur quis eos natus dicta et internos",
        likes: 8,
        data: new Date(2025, 1, 12, 14, 30, 45).toISOString(),
    },
    {
        id: 2,
        UserId: 3,
        FeedId: 2,
        foto: `${imagem4}`,
        nome: "Ana Clara",
        comentario: "Est aspernatur quis eos natus dicta et internos",
        likes: 4,
        data: new Date(2024, 5, 12, 14, 30, 45).toISOString(),
    },
    {
        id: 3,
        UserId: 4,
        FeedId: 3,
        foto: `${imagem5}`,
        nome: "Francisco Leandro",
        comentario: "Est aspernatur quis eos natus dicta et internos",
        likes: 12,
        data: new Date(2023, 5, 12, 14, 30, 45).toISOString(),
    },
    {
        id: 4,
        UserId: 3,
        FeedId: 3,
        foto: `${imagem4}`,
        nome: "Ana Clara",
        comentario: "Est aspernatur quis eos natus dicta et internos",
        likes: 4,
        data: new Date(2024, 5, 12, 14, 30, 45).toISOString(),
    },
];
export default comentariosIniciais;