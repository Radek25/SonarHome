import styled from 'styled-components';

export const LaunchesWrapper = styled.div`
    width: 100%;
    padding-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    input{
        width: 500px;
        height: 30px;
        border-radius: 20px;
        outline: none;
        border: none;
        padding: 5px 20px;
    }
    ul{
        width: 400px;
        height: 200px;
        overflow-y: scroll;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color: #ffffff;
        margin-top: 50px;
        padding: 10px;
        list-style-type: none;
    }
    ul li{
        padding: 8px 5px;
    }
    span{
        margin-right: 5px;
    }
    .loading-div{
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color: #ffffff
    }
    .loading-on-list{
        text-align: center;
        font-size: 20px;
        padding: 20px 5px 5px;
    }
`;