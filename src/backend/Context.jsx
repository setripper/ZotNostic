import { createContext } from "react";
import call_gemini from "./GeminiApi";


export const Context = createContext();


const ContextProvider = (props) => {


   const[input, setInput] = UseState("");
   const [recentPrompt, setRecentPrompt] = useState("");
   const [prevPrompts, setPrevPrompts] = useState([]);
   const [showResult, setShowResult] = useState(false);
   const [loading, setLoading] = useState(false);
   const [resultData, setResultData] = useState("");




   const onSent = async (prompt) => {
       setResultData("")
       setLoading(true)
       setShowResult(true)
       const response = await call_gemini(input)
       setResultData(response)
       setLoading(false)
       setInput("")
   }


   onSent("test prompt: what is 2 + 2")


   const contextValue = {
      
   }


   return (
       <Context.Provider value = {contextValue}>
           {props.children}
       </Context.Provider>
   )
}


export default ContextProvider

