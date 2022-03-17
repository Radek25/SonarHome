import { useQuery, gql } from "@apollo/client";

import { LaunchesWrapper } from './LaunchesPageStyle';
import { useState } from 'react';

const GET_LAUNCHES = gql`
    query GetLaunches($limit: Int, $offset: Int, $order: String){
        launchesPast(limit: $limit, offset: $offset, order: $order){
            id
            mission_name
        }
    }
`;

export const LaunchesPage : any  = () => {
    let offset: number = 10;
    // const [dataArray, setDataArray] = useState[undefined]; - to zastosować!
    const dataArray: { id: number, mission_name: string }[] = [];
    const [loadDataFlag, setLoadDataFlag] = useState(false);

    const {  data, loading, error, fetchMore } = useQuery(GET_LAUNCHES, {variables: {limit: 10, offset: 0, order: null}});
    
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    dataArray.push(...data.launchesPast);
    
    const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
       if((e.currentTarget.scrollTop === (e.currentTarget.clientHeight-33)) && loadDataFlag === false){
            setLoadDataFlag(!loadDataFlag);
            console.log("Ładuje nowe dane");
       }
    };

    return(
        <LaunchesWrapper>
            <input type='text' placeholder='Find your racket...'/>
            <ul onScroll={handleScroll}>
                {dataArray.map(launch => <li key={launch.id}>&#128640; {launch.mission_name}</li>)}
            </ul>
            <button onClick={() => {
                fetchMore({
                    variables: {limit: 10, offset: offset},
                    updateQuery : (prevRes, {fetchMoreResult}) => {
                        dataArray.push(...fetchMoreResult.launchesPast);
                    }
                })
            }
            }>Dane</button>
            <button onClick={() => {console.log(dataArray); offset = offset +10}}>GetArr</button>
        </LaunchesWrapper>
    );
};