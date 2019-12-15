import React, { PureComponent } from 'react';
import './App.css';
import CardTutor from './CardTutor';
import { callAPI } from '../utils/apiCaller';

class TypicalTutors extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            tutors: [],
            error: false

        };
    }

    componentDidMount() {
        this.getTutors();
    }

    getTutors = async () => {
        try {
            const res = await callAPI('user/typicaltutors', 'GET', {});

            this.setState({
                tutors: res.data.tutors
            });
        } catch (e) {
            this.setState({
                error: true
            });
        }
    }

    render() {
        const st = this.state;

        if (st.error) {
            return <div />;
        }

        const { tutors } = this.state;

        const tutorCards = tutors.map((tutor) => {
            return (
                <CardTutor tutor={tutor} />
            );
        });

        return (
            <div className="bg-light m-10">
                <div className="row">
                    <h1 className="separate text-center">GIA SƯ NỔI BẬT</h1>
                </div>
                <div className="row">
                    {tutorCards}
                </div>
            </div>
        );
    }
}

export default TypicalTutors;
