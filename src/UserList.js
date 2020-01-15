import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserList = (props) => {
    return (
        <div>
            <header>
                <h3>Users List</h3>
            </header>
            <section>
                <div>
                    <ul>
                        {
                            props.data.length ?
                                props.data.slice(0, 10).map(item => (
                                    <li key={item.id.toString()}>
                                        <Link to={`/user/${item.login}`}>
                                            <img src={item.avatar_url} alt={item.login} width="50" />
                                            <code>
                                                {
                                                    item.login.toUpperCase()
                                                }
                                            </code>
                                        </Link>
                                    </li>
                                ))
                                : <div>Loading...</div>
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}

UserList.propTypes = {
    data: PropTypes.array
}

export default UserList;