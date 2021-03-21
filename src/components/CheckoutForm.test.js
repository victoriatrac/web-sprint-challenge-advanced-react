import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const testElement = screen.getByText(/checkout form/i)
    expect(testElement).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    userEvent.type(screen.getByLabelText('First Name:'), 'Kyle')
    userEvent.type(screen.getByLabelText('Last Name:'), 'Witte')
    userEvent.type(screen.getByLabelText('Address:'), '943 Lansing Dr')
    userEvent.type(screen.getByLabelText('City:'), 'Charleston')
    userEvent.type(screen.getByLabelText('State:'), 'GA')
    userEvent.type(screen.getByLabelText('Zip:'), '29464')
    userEvent.click(screen.getByText('Checkout'))
    expect(screen.getByTestId('successMessage')).toBeInTheDocument()
});
