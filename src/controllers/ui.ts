import { Router } from "express";

const uiController = Router();


uiController.get('/',(req,res)=>{
    const trendingTopics = [
  {
    id: 1,
    name: "#NextJS",
    posts: 1820,
    description: "The React framework for production-grade web apps.",
  },
  {
    id: 2,
    name: "#AI",
    posts: 2450,
    description: "Discussions about artificial intelligence and machine learning.",
  },
  {
    id: 3,
    name: "#WebDesign",
    posts: 975,
    description: "Creative design inspiration and front-end development trends.",
  },
];

    const suggestedUsers = [
  {
    id: 1,
    name: "Ava Thompson",
    username: "@avacodes",
    bio: "Frontend engineer & design systems enthusiast.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    isVerified: true,
  },
  {
    id: 2,
    name: "Leo Martin",
    username: "@leoml",
    bio: "Building AI tools that make life easier. 🚀",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    isVerified: false,
  },
  {
    id: 3,
    name: "Mina Patel",
    username: "@minapatel",
    bio: "Product designer exploring creativity & accessibility.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    isVerified: true,
  },
  {
    id: 4,
    name: "Noah Kim",
    username: "@noahdev",
    bio: "Full-stack dev. TypeScript. Next.js. Open Source ❤️",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    isVerified: false,
  },
  {
    id: 5,
    name: "Sofia Rossi",
    username: "@sofiarossi",
    bio: "Writer. Tech lover. Sharing startup journeys.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    isVerified: true,
  },
];

    const title = 'Welcome to Social';
    const subTitle = 'Connect with friends, share moments, and explore communities.';
    const buttonsTexts = ['Get Started','Log in'];
    const features = [
    {
      id: 1,
      icon: 'users',
      title: "Connect with Friends",
      description: "Stay in touch and build meaningful connections.",
    },
    {
      id: 2,
      icon: 'message',
      title: "Share Your Thoughts",
      description: "Post updates, photos, and ideas with your community.",
    },
    {
      id: 3,
      icon:'discover',
      title: "Discover Content",
      description: "Explore trending topics, communities, and new people.",
    },
    {
      id: 4,
      icon: 'shield',
      title: "Secure & Private",
      description: "Your data is safe with us, built with privacy in mind.",
    },
    ];
    const callToAction = {
        heading:'Join our community today',
        text:'Share your thoughts, connect with people, and explore new opportunities.',
        buttons:['Sign Up','Sign In']
    }

    const testimonials = [
    {
      id: 1,
      name: "Emily Carter",
      username: "@emily",
      avatar: "https://i.pravatar.cc/60?img=5",
      quote:
        "This platform helped me reconnect with old friends and discover amazing new communities.",
    },
    {
      id: 2,
      name: "Daniel Kim",
      username: "@daniel",
      avatar: "https://i.pravatar.cc/60?img=8",
      quote:
        "I love how simple and modern the interface is. Sharing posts has never been easier!",
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      username: "@sophia",
      avatar: "https://i.pravatar.cc/60?img=12",
      quote:
        "Privacy is a big deal for me, and I feel secure using this app. Highly recommended!",
    },
    ];

    const data = {
        trendingTopics,
        suggestedUsers,
        title,
        subTitle,
        buttonsTexts,
        features,
        callToAction,
        testimonials
    }

    res.send(JSON.stringify(data));
})


export default uiController;