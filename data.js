// users
db.users.insertMany([
    {
        "user_id":"1",
        "name":"dinesh",
        "email":"dinesh@gmail.com",
    },
    {
        "user_id":"2",
        "name":"bhuvanesh",
        "email":"bhuvanesh@gmail.com",
    },
    {
        "user_id":"3",
        "name":"sai",
        "email":"sai@gmail.com",
    },
    {
        "user_id":"4",
        "name":"kavin",
        "email":"kavin@gmail.com",
    },
    {
        "user_id":"5",
        "name":"kannan",
        "email":"kannan@gmail.com",
    }
])

// codekata

db.codekata.insertMany([
    {
      "codekata_id":"1",
      "problems_solved":206
    },
    {
        "codekata_id":"2",
        "problems_solved":204
      },
      {
        "codekata_id":"3",
        "problems_solved":180
      },
      {
        "codekata_id":"4",
        "problems_solved":190
      },
      {
        "codekata_id":"5",
        "problems_solved":195
      }
])

// attendance

db.attendance.insertMany([
    {
        "user_id":"1",
        "attendance":"present"
    },
    {
        "user_id":"2",
        "attendance":"present"
    },
    {
        "user_id":"3",
        "attendance":"absent "
    },
    {
        "user_id":"4",
        "attendance":"absent "
    },
    {
        "user_id":"5",
        "attendance":"present"
    }
])

// topics

db.topics.insertMany([
    {
        "topic_id":"1",
        "topic_name":"javascript",
        "topic_date":new Date("2020-10-07")
    },
    {
        "topic_id":"2",
        "topic_name":"html",
        "topic_date":new Date("2020-10-20")
    },
    {
        "topic_id":"3",
        "topic_name":"css",
        "topic_date":new Date("2020-10-30")
    },
    {
        "topic_id":"4",
        "topic_name":"dom",
        "topic_date":new Date("2020-11-15")
    },
    {
        "topic_id":"5",
        "topic_name":"react",
        "topic_date":new Date("2020-11-28")
    }
])

// tasks

db.tasks.insertMany([
    {
        "user_id": "1",
        "task_name": "youtube",
        "given_date": new Date("2020-10-15"),
        "submittion_date": new Date("2020-10-16"),
    },
    {
        "user_id": "2",
        "task_name": "calculator app",
        "given_date": new Date("2020-10-17"),
        "submittion_date": new Date("2020-10-19"),
    },
    {
        "user_id": "3",
        "task_name": "shapping app",
        "given_date": new Date("2020-11-18"),
        "submittion_date": new Date("2020-11-20"),
    },
    {
        "user_id": "4",
        "task_name": "tic tac toe app",
        "given_date": new Date("2020-11-13"),
        "submittion_date": new Date("2020-11-15"),
    },
    {
        "user_id": "5",
        "task_name": "dashboard app",
        "given_date": new Date("2020-10-15"),
        "submittion_date": new Date("2020-10-17"),
    }
])

// company drives

db.company_drives.insertMany([
    {
        "company_drives_id":"1",
        "user_id":"1",
        "company_name":"HCL",
        "date":new Date("2020-10-15"),
    },
    {
        "company_drives_id":"2",
        "user_id":"2",
        "company_name":"INFOSYS",
        "date":new Date("2020-10-14"),
    },
    {
        "company_drives_id":"3",
        "user_id":"3",
        "company_name":"NOKIA",
        "date":new Date("2020-10-20"),
    },
    {
        "company_drives_id":"4",
        "user_id":"4",
        "company_name":"GOOGLE",
        "date":new Date("2020-10-25"),
    },
    {
        "company_drives_id":"5",
        "user_id":"5",
        "company_name":"TCS",
        "date":new Date("2020-10-29"),
    }
])

// mentors

db.mentors.insertMany([
    {
        "mentor_id":"1",
        "mentee's_count":19
    },
    {
        "mentor_id":"2",
        "mentee's_count":14
    },
    {
        "mentor_id":"3",
        "mentee's_count":17
    },
    {
        "mentor_id":"4",
        "mentee's_count":16
    },
    {
        "mentor_id":"5",
        "mentee's_count":12
    },
])
