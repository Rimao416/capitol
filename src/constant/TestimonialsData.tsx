import User_1 from "../assets/user_1.jpg";
import User_2 from "../assets/user_2.jpg";
import User_3 from "../assets/user_3.jpg";
import User_4 from "../assets/user_4.jpg";
import User_5 from "../assets/user_5.jpg";
import User_6 from "../assets/user_6.jpg";
import User_7 from "../assets/user_7.jpg";
import User_8 from "../assets/user_8.jpg";

export interface TestimonialDataInterface {
    name: string;
    job: string;
    image: string;
}

export const testimonialsData: TestimonialDataInterface[] = [
    {
        name: "Morgan",
        job: "Manager",
        image: User_1
    },
    {
        name: "Sophie",
        job: "Graphic Designer",
        image: User_2
    },
    {
        name: "Lucas",
        job: "Software Engineer",
        image: User_3
    },
    {
        name: "Emma",
        job: "Marketing Specialist",
        image: User_4
    },
    {
        name: "Liam",
        job: "Financial Analyst",
        image: User_5
    },
    {
        name: "Chloe",
        job: "Project Manager",
        image: User_6
    },
    {
        name: "Noah",
        job: "Product Designer",
        image: User_7
    },
    {
        name: "Olivia",
        job: "HR Consultant",
        image: User_8
    }
];
