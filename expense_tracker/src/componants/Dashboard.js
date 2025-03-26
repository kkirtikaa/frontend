import React, { useState, useEffect } from 'react';
import imgl from '../asset/img/cart.jpg';
import del from '../asset/img/delete.jpg';
import edit from '../asset/img/edit.jpg';
import { Link, useNavigate } from 'react-router-dom';

function Dasboard() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [showdata, setshowData] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const myExpenses = [100, 200, 300, 400, 500, 600];

  useEffect(() => {
  }, [showdata]);

  const deleteExpense = () => {
    closeModal('MyModal');
  };

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  };

  const editExpense = () => {
    closeModal('MyModal2');
  };

  const addExpense = (event) => {
    event.preventDefault();
    console.log("Clicked", inputs);
    setshowData(true);
  };

  return (
    <div className='container'>
      {showdata ? (
        <div className='leftcontainer'>
          <p>Total Expense:1000</p>
          
          {/* Delete Modal */}
          <div id="MyModal" className="modal">
            <div className="modal-content">
              <p>Do you want to delete this expense?</p>
              <button onClick={deleteExpense}>Yes</button>
              <button onClick={() => closeModal('MyModal')}>No</button>
            </div>
          </div>

          {/* Edit Modal */}
          <div id="MyModal2" className="modal2">
            <div className='formcard'>
              <div>
                <h2 style={{ alignSelf: 'center' }}>Edit Expense</h2>
              </div>
              <form onSubmit={editExpense}>
                <div>
                  <label>Title</label>
                  <input
                    required
                    type="text"
                    placeholder='enter your expense title'
                    value={inputs.title || ''}
                    onChange={handleChange}
                    name='title'
                  />
                </div>
                <div>
                  <label>Amount</label>
                  <input
                    required
                    type="number"
                    placeholder='enter your expense amount'
                    value={inputs.expense || ''}
                    onChange={handleChange}
                    name='expense'
                  />
                </div>
                <div>
                  <label>Type</label>
                  <select
                    value={inputs.type || ''}
                    onChange={handleChange}
                    name='type'
                    required
                  >
                    <option disabled value=''>please select payment type</option>
                    <option value="cash">Cash</option>
                    <option value="upi">UPI</option>
                    <option value="card">Card</option>
                  </select>
                </div>
                <div>
                  <label>Date</label>
                  <input
                    required
                    type="date"
                    placeholder='enter date'
                    value={inputs.date || ''}
                    onChange={handleChange}
                    name='date'
                  />
                </div>
                <div>
                  <button>Edit Expense</button>
                </div>
                <div>
                  <button onClick={() => closeModal('MyModal2')}>Cancel</button>
                </div>
              </form>
            </div>
          </div>

          {/* Expenses List */}
          <div style={{ backgroundColor: 'gray', width: '100%', overflowY: 'scroll', marginBottom: '50px', justifyContent: '50px', justifyItems: 'center', padding: '20px' }}>
            {myExpenses.map((key, val) =>
              <div className='expensecard' key={key}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', justifyItems: 'center', alignContent: 'center', alignItems: 'center' }}>
                  <img onClick={() => openModal('MyModal2')} style={{ width: '30px', height: '30px' }} src={edit} />
                  <img onClick={() => openModal('MyModal')} style={{ width: '20px', height: '20px', marginLeft: '4px' }} src={del} />
                </div>
                <p>Title</p>
                <p>Amount</p>
                <p>Date</p>
                <p>Type</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='leftcontainer'>
          <p>please add your expenses</p>
          <img src={imgl} />
        </div>
      )}

      <div className='rightcontainer'>
        <div className='formcard'>
          <div>
            <center><h2>Add Expense</h2></center>
          </div>
          <form onSubmit={addExpense}>
            <div>
              <label>Title</label>
              <input
                required
                type="text"
                placeholder='enter your expense title'
                value={inputs.title || ''}
                onChange={handleChange}
                name='title'
              />
            </div>
            <div>
              <label>Amount</label>
              <input
                required
                type="number"
                placeholder='enter your expense amount'
                value={inputs.expense || ''}
                onChange={handleChange}
                name='expense'
              />
            </div>
            <div>
              <label>Type</label>
              <select
                value={inputs.type || ''}
                onChange={handleChange}
                name='type'
                required
              >
                <option disabled value="">please select payment type</option>
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
              </select>
            </div>
            <div>
              <label>Date</label>
              <input
                required
                type="date"
                placeholder='enter date'
                value={inputs.date || ''}
                onChange={handleChange}
                name='date'
              />
            </div>

            <div>
              <button type="submit" >Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dasboard;
