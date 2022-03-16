import { useQuery, gql } from "@apollo/client";

import { LaunchesWrapper } from './LaunchesPageStyle';
import { useState } from 'react';

const GET_LAUNCHES = gql`
    query GetLaunches($limit: Int!){
        launchesPast(limit: $limit){
            id
            mission_name
        }
    }
`;

export const LaunchesPage : any  = () => {

    const [loadDataFlag, setLoadDataFlag] = useState(false);

    const {  data, loading, error } = useQuery(GET_LAUNCHES, {variables: {limit: 9}});
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
   
    const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
       if((e.currentTarget.scrollTop === (e.currentTarget.clientHeight-33)) && loadDataFlag === false){
            setLoadDataFlag(!loadDataFlag);
            console.log("Ładuje nowe dane")
            setTimeout(() => {setLoadDataFlag(true); console.log("Koniec ładowania")}, 2000);
       }
    };

    return(
        <LaunchesWrapper>
            <input type='text' placeholder='Find your racket...'/>
            <ul onScroll={handleScroll}>
                {data.launchesPast.map((launch: { id: number; mission_name: string; }) => (
                <li key={launch.id}><span>&#128640;</span>{launch.mission_name}</li>
                ))}
            </ul>
        </LaunchesWrapper>
    );
};