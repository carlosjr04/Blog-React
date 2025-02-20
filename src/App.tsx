import Feed from "./componentes/Feed/Feed";
import Header from "./componentes/Header/Header";
import Perfil from "./componentes/Perfil/Perfil";
import minhaFoto from "./assets/UserPhoto/minha foto.jpg";
import { imagem1_72 ,imagem2_72} from "./componentes/images/images";
import { UserContext } from "./stores/UserContext";


export default function App() {

  const UserLogadado = {
    nome: "Carlos Alberto",
    foto: minhaFoto,
    id: 1
  }
  const User = [
    {
      id: 2,
      FeedId:2,
      nome: "Luz",
      emprego: "Estilista",
      foto: `${imagem1_72}`,
    }, {
      id: 3,
      FeedId:3,
      nome: "Luana",
      emprego: "Roterista",
      foto: `${imagem2_72}`,
    },
  ]

  const Comentario = [
    {
      id: 2,
      horario: "2025-02-18T14:45:30.123Z",
      comentario: "dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. ",
      titulo: "Lorem ipsum "
    }, {
      id: 3,
      horario: "2025-02-15T14:45:30.123Z",
      comentario: "dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. ",
      titulo: "Lorem ipsum "
    },
  ]

  const FeedList = User.map(user => {
    const comentario = Comentario.find(c => c.id === user.id);
    return {
      ...user,
      ...comentario,
    };
  });
  return (
    <>
      <Header />
      <div
        >
        <UserContext.Provider value={UserLogadado}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            
          }}>
            <Perfil />
            <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "924px",
            width: "100%",
          }}>
            {FeedList.map((user) => (
                <Feed
                  FeedId={user.FeedId}
                  nome={user.nome}
                  emprego={user.emprego}
                  foto={user.foto}
                  horario={user.horario}
                  comentario={user.comentario}
                  titulo={user.titulo}
                  key={user.id}
                />
              ))}
            </div>               
          </div>
        </UserContext.Provider>
      </div>

    </>
  )
}