import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import MainPage from './MainPage';
import CreatePage from './CreatePage';
import EditPage from './EditPage';

const UsersList = ({ data: {loading, error, users }}) => {
    if (loading && !users) {
        console.log(users);
      return <p>Loading ...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }

    return <ul>
      { users.map( user => <li key={user.id}>{user.login}. Этаж {user.homeFloor}</li> ) }
    </ul>;
  };

const UsersListQuery = gql`
    query Query {
      users {
        id
        login
        homeFloor
      }
    }
`;

const UsersListWithData = graphql(UsersListQuery)(UsersList);

class NotFound extends Component {
  render() {
    return <h2>Страница не найдена</h2>
  }
}

class Main extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/create" component={CreatePage} />
                    <Route path="/edit" component={EditPage} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return(
            <Main />
        )
    }
}

export default App;
