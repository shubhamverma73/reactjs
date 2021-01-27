import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form';

const Multiplefields = () => {

    const { register, handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    const UserExtraInfo = (props) => {
        const { register, control } = props;
        const { append, fields, remove } = useFieldArray({
            control,
            name: "users"
        });
        return (
            <div className="card mb-4">
                <div className="card-header">User Detsails</div>
                <div className="card-body">
                    {
                        fields.map((item, index) => {
                            <div className="form-row form-group" key={item.id}>
                                <div className="col">
                                <input type="text" className="form-control" name={`users[${index}].firstname`} defaultValue={item.firstname} ref={register()} placeholder="Enter Your First name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" name={`users[${index}].lastname`}  defaultValue={item.lastname} ref={register()} placeholder="Enter Your Last name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" name={`users[${index}].emailaddress`}  defaultValue={item.emailaddress} ref={register()} placeholder="Enter Your E-mail Address" />
                                </div>
                                <div className="col">
                                    <select className="form-control" name={`users[${index}].state`}  defaultValue={item.state} ref={register()} id="state">
                                    <option value="">Select Your State</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Manipur">Manipur</option>
                                    </select>
                                </div>
                            </div>
                        })
                    }
                    <button className="btn btn-dark" onClick={() => append({
                        firstname: "",
                        lastname: "",
                        emailaddress: "",
                        state: ""
                    })}>Add User</button>
                </div>
            </div>
        );

    }

    const basciForm = (
        <>
            <div className="card mb-4">
                <div className="card-header">User Detsails</div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" className="form-control" name="name" id="fullname" ref={register} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control"name="email" id="email" ref={register} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" className="form-control" name="phone" id="phone" ref={register} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" id="password" ref={register} />
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className="App">
            <div className="container py-5">
                <form action="/" method="post" onSubmit={handleSubmit(onSubmit)}>
                    {basciForm}
                    <UserExtraInfo register={register} control={control} />
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    );

};
export default Multiplefields;