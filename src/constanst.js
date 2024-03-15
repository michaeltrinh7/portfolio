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
    skills: ["HTML", "CSS", "Javascript", "React", "Stelve", "VueJS", "Angular", ".NET", "NodeJS", "Python"]
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
            description:
                "A to-do list application built with React. This app helps you keep track of your tasks efficiently.",
            getImageSrc: () => require("./assets/images/project1.png"),
            projectDetail: "Case study",
            projectLink: "https://michaeltrinh7.wordpress.com/2024/03/15/todo-listbuilding-a-simple-to-do-list-app-with-react-choosing-the-right-state-management-approachtodo-list/"
        },
        {
            title: "Portfolio",
            description:
                "A portfolio to show my skills and projects",
            getImageSrc: () => require("./assets/images/project2.png"),
            projectDetail: "Case study",
            projectLink: "https://michaeltrinh7.wordpress.com/2024/03/15/introducing-my-new-project-portfolio/"
        }
    ]
}

export const footerInfo = {
    userName: userName,
    description: "Portfolio",
    socialLabel: "Social",
    socials: socials
}
