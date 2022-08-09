# Friendstagram

A friend recommendation system for Nanyang Technological University students in the form of a web application.
The objective of ‘Friendstagram’ is to provide opportunities for students in college to find new potential friends of similar interest and locations.

## Live Video

[![Friendstagram](https://i.ytimg.com/vi/mhuxYT8mv8w/maxresdefault.jpg)](https://youtu.be/mhuxYT8mv8w "SCSE Advanced Software Engineering - Friendstagram")

## Presentation Slide

[<img src="/images/presentation_slides.png" width="80%" height="80%"/>](https://docs.google.com/presentation/d/1_DOLCmXakwbbHjOYL3aSEgZtcirnUCfE/edit?usp=sharing&ouid=103675070987504181107&rtpof=true&sd=true)

## Tech Stack

- Figma -- Initial design of the app
- React
- Redux
- Django
- Netlify -- for deployment
- Pytest -- unit test case

## System Architecture

<img src="/images/sys_arch.png" width="80%" height="80%"/>

## Initial Mock Up

<img src="/images/mock_up.png" width="80%" height="80%"/>

## Background

The COVID-19 pandemic has disrupted university students’ daily lives. Many social restrictions have been put in place to prevent the spread of the virus amongst student cohorts. Co-curricular activities have been cancelled and lessons have been largely moved online, thus, reducing social interactions between students.

The inability to interact with others has caused students to achieve a less fulfilling university life. In a late 2020 survey conducted on 400 university students found that the shifting of in-person classes to online-learning had caused a significant drop in students’ satisfaction with the university courses. Students also felt like they do not belong to a community. Furthermore, when compared to the survey results conducted in the previous year, there was a 23% decline in “feeling engaged in coursework” and 28% decline in “interacting with peers in the classroom”. Being together with friends and in-person classes were also selected as the top 2 reasons why students valued being on campus. In Singapore, a survey conducted on the impact of pandemic with 1,066 youths aged between 18 and 35 found that 58% responded they had become more fearful and 54% had responded they had become less sociable.

The pandemic has undoubtedly affected many students’ academic and social experiences in their university journies. Therefore, we concluded that there is a need for a platform for Nanyang Technological University students to help them in finding new potential friends. We propose the development of ‘Friendstagram’, a personal friend recommender webapp which is catered specifically for Nanyang Technological University students, to help them connect with new potential like-minded friends based on their interests and hall accommodation, so as to enhance their university lives.

## Key Features

1. `Register and login with personal account`
   Each user will have their own individual account that can be accessed only by the user himself/herself.
   The personal account allows the system to save users’ information which will be used by the friends matching algorithm, which is further elaborated in part 3.
2. `View and edit user’s information`
   The user can view their existing information in the web application and edit if necessary. Password, interests and locations can be edited to update the user's current liking.
3. `Recommend new potential friends with similar interests to users through our questionnaire and algorithm`
   The designed algorithm will access the saved information of the user and search for new potential friends with similar interests and hall accommodation. The algorithm will then provide the contact details of these new potential friends for the user to contact.
4. `Display contact information and interests of a new potential friend from the list of recommended new potential friends`
   The user can view the contact information and interests of a new potential friend by clicking on his/her card from a list where each card represents a new potential friend.

## Running

First `npm install` to grab all the necessary dependencies.

Then run `npm start` and open <localhost:3000> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.

