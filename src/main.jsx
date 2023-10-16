import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//data

const card1 = [
    {
        id: 1,
        content: 'Single User',
        important: true
    },

    {
        id: 2,
        content: 'Single User',
        important: true
    },

    {
        id: 3,
        content: 'Single User',
        important: true
    },

    {
        id: 4,
        content: 'Single User',
        important: true
    },

    {
        id: 5,
        content: 'Single User',
        important: false 
    },

    {
        id: 6,
        content: 'Single User',
        important: false
    },

    {
        id: 7,
        content: 'Single User',
        important: false
    },

    {
        id: 8,
        content: 'Single User',
        important: false
    }
]

ReactDOM.createRoot(document.getElementById('root')).render( <
    App card1={ card1 } / >
);