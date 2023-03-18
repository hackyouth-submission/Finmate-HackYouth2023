import { Form } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../assets/css/Login_Register.css";

function Register() {
  return (
    <div className="log_reg">
      <div className="prompt">Create a new account</div>
      <div className="mini-prompt">Sample text</div>
      <div className="form-container">
        <Form method="post" id="register-form">
          <section>Email: </section>
          <div className="input-group">
            <input
              className=" form-control form-outline w-50"
              name="email"
              id="email"
              type={"text"}
              placeholder={"placeholder@email.com"}
            />
          </div>

          <section>Password: </section>
          <div className="input-group">
            <input
              className="form-control  form-outline w-50"
              name="password"
              id="password"
              type={"password"}
            />
          </div>
          <section for="re-enter-password">Re-enter Password: </section>
          <div className="input-group">
            <input
              className=" form-control form-outline w-50"
              name="re-enter-password"
              id="re-enter-password"
              type={"password"}
            />
          </div>
        </Form>
      </div>
      <Button type="submit" className="btn-warning" form="register-form">
        Register
      </Button>
    </div>
  );
}

export async function checkRegister() {}

export default Register;
