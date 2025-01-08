import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddress,
  setCity,
  setPostalCode,
} from "../Features/shippingAddressSlice";

const ShippingDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  function shippingDetailsSubmit(data) {
    dispatch(setAddress(data.address));
    dispatch(setCity(data.city));
    dispatch(setPostalCode(data.postal_code));
    navigate("/orderSummary");
  }

  return (
    <form
      className="shipping_details"
      onSubmit={handleSubmit(shippingDetailsSubmit)}
    >
      <h1>Shipping Details</h1>
      <div className="address_box">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          placeholder="House number, street, area"
          {...register("address", {
            required: "This field is Required",
          })}
        />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div className="city_box">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          placeholder="City"
          {...register("city", {
            required: "This field is required",
          })}
        />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div className="postal_code_box">
        <label htmlFor="postal_code">Postal Code:</label>
        <input
          type="text"
          id="postal_code"
          placeholder="Postal Code"
          {...register("postal_code", {
            required: "This field is required",
            pattern: {
              value: /^\d+$/,
              message: "Please enter a valid postal code",
            },
          })}
        />
        {errors.postal_code && <p>{errors.postal_code.message}</p>}
      </div>
      <div className="button_box">
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default ShippingDetails;
