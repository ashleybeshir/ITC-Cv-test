
import Axios from "axios";

/*
you will have to add the lambda part yourself if you want to use lambda with it. (the code for the lambda should be in same got repisitory)
Currently set it up to use local array.
*/ 
const tempJobs = [
  {
    title: "Job 1", 
    department: "development",
    description: "Sony laptops are among the most well known laptops on today’s market. Sony is a name that over time has established itself as creating a solid product with a stellar reputation. In addition to all the good press that Sony has, Sony is known for making the best ‘small’ laptops. This means that they pack a ton of features into a much smaller packet and do it better than most laptop companies around. If you are in the market for a laptop it makes perfect sense to look aro….",
    Location: "Manchester United Kingdom",
    salary: "26,000"
  },
  {
    title: "Job 2", 
    department: "development",
    description: "Sony laptops are among the most well known laptops on today’s market. Sony is a name that over time has established itself as creating a solid product with a stellar reputation. In addition to all the good press that Sony has, Sony is known for making the best ‘small’ laptops. This means that they pack a ton of features into a much smaller packet and do it better than most laptop companies around. If you are in the market for a laptop it makes perfect sense to look aro….",
    Location: "Manchester United Kingdom",
    salary: "28,000"
  }
];

export const GetJobs = async () => {
    
  return tempJobs;
};

export const AddJob = async (job) => {
  tempJobs.push(job);
}

