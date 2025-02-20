import { createContext } from "react"
interface user{
    nome:string
    foto:string
    id:number
}
const UserContext = createContext<user|undefined>(undefined)
export { UserContext}