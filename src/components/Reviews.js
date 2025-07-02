import React, { useState, useEffect, useRef } from "react";
import { ImQuotesLeft } from "react-icons/im";

const styles = `
    .reviews-font-sans {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }
    .reviews-container {
        background-color: #F9FAFB;
        width: 100%;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    .reviews-wrapper {
        max-width: 80rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .reviews-title {
        font-size: 1.875rem;
        line-height: 2.25rem;
        font-weight: 700;
        text-align: center;
        color: #1F2937;
        letter-spacing: 0.05em;
        margin-bottom: 3rem;
    }
    .reviews-slider-outer {
        position: relative;
        display: flex;
        align-items: center;
    }
    .reviews-slider-arrow {
        position: absolute;
        z-index: 10;
        background-color: #FFFFFF;
        border-radius: 9999px;
        padding: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        cursor: pointer;
        transition: background-color 0.3s;
    }
    .reviews-slider-arrow:hover {
        background-color: #F3F4F6;
    }
    .reviews-slider-arrow-left {
        left: -1rem;
    }
    .reviews-slider-arrow-right {
        right: -1rem;
    }
    .reviews-slider-arrow-icon {
        height: 1.5rem;
        width: 1.5rem;
        color: #4B5563;
    }
    .reviews-slider-inner-wrapper {
        width: 100%;
        overflow: hidden;
    }
    .reviews-slider-track {
        display: flex;
        transition: transform 0.5s ease-out;
    }
    .reviews-slide-item {
        flex-shrink: 0;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .reviews-card {
        background-color: #FFFFFF;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        padding: 2rem;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 450px;
        cursor: pointer;
    }
    .reviews-card-organization {
        font-weight: 500;
        color: #6B7280;
        font-size: 1.5rem;
        line-height: 1.5rem;
        margin-bottom: 0.7rem;
        text-align: left;
        
    }

    

    .reviews-card-quote-icon {
        color: #8B5CF6; /* Purple color for the quote icon */
        width: 2rem;
        height: 2rem;
        margin-bottom: 0.75rem;
    }
    .reviews-card-text {
        color: #4B5563;
        font-size: 1rem;
        line-height: 1.625;
        margin-top: 0; /* Reset margin */
    }
    .reviews-card-author-section {
        display: flex;
        align-items: center;
        margin-top: 2rem;
    }
    .reviews-card-avatar {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 9999px;
        margin-right: 1rem;
        object-fit: cover;
    }
    .author-details {
        display: flex;
        flex-direction: column;
    }
    .author-name-container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .reviews-card-author-name {
        font-weight: 700;
        color: #1F2937;
        letter-spacing: 0.05em;
        font-size: 0.875rem;
        text-transform: capitalize;
    }
    .linkedin-icon {
        height: 1rem;
        width: 1rem;
        color: #0A66C2;
        transition: transform 0.2s;
    }
    .linkedin-icon:hover {
        transform: scale(1.1);
    }
    .reviews-card-author-title {
        color: #6B7280;
        font-size: 0.875rem;
        text-transform: capitalize;
    }
    .reviews-dots-container {
        text-align: center;
        margin-top: 3rem;
    }
    .reviews-dot {
        display: inline-block;
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 9999px;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        cursor: pointer;
        transition: background-color 0.3s;
        border: none;
        padding: 0;
    }
    .reviews-dot-inactive {
        background-color: #D1D5DB;
    }
    .reviews-dot-active {
        background-color: #374151;
    }

    .reviews-card:hover {
      background-color: #ad45f3;
    }
    .reviews-card:hover,
    .reviews-card:hover * {
      color: #fff !important;
    }
    .reviews-card:hover a .linkedin-icon {
      color: #fff !important;
    }
    .reviews-card:hover .reviews-card-avatar {
      border: 2px solid #fff;
    }

    .reviews-card:hover .reviews-card-quote-icon,
    .reviews-card:hover .reviews-card-quote-icon * {
      fill: #fff !important;
      color: #fff !important;
    }
    /* Responsive Media Queries */
    @media (min-width: 640px) {
        .reviews-container {
            padding-top: 6rem;
            padding-bottom: 6rem;
        }
        .reviews-wrapper {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        .reviews-slide-item {
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .reviews-card {
            min-height: 420px;
        }
    }
    @media (min-width: 768px) {
        .reviews-slider-arrow-left {
            left: -1.5rem;
        }
        .reviews-slider-arrow-right {
            right: -1.5rem;
        }
    }
    @media (min-width: 1024px) {
        .reviews-wrapper {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
`;

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="linkedin-icon"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
  </svg>
);

const reviewsData = [
  {
    name: "Saipriya s",
    organization: "Meenakshi College for women",
    title: "Student",
    quote:
      'I attended the "python" class and I found it incredibly helpful. The instructor explained the concepts clearly and I especially appreciated the practical exercises after each session. The pace of the course was well-balanced and the real-world examples made it easier to understand how to apply the concepts.',
    avatar: "",
    linkedin: "",
  },
  {
    name: "Sharanya Subramaniam",
    title: "Ceo & Casting Director ",
    organization: "Sharanya Spots Talent - Casting Company",
    quote:
      "Working with Krishna has been such a smooth and reassuring experience. He just gets what we're trying to say - and even better he brings it to life exactly how we imagine it. From our website to forms to behind-the-scenes tech fixes he's been a huge support. What we love most? His patience his curiosity and the fact that he's always one step ahead.",
    avatar: "",
    linkedin: "https://www.linkedin.com/in/sharanya-subramaniam-a63591253",
  },
  {
    name: "Roshan SK",
    title: "AI Engineer",
    organization: "DevRev",
    quote:
      "Krishna and I share a long history of solving complex problems through innovative solutions! I strongly believe in Krishna's ability to take ownership and get a project to completion. I have seen him invest his time thoroughly to ensure we go over all aspects of our engineering issues. I can entrust Krishna any day to build the next big thing!",
    avatar:
      "https://builder.prd.heyflow.com/dl/272eede09ff9ff1315ec9912db09686ad15f8317cd13699700f9de2a8fcd31ea",
    linkedin: "https://www.linkedin.com/in/skroshan",
  },
  {
    name: "Praveen Thirumurugan",
    title: "Associate product Manager",
    organization: "Oracle",
    quote:
      "Krishna has been the most reliable tech partner I've had across all my projects: from chatbots to complex product builds. He's equally strong in both frontend and backend which makes execution smoother and faster. No matter how tough the idea he finds a way to make it work. If I had to trust anyone with everything technical it would be him without second thought. On time trustworthy and all-in—all you'd want in a teammate.",
    avatar: "",
    linkedin: "https://www.linkedin.com/in/praveenthirumurugan/",
  },
  {
    name: "Surya jayaseelan",
    title: "MSC student business analytics",
    organization: "Aston University",
    quote:
      "I started as a complete beginner but Krishna's teaching style made all the difference. His visual explanations especially using OneNote live hand drawings really broke down complex concepts and showed how things work behind the scenes. Real life examples made it easy to connect the basics of Python and data visualization to hands on applications for my MSc project. I went from absolutely zero coding knowledge to being confident with the fundamentals.",
    avatar:
      "https://builder.prd.heyflow.com/dl/7e4cebd845f767d56f03a88035a23c96bb8ae23c5d6041124390f26a80f7cadb",
    linkedin: "https://linkedin.com/in/surya-prakash-jayaseelan-49ab99265",
  },
  {
    name: "Rithi Delani Seles",
    title: "Business analyst",
    organization: "Dedalus",
    quote:
      "Krishna has always been there for me since college from helping with my project work to teaching me Java SQL and Python. I got placed in a great company. He's been a true friend and guide through both my professional and personal lows. I am really grateful.",
    avatar: "",
    linkedin: "https://www.linkedin.com/in/delani-rithi-seles-735816213/",
  },
  {
    name: "Kanimozhi S",
    title: "Software developer",
    organization: "Dedalus",
    quote:
      "Big thanks to you for being the best mentor and friend I could ask for. From clearing my doubts in Java and Angular to prepping me for interviews your guidance made a huge difference. I genuinely couldn't have cracked this job without your support. Forever grateful!",
    avatar: "",
    linkedin: "https://www.linkedin.com/in/kanimozhi-sampath-7655201a5",
  },
];

const useViewportWidth = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return width;
};

const getInitials = (name) => {
  if (!name) return "??";
  const names = name.split(" ");
  if (names.length > 1 && names[names.length - 1]) {
    return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
  }
  return `${name.substring(0, 2)}`.toUpperCase();
};

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);
  const sliderInterval = 15000;
  const viewportWidth = useViewportWidth();

  const itemsVisible = viewportWidth < 768 ? 1 : viewportWidth < 1024 ? 2 : 3;
  const maxSlide =
    reviewsData.length > itemsVisible ? reviewsData.length - itemsVisible : 0;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, sliderInterval);
    return () => resetTimeout();
  }, [currentSlide, maxSlide]);

  const navigateSlide = (direction) => {
    let nextSlide;
    if (direction === "next") {
      nextSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
    } else {
      nextSlide = currentSlide === 0 ? maxSlide : currentSlide - 1;
    }
    setCurrentSlide(nextSlide);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const itemPercentageWidth = 100 / itemsVisible;

  return (
    <>
      <style>{styles}</style>
      <div id="testimonials" className="reviews-container reviews-font-sans">
        <div className="reviews-wrapper">
          <h2 className="reviews-title">WHAT PEOPLE SAY</h2>

          <div className="reviews-slider-outer">
            <button
              onClick={() => navigateSlide("prev")}
              className="reviews-slider-arrow reviews-slider-arrow-left"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="reviews-slider-arrow-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="reviews-slider-inner-wrapper">
              <div
                className="reviews-slider-track"
                style={{
                  transform: `translateX(-${
                    currentSlide * itemPercentageWidth
                  }%)`,
                }}
              >
                {reviewsData.map((review, index) => (
                  <div
                    className="reviews-slide-item"
                    style={{ width: `${itemPercentageWidth}%` }}
                    key={index}
                  >
                    <div className="reviews-card">
                      <div className="reviews-card-content">
                        <div className="reviews-card-organization">
                          {review.organization}
                        </div>
                        {/* <QuoteIcon /> */}
                        <ImQuotesLeft
                          fill="#ad45f3"
                          className="reviews-card-quote-icon"
                          size={30}
                          style={{ marginTop: "10px", marginBottom: "7px" }}
                        />
                        <p className="reviews-card-text">{review.quote}</p>
                      </div>
                      <div className="reviews-card-author-section">
                        <img
                          src={
                            review.avatar ||
                            `https://placehold.co/100x100/EFEFEF/333?text=${getInitials(
                              review.name
                            )}`
                          }
                          alt={review.name}
                          className="reviews-card-avatar"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/100x100/EFEFEF/333?text=${getInitials(
                              review.name
                            )}`;
                          }}
                        />
                        <div className="author-details">
                          <div className="author-name-container">
                            <p className="reviews-card-author-name">
                              {review.name}
                            </p>
                            {review.linkedin && (
                              <a
                                href={review.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${review.name}'s LinkedIn Profile`}
                              >
                                <LinkedInIcon />
                              </a>
                            )}
                          </div>
                          <p className="reviews-card-author-title">
                            {review.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigateSlide("next")}
              className="reviews-slider-arrow reviews-slider-arrow-right"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="reviews-slider-arrow-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="reviews-dots-container">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`reviews-dot ${
                  currentSlide === index
                    ? "reviews-dot-active"
                    : "reviews-dot-inactive"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default function App() {
  return <Reviews />;
}
