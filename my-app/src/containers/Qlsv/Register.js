import React from "react";

class Register extends React.Component {
    state = {

    }

    render() {
        return (
            <>
                <div className="container d-flex justify-content-center align-items-center ">
                    <form class="row g-3" action="/post-curd" method="POST">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" name="email" placeholder="abc@gmail.com"/>
                        </div>
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" placeholder="123......"/>
                        </div>
                        <div class="col-6"></div>
                        <div class="col-6">
                            <label for="inputRePassword" class="form-label">Confirm your Password</label>
                            <input type="password" class="form-control" name="password" placeholder="Your password"/>
                        </div>
                        {/* <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip"/>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div> */}
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
export default Register;