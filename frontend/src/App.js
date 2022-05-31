import './App.css'
import axios from 'axios'

function App() {
  return (
    <div className='container'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class='mb-3'>
          <label for='exampleInputEmail1' class='form-label'>
            Email address
          </label>
          <input
            type='email'
            class='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            required
          />
          <div id='emailHelp' class='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class='mb-3'>
          <label for='exampleInputPassword1' class='form-label'>
            Password
          </label>
          <input
            type='password'
            class='form-control'
            id='exampleInputPassword1'
            required
          />
        </div>
        <div class='mb-3 form-check'>
          <input type='checkbox' class='form-check-input' id='exampleCheck1' />
          <label class='form-check-label' for='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}
const handleSubmit = async (e) => {
  e.preventDefault()
  // store the states in the form data
  let resu = {
    email: document.getElementById('exampleInputEmail1').value,
    password: document.getElementById('exampleInputPassword1').value,
  }

  try {
    // make axios post request
    const res = await axios({
      method: 'post',
      url: 'http://localhost:3000/logincheck',
      data: resu,
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((res) => {
      alert(res.data.message)
    })
  } catch (error) {
    console.log(error)
  }
}
// function login(e) {
//   e.preventDefault()
//   let resu = {
//     email: document.getElementById('exampleInputEmail1').value,
//     password: document.getElementById('exampleInputPassword1').value,
//   }
//   axios
//     .post('http://localhost:3000/logincheck', resu)
//     .then((resp) => {
//       alert(resp.data.message)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }
export default App
