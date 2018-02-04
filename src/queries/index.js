import gql from 'graphql-tag';

export const USERS_QUERY = gql`
query UsersQuery {
    users {
        id
        login
        homeFloor
        avatarUrl
    }
}
`;

export const ROOMS_QUERY = gql`
query RoomsQuery {
    rooms {
        id
        title
        capacity
        floor
    }
}
`;
