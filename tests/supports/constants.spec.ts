import axios from "axios";
import { baseurl,Accesstoken,api_key } from "../../axios/constant.spec";


// axios.post(`${baseurl}1/boards/`, { name: "Work started" }, {
//     params: {
//       key: api_key,
//       token: Accesstoken,
//     },
//   })
//   .then((response) => {
//     const { id, name } = response.data;
//     console.log(`Board Created: ID=${id}, Name=${name}`);
//   })
//   .catch((error) => {
//     console.error("Error creating board:", error);
//   });



export function createBoardAPI(): Promise<{ id: string; name: string }> {
    const randomBoardName = boardNames[Math.floor(Math.random() * boardNames.length)];
  
   
    console.log("Board name:", randomBoardName);
    console.log("Using key:", api_key);
    console.log("Using token:", Accesstoken);
  
    return axios
      .post(`${baseurl}1/boards/`, { name: randomBoardName }, {
        params: {
          key: api_key,
          token: Accesstoken,
        },
      })
      .then((response) => {
        const { id, name } = response.data;
        console.log(`Board Created: ID=${id}, Name=${name}`);
        return { id, name };
      })
      .catch((error) => {
        console.error("Error creating board:", error.response?.data || error.message);
        throw error;
      });
  }

  export function deleteBoardAPI(boardId: string): Promise<void> {
    return axios
      .delete(`${baseurl}1/boards/${boardId}`, {
        params: {
          key: api_key,
          token: Accesstoken,
        },
      })
      .then(() => {
        console.log(`Board with ID ${boardId} deleted successfully.`);
      })
      .catch((error) => {
        const errorMessage = error.response?.data || error.message;
        console.error("Error deleting board:", errorMessage);
        throw new Error("Failed to delete board: " + errorMessage);
      });
  }
  

  export const boardNames = [
    "Daily Planner",
    "Goal Tracker",
    "Reading List",
    "Budget & Expenses",
    "Fitness & Workout Plan",
    "Travel Bucket List",
    "Meal Planner",
    "Personal Journal",
    "Music Playlist Ideas",
    "Movies & TV Shows to Watch",
    "Task Management",
    "Project Roadmap",
    "Office Workflow",
    "Product Launch Plan",
    "Bug Tracking",
    "Meeting Notes & Agenda",
    "Sprint Planning",
    "Marketing Strategy",
    "Design & UX Ideas",
    "Brainstorming Board",
    "Team Goals & Achievements",
    "Collaboration Hub",
    "Important Links & Resources",
    "Event Planning",
    "Team Appreciation & Rewards",
    "Onboarding New Employees",
    "Work in Progress (WIP)",
    "Feedback & Suggestions",
    "Research & Development",
    "Announcements & Updates",
    "Backlog & Prioritization",
    "Feature Development",
    "Release Planning",
    "Bug Fixing",
    "Kanban Workflow",
    "Continuous Integration (CI/CD)",
    "Issues & Risks",
    "Product Management",
    "OKRs & KPIs",
    "DevOps & Infrastructure",
    "Birthday & Celebration Planning",
    "Favorite Recipes Collection",
    "Dream Car Wishlist",
    "Gaming Progress & Challenges",
    "Job Applications Tracker",
    "Places to Visit",
    "Home Renovation Ideas",
    "Skill Learning Tracker",
    "Creative Writing Ideas",
    "Podcast Episodes Planning"
  ];
  

