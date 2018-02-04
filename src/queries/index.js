import gql from 'graphql-tag';

export const USERS_QUERY = gql`
query UsersQuery {
    users {
        id
        login
        homeFloor
        avatarUrl
    }
}`;

export const ROOMS_QUERY = gql`
query RoomsQuery {
    rooms {
        id
        title
        capacity
        floor
    }
}`;

export const CREATE_EVENT_QUERY = gql`
mutation CreateEvent($eventInput: EventInput!, $usersIds: [ID], $roomId: ID!, ) {
    createEvent(input: $eventInput, usersIds: $usersIds, roomId: $roomId) {
        title
        dateStart
        dateEnd
        room {
            title
            floor
        }
    }
}`;

export const GET_EVENTS_QUERY = gql`
query GetEvents {
    events {
        id
        dateStart
        dateEnd
        title
        room {
            id
        }
    users {
        homeFloor
        login
        avatarUrl
      }
    }
}`;
