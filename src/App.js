import './App.css';
import React, {useState} from 'react';
import UserComponent from './components/UserComponent';

function App() {

  const [userDataList, setUserDataList] = useState([])

  function submit_form_function(event) {
    event.preventDefault()
    console.log("submitting form")

    let form = event.target

    let username = form.elements['username'].value
    let firstName = form.elements['firstName'].value
    let lastName = form.elements['lastName'].value 

    let userData = {
      username: username,
      firstName: firstName,
      lastName: lastName,
    }

    setUserDataList([...userDataList, userData])

    console.log([...userDataList, userData])
  }

  return (
    <div className="App">
      <form onSubmit={submit_form_function}>
        <label>Enter Username:</label>
        <input type="text" name="username" placeholder='User Name'/>

        <label>Enter First Name:</label>
        <input type="text" name="firstName" placeholder='First Name'/>

        <label>Enter Last Name:</label>
        <input type="text" name="lastName" placeholder='Last Name'/>
        <button>Submit</button>
      </form>

      {/* display userList */}
      <div className="users_list">
        {
          userDataList.map((userInfo) => {
            return (
              <UserComponent username={userInfo.username} first_name={userInfo.firstName} last_name={userInfo.lastName}/>
            )
          })
        }
      </div>
    

    </div>
  );
}

export default App;
