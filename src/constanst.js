import { faGithub, faLinkedin, faWordpress, faPor } from "@fortawesome/free-brands-svg-icons";

export const socials = [
    {
        icon: faGithub,
        url: "https://github.com/michaeltrinh7",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/michaeltrinh7/",
    },
    {
        icon: faWordpress,
        url: "https://michaeltrinh7.wordpress.com/",
    }
];

const userName = "Quoc Hoa";
export const headerInfo = {
    userName: userName,
    menus: [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "Projects",
            href: "#projects"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Contact",
            href: "mailto:quochoa15@hotmail.com"
        },
    ],
    getAvatar: () => require("./assets/avatar.png")
}

export const aboutMeInfo = {
    sectionName: "About Me",
    sectionDescription: "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology",
    detailHeader: "Get to know me!",
    detailDescription1: "With 9 years of experience in backend development using .NET technologies, coupled with 4 years of frontend experience with ReactJS, I have honed my skills to become a versatile full-stack developer. My passion lies in crafting efficient, scalable solutions that seamlessly integrate both frontend and backend components.",
    detailDescription2: "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.",
    contactLabel: "Contact",
    contactHref: "mailto:quochoa15@hotmail.com",
    skillsLabel: "My Skills",
    skills: ["HTML", "CSS", "Javascript", "React", "Stelve", "VueJS", "Angular", "Vite", "TypeScript", "tailwind", "shadcn/ui ", "lucid-react", ".NET", "NodeJS", "Python"]
}

export const landingInfo = {
    greeting: "Hey, I am Quoc Hoa",
    description: "A full-stack developer",
    projectSection: {
        name: "Projects",
        href: "#projects"
    },
    socials: socials
}

export const projectsInfo = {
    sectionName: "Projects",
    sectionDescription: "Here you will find some of the personal and clients projects that I created with each project containing its own case study",
    projects: [
        {
            title: "Todo list",
            description:`
                    <p>A to-do list application built with React. This app helps you keep track of your tasks efficiently.</p>
                    <h2>Technologies:</h2>
                    <ul>
                        <li>React</li>
                        <li>Share state between components using ContextAPI</li>
                        <li>HTML and CSS</li>
                        <li>Responsive layout</li>
                    </ul>
                    `,
            getImageSrc: () => require("./assets/images/project1.png"),
            projectDetail: "Case study",
            projectLink: "https://michaeltrinh7.wordpress.com/2024/03/15/todo-listbuilding-a-simple-to-do-list-app-with-react-choosing-the-right-state-management-approachtodo-list/"
        },
        {
            title: "Portfolio",
            description:`
                <p>A portfolio to show my skills and projects</p>
                <h2>Technologies:</h2>
                <ul>
                    <li>React</li>
                    <li>HTML and CSS</li>
                    <li>Responsive layout</li>
                </ul>
                `,
            getImageSrc: () => require("./assets/images/project2.png"),
            projectDetail: "Case study",
            projectLink: "https://michaeltrinh7.wordpress.com/2024/03/15/introducing-my-new-project-portfolio/"
        },
        {
            title: "Weather Application",
            description:
                `<h1>Project Description:</h1>
                <p>The Weather Application is a modern web application that provides users with comprehensive weather information
                    for cities around the world. It offers a user-friendly interface with intuitive components for easy navigation
                    and access to weather data.</p>
                <br/>

                <h2>Key Features:</h2>
                <ul>
                    <li><strong>City Search:</strong> Quickly search for weather information for any desired location.</li>
                    <li><strong>Detailed Forecast:</strong> Get detailed weather forecasts including temperature, humidity,
                        wind speed, and more.</li>
                    <li><strong>Visual Representation:</strong> View weather conditions visually with accompanying icons.</li>
                    <li><strong>Hourly Forecast:</strong> Display the weather forecast for the next 6 hours, including time,
                        weather conditions, and temperature.</li>
                    <li><strong>7-Day Outlook:</strong> Provide a detailed weather outlook for the next 7 days, including
                        current weather, temperature, precipitation, and wind speed.</li>
                </ul>
                <br/>

                <h2>Technologies Used:</h2>        
                <ul>
                    <li><strong>Vite:</strong> A modern build tool for efficient development.</li>
                    <li><strong>React and TypeScript:</strong> Building a robust and type-safe web application.</li>
                    <li><strong>OpenWeather API:</strong> Fetching accurate and up-to-date weather data.</li>
                    <li><strong>axios:</strong> Handling API requests seamlessly.</li>
                    <li><strong>luxon:</strong> Simplifying date and time manipulation.</li>
                    <li><strong>tailwind:</strong> Styling the application with a utility-first CSS framework.</li>
                    <li><strong>shadcn/ui and lucid-react:</strong> Enhancing user interface and user experience with UI component
                        libraries.</li>
                </ul>
                <br/>
                <p>This project combines modern technologies with a sleek design to deliver an intuitive and feature-rich weather application for users to stay informed about weather conditions worldwide.</p>`,
            getImageSrc: () => require("./assets/images/WeatherApp.png"),
            projectDetail: "Case study",
            projectLink: "https://michaeltrinh7.wordpress.com/2024/03/17/introducing-the-weather-application-your-ultimate-weather-companion-%f0%9f%8c%a6%ef%b8%8f%e2%98%80%ef%b8%8f%f0%9f%8c%a7%ef%b8%8f/"
        }
    ]
}

export const footerInfo = {
    userName: userName,
    description: "Portfolio",
    socialLabel: "Social",
    socials: socials
}
