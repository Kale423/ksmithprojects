<img width="1536" height="1024" alt="75D80649-9EBA-4DFB-913A-F69D5B0F20C0" src="https://github.com/user-attachments/assets/b9b7cbea-f800-4938-b525-65d43a466fe2" />
# AWS Serverless Task App

## Overview
This project is a serverless web application that allows users to create, view, and delete tasks in real time. It demonstrates how multiple AWS services work together in a full-stack cloud application.

## Architecture
The application uses the following AWS services:

- Amazon S3 for static website hosting
- Amazon API Gateway for handling HTTP requests
- AWS Lambda for backend logic
- Amazon DynamoDB for storing task data

## How It Works
1. The frontend is hosted on S3.
2. User actions (add/delete tasks) send requests to API Gateway.
3. API Gateway triggers a Lambda function.
4. Lambda processes the request and interacts with DynamoDB.
5. The response is sent back to the frontend and displayed to the user.

## Features
- Add tasks
- View tasks
- Delete tasks
- Fully serverless architecture

## Technologies Used
- HTML
- CSS
- JavaScript
- AWS (S3, API Gateway, Lambda, DynamoDB)

## Live Demo
ksmith-aws-task-app-2026.s3-website-us-east-1.amazonaws.com

## What I Learned
- How to build a serverless application using AWS
- How APIs connect frontend and backend systems
- How to store and retrieve data using DynamoDB
- How to deploy a web application using S3

## Future Improvements
- Add user authentication (Amazon Cognito)
- Improve UI/UX design
- Add task completion status
