import { FC } from 'react';
import { useQuery, gql } from "@apollo/client";

import { LaunchesWrapper } from './LaunchesPageStyle';

const GET_LAUNCHES = gql`
    {
        launchesPast(limit: 20) {
            id
            mission_name
        }
    }
`;


export const LaunchesPage : any  = () => {
    const { data, loading, error } = useQuery(GET_LAUNCHES);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    return(
        <LaunchesWrapper>
            <input type='text' placeholder='Find your racket...'/>
            <ul>
                {data.launchesPast.map((launch: { id: number; mission_name: string; }) => (
                <li key={launch.id}><span>&#128640;</span>{launch.mission_name}</li>
                ))}
            </ul>
        </LaunchesWrapper>
    );
};