import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setNumber } from "../Features/userDetailsSlice";



const UserDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function userDetailsSubmit(data) {
        dispatch(setName(data.name));
        dispatch(setEmail(data.email));
        dispatch(setNumber(data.number));
        navigate("/shippingDetails"); 
    }
    
    return (
      <form className="user_details" onSubmit={handleSubmit(userDetailsSubmit)}>
        <h1>User Details</h1>
        <div className="name_box">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            {...register("name", {
              required: "This field is Required",
              minLength: {
                value: 3,
                message: "Name should be of atleast 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Name should not exceed 20 characters",
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="email_box">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            
            placeholder="Email Address"
            
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="number_box">
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            id="number"
            
            placeholder="Mobile Number"
            {...register("number", {
              required: "This field is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Please enter a valid mobile number",
              },
            })}
          />
          {errors.number && <p>{errors.number.message}</p>}
        </div>
        <div className="button_box">
          <button type="submit">Save</button>
        </div>
      </form>
    );
};

export default UserDetails;
