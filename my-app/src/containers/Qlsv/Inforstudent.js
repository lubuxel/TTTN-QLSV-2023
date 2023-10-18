import React from "react";
import HandleClick from "../../components/HandleClick";

class Inforstudent extends React.Component {
  state = {
    listStudents: [
      { id:'',  mssv: '2051150214', name: 'Trần Công Trực', class: 'KM20B', address: 'BRVT' }
    ],
    newStudent: {
      id: '',
      mssv: '',
      name: '',
      class: '',
      address: ''
    },
    editStudent: {}
  }

  handleAddStudent = () => {
    const { newStudent, listStudents } = this.state;
    if (!newStudent.mssv || !newStudent.name || !newStudent.class || !newStudent.address) {
      alert('Vui lòng điền vào các ô còn thiếu');
      return;
    }
    newStudent.id = Math.floor(Math.random() * 1000)
    const updatedListStudents = [...listStudents, newStudent,];
    this.setState({
      listStudents: updatedListStudents,
      newStudent: {
        id: '',
        mssv: '',
        name: '',
        class: '',
        address: ''
      }
    });
    
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      newStudent: {
        ...prevState.newStudent,
        [name]: value
      }
    }));
  }

  handleInputChangetable = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      editStudent: {
        ...prevState.editStudent,
        [name]: value
      }
    }));
  }


  handleDeleteUser = (student) => {
    const updatedListStudents = this.state.listStudents.filter(item => item.id !== student.id);
    this.setState({
      listStudents: updatedListStudents
    });
  }
  
  handleEditUser = (student) => {
    this.setState({
    editStudent: student ? { ...student } : null
    });
  }
  handleSaveUser = () => {
    const { editStudent, listStudents } = this.state;
    const updatedListStudents = listStudents.map(student => {
      if (student.id === editStudent.id) {
        return editStudent;
      }
      return student;
    });
    this.setState({
      listStudents: updatedListStudents,
      editStudent: null
    });
  }


  render() {
    const { listStudents, newStudent, editStudent } = this.state;
    let type = "text";    
    return (
      <div className="container">
        <div className="row">
          <div className="addusenpm sr">
            <div>
              <HandleClick
                type={type}
                name="mssv"
                placeholder="MSSV"
                value={newStudent.mssv}
                handleChange={this.handleInputChange}
              />
              <HandleClick
                type={type}
                name="name"
                placeholder="Họ và Tên"
                value={newStudent.name}
                handleChange={this.handleInputChange}
              />
              <HandleClick
                type={type}
                name="class"
                placeholder="Lớp"
                value={newStudent.class}
                handleChange={this.handleInputChange}
              />
              <HandleClick
                type={type}
                name="address"
                placeholder="Địa chỉ"
                value={newStudent.address}
                handleChange={this.handleInputChange}                  
              />
              <div className="add-user">
                <button type="button" className="add" onClick={this.handleAddStudent}>
                  ADD
                </button>
              </div>
            </div>
          </div>

          <div className="table-users mt-5">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">MSSV</th>
                  <th scope="col">Họ và Tên</th>
                  <th scope="col">Lớp</th>
                  <th scope="col">Địa chỉ</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {listStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {editStudent && editStudent.id === student.id ? (
                        <input
                          type="text"
                          value={editStudent.mssv}
                          onChange={(event) => this.handleInputChangetable({ target: { name: 'mssv', value: event.target.value }})}
                        />
                      ) : (
                        student.mssv
                      )}
                    </td>
                    <td>
                      {editStudent && editStudent.id === student.id ? (
                        <input
                          type="text"
                          value={editStudent.name}
                          onChange={(event) => this.handleInputChangetable({ target: { name: 'name', value: event.target.value }})}    
                        />
                      ) : (
                        student.name
                      )}
                    </td>
                    <td>
                      {editStudent && editStudent.id === student.id ? (
                        <input
                          type="text"
                          value={editStudent.class}
                          onChange={(event) => this.handleInputChangetable({ target: { name: 'class', value: event.target.value } })}
                        />
                      ) : (
                        student.class
                      )}
                    </td>
                    <td>
                      {editStudent && editStudent.id === student.id ? (
                        <input
                          type="text"
                          value={editStudent.address}
                          onChange={(event) => this.handleInputChangetable({ target: { name: 'address', value: event.target.value } })}
                        />
                      ) : (
                        student.address
                      )}
                    </td>
                    <td>
                      {editStudent && editStudent.id === student.id ? (
                        <>                         
                          <button className="save btn btn-success" onClick={this.handleSaveUser}>
                            Save
                          </button>
                          <button className="cancel btn btn-secondary" onClick={() => this.handleEditUser(null)}>
                            Cancel
                          </button>
                        </>
                      ) : (
                          <>                           
                            <button className="edit btn btn-danger" onClick={() => this.handleEditUser(student)}>
                              Edit
                            </button>
                          </>                         
                      )}
                      <button className="delete btn btn-warning" onClick={() => this.handleDeleteUser(student)}>
                        Delete
                      </button>                
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Inforstudent;