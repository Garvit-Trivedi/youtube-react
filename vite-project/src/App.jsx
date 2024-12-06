import React from "react";
import "./App.css";

const App = () => {
  const categories = [
    "All", "Cook Studio", "UX", "Case Study", "Music", 
    "Bangla Lofi", "Tour", "Saintmartin", "Tech", 
    "iPhone 13", "User Interface Design", "Computer"
  ];

  const videos = [
    {
      id: 1,
      title: "Bulbuli | Coke Studio Bangla",
      channel: "Coke Studio Bangla",
      views: "1.5M views",
      time: "2 days ago",
      thumbnail: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
    },
    {
      id: 2,
      title: "Infinix Note 12 : AMOLED",
      channel: "ATC Android ToTo",
      views: "4.2M views",
      time: "2 days ago",
      thumbnail: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
      id: 3,
      title: "Infinix Note 12 : AMOLED",
      channel: "ATC Android ToTo",
      views: "4.2M views",
      time: "2 days ago",
      thumbnail: "https://b83eeb945e2915539af8.ucr.io/-/quality/best/https://d1qwl4ymp6qhug.cloudfront.net/Images%20for%20blog/10%20Tools%20for%20Making%20and%20Editing%20Videos/PowerDirector%20365.png"
    },
    {
      id: 4,
      title: "Infinix Note 12 : AMOLED",
      channel: "ATC Android ToTo",
      views: "4.2M views",
      time: "2 days ago",
      thumbnail: "https://media.licdn.com/dms/image/v2/C4D12AQEzw0IcXApcOg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1607879121397?e=2147483647&v=beta&t=Ea5CbB76fuAhRwzhZmP8fdPXFKNO3Tjb2VPQILxopzg"
    },
    {
      id: 5,
      title: "Infinix Note 12 : AMOLED",
      channel: "ATC Android ToTo",
      views: "4.2M views",
      time: "2 days ago",
      thumbnail: "https://www.ndash.com/wp-content/uploads/2020/07/Have-you-optimized-your-content-1024x536.png"
    },
    {
      id: 6,
      title: "Infinix Note 12 : AMOLED",
      channel: "ATC Android ToTo",
      views: "4.2M views",
      time: "2 days ago",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s"
    },
    {
      id: 7,
      title: "Infinix Note 12 : AMOLED",
      channel: "ATC Android ToTo",
      views: "4.2M views",
      time: "2 days ago",
      thumbnail: "https://pandabloggers.com/wp-content/uploads/Types-of-Interactive-Content-which-You-can-use-in-your-blog.jpg"
    },
    {
      id: 8,
      title: "Infinix Note 12 : AMOLED",
      channel: "ATC Android ToTo",
      views: "4.2M views",
      time: "2 days ago",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s"
    },
    
  ];


  return (
    <div className="youtube-clone">
  
      <aside className="sidebar">
        <div className="logo">YouTube</div>
        <nav className="menu">
          <ul>
            <li> <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt="" className="hello" /> Home</li>
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" alt=""  className="hello"/> Explore</li>
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" alt=""  className="hello"/> Shorts</li>
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" alt=""  className="hello" /> Subscriptions</li>
            <hr />
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" alt=""  className="hello"/> Library</li>
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" alt=""  className="hello"/> History</li>
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" alt=""  className="hello"/> Your Videos</li>
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" alt=""  className="hello"/> Watch Later</li>
            <li> <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" alt=""  className="hello"/> Liked Videos</li>
            <hr />
            <li>Subscriptions</li>
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" alt=""  className="hello"/> Nadir On The Go</li>
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" alt=""  className="hello" /> Coke Studio Bangla</li>
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" alt=""  className="hello"/> MKHBD</li>
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" alt="" className="hello"/> Figma</li>
            <li><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" alt=""  className="hello" /> ATC Android ToTo</li>
          </ul>
        </nav>
      </aside>

      
      <div className="navbar">
        <div className="navbar-logo">
          <img 
            src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Youtube%20logo.png" 
            alt="YouTube logo" 
            className="logo" 
          />
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="navbar-icons">
          <button className="navbar-icon"><i className="fas fa-video"></i></button>
          <button className="navbar-icon"><i className="fas fa-bell"></i></button>
          <button className="navbar-icon"><i className="fas fa-th"></i></button>
          <div className="profile-icon">
            <img 
              src="https://www.befunky.com/images/wp/wp-2015-04-Update_SM_Pic_Feature_Image.png?auto=avif,webp&format=jpg&width=1136&crop=16:9" 
              alt="User profile" 
              className="profile-img"
            />
          </div>
        </div>
      </div>

  
      <div className="main">
    
        <div className="top-nav">
          <div className="categories">
            {categories.map((category, index) => (
              <span key={index}>{category}</span>
            ))}
          </div>
        </div>

  
        <div className="video-grid">
          {videos.map(video => (
            <div className="video-card" key={video.id}>
              <img src={video.thumbnail} alt={video.title} className="thumbnail" />
              <div className="info">
                <h4>{video.title}</h4>
                <p>{video.channel}</p>
                <p>{`${video.views} • ${video.time}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
