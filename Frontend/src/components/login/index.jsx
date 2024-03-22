// import React from 'react';
// const login = REACT_APP_LOGIN_URL;


// class LoginForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       input: {},
//       errors: {}
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value;
//     this.setState({ input });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     if (this.validate()) {
//       const formData = {
//         username: this.state.input.username,
//         email: this.state.input.email,
//         password: this.state.input.password
//       };
  
//       fetch(login, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       })
//       .then(response => {
//         if (response.ok) {
//           let input = {
//             username: '',
//             email: '',
//             password: '',
//             confirm_password: ''
//           };
//           this.setState({ input: input });
//           alert("Registration successful!");
//         } else {
//           throw new Error('Registration failed');
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         alert("Registration failed. Please try again later.");
//       });
//     }
//   }
  

//   validate() {
//     let input = this.state.input;
//     let errors = {};
//     let isValid = true;

//     if (!input["email"]) {
//       isValid = false;
//       errors["email"] = "Please enter your email address";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input["email"])) {
//       isValid = false;
//       errors["email"] = "Please enter a valid email address";
//     }

//     if (!input["password"]) {
//       isValid = false;
//       errors["password"] = "Please enter your password";
//     } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(input["password"])) {
//       isValid = false;
//       errors["password"] = "The password should contain at least one lowercase, one uppercase, one digit and one special character. The password should be at least 8 characters long.";
//     }

//     if (input["password"] !== input["confirm_password"]) {
//       isValid = false;
//       errors["confirm_password"] = "Passwords don't match";
//     }

//     this.setState({ errors: errors });
//     return isValid;
//   }

//   render() {
//     return (
//       <div className='max-w-md mx-auto px-4 py-8 bg-white shadow-lg rounded-lg'>
//         <h1 className='text-center text-3xl font-bold mb-4'>REGISTRATION FORM</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className='mb-4'>
//             <label htmlFor="email" className='block text-sm font-bold mb-2'>EMAIL ADDRESS:</label>
//             <input
//               type="text"
//               name="email"
//               value={this.state.input.email}
//               onChange={this.handleChange}
//               className='w-full p-2 border border-gray-300 rounded'
//               placeholder='Enter Email'
//               id="email"
//             />
//             <div className='text-red-500 text-sm font-bold'>{this.state.errors.email}</div>
//           </div>

//           <div className='mb-4'>
//             <label htmlFor="password" className='block text-sm font-bold mb-2'>PASSWORD:</label>
//             <input
//               type="password"
//               name="password"
//               value={this.state.input.password}
//               onChange={this.handleChange}
//               className='w-full p-2 border border-gray-300 rounded'
//               placeholder='Enter password'
//               id="password"
//             />
//             <div className='text-red-500 text-sm font-bold'>{this.state.errors.password}</div>
//           </div>

//           <div className='mb-4'>
//             <label htmlFor="confirm-password" className='block text-sm font-bold mb-2'>CONFIRM PASSWORD:</label>
//             <input
//               type="password"
//               name="confirm_password"
//               id="confirm-password"
//               value={this.state.input.confirm_password}
//               onChange={this.handleChange}
//               className='w-full p-2 border border-gray-300 rounded'
//               placeholder='Enter confirm password'
//             />
//             <div className='text-red-500 text-sm font-bold'>{this.state.errors.confirm_password}</div>
//           </div>

//           <div className='flex justify-center'>
//             <button
//               type="submit"
//               className='bg-green-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-green-600'
//             >
//               SUBMIT
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;
