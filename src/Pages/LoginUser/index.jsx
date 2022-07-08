import { useForm } from "react-hook-form";
import { Container, Content } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../../services/FakeApi";

function LoginUser() {
  const schema = yup
    .object({
      email: yup.string().required("Digite seu e-mail").email("email inválido"),
      password: yup.string().required("Digite sua senha"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    loginUser(data);
  };

  return (
    <Container>
      <Content>
        <h1>Sangue na Veia</h1>
        <h2>doador</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Login</p>
          <div>
            <label>Email</label>
            <span>{errors.email?.message} </span>
            <input
              name="email"
              type="text"
              placeholder=" Digite aqui seu email"
              {...register("email")}
            />
          </div>
          <div>
            <label>Senha</label>
            <span>{errors.password?.message} </span>
            <input
              name="password"
              type="password"
              placeholder=" Digite sua senha"
              {...register("password")}
            />
          </div>
          <button type="submit">Entrar</button>
          <span>Não possui uma conta?</span>
        </form>
      </Content>
    </Container>
  );
}

export default LoginUser;
