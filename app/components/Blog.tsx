"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

const blogs = [
  {
    title: "Understanding React Hooks",
    summary: "An in-depth look at React hooks, why they are important, and how to use them effectively in modern React development.",
    image: "/path/to/your/featured-image1.jpg", // Replace with actual image paths
    read_more_link: "/blog/react-hooks", // Link to individual blog post
  },
  {
    title: "Building Scalable Applications with Next.js",
    summary: "This post covers the best practices for building scalable and efficient web applications with Next.js.",
    image: "/path/to/your/featured-image2.jpg",
    read_more_link: "/blog/nextjs-scalability",
  },
  {
    title: "Exploring TypeScript in Depth",
    summary: "A comprehensive guide on using TypeScript to improve the quality of your codebase and how to get started.",
    image: "/path/to/your/featured-image3.jpg",
    read_more_link: "/blog/typescript-guide",
  },
];

// BlogCard component to display individual blog post
const BlogCard = ({
  index,
  title,
  summary,
  image,
  read_more_link,
}: {
  index: number;
  title: string;
  summary: string;
  image: string;
  read_more_link: string;
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt="blog_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{summary}</p>
        </div>

        <div className="mt-4">
          <Link
            href={read_more_link}
            className="text-primary text-[14px] font-semibold"
          >
            Read more
          </Link>
        </div>
      </Tilt>
    </motion.div>
  );
};

// Blog page to display the list of blog posts
const Blog = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">My Blog</p>
        <h2 className="sectionHeadText">Blog Posts.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to my blog! Here you will find a collection of articles,
          insights, and tutorials. Each post is designed to share my knowledge
          and experience on various topics. Feel free to explore and learn more!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {blogs.map((blog, index) => (
          <BlogCard key={`blog-${index}`} index={index} {...blog} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
