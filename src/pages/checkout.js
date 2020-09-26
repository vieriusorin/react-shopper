import React, { Component } from 'react';
import States from '../components/states';

class CheckoutPage extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        isResidential: false
    };

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        const {items } = this.props
        const {
            firstName,
            lastName,
            email,
            street,
            city,
            state,
            isResidential
        } = this.state

        const done = firstName && lastName && email && street && city && state;
        return (
            <div className="container">
                <h1 className="h-100 mb-5">Checkout page</h1>
                <div className="row">
                    <div className="col-md-6">
                    <h3 className="mb-3">You are buying {items.length} items</h3>
                        <form>
                            <div className="form-row">
                                <div className="col">
                                    <div class="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" name="email" value={email} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <input type="text" className="form-control" id="street" name="street" value={street} onChange={this.handleChange} />
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input type="text" className="form-control" id="city" name="city" value={city} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="state">States</label>
                                        <select className="form-control" name="state" id="state" value={state} onChange={this.handleChange}>
                                            <States />
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input"
                                type="checkbox"
                                name="isResidential"
                                id="isResidential"
                                checked={isResidential}
                                onChange={this.handleChange} />
                                <label class="form-check-label" htmlFor="isResidential">
                                    Is this a residential address?
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h3 className="mb-3">Confirm Shipping Info</h3>
                        {
                            done ? (
                                <>
                                <div>{firstName} {lastName}</div>
                                <div>{email}</div>
                                <div>{street}</div>
                                <div>{city}</div>
                                <div>{state}</div>
                                <div>{isResidential
                                    ? 'residential'
                                    : 'commercial'}</div>
                                </>
                            ) : (
                                'Fill out the form first'
                              )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckoutPage;