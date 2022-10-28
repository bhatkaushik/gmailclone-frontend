import { Close} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

import React from "react";
import "./SendMail.css";

const SendMail = () => {
  const { register, handleSubmit , formState:{errors} }  = useForm();

  const onSubmit= data =>console.log(data);

  return (
    <div className="SendMail">
      <div className="sendmail-header">
        <h3>new Message</h3>
        <Close className="sendmail-close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="text"
          {...register("to",{ required: true })}
        />
        {errors.to && <p className="sendmail-error">To is required</p>}
        <input
          placeholder="Subject"
          type="text"
         {...register("Subject",{ required: true })}
        />
        {errors.Subject && <p className="sendmail-error">Subject is required</p>}
        <input
          placeholder="Message..."
          type="text"
          {...register("Message",{ required: true })}
          className="sendmail-message"
        />
        {errors.Message && <p className="sendmail-error">Message is required</p>}
            <div className="sendmail-options">
        <Button className="sendmail-send"
        variant="contained"
        color="primary"
        type="submit">Send</Button>
      </div>
      </form>

  
    </div>
  );
};

export default SendMail;

// export default function App() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   );
// }
