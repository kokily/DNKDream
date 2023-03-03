import AuthInputGroup from './AuthInputGroup';
import AuthTemplate from './AuthTemplate';
import { Button, Container, Label } from './styles';
import useLogin from './useLogin';

export default function Login() {
  const loginHooks = useLogin();

  return (
    <AuthTemplate>
      <form onSubmit={loginHooks.onLogin}>
        <Container>
          <AuthInputGroup
            type="password"
            name="password"
            value={loginHooks.password}
            onChange={loginHooks.onChange}
            label="비밀번호"
          />

          <Button type="submit">
            <Label className="layer">어서오세요!</Label>
            로그인
          </Button>
        </Container>
      </form>
    </AuthTemplate>
  );
}
