// electronic
import blog_1 from "@assets/img/blog/blog-1.jpg";
import blog_2 from "@assets/img/blog/blog-2.jpg";
import blog_3 from "@assets/img/blog/blog-3.jpg";
// fashion
import blog_4 from '@assets/img/blog/2/blog-1.jpg';
import blog_5 from '@assets/img/blog/2/blog-2.jpg';
import blog_6 from '@assets/img/blog/2/blog-3.jpg';
// blog postbox 
import blog_post_1 from '@assets/img/blog/blog-big-3.jpg';
import blog_post_2 from '@assets/img/blog/blog-big-2.jpg';
import blog_post_3 from '@assets/img/blog/blog-big-4.jpg';
import blog_post_4 from '@assets/img/blog/blog-big-5.jpg';
import blog_post_5 from '@assets/img/blog/blog-big-6.jpg';
// blog grid 
import blog_grid_1 from '@assets/img/blog/grid/blog-grid-1.jpg';
import blog_grid_2 from '@assets/img/blog/grid/blog-grid-2.jpg';
import blog_grid_3 from '@assets/img/blog/grid/blog-grid-3.jpg';
import blog_grid_4 from '@assets/img/blog/grid/blog-grid-4.jpg';
import blog_grid_5 from '@assets/img/blog/grid/blog-grid-5.jpg';
import blog_grid_6 from '@assets/img/blog/grid/blog-grid-6.jpg';
import blog_grid_7 from '@assets/img/blog/grid/blog-grid-7.jpg';
import blog_grid_8 from '@assets/img/blog/grid/blog-grid-8.jpg';
// list img 
import list_img_1 from '@assets/img/blog/grid/blog-grid-1.jpg';
import list_img_2 from '@assets/img/blog/grid/blog-grid-2.jpg';
import list_img_3 from '@assets/img/blog/grid/blog-grid-3.jpg';
import list_img_4 from '@assets/img/blog/grid/blog-grid-4.jpg';
import list_img_5 from '@assets/img/blog/grid/blog-grid-5.jpg';
import list_img_6 from '@assets/img/blog/grid/blog-grid-6.jpg';
import list_img_7 from '@assets/img/blog/grid/blog-grid-2.jpg';
import list_img_8 from '@assets/img/blog/grid/blog-grid-3.jpg';

