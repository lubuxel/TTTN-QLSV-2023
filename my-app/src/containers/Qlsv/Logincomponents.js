import React from "react";
import './Logincomponent.scss';
import userService from "../../services";



class Logincomponents extends React.Component {
    state = {
        email: '',
        password: ''
    }

handleloginemail = (event) => {
    this.setState({
        email: event.target.value,
        
    })
}  
handelloginpassword = (event) => {
    this.setState({
        password: event.target.value
    })
}
handelonclinksubmit = () => {
    
}



    render() {
        console.log('>>> check state', this.state)
        
        return(
            <>
                <div className="container d-flex justify-content-center align-items-center ">
                    <div className="row">
                        <div className="user-infor-container p-3 mb-2 bg-light">
                            <form method="POST" action="admin.html">  
                                <div className="mt-3 d-flex justify-content-center"> SINH VIEN UTE </div>  
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" value={this.state.email} 
                                    onChange={(event)  => this.handleloginemail(event)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" value={this.state.password}
                                    onChange={(event)  => this.handelloginpassword(event)}
                                    />
                                </div>                  
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary" onClick={() => this.handelonclinksubmit() }>Submit</button>
                                </div>
                            </form>      
                        </div>           
                    </div>
                </div> 
            </>
        )
    }
}


export default Logincomponents;