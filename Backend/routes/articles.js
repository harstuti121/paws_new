// const express = require('express');
// const router = express.Router();

// import r1 from '../assets/ra1.jpeg';
// import r2 from '../assets/ra2.jpeg';
// import r3 from '../assets/ra3.jpeg';
// import r4 from '../assets/ra3.jpeg';

// const articles = [
//     { 
//       id: 1, 
//       title: "How to Shelter Dogs in All Seasons", 
//       date: "09", 
//       month: "JULY 2024", 
//       para: "Providing proper shelter for dogs during extreme weather conditions is crucial. Learn how to keep them safe and comfortable all year round.", 
//       author: "Harstuti", 
//       image: r1 
//     },
//     { 
//       id: 2, 
//       title: "The Benefits of Adopting a Pet", 
//       date: "08", 
//       month: "JULY 2024", 
//       para: "Adopting a pet not only saves a life but also brings immense joy and companionship. Find out why adoption is the best option.", 
//       author: "Harstuti", 
//       image: r2 
//     },
//     { 
//       id: 3, 
//       title: "Choosing the Best Dog Food for Your Pet", 
//       date: "07", 
//       month: "JULY 2024", 
//       para: "From kibble to raw diets, discover the healthiest food choices for your furry friend to ensure a balanced and nutritious diet.", 
//       author: "Harstuti", 
//       image: r3 
//     },
//     { 
//       id: 4, 
//       title: "Essential Training Tips for New Dog Owners", 
//       date: "06", 
//       month: "JULY 2024", 
//       para: "Training your dog builds a strong bond and ensures good behavior. Explore the best techniques for teaching basic commands and manners.", 
//       author: "Harstuti", 
//       image: r4 
//     },
//   ];
//   router.get('/articles', (req, res) => {
//     res.json(articles);
//   });
  
//   module.exports = router;

// const express = require('express');
// const router = express.Router();
// const path = require('path');

// const r1 = path.join(__dirname, '../assets/ra1.jpeg');
// const r2 = path.join(__dirname, '../assets/ra2.jpeg');
// const r3 = path.join(__dirname, '../assets/ra3.jpeg');
// const r4 = path.join(__dirname, '../assets/ra4.jpeg');

// const articles = [
//     { 
//       id: 1, 
//       title: "How to Shelter Dogs in All Seasons", 
//       date: "09", 
//       month: "JULY 2024", 
//       para: "Providing proper shelter for dogs during extreme weather conditions is crucial. Learn how to keep them safe and comfortable all year round.", 
//       author: "Harstuti", 
//       image: r1 
//     },
//     { 
//       id: 2, 
//       title: "The Benefits of Adopting a Pet", 
//       date: "08", 
//       month: "JULY 2024", 
//       para: "Adopting a pet not only saves a life but also brings immense joy and companionship. Find out why adoption is the best option.", 
//       author: "Harstuti", 
//       image: r2 
//     },
//     { 
//       id: 3, 
//       title: "Choosing the Best Dog Food for Your Pet", 
//       date: "07", 
//       month: "JULY 2024", 
//       para: "From kibble to raw diets, discover the healthiest food choices for your furry friend to ensure a balanced and nutritious diet.", 
//       author: "Harstuti", 
//       image: r3 
//     },
//     { 
//       id: 4, 
//       title: "Essential Training Tips for New Dog Owners", 
//       date: "06", 
//       month: "JULY 2024", 
//       para: "Training your dog builds a strong bond and ensures good behavior. Explore the best techniques for teaching basic commands and manners.", 
//       author: "Harstuti", 
//       image: r4 
//     },
// ];

// router.get('/articles', (req, res) => {
//     res.json(articles);
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Article = require('../models/Article'); // Assuming you have an Article model

router.get('/articles', async (req, res) => {
    try {
        const articles = await Article.find().limit(20); // Fetch latest 20 articles
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching articles', error });
    }
});

module.exports = router;
