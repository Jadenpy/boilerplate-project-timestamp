# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice


## Project Description

This project is a simple microservice that takes a date string as input and returns the Unix timestamp and the human-readable date and time for that input. The service should support two types of input:


1. API   /api/:data?     
2. if the input is invalid, the service should return a JSON object with an error message like: { error: "Invalid date" }.
3. if the input is valid, the service should return a JSON object with the following format: { unix: 1516914907(type:number), utc: "Thu, 01 Jan 1970 00:00:00 GMT"(type:string)" }.    /api/1516914907    /api/
4. if the input is not provided, the service should only return the current Unix timestamp.
5. Your project can handle dates that can be successfully parsed by new Date(date_string).
