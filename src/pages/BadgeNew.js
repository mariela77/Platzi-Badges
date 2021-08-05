import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeNew extends React.Component {
    state = { 
        loading: false,
        error: null,
        form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        instagram: '',

    } };

    handleChange = e => {
        this.setState({
           form: {
               ...this.state.form,
               [e.target.name]: e.target.value,
           } 
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try {
           await api.badges.create(this.state.form)
           this.setState({ loading: false })

           this.props.history.push('/badges');

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }


    render() {
        if(this.state.loading) {
            return <PageLoading />;
                }
        return(
            <div>
                
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                           <Badge 
                           firstName= {this.state.form.firstName || 'First_name'}
                           lastName= {this.state.form.lastName || 'Last_name'}
                           instagram= {this.state.form.instagram || 'Instagram'} 
                           email= {this.state.form.email || 'Email'}
                           jobTitle= {this.state.form.jobTitle || 'Job_title'}
                           avatarUrl="https://secure.gravatar.com/avatar/4f60b2002d886dbea6fe43488827f2e1" />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange} 
                            onSubmit= {this.handleSubmit}
                            formValues= {this.state.form} 
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default BadgeNew;
