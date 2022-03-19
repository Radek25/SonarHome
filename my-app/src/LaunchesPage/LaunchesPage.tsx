import { useQuery, gql } from "@apollo/client";
import { LaunchesWrapper } from './LaunchesPageStyle';
import { useState } from 'react';

//Create GraphQL template tag
const GET_LAUNCHES = gql`
    query GetLaunches($offset: Int){
        launchesPast(limit: 10, offset: $offset){
            id
            mission_name
        }
    }
`;

interface ILaunch {
    id: string,
    mission_name: string,
    __typename: string
}
interface IData {
    launchesPast: ILaunch[]
}

export const LaunchesPage: React.FunctionComponent<{}> = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_LAUNCHES, { variables: { offset: 0 } });
    const [isDataLoading, setDataLoading] = useState(false);
    const [noMoreData, setEndOfData] = useState(false);
    const fatchDataOffset = 200;

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

    if (loading) return <div>Loading...</div>;
    if (error) return <pre>{error.message}</pre>

    return (
        <LaunchesWrapper>
            <input type='text' placeholder='Find your racket...' />
            <ul onScroll={handleScroll}>
                {data.launchesPast.map((launch: ILaunch) => <li key={launch.mission_name}>&#128640; {launch.mission_name}</li>)}
                {isDataLoading && !noMoreData ?  <li>lodaing more data...</li>:  <li>No more data!</li>}
            </ul>
        </LaunchesWrapper>
    );
};