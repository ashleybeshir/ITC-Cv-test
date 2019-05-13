/* handler.js */
const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType,
    buildSchema 
  } = require('graphql')
  
  const {
      AddJob,
      GetJob,
      GetAllJobs,
      DeleteJob
  } = require('./JobRepository.js')
  
  var schema = buildSchema(`
    type Job {
      id: ID
      title: String
      department: String
      description: String
      location: String
      salary: String
    }  
    
    input JobInput {
      title: String
      department: String
      description: String
      location: String
      salary: String
    }
    
    type Mutation {
      addJob(job: JobInput): String
    }
    
    type Query {
      getAllJobs: [Job]
      getJob(id:Int): Job
      deleteJob(id:Int): String
    }
  `);
  
  var root = {
    getAllJobs: async () => {
      return  await GetAllJobs();
    },
    addJob: (input) => {
      return AddJob(input.job);
    },
    getJob: async (id) => {
      return await GetJob(id);
    },
    deleteJob: async (id) => {
      return await DeleteJob(id);
    }
  };
  
  module.exports.query = (event, context, callback) => {
      console.log(event);
     graphql(schema, event, root)
        .then(
          result => callback(null, {statusCode: 200, body: JSON.stringify(result)}),
          err => callback(err)
        )
  }