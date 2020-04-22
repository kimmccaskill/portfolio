export const projectData = [
  {
    path: 'ticket-cloud',
    title: 'Ticket Cloud',
    githubLink: 'https://github.com/kimmccaskill/tickets',
    languages: 'JavaScript | React | Redux | HTML/CSS | Jest/Enzyme',
    overview: 'This application is a ticket tracking app for keeping up with events that have tickets going on sale soon.  The user has the option to see which events are coming up soon, save them, search for events by name, and see what events are currently selling tickets.',
    wins: [
      'Successfully diving into TicketMaster API docs to create a helpful app for my own benefit as well as friends.',
      'Having saved events persist through refresh. Local Storage was an early lesson in my time at Turing but came in handy here!',
      'Testing all reducers and actions created from Redux functionality'
    ],
    challenges: [
      'First major API not built by instructors led to unfamiliar documentation and challenges navigating data.'
    ],
    images: [
      {
        link: 'https://user-images.githubusercontent.com/54483332/75728092-0b2b4b00-5ca4-11ea-8923-6089f497afa8.png',
      }
      
    ]
  },
  {
    path: 'ateball',
    title: 'Hangry Ateball',
    githubLink: 'https://github.com/hangry-ateball/hangry-ateball-fe',
    languages: 'React Native | Expo | Cypress',
    overview: 'This app replicates the future-deciding 8 Ball by finding a nearby restaurant for you! You can decide what kind of food (or leave it up to fate) as well as cost and if you want to walk or drive and the app will do the rest for you. From the results screen, you can easily open maps to navigate to the restaurant or send the information to your friends via text with the click of a button. It\'s munch time. Where will you be?',
    wins: [
     'Achieved MVP with extensions before deadline',
     'Successful workflow and communication between FE and BE teams',
     'We made an app we would actually use!'
    ],
    challenges: [
     'Learning React Native and technologies along with it like Expo and use of simulators',
     'Using new testing framework, Cypress',
     'COVID-19 impacts including remote work and affecting live restaurant data'
    ],
    images: [
     {
       link: 'https://user-images.githubusercontent.com/54483332/79593176-4dfc8300-8098-11ea-9d4c-51b95f6af645.gif',
       height: '700px',
       width: '350px'
     }
    ]
  },
  {
    path: 'blucifer-bnb',
    title: 'Blucifer BNB',
    githubLink: 'https://github.com/kimmccaskill/bnb',
    languages: 'JavaScript | React | HTML/CSS | Jest/Enzyme ',
    overview: 'We utilize an external API that houses data about different areas of Denver and associated rentals available in those areas. The user has ability to log in, search through different areas with descriptions, check listings in each area with details of each listing, and \'favorite\' a listing to have all favorited listings show on a seperate page',
    wins: [
     'Building functional single-page application with React and testing all components',
     'Getting SOLID MVP through use of iterations and project board'
    ],
    challenges: [
     'Learning to test some asynchronous code with Jest/Enzyme',
     'Dynamic React Router intricacies',
     'Workflow with some remote days due to inclement weather'
    ],
    images: [
      {
        link: 'https://user-images.githubusercontent.com/54483332/74290011-d6078a80-4ced-11ea-9e3a-7ff7680cf3df.png'
      }
    ]
  }
]

// Template : 
// {
//   path: '',
//   title: '',
//   githubLink: '',
//   languages: '',
//   overview: '',
//   wins: [
//    ''
//   ],
//   challenges: [
//    ''
//   ],
//   images: [
//    ''
//   ]
// }
