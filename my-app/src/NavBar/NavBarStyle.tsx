import styled from 'styled-components';

export const NavBarWrapper = styled.div`
    width: 100vw;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    ul{
        list-style-type: none;
        margin: 0 25px;
        padding: 0;
        overflow: hidden;
    }
    li {
        float: left;
    }
    li a {
    display: block;
    color: #ffffff;
    text-align: center;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    padding: 14px 20px;
    margin: 0 10px;
    text-decoration: none;
    }
    li a span{
        margin-right: 5px;
    }
`;