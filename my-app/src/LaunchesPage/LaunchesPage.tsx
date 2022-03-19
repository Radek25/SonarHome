import { useQuery, gql } from "@apollo/client";
import { LaunchesWrapper } from './LaunchesPageStyle';
import { useState } from 'react';
import { ILaunch, IData } from "../Interfaces/Interfaces";

//Create GraphQL template tag
const GET_LAUNCHES = gql`
    query GetLaunches($offset: Int){
        launchesPast(limit: 10, offset: $offset){
            id
            mission_name
        }
    }
`;

export const LaunchesPage: React.FunctionComponent<{}> = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_LAUNCHES, { variables: { offset: 0 } });
    const [isDataLoading, setDataLoading] = useState(false);
    const [noMoreData, setEndOfData] = useState(false);
    const fatchDataOffset = 200;

    //Function to check scroll position and fetch new data if it's needed
    const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
        if (isDataLoading) return;
        if (e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight - fatchDataOffset) {
            setDataLoading(true);
            fetchMore({
                variables: { offset: data.launchesPast.length },
                updateQuery: (prevResult: IData, { fetchMoreResult }) => {
                    setDataLoading(false);
                    if(!fetchMoreResult){
                        setEndOfData(true);
                        return prevResult;
                    }
                    return ({ ...data, launchesPast: [...data.launchesPast, ...fetchMoreResult?.launchesPast ?? []] });
                }
            })
        }
    };

    if (loading) return <LaunchesWrapper><div className="loading-div">Loading...</div></LaunchesWrapper>;
    if (error) return <LaunchesWrapper><div>{error.message}</div></LaunchesWrapper>

    return (
        <LaunchesWrapper>
            <input type='text' placeholder='Find your racket...' />
            <ul onScroll={handleScroll}>
                {data.launchesPast.map((launch: ILaunch) => <li key={launch.mission_name}>&#128640; {launch.mission_name}</li>)}
                {isDataLoading && !noMoreData ?  <li className="loading-on-list">&#128513; Loading more data... &#128513;</li>:  <li className="loading-on-list">&#128532; No more data &#128532;</li>}
            </ul>
        </LaunchesWrapper>
    );
};