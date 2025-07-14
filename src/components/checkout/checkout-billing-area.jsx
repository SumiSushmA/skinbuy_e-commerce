import { useSelector } from "react-redux";
import ErrorMsg from "../common/error-msg";

const CheckoutBillingArea = ({ register, errors }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="tp-checkout-bill-area">
      <h3 className="tp-checkout-bill-title">Billing Details</h3>

      <div className="tp-checkout-bill-form">
        <div className="tp-checkout-bill-inner">
          <div className="row">
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>
                  First Name <span>*</span>
                </label>
                <input
                  {...register("firstName", {
                    required: `firstName is required!`,
                  })}
                  name="firstName"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  defaultValue={user?.firstName}
                />
                <ErrorMsg msg={errors?.firstName?.message} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>
                  Last Name <span>*</span>
                </label>
                <input
                  {...register("lastName", {
                    required: `lastName is required!`,
                  })}
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
                <ErrorMsg msg={errors?.lastName?.message} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Country <span>*</span>
                </label>
                <input
                  {...register("country", { required: `country is required!` })}
                  name="country"
                  id="country"
                  type="text"
                  placeholder="United States (US)"
                />
                <ErrorMsg msg={errors?.lastName?.message} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>Street address</label>
                <input
                  {...register("address", { required: `Address is required!` })}
                  name="address"
                  id="address"
                  type="text"
                  placeholder="House number and street name"
                />
                <ErrorMsg msg={errors?.address?.message} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>Town / City</label>
                <input
                  {...register("city", { required: `City is required!` })}
                  name="city"
                  id="city"
                  type="text"
                  placeholder="City"
                />
                 <ErrorMsg msg={errors?.city?.message} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>Postcode ZIP</label>
                <input
                  {...register("zipCode", { required: `zipCode is required!` })}
                  name="zipCode"
                  id="zipCode"
                  type="text"
                  placeholder="Postcode ZIP"
                />
                <ErrorMsg msg={errors?.zipCode?.message} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Phone <span>*</span>
                </label>
                <input
                  {...register("contactNo", {
                    required: `ContactNumber is required!`,
                  })}
                  name="contactNo"
                  id="contactNo"
                  type="text"
                  placeholder="Phone"
                />
                <ErrorMsg msg={errors?.contactNo?.message} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Email address <span>*</span>
                </label>
                <input
                  {...register("email", { required: `Email is required!` })}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  defaultValue={user?.email}
                />
                <ErrorMsg msg={errors?.email?.message} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>Order notes (optional)</label>
                <textarea
                  {...register("orderNote", { required: false })}
                  name="orderNote"
                  id="orderNote"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBillingArea;
// // src/components/checkout/checkout-billing-area.jsx

// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import ErrorMsg from "../common/error-msg";

// const CheckoutBillingArea = ({ register, errors }) => {
//   // 1) Hard-coded defaults
//   const DEFAULT_ADDRESS = {
//     street:  "ghattekulo",
//     city:    "Kathmandu",
//     zipCode: "44600",
//     country: "Nepal",
//   };
//   const DEFAULT_PHONE = "9823456789";

//   // 2) Pull user from Redux
//   const { user } = useSelector((state) => state.auth);

//   // 3) Toggle between saved vs. new address
//   const [useDefault, setUseDefault] = useState(true);

//   // 4) Choose real profile address or fallback to defaults
//   const saved =
//     user?.address && Object.keys(user.address).length > 0
//       ? user.address
//       : DEFAULT_ADDRESS;

//   // 5) When toggling back to “saved”, populate the inputs
//   useEffect(() => {
//     if (useDefault) {
//       document.getElementById("country").value = saved.country;
//       document.getElementById("address").value = saved.street;
//       document.getElementById("city").value    = saved.city;
//       document.getElementById("zipCode").value = saved.zipCode;
//       document.getElementById("contactNo").value =
//         user?.contactNo || DEFAULT_PHONE;
//       document.getElementById("email").value =
//         user?.email || "";
//     }
//   }, [useDefault, saved, user]);

//   return (
//     <div className="tp-checkout-bill-area">
//       <h3 className="tp-checkout-bill-title">Billing Details</h3>

//       {/* ── Address Type Selector ── */}
//       <div className="mb-4">
//         <label className="me-3">
//           <input
//             type="radio"
//             name="addressType"
//             checked={useDefault}
//             onChange={() => setUseDefault(true)}
//           />{" "}
//           Use saved address
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="addressType"
//             checked={!useDefault}
//             onChange={() => setUseDefault(false)}
//           />{" "}
//           Enter new address
//         </label>
//       </div>

//       {/* ── Billing Form ── */}
//       <div className="tp-checkout-bill-form">
//         <div className="tp-checkout-bill-inner">
//           <div className="row">

//             {/* Country */}
//             <div className="col-md-12">
//               <div className="tp-checkout-input">
//                 <label>Country <span>*</span></label>
//                 <input
//                   type="text"
//                   id="country"
//                   placeholder="Country"
//                   disabled={useDefault}
//                   defaultValue={useDefault ? saved.country : ""}
//                   {...register("country", {
//                     required: !useDefault && "Country is required!",
//                   })}
//                 />
//                 <ErrorMsg msg={errors?.country?.message} />
//               </div>
//             </div>

//             {/* Street Address */}
//             <div className="col-md-12">
//               <div className="tp-checkout-input">
//                 <label>Street address <span>*</span></label>
//                 <input
//                   type="text"
//                   id="address"
//                   placeholder="House number and street name"
//                   disabled={useDefault}
//                   defaultValue={useDefault ? saved.street : ""}
//                   {...register("address", {
//                     required: !useDefault && "Address is required!",
//                   })}
//                 />
//                 <ErrorMsg msg={errors?.address?.message} />
//               </div>
//             </div>

//             {/* Town / City */}
//             <div className="col-md-6">
//               <div className="tp-checkout-input">
//                 <label>Town / City <span>*</span></label>
//                 <input
//                   type="text"
//                   id="city"
//                   placeholder="City"
//                   disabled={useDefault}
//                   defaultValue={useDefault ? saved.city : ""}
//                   {...register("city", {
//                     required: !useDefault && "City is required!",
//                   })}
//                 />
//                 <ErrorMsg msg={errors?.city?.message} />
//               </div>
//             </div>

//             {/* Postcode ZIP */}
//             <div className="col-md-6">
//               <div className="tp-checkout-input">
//                 <label>Postcode ZIP <span>*</span></label>
//                 <input
//                   type="text"
//                   id="zipCode"
//                   placeholder="Postcode ZIP"
//                   disabled={useDefault}
//                   defaultValue={useDefault ? saved.zipCode : ""}
//                   {...register("zipCode", {
//                     required: !useDefault && "ZIP code is required!",
//                   })}
//                 />
//                 <ErrorMsg msg={errors?.zipCode?.message} />
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="col-md-12">
//               <div className="tp-checkout-input">
//                 <label>Phone <span>*</span></label>
//                 <input
//                   type="text"
//                   id="contactNo"
//                   placeholder="Phone"
//                   defaultValue={
//                     useDefault ? user?.contactNo || DEFAULT_PHONE : ""
//                   }
//                   {...register("contactNo", {
//                     required: "Phone number is required!",
//                   })}
//                 />
//                 <ErrorMsg msg={errors?.contactNo?.message} />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="col-md-12">
//               <div className="tp-checkout-input">
//                 <label>Email address <span>*</span></label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Email"
//                   defaultValue={useDefault ? user?.email || "" : ""}
//                   {...register("email", {
//                     required: "Email is required!",
//                   })}
//                 />
//                 <ErrorMsg msg={errors?.email?.message} />
//               </div>
//             </div>

//             {/* Order notes (optional) */}
//             <div className="col-md-12">
//               <div className="tp-checkout-input">
//                 <label>Order notes (optional)</label>
//                 <textarea
//                   id="orderNote"
//                   placeholder="Notes about your order, e.g. special notes for delivery."
//                   {...register("orderNote")}
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutBillingArea;
