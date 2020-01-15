import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            isLoaded: false
        }
    }
    componentDidMount() {
        this.getUser.call(this)
    }
    render() {
        const { data, isLoaded } = this.state;
        return (
            <div>
                <header>
                    <h3>User Infograph</h3>
                </header>
                <section>
                    {
                        isLoaded ? 
                        <div>
                    <div>
                        <img src={data.avatar_url} alt={data.login} width="200" />
                    </div>
                    <br />
                    <p>
                        Name - {
                            data.name ? data.name : data.login.toUpperCase()
                        }
                    </p>
                    <p>
                        Company - {
                            data.company ? data.company : 'N/A'
                        }
                    </p>
                    <p>
                    Location - {
                        data.location ? data.location : 'N/A'
                    }
                    </p>
                    <p>
                      Followers - {
                                data.followers ? data.followers : 'N/A'
                        }
                    </p>
                    <p>
                        Blog - {
                            data.blog ? data.blog : 'N/A'
                        }
                    </p>
                    <p>
                        Repos - {
                            data.repos_url ? data.repos_url : 'N/A'
                        }
                    </p>
                    <p>
                        Public Repos - {
                            data.public_repos ? data.public_repos : 'N/A'
                        }
                    </p>
                    </div>
                    : <div>Loading...</div>
    }

                </section>
            </div>
        )
    }
}

User.prototype.getUser = function() {
    let { id } = this.props.match.params;
    fetch(`https://api.github.com/users/${id}`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                data: json,
                isLoaded: true
            })
        })
}

User.propTypes = {
    match: PropTypes.object
}

export default User;