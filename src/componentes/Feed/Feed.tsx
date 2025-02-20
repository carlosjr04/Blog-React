import styles from "./styles.module.css"
import calcularTempo from "../CalculoHora/CalculoHora.tsx"
import { useContext, useEffect, useState } from "react"
import Comentario from "../Comentario/Comentario.tsx"
import { ComentContext } from "../../stores/ComentContext.tsx"
import { UserContext } from "../../stores/UserContext.tsx"
import comentariosIniciais from "../ComentariosIniciais/ComentariosIniciais.tsx"

interface UserProps {
    foto: string
    nome: string
    emprego: string
    FeedId: number
}

interface ComentarioProps {
    horario?: string
    titulo?: string
    comentario?: string
}
interface Comentarios {
    likes: number
    id: number;
    UserId: number;
    FeedId: number;
    nome: string;
    foto: string;
    comentario: string;
    data: string
}
interface FeedProps extends UserProps, ComentarioProps { }

export default function Feed(props: FeedProps) {

    const [comentario, setComentario] = useState("")

    const UserData = useContext(UserContext)
    const horariouser: string | undefined = props.horario

    const [comentarios, setComentarios] = useState<Comentarios[]>([])
    useEffect(() => {
        const comentariosStorage = JSON.parse(localStorage.getItem("comentarios") || "[]");
        if (comentariosStorage.length === 0) {
            localStorage.setItem("comentarios", JSON.stringify(comentariosIniciais));
            setComentarios(comentariosIniciais);
        } else {
            setComentarios(comentariosStorage);
        }
    }, []);
    function PegarComentLocal(): any[] {
        return JSON.parse(localStorage.getItem("comentarios") || "[]");
    }
    const adicionarComentario = () => {
        if (comentario === "") {
            alert("Digite algum comentário")
            return;
        }
        if (!UserData) {
            console.error("UserData não está definido!");
            return;
        }
        const comentariosStorage = JSON.parse(localStorage.getItem("comentarios") || "[]");
        let idvalido = comentariosStorage[comentariosStorage.length - 1].id + 1;

        for (let i = 1; i <= comentariosStorage.length + 1; i++) {
            if (!comentariosStorage.some((comentario: { id: number }) => comentario.id === i)) {
                idvalido = i;
                break;
            }
        }
        const novoComentario = {
            id: comentariosStorage.length > 0 ? idvalido : 5,
            UserId: UserData.id,
            FeedId: props.FeedId,
            nome: UserData.nome,
            foto: UserData.foto,
            comentario: comentario,
            likes: 0,
            data: new Date().toISOString()
        };
        const novaLista = [...comentariosStorage, novoComentario];
        setComentarios(novaLista);
        localStorage.setItem("comentarios", JSON.stringify(novaLista));

        setComentario("");
    };
    const removerComentario = (id: number, userid: number) => {

        if (!UserData) {
            console.log("Erro no login")
            return
        }

        if (UserData.id === userid) {
            const confirmar = window.confirm("Tem certeza que deseja excluir este comentário?");
            if (confirmar) {
                let localcoments = PegarComentLocal();
                let novolocal = localcoments.filter((comentario) => comentario.id !== id);


                setComentarios(novolocal);


                localStorage.setItem("comentarios", JSON.stringify(novolocal));
            }
        } else {
            alert("Você não pode apagar comentários de outros usuários!")
        }

    };
    return (
        <div className={styles.feed}>
            <div style={{ margin: "35px" }}>
                <div className={styles.header}>

                    <div className={styles.nome}>
                        <img src={props.foto} alt="" />
                        <div>
                            <h3>{props.nome}</h3>
                            <p>{props.emprego}</p>
                        </div>

                    </div>
                    <p>{calcularTempo(horariouser) === "Agora mesmo" ? "Agora mesmo" : `Publicado há  ${calcularTempo(horariouser)}`}</p>
                </div>
                <div className={styles.comentario}>
                    <h3>{props.titulo}</h3>
                    <p>{props.comentario}</p>
                </div>
                <div className={styles.feedback}>
                    <h3>Deixe seu feedback</h3>
                    <textarea
                        placeholder="Escreva um comentário..."
                        className={styles.feedbackText}
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                    />
                    <button className={styles.feedbackbotao} onClick={adicionarComentario}>Comentar</button>
                    <div className={styles.comentar}>
                        <ComentContext.Provider value={comentario} >
                            {comentarios.map((comentario) =>
                                comentario.FeedId === props.FeedId ? (
                                    <Comentario
                                        key={comentario.id}
                                        {...comentario}
                                        onDelete={() => removerComentario(comentario.id, comentario.UserId)}
                                    />
                                ) : null
                            )}

                        </ComentContext.Provider>
                    </div>
                    



                </div>
            </div>

        </div>
    )
}