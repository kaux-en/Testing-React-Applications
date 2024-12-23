import React from "react";
//import { Provider } from "react-redux";
import { render, fireEvent, waitFor, getByAltText, getByText } from '@testing-library/react';
//import configureStore from "redux-mock-store";
import FetchPosts from "../FetchPosts";
import AddPost from "../AddPost";
import UpdatePosts from "../UpdatePost";



describe('FetchPosts Component', () => {

  test('renders posts list', async () => {
    const { getByText } = render(<FetchPosts />)

    await waitFor(() => {
        expect(getByText(/testTitle1 - testBody1/i)).toBeInTheDocument();
        expect(getByText(/testTitle2 - testBody2/i)).toBeInTheDocument();
        })
    });
});


describe('AddPost Component', () => {

    test('adds new post to post list', () => {
        render(<AddPost />)

        fireEvent.click(getByText(/submit/i));
    });  
})


describe('UpdatePost Component', () => {

    test('edit existing posts', () => {
        render(<UpdatePosts />)

        fireEvent.click(getByText(/edit/i));
    });
});


describe('deletePost Function', () => {

    test('deleting existing posts', () => {
        render(<FetchPosts />)


        fireEvent.click(getByText(/delete/i));
    });
});







