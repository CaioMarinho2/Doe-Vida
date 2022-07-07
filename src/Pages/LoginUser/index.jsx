import { Container, Content } from "./style";

function LoginUser() {
  return (
    <Container>
      <Content>
        <h1>Sangue na Veia</h1>
        <h2>doador</h2>

        <form>
          <p>Login</p>
          <div>
            <label>Email</label>
            <input type="text" placeholder=" Digite aqui seu email" />
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder=" Digite sua senha" />
          </div>
          <button type="submit">Entrar</button>
          <span>Não possui uma conta?</span>
        </form>
      </Content>
    </Container>
  );
}

export default LoginUser;
