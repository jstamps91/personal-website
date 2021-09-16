const type = [
  'Database', // 0
  'Language', // 1
  'Web Server', // 2
  'Javascript UI Library', // 3
  'Cloud Hosting',
  'CSS Pre-processor',
  'Operating System',
  'Platform as a Service', // 7
  'Framework (Full Stack)',
  'Realtime Backend/API',
  'Microframework (Backend)', //10
  'Version Control System',
  'Code Collaboration & VCS',
  'Integrated Development Environment',
  'Virtual Machine Platforms and containers',
  'Text Editor', //15
  'Infrastructure as a service',
  'Continuous Integration',
  'JS Build Tool/JS Task Runner',
  'Javascript Compiler', // 19
  'JS Testing Framework',
  'Project Management',
  'Group Chat & Notifications',
  'Self-Hosted Blogging / CMS', // 23
  'Query Languages',
  'JS MVC Framework',
  'Cloud Content Management System',
  'Command Language',
  'Templating Languages & Extensions',
  'Concurrency Framework',
  'Static Web Hosting', //30
  'JavaScript Framework Components', // 31,
  'Cross-Platform Mobile Development', // 32
  'Java Framework', 
]

const groups = [
  {
    title: 'Languages',
    items: [
      {
        url: 'https://www.javascript.com/',
        name: 'JavaScript',
        icon: 'javascript-original.svg',
        background: '#f0db4f',
        type: type[3],
        about: 'Lightweight, interpreted, object-oriented language with first-class functions',
      },
      {
        url: 'https://www.typescriptlang.org/',
        name: 'TypeScript',
        icon: 'typescript.svg',
        type: type[3],
        about: 'A superset of JavaScript that compiles to clean JavaScript output',
      },
      {
        url: 'https://www.java.com',
        name: 'Java',
        icon: 'java-original.svg',
        type: type[1],
        about:
          'Has imperative, object-oriented and generic programming features, while also providing the facilities for low level memory manipulation',
      },
      {
        url: 'https://www.python.org/',
        name: 'Python',
        icon: 'python-original.svg',
        type: type[1],
        about:
          'Python is a clear and powerful object-oriented programming language, comparable to Perl, Ruby, Scheme, or Java.',
      },
    ],
  },
  {
    title: 'Frameworks & Utilities',
    items: [
      {
        url: 'https://spring.io/',
        name: 'Spring',
        icon: 'spring-framework.svg',
        type: type[33],
        about:
          'Popular java framework focused on simplicity, speed, and productivity.',
      },
      {
        url: 'https://rxjs.dev/',
        name: 'RxJS',
        icon: 'rxjs.svg',
        type: type[29],
        about:
          'The Reactive Extensions for JavaScript is a library for reactive programming using Observables.',
      },
      {
        url: 'https://www.atlassian.com/software/jira',
        name: 'Jira',
        icon: 'jira.svg',
        type: type[20],
        about:
          'An issue tracking product developed by Atlassian that allows bug tracking and agile project management.',
      },
      {
        url: 'http://subversion.apache.org/',
        name: 'Subversion',
        icon: 'subversion.svg',
        type: type[20],
        about: 'Version Control System, also known as SVN',
      },
      {
        url: 'https://git-scm.com/',
        name: 'Git',
        icon: 'git.svg',
        type: type[13],
        about: 'Fast, scalable, distributed revision control system',
      },
      {
        url: 'https://webpack.js.org/',
        name: 'Webpack',
        icon: 'webpack-original.svg',
        type: type[18],
        about: 'A bundler for javascript and friends.',
      },
      {
        url: 'https://ag-grid.com/',
        name: 'AG-Grid',
        icon: 'ag-grid.svg',
        type: type[10],
        about: 'A feature rich datagrid designed for the major JavaScript Frameworks',
      },
      {
        url: 'https://www.netlify.com/',
        name: 'Netlify',
        icon: 'netlify.svg',
        type: type[30],
        about:
          'Build, deploy and host your static site or app with a drag and drop interface and automatic delpoys from GitHub or Bitbucket',
      },
      {
        url: 'https://github.com/',
        name: 'Github',
        icon: 'github.svg',
        background: 'white',
        type: type[12],
        about:
          'Powerful collaboration, review, and code management for open source and private development projects.',
      },
      {
        url: 'https://www.linux.com/',
        name: 'Linux',
        icon: 'linux-original.svg',
        type: type[6],
        about: 'An Open Source Operating System',
      },
      {
        url: 'https://code.visualstudio.com/',
        name: 'VSCode',
        icon: 'vscode-insiders.svg',
        type: type[15],
        about: 'Build and debug modern web and cloud applications.',
      },
      {
        url: 'https://visualstudio.microsoft.com/',
        name: 'Visual Studio',
        icon: 'visual-studio.svg',
        type: type[15],
        about: 'Full-featured IDE to code, debug, test, and deploy to any platform',
      },
    ],
  },
  {
    title: 'Frontend',
    items: [
      {
        url: 'https://reactjs.org/',
        name: 'React',
        icon: 'react-original.svg',
        background: '#1c1c1c',
        type: type[3],
        about: 'A JavaScript library for building user interfaces',
      },
      {
        url: 'https://redux.js.org/',
        name: 'Redux',
        icon: 'redux.svg',
        background: '#1c1c1c',
        type: type[3],
        about: 'Predictable state container for JavaScript apps',
      },
      {
        url: 'https://www.gatsbyjs.com/',
        name: 'Gatsby',
        icon: 'gatsby.svg',
        background: 'white',
        type: type[11],
        about: 'A Static Site Generator for React',
      },
      // {
      //   url: 'https://google.com',
      //   name: 'Next.js',
      //   icon: 'next.jslogo.svg',
      //   background: 'white',
      //   type: type[8],
      //   about: 'A small framework for server-rendered universal JavaScript apps',
      // },
      {
        url: 'https://angular.io/',
        name: 'AngularJS',
        icon: 'angularjs-original.svg',
        type: type[10],
        about: 'Manage content once, publish it anywhere',
      },
      // {
      //   url: 'https://google.com',
      //   name: 'Storybook',
      //   icon: 'storybook.svg',
      //   type: type[31],
      //   about: 'Build bulletproof UI components faster',
      // },
      {
        url: 'https://google.com',
        name: 'Styled Components',
        icon: 'styled-components.png',
        background: 'white',
        type: type[31],
        about:
          'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.',
      },
      // {
      //   url: 'https://reactjs.org',
      //   name: 'React Native',
      //   icon: 'react-original.svg',
      //   background: 'white',
      //   type: type[32],
      //   about: 'Learn once, write anywhere.',
      // },
    ],
  },
  {
    title: 'Backend',
    items: [
      {
        url: 'https://nodejs.org/',
        name: 'Node',
        icon: 'nodejs-original.svg',
        type: type[8],
        about:
          "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications",
      },
      {
        url: 'http://tomcat.apache.org/',
        name: 'Apache Tomcat',
        icon: 'apache-tomcat.svg',
        type: type[8],
        about:
          'Powers numerous large-scale, mission-critical web applications across a diverse range of industries and organizations',
      },
      // { 
      //   url: 'https://google.com', 
      //   name: 'Django', 
      //   icon: 'django-original.svg', 
      //   background: '#003a2b', 
      //   type: type[8], 
      //   about: "The Web framework for perfectionists with deadlines" 
      // },
      {
        url: 'https://www.mysql.com/',
        name: 'MySQL',
        icon: 'mysql-original-wordmark.svg',
        background: 'white',
        type: type[0],
        about: "The world's most popular open source database",
      },
      {
        url: 'https://developer.oracle.com/databases/',
        name: 'Oracle SQL Developer',
        icon: 'oracle-sql-dev.svg',
        type: type[0],
        about: 'The database for giant ideas',
      },
      {
        url: 'https://www.postgresql.org/',
        name: 'PostgreSQL',
        icon: 'postgresql-original.svg',
        type: type[0],
        about: 'A powerful, open source object-relational database system',
      },
      //{ url: 'https://google.com', name: 'Flask', icon: 'flask.jpg', background: 'white', type: type[10], about: "A microframework for Python based on Werkzeug, Jinja 2 and good intentions." },
      {
        url: 'https://graphql.org/',
        name: 'GraphQL',
        icon: 'graphql.svg',
        type: type[24],
        about: 'A data query language and runtime',
      },
      {
        url: 'https://www.postman.com/',
        name: 'Postman',
        icon: 'postman.svg',
        type: type[7],
        about: 'Platform for building, testing, and documentation of APIs',
      },
      // {
      //   url: 'https://google.com',
      //   name: 'Firebase',
      //   icon: 'firebase.png',
      //   background: '#039be6',
      //   type: type[9],
      //   about: 'The Realtime App Platform',
      // },
      // {
      //   url: 'https://serverless.com/',
      //   name: 'Serverless',
      //   icon: 'serverless.svg',
      //   background: '#1e1e1e',
      //   type: type[9],
      //   about: 'The most widely-adopted toolkit for building serverless applications',
      // },
    ],
  },
  {
    title: 'DevOps',
    items: [
      {
        url: 'https://www.docker.com/',
        name: 'Docker',
        icon: 'docker.svg',
        background: 'white',
        type: type[14],
        about: 'An open source project to pack, ship and run any application as a lightweight container',
      },
      {
        url: 'https://azure.microsoft.com/',
        name: 'Azure',
        icon: 'azure.svg',
        type: type[16],
      },
      {
        url: 'https://www.heroku.com',
        name: 'Heroku',
        icon: 'heroku.svg',
        type: type[7],
        about: 'Build, deliver, monitor and scale web apps and APIs with a trail blazing developer experience.',
      },
      {
        url: 'https://maven.apache.org/',
        name: 'Apache Maven',
        icon: 'apache-original-wordmark.svg',
        background: 'white',
        type: type[2],
      },
      {
        url: 'https://circleci.com',
        name: 'Circle CI',
        icon: 'circleci.svg',
        background: 'white',
        type: type[17],
        about: 'CircleCI’s continuous integration and delivery platform helps software teams rapidly release code with confidence.',
      },
      {
        url: 'https://google.com',
        name: 'Bash',
        icon: 'bash.svg',
        type: type[27],
        about: 'Bourne Again SHell.',
      },
    ],
  },
]

export default groups
