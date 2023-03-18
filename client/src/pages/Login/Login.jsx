import { Form } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../assets/css/Login_Register.css";

function Login() {
  return (
    <div className="log_reg">
      <div className="prompt">Sign in to your account</div>
      <div className="mini-prompt">Sample text</div>
      <div className="form-container">
        <Form method="post" id="login-form">
          <section>Email: </section>
          <div>
            <input
              name="email"
              id="email"
              type={"text"}
              placeholder={"placeholder@email.com"}
            />
          </div>
          <section>Password: </section>
          <div>
            <input
              name="password"
              id="password"
              type={"password"}
            />
          </div>
        </Form>
      </div>

      <Button type="submit" className="btn-warning" form="login-form">Log in</Button>
    </div>
  );
}

export async function checkLogin() {}

export default Login;
