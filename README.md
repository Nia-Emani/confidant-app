# Project Overview

## Confidant

[Confidant App Site](https://confidant.netlify.app/)

## Project Description

Confidant is a journaling app where users can jot down their thoughts. Journaling can be a powerful tool to imporve mental health and Confidant is meant to be a convenient way to "make space in your brain" on-the-go. The menu, which is available on every page, allows users to create new entries and view their journal feed. Users also have the ability to edit or delete any past journal entries.


## Wireframes
The wireframe displays the desktop view of each page of the app, as well as mobile-friendly version of each page. The homepage contains the brand logo, slogan, and a sign up form, as well as a menu, linking to the new entry form and the journal feed. The form has a submit button which also takes users to the new entry form. The add entry button on the new entry form submits the new entry to the journal feed. From there, users can make edits or delete entries.


![image](https://user-images.githubusercontent.com/83891591/131069635-f0349497-c5c0-4f8a-830b-11d3492cec24.png)


## Component Hierarchy

![image](https://user-images.githubusercontent.com/83891591/131067978-2f04f2f2-589a-45c1-a354-bec534dc8ba3.png)


## API and Data Sample

Confidant API https://api.airtable.com/v0/appLQZFM8iMgpmtxd/confidant

```json
records: [
{
id: "rec8ebIFKGQ29dUn8",
fields: {
date: "August 20, 2021",
thought: "So glad you're here! This is a safe space to jot down your thoughts. Happy journaling! -Your Confidant"
},
createdTime: "2021-08-26T02:43:38.000Z"
},
{
id: "recwvvQtugyMyfrNm",
fields: {
date: "August 29, 2021",
thought: "new thoughts"
},
createdTime: "2021-08-26T02:44:03.000Z"
}
]
```


### MVP/PostMVP 

#### MVP 

- Get deafult journal entry from Airtable
- Use forms to create new entries and update past entries to Airtable
- Delete journal entries form the journal feed and Airtable
- Clickable links that route to pages with forms


#### PostMVP  

- A "let's connect" page with a contact form and submit button
- Mood rating element for each new entry using hearts, which can also be updated
- Functional sign up form


## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|August 19| Prompt / Wireframes / Repository / Airtable Setup | Complete
|August 20| Component Hierarchy / Project Approva | Complete
|August 23 - 24| Build out components/ Finish MVP | Complete
|August 25| CSS / Post MVP  | Complete
|August 26| Confirm MVP Completion / Post MVPs  | Complete
|August 6| Presentations | Incomplete



## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal | H | 2hrs| 1.5hrs | 1.5hrs |
| Airtable setup | H | 0.5hrs| 1.5hrs | 1.5hrs |
| App component | H | 5hrs| 5hrs | 5hrs |
| Component Steup | H | 10hrs| 14hrs | 14hrs |
| Debugging | H | 7hrs| 3.5hrs | 3.5hrs |
| Testing | H | 5hrs| 6hrs | 6hrs |
| CSS| H | 8hrs| 10hrs | 10hrs |
| Total | H | 37.5hrs| 41.5hrs | 41.5hrs |


## SWOT Analysis

*Strengths*

I know how my site should operate and have a clear vision of how it should look. I have a pretty good understanding of axios calls.

*Weaknesses*

I'm still grasping the details of the component heirarchcy for my project, specifically, spreading everything out into six components.

*Opportunities*

I'm hoping that doing this project will help me solidify my understanding of how the elements relate to each other and to each component in react.

*Threats*

It sometimes takes me a long time to find solutions on my own. I have no problem asking for help but a lot of the time, I run into issues outside of TA hours/class time. If I can't debug an issue, it's hard to work around it until I can get assistance, though I still try.
