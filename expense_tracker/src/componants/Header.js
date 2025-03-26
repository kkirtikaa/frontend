import React,{useState} from 'react'
import favicon from '../asset/img/favicon.jpg'
import arrow from '../asset/img/downarrow.jpg'
import { useNavigate, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();
   const [inputs, setInputs] = useState({})
    const navigate=useNavigate();
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }))
    }
  const doLogout =()=>{
    navigate('/');
  }
  const openmodal = () => {
    var modal = document.getElementById("MyModal3");
    console.log("AA")
    modal.style.display = "block";
  }
  const closemodal = () => {
    var modal = document.getElementById("MyModal3");
    console.log("BB")
    modal.style.display = "none";
  }
  console.log("MSG", location.pathname);
  return (

    <div className='Header'>
      <div id="MyModal3" className="modal1">
            <div className='formcard'>
              <div>
                <h2 style={{ alignSelf: 'center' }}>Change Password</h2>
              </div>
              <form onSubmit={closemodal}>
                <div>
                  <label>
                    Old Password
                  </label>

                  <input
                    required
                    type="password"
                    placeholder='enter your old password'
                    value={inputs.psw || ''}
                    onChange={handleChange}
                    name='psw'
                  />
                </div>
                <div>
                  <label>
                    New Password
                  </label>

                  <input
                    required
                    type="password"
                    placeholder='enter new password'
                    value={inputs.npsw || ''}
                    onChange={handleChange}
                    name='npsw'
                  />
                </div>
                <div>
                  <label>
                    conform password
                  </label>

                  <input
                    required
                    type="password"
                    placeholder='conform new password'
                    value={inputs.cnfpsw || ''}
                    onChange={handleChange}
                    name='cnfpsw'
                  />
                </div>
                <div>
                  <button>Submit</button>
                  </div>
                <div>
                  <button onClick={closemodal}>Cancel</button>
                </div>
                </form>
                </div>
                </div>
      <div style={{ display: 'flex', width: '90%', alignItems: 'center' }}>
        <img src={favicon} />
        <h2>Expense Tracker</h2>
      </div>
      {
        location.pathname === '/Dashboard' ?
          <div style={{ width: '10%', display: 'flex', alignItems: 'center' }}>
            <p>User name</p>
            <div className="dropdown">
              <img style={{ width:'10px',height:'10px',marginLeft:'10px' }} src={arrow} />
              

              <div className="dropdown-content">
                <p onClick={openmodal}>Change Password</p>
                <p onClick={doLogout}>Log Out</p>
              </div>
            </div>

            {/* <p>User Name</p>
          <img style={{width:'10px',height:'10px',marginLeft:'10px'}} scr={arrow}/> */}
          </div>
          :
          null
      }

    </div>
  )
}

export default Header