const blogData = [
  {
    id: 1,
    img: blog_1,
    date: "14 January, 2023",
    author:'Mark Smith',
    title: "The Modern Art Clay Ceramics.",
    tags: ["Tablet", "News"],
    category:'electronics',
    comments:2,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "electronics",
  },
  {
    id: 2,
    img: blog_2,
    date: "18 February, 2023",
    author:'Naim Ahmed',
    title: "How clothes are linked to climate",
    tags: ["Monitor", "Technology"],
    category:'electronics',
    comments:4,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "electronics",
  },
  {
    id: 3,
    img: blog_3,
    date: "20 January, 2023",
    author:'Salim Rana',
    title: "The Sound Of Fashion: Malcolm",
    tags: ["Microphone", "Computer"],
    category:'electronics',
    comments:5,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "electronics",
  },
  // fashion blog
  {
    id: 4,
    img: blog_4,
    date: "20 July, 2023",
    author:'John Smith',
    title: "The 'Boomerang' Employees Returning After Quitting",
    tags: ["Fashion", "Lift Style","News"],
    category:'fashion',
    comments:6,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "fashion",
  },
  {
    id: 5,
    img: blog_5,
    date: "18 March, 2023",
    author:'John Smith',
    title: "Fast fashion: How clothes are linked to climate change",
    tags: ["Fashion", "Lift Style","News"],
    category:'fashion',
    comments:3,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "fashion",
  },
  {
    id: 6,
    img: blog_6,
    date: "15 February, 2023",
    author:'John Smith',
    title: "The Sound Of Fashion: Malcolm McLaren Words",
    tags: ["Fashion", "Lift Style","News"],
    category:'fashion',
    comments:8,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "fashion",
  },
  //postbox blog
  {
    id:7,
    img:blog_post_1,
    date:'July 21, 2023',
    author:'John Smith',
    comments:2,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'How to Clean Your Home Faster and More Efficiently',
    desc:' Discover practical shortcuts for deep-cleaning every room in your house without sacrificing quality. Learn how to prioritize high-traffic areas, choose multi-purpose, eco-friendly products, and create a streamlined schedule that keeps your space spotless in half the time.',
    blog:'blog-postbox'
  },
  {
    id:8,
    img:blog_post_2,
    date:'April 18, 2023',
    author:'Mark Smith',
    comments:5,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Four Ways a Clean Workplace Makes Employees Happy and Healthy',
    desc:'A tidy office isn’t just about appearance—it boosts morale, reduces  sick days, and improves focus. In this article, we share four easy strategies—from air-purifying plants to scheduled mini-cleans—that foster a healthier, more productive work environment.',
    video:true,
    video_id:'457mlqV1gzA',
    blog:'blog-postbox'
  },
  {
    id:9,
    date:'March 15, 2023',
    author:'Sushma Sharma',
    comments:8,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Only one thing is impossible for God: To find any sense in any copyright law on the planet.',
    desc:'Copyright rules can feel arbitrary—yet they shape creativity worldwide.  We break down the origins of key copyright concepts, reveal surprising loopholes, and explain how creators can protect their work without stifling innovation.',
    blockquote:true,
    blog:'blog-postbox'
  },
  {
    id:10,
    date:'January 20, 2023',
    author:'Salim Rana',
    comments:10,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Time for Spring Cleaning? Use These Tips From the Professionals',
    desc:'Spring’s here—time to refresh your home from top to bottom. We asked  professional organizers and cleaning experts for their go-to hacks: effective decluttering methods, green cleaning recipes, and easy  storage solutions that last all year long.',
    audio:true,
    audio_id:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    blog:'blog-postbox'
  },
  {
    id:11,
    slider:true,
    slider_images:[blog_post_3,blog_post_4,blog_post_5],
    date:'February 20, 2023',
    author:'Smith Mark',
    comments:12,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Time for Spring Cleaning? Use These Tips From the Professionals',
    desc:'Witness incredible home makeovers: from dusty corners to  gleaming counters. Our slide deck walks you through each step, highlights must-have tools, and shows how small changes can create a huge impact in any living space.',
    blog:'blog-postbox'
  },
  // blog grid data 
  {
    id:12,
    img:blog_grid_1,
    list_img:list_img_1,
    date:'January 8, 2023',
    author:'John Smith',
    comments:5,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Hiring the Right Sales Team at the Right Time',
    desc:'Learn how to build a stellar sales force by identifying key skills, crafting attractive job offers, and timing your hires to match your company’s growth phases for maximum impact.',
    blog:'blog-grid'
  },
  {
    id:13,
    img:blog_grid_2,
    list_img:list_img_2,
    date:'February 12, 2023',
    author:'Salim Rana',
    comments:0,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Fully Embrace the Return of 90s fashion',
    desc:'From oversized denim jackets to neon accessories, we dive into the  hottest 90s trends making a comeback and show you how to style them for a fresh, modern look.',
    blog:'blog-grid'
  },
  {
    id:14,
    img:blog_grid_3,
    list_img:list_img_3,
    date:'March 15, 2023',
    author:'John Smith',
    comments:12,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Exploring the English Countryside',
    desc:'Journey through rolling green hills, historic villages, and quaint  tea rooms as we uncover hidden gems and insider tips for your perfect rural escape.',
    blog:'blog-grid'
  },
  {
    id:15,
    img:blog_grid_4,
    list_img:list_img_4,
    date:'April 7, 2023',
    author:'John Smith',
    comments:8,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Here’s the First Valentino’s New Makeup Collection',
    desc:'Get an exclusive look at Valentino’s latest beauty launch, including  shade breakdowns, formula highlights, and the inspiration behind each luxurious piece. ',
    blog:'blog-grid'
  },
  {
    id:16,
    img:blog_grid_5,
    list_img:list_img_5,
    date:'May 2, 2023',
    author:'John Smith',
    comments:4,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Follow Your own Design process, whatever gets',
    desc:'Discover a flexible design workflow that adapts to any project:  from initial research and moodboarding to prototyping and final reviews, ensuring you stay creative and on schedule.',
    blog:'blog-grid'
  },
  {
    id:17,
    img:blog_grid_6,
    list_img:list_img_6,
    date:'April 5, 2023',
    author:'John Smith',
    comments:6,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Freelancer Days 2022, What’s new?',
    desc:' Catch up on the latest platforms, rates, and productivity tools  shaping the freelance landscape in 2022—plus tips to keep your business thriving.',
    blog:'blog-grid'
  },
  {
    id:18,
    img:blog_grid_7,
    list_img:list_img_7,
    date:'May 12, 2023',
    author:'John Smith',
    comments:6,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Hiring the Right Sales Team at the Right Time',
    desc:' Timing is everything when scaling your sales department. Learn how  to forecast hiring needs, attract top performers, and maintain momentum as your company grows.',
    blog:'blog-grid'
  },
  {
    id:19,
    img:blog_grid_8,
    list_img:list_img_8,
    date:'March 22, 2023',
    author:'John Smith',
    comments:15,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Quality Foods Requirments For Every Human Body’s',
    desc:'Explore the essential nutrients every person needs—from vitamins and  minerals to healthy fats—and learn how to build balanced meals that support lifelong health.',
    blog:'blog-grid'
  },
];

export default blogData;
