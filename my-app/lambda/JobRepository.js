var AWS = require('aws-sdk');

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
/*
if you use documentclient it will handle the type of the object for you. Instead of current implementation which you have to dig a level deeper to get item.
*/

module.exports.AddJob = (job) => {
    // for this use case . This random generator will work.
    let id = Math.floor(Math.random() * Math.floor(20000)).toString();
    let params = {
      TableName: "ItcJobs",
      Item: {
        'JobId' : {N: id.toString()},
        'Title' : {S: job.title},
        'Description' : {S: job.description},
        'Department': {S: job.department},
        'Location' : {S: job.location},
        'Salary' : {S: job.salary}
      }
    };
    
    ddb.putItem(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });
}

module.exports.GetJob = async (data) => {
  var params = {
    TableName: "ItcJobs",
    Key: {
      'JobId': {N: data.id.toString()}
    }
  };
  
  return new Promise((resolve, reject) => {
    ddb.getItem(params, function(err, data) {
      if (err) {
        console.log("Error", err);
        reject(err);
      } else {
        let item = data.Item;
        let job = {
            title: item.Title.S,
            department: item.Department.S,
            description: item.Description.S,
            location: item.Location.S,
            salary: item.Salary.S,
            id: item.JobId.N
        };
        resolve(job);
      }
    });
  });
}

/*this will only get jobs up to 1mb of data*/
module.exports.GetAllJobs = async () => {
  return new Promise((resolve, reject) => {
    const params = {
        TableName: "ItcJobs",
    };
    
    ddb.scan(params, function(err, data)
    {
      if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        reject(err);
    } else {
        let scannedJobs = [];
        
        data.Items.forEach(function(item) {
           scannedJobs.push({
            title: item.Title.S,
            department: item.Department.S,
            description: item.Description.S,
            location: item.Location.S,
            salary: item.Salary.S,
            id: item.JobId.N
           });
        });
        
        resolve(scannedJobs);
    }
    });
  });
}

module.exports.DeleteJob = async (id) => {
  return new Promise((resolve, reject) => {
    var params = {
      TableName:"ItcJobs",
      Key:{
          "JobId": {N: id.id.toString()},
      }
    };

    ddb.deleteItem(params, function(err, data) {
        if (err) {
            console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            reject(err);
        } else {
            console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
            resolve("succeeded");
        }
    });
  });
}
