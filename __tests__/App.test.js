import React from "react";
import { render } from "@testing-library/react";
import App from "../client/App";



jest.mock('../client/components/NavBar', () => () => <div data-testid="NavBar-app" />);
jest.mock('../client/components/LoginSignup', () => () => <div data-testid="LoginSignup" />);

test('should render nav bar since user is logged in', () => {
    const { getByTestId } = render(<App loggedIn />)
    expect(getByTestId(/NavBar-app/)).toBeInTheDocument()
})

test('should render the sign up log in page', () => {
    const { getByTestId } = render(<App loggedIn={false} />);
    expect(getByTestId(/LoginSignup/)).toBeInTheDocument(); 
})