import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Student extends Component{
    constructor(){
        super();
        this.state={students:[]};
        this.handleClick=this.handleClick.bind(this);
    }

    componentDidMount () {
        axios.get('/api/students')
        .then(res => res.data)
        .then(students => this.setState({ students }));
    }

    handleClick(e){
        console.log("clickTarg",e.target.id);
        axios({
            method: 'delete',
            url: '/api/students/'+e.target.id
        })
        .then(res =>{
            console.log('change state',res);
            //cannot push to the same path must modify state
            // this.props.history.push('/campuses');
            // this.setState({ campuses });


            // could not do another query on the server side
            // please see api
            axios.get('/api/students')
            .then(res => res.data)
            .then(students => this.setState({ students }));
        });
    }

    render() {
        var students = this.state.students;
        var styles = { cssFloat:'right' };
        var stylesImg={ width:'65px' };

        return (

            <div className="col-md-9">
                <h1>Students</h1>
                <h2>List of All Students ({students.length})
                    <Link to="/students/new"><button type="button" className="btn btn-primary" style={styles}>+ Add Student</button></Link>
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th>Campus</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(students => {
                                return (
                                    <tr key={students.id}>
                                        <td>{ students.id }</td>
                                        <td><Link to={`/students/view/${students.id}`}>{ `${students.firstName} ${students.lastName}`}</Link></td>
                                        <td><Link to={`/campuses/view/${students.campus.id}`}>{ students.campus.name }</Link></td>
                                        <td>{ students.email }</td>
                                        <td>{`@${students.firstName}`}</td>
                                        <td className="text-right"><button type="button" onClick={this.handleClick} id={students.id} className="btn btn-xs btn-danger" >delete</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}
