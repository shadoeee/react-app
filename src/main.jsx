import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//data

const cardsData = [
  {
    id: 1,
    title: 'Free',
    price: 0,
    features: [
    {
        id: 1,
        content: 'Single User',
        important: true
    },

    {
        id: 2,
        content: '50GB Storage',
        important: true
    },

    {
        id: 3,
        content: 'Unlimited Public Projects',
        important: true
    },

    {
        id: 4,
        content: 'Community Access',
        important: true
    },

    {
        id: 5,
        content: 'Unlimited Private Projects',
        important: false 
    },

    {
        id: 6,
        content: 'Dedicated Phone Support',
        important: false
    },

    {
        id: 7,
        content: 'Free Subdomain',
        important: false
    },

    {
        id: 8,
        content: 'Monthly Status Reports',
        important: false
    }
],
  },
  {
    id: 2,
    title: 'Basic',
    price: 9,
    features: ['Feature A', 'Feature B', 'Feature C'],
  },
  {
    id: 3,
    title: 'Plus',
    price: 49,
    features: ['Feature X', 'Feature Y', 'Feature Z'],
  },
];


// const card1 = [
//     {
//         id: 1,
//         content: 'Single User',
//         important: true
//     },

//     {
//         id: 2,
//         content: '50GB Storage',
//         important: true
//     },

//     {
//         id: 3,
//         content: 'Unlimited Public Projects',
//         important: true
//     },

//     {
//         id: 4,
//         content: 'Community Access',
//         important: true
//     },

//     {
//         id: 5,
//         content: 'Unlimited Private Projects',
//         important: false 
//     },

//     {
//         id: 6,
//         content: 'Dedicated Phone Support',
//         important: false
//     },

//     {
//         id: 7,
//         content: 'Free Subdomain',
//         important: false
//     },

//     {
//         id: 8,
//         content: 'Monthly Status Reports',
//         important: false
//     }
// ]



ReactDOM.createRoot(document.getElementById('root')).render( <
    App card1={cardsData}  / >
);