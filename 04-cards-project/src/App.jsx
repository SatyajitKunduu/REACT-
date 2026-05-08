import React from "react";
import Card from "./components/card";

const App = () => {
  const jobOpenings = [
    {
      brandlogo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
      nameOfCompany: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Bangalore, India",
    },
    {
      brandlogo: "https://cdn-icons-png.flaticon.com/128/10096/10096351.png",
      nameOfCompany: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$68/hr",
      location: "Hyderabad, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/apple/000000",
      nameOfCompany: "Apple",
      datePosted: "1 week ago",
      post: "iOS Engineer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$62/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/netflix/E50914",
      nameOfCompany: "Netflix",
      datePosted: "10 days ago",
      post: "Streaming Platform Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Pune, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/google/4285F4",
      nameOfCompany: "Google",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$70/hr",
      location: "Bangalore, India",
    },
    {
      brandlogo: "https://cdn-icons-png.flaticon.com/128/732/732221.png",
      nameOfCompany: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$78/hr",
      location: "Noida, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/nvidia/76B900",
      nameOfCompany: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$90/hr",
      location: "Chennai, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/tesla/CC0000",
      nameOfCompany: "Tesla",
      datePosted: "8 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Hyderabad, India",
    },
    {
      brandlogo: "https://cdn-icons-png.flaticon.com/128/15568/15568930.png",
      nameOfCompany: "OpenAI",
      datePosted: "12 days ago",
      post: "AI Product Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$110/hr",
      location: "Remote, India",
    },
    {
      brandlogo: "https://cdn-icons-png.flaticon.com/128/888/888835.png",
      nameOfCompany: "Adobe",
      datePosted: "9 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Delhi, India",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (elem,idx) {
        return ( <div key={idx}>
          <Card
            Company={elem.nameOfCompany}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            brandlogo={elem.brandlogo}
            dateposted={elem.datePosted}
            location={elem.location}
          />
          </div>
        );
      })}
    </div>
  );
};

export default App;