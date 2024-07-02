export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Backend Developer",
		icon: "/web.webp",
	},
	{
		title: "Data Science",
		icon: "/mobile.webp",
	},
	{
		title: "Data Analytics",
		icon: "/backend.webp",
	},
	{
		title: "Machine Learning",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/python.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/flask.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/pgsql.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/postman.webp",
	},
	{
		name: "React JS",
		icon: "/tech/django.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/tensorflow.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/opencv.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/github.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/css.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/html.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/aws.webp",
	},
];

const experiences = [
	{
		title: "Software Engineer",
		company_name: "Cloud1 Software India Pvt Ltd",
		icon: "/company/avm.webp",
		iconBg: "#383E56",
		date: "2024 -  2024",
		points: [
			"Analyzing the needs of customer in a website.",
		],
	},
	{
		title: "Software Engineer",
		company_name: "Delixus Software India Pvt Ltd",
		icon: "/company/avm.webp",
		iconBg: "#E6DEDD",
		date: "2021 - 2023",
		points: [
			"Led the development of Ethereum based Vulnerability",
			"Management System to identify and remediate vulnerabilities in smart contract.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Sourav Kumar",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/sourav-kumar-108",
	},
	{
		id: 2,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Sourav Kumar",
		image: "/socialmedia/portfolio.svg",
		link: "https://omthecreator.netlify.app/",
	},
	{
		id: 3,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Sourav Kumar",
		image: "/tech/github.webp",
		link: "https://github.com/KumarSourav391",
	},
];

const projects = [
	{
		name: "BlockChainSentry",
		description:
			"Ethereum-based Vulnerability Management System that scans and pinpoints vulnerabilities in Smart Contracts and provides guidance on remedial actions",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "Flask",
				color: "pink-text-gradient",
			},
			{
				name: "PostgreSQL",
				color: "orange-text-gradient",
			},
		],
		image: "/project/bcs.webp",
		source_code_link:
			"",
		netlify_link: "",
	},
	{
		name: "Gender Wise face Counting",
		description:
			"Implemented a system for face detection and counting using Python, Tensorflow, openCV and Numpy.",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "Image Processing",
				color: "orange-text-gradient",
			},
			{
				name: "Tensorflow",
				color: "green-text-gradient",
			},
			
		],
		image: "/project/gwfc.webp",
		source_code_link: "https://github.com/KumarSourav391/Gender_wise_face_Counting",
		netlify_link: "",
	},
	{
		name: "Virtual Shopping Mall",
		description:
			"Developed a Python and Django based application that enabled customers to shop virtually from a mall and make purchase with secure payment option from the comfort of there home.",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "Django",
				color: "green-text-gradient",
			},
			{
				name: "sqlite3",
				color: "green-text-gradient",
			},
		],
		image: "/project/vsm.webp",
		source_code_link: "https://github.com/KumarSourav391/Virtual_Shoping_Mall",
		netlify_link: "",
	},
];

export { services, technologies, experiences, testimonials, projects };
