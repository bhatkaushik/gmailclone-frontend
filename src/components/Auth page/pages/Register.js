import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link , useHistory} from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import './register.css' ;

const Register = () => {
const navigate = useHistory();


const [loading, setLoading] = useState(false);
//from submit
const submitHandler = async (values) => {
  try {
    setLoading(true);
    await axios.post("http://localhost:8000/users/register", values);
    message.success("Registeration Successfull");
    setLoading(false);
    navigate.push("/login");
 
  } catch (error) {
    setLoading(false);
    message.error("something went wrong");
  }
};

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate.push("/");
    }
  }, [navigate]);

  
  return (
    <div className='register-page '>
         {loading && <Spinner />}
    <Form layout="vertical" onFinish={submitHandler}>
    <img className="gmail-img " alt="gmail-logo" src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3" />
          <h4 className="text-center">Register Form</h4>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login">Already Register ? Click Here to login</Link>
            <button className="btn btn-primary">Register</button>
          </div>
        </Form>
    </div>
  )
}

export default Register