/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Suresh Hemantha",
  title: "Hi all, I'm Suresh",
  subTitle: emoji(
    "A passionate Full Quality Assuarance Engineer 🚀 having an experience of Testing Quality applications,Maintaining Applications with Various Testing Tools Such As Selenium"
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1Ri6VCOCr9tjNVQmEjIVu4b5r3cmFpmB7?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SureshHemantha",
  linkedin: "https://www.linkedin.com/in/suresh-hemantha/",
  gmail: "sureshhemantha35@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL QUALITY ASSUARANCE ENGINEER WHO WANTS TO EXPLORE EVERY TESTING ENVIRONMENTS",
  skills: [
    emoji(
      "⚡  Managing & monitoring system performance and ensuring reliability and availability."
    ),
    emoji("⚡ Installing, configuring and maintaining operating systems, application software"),
    emoji(
      "⚡ Anticipating & troubleshooting systems related issues"
    ),
  
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sri Lanka Institute of Information Technology",
      logo: require("./assets/images/SLIIT_Logo_Crest.png"),
      subHeader: "Bsc.(Hons) Information Technology | specialization in Information Technology",
      duration: " 2020 -  2024",
      desc: "The largest IT degree awarding institute in Sri Lanka in the field of Information Technology, ...",
      descBullets: [
        
      ]
    },
    {
      schoolName: "Kumbukgete Central College",
      logo: require("./assets/images/KCC.png"),
      subHeader: "Advanced Level",
      duration: "2018",
      desc: "Advanced Level = ICT - S pass, Science For Technology - S pass, Engineering Technology - S pass ",
     
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Testing", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Maintaining",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Information Technology Student",
      company: "SLIIT",
      companylogo: require("./assets/images/SLIIT_Logo_Crest.png"),
      date: "2020 – Present",
      desc: "The largest IT degree awarding institute in Sri Lanka in the field of Information Technology, ...",
     
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Health care.jpeg"),
      projectName: "Suwa Sewana",
      projectDesc: "Health Care Channeling System",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/SureshHemantha/Health-care-app.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/eagle.jpeg"),
      projectName: "Eagle Eye Bookshop",
      projectDesc: "We are non-profitable Organization. ADs Free Simple to Handle.",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/SureshHemantha/Eagle-Eye-Bookshop.git"
        }
      ]
    },
    {
      image: require("./assets/images/voting.jpeg"),
      projectName: "Online Voting System",
      projectDesc: "Created Using HTML CSS PHP  ",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/SureshHemantha/Online-Voting-Website.git"
        }
      ]
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://rusiruavb.medium.com/the-concept-behind-the-redux-d4b3b71c0d9c",
      title: "The concept behind the Redux",
      description:
        "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark."
    },
    {
      url: "https://rusiruavb.medium.com/top-3-programming-languages-you-should-learn-in-2021-5cb84d1352e8",
      title: "Sequelize API for Node JS",
      description:
        "Sequelize is a promise-based Node JS Object Relational Mapping (ORM) for databases like MySQL, MSSQL, Postgres and SQLite. Sequelize follows Semantic Versioning and support Node JS version 10 and above."
    },
    {
      url: "https://rusiruavb.medium.com/sequelize-api-for-node-js-87e937f684e1",
      title: "Top 3 Programming Languages you should learn in 2021",
      description:
        "programming language is a notation for writing programs, which are specifications to a computer or algorithm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
     
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "0713380178",
  email_address: "sureshhemantha35@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
