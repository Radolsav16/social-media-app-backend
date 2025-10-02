import { Router } from "express";

const homeController = Router();


homeController.get('/',(req,res)=>{
    const trendingTopics = [];
    const suggestedUsers = [];
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


export default homeController;