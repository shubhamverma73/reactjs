import React, { Fragment, useEffect, useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form';
import Select from 'react-select';
import { stateOptions } from '../assets/data_new';

const UserInformation = (props) => {
    const { register, control } = props;
    const { append, fields, remove } = useFieldArray({
        control,
        name: "users"
    });
    const onClickAdd = () => {
        append({
            firstname: "",
            lastname: "",
            emailaddress: "",
            state: ""
        })
    }

    useEffect(() => {
        onClickAdd();
    }, []);
        
    return (
        <div className="card mb-4">
            <div className="card-header">User Detsails</div>
            <div className="card-body">
                {
                    fields.map((item, index) => (
                        <div className="form-row form-group" key={item.id}>
                            <div className="col">
                                <input type="text" className="form-control firstName" name={`users[${index}].firstname`} defaultValue={item.firstname} ref={register()} placeholder="Enter Your First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control lastName" name={`users[${index}].lastname`}  defaultValue={item.lastname} ref={register()} placeholder="Enter Your Last name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control emailAddress" name={`users[${index}].emailaddress`}  defaultValue={item.emailaddress} ref={register()} placeholder="Enter Your E-mail Address" />
                            </div>
                            <div className="col">
                                <select className="form-control state" name={`users[${index}].state`}  defaultValue={item.state} ref={register()} id="state">
                                <option value="">Select Your State</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Assam">Assam</option>
                                <option value="Goa">Goa</option>
                                <option value="Manipur">Manipur</option>
                                </select>
                            </div>
                            <div className="col">
                            {
                                (index === 0) ? 
                                <button type="button" className="btn btn-danger" disabled> <i className="fas fa-user-minus"></i></button>
                                :
                                <button type="button" className="btn btn-danger" onClick={() => remove(index)}> <i className="fas fa-user-minus"></i></button>
                            }
                            </div>
                        </div>
                    ))
                }
                <button type="button" className="btn btn-primary" onClick={onClickAdd}><i className="fas fa-user-plus"></i> Add User</button>
            </div>
        </div>
    );
}


const Multiplefields = () => {

    const { register, handleSubmit, control, errors } = useForm();

    const onSubmit = data => {
        console.log(data)
    } 

    const [options, selectedOption ] = useState();
    const [optionsDrop, selectedOptionDrop ] = useState('Del');

    const handleChange = (selectedOptions) => {
        selectedOption(selectedOptions);
        selectedOptionDrop(selectedOptions.value);
    }

    const basciForm = (
        <Fragment>
            <div className="card mb-4">
                <div className="card-header">User Detsails</div>
                <div className="card-body">
                    <div className="form-group">
                        <p className="form-error">{errors.fullname && 'Fullname are required'}</p>
                        <input type="text" className="form-control" name="fullname" id="fullname" ref={register({required: true})} placeholder="Firstname" />
                    </div>
                    <div className="form-group">
                        <p className="form-error">{errors.fullname && 'Fullname are required'}</p>
                        <Select value={options} onChange={handleChange} options={stateOptions} />
                        <input type="hidden" name="country" value={optionsDrop} ref={register({required: true})} />
                    </div>
                    <div className="form-group">
                        <p className="form-error">{errors.email && 'Email are required'}</p>
                        <input type="email" className="form-control"name="email" id="email" ref={register({required: true})} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <p className="form-error">{errors.phone && 'Phone number are required'}</p>
                        <input type="text" className="form-control" name="phone" id="phone" ref={register({required: true})} placeholder="Phone number" />
                    </div>
                    <div className="form-group">
                        <p className="form-error">{errors.password && 'Password are required'}</p>
                        <input type="password" className="form-control" name="password" id="password" ref={register({required: true})} placeholder="Password" />
                    </div>
                </div>
            </div>
        </Fragment>
    );

    return (
        <div className="App">
            <div className="container py-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {basciForm}
                    <UserInformation register={register} control={control} />
                    <button type="submit" className="btn btn-dark"><i className="fas fa-save"></i> Submit</button>
                </form>
            </div>
        </div>
    );

};
export default Multiplefields;