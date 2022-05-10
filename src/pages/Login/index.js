import Header2 from "../../components/Header2";
import Input from "../../components/Input";

const Login = () => {
    return (
        <div className="login-container">
            
                
                <Header2
                 h1Content="PGR ON"
                 h2Content="Programa Gerenciador de Rélogio Online"
                />
                <Input
                    label="Usuario"    
                />
                <Input 
                  label="Senha"
                />
            
           
        </div>
        
    );
}

export default Login