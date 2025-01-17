import React from "react";

// BlogPreview Component
const Blog = ({ title, description, date, category, imageUrl, author }) => {
  return (
    <div className="flex gap-6">
      <div className="w-1/3">
        <img className="h-60 w-full object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="flex flex-col w-2/3">
        <p className="text-sm font-semibold text-red-600">{category}</p>
        <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
        <p className="text-base text-gray-600">{description}</p>
        <div className="flex items-center gap-4 mt-4">
          <img
            className="w-8 h-8 rounded-full"
            src="https://via.placeholder.com/150"
            alt={author}
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main BlogSection Component
const BlogSection = () => {
  const blogPosts = [
    {
      title: "UX Review Presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      date: "20 Jan 2024",
      category: "Design",
      imageUrl:
        "https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_image.png",
      author: "Olivia Rhye",
    },
    {
      title: "Migrating to Linear 101",
      description:
        "Learn how to move from traditional project management tools to Linear for smoother collaboration.",
      date: "19 Jan 2024",
      category: "Product",
      imageUrl:
        "https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_image_240x384.png",
      author: "John Doe",
    },
    // Add more blog posts here as needed
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold text-red-600">Our blog</h2>
        <h3 className="text-4xl font-semibold text-gray-900">
          Latest Blog Posts
        </h3>
        <p className="text-lg text-gray-600 mt-4">
          Tools and strategies modern teams need to help their companies grow.
        </p>
        <button className="mt-6 px-8 py-3 text-white bg-red-600 rounded-lg">
          View all posts
        </button>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogPreview key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
