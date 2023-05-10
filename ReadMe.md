<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/JustinStowe/Photography-business-Portal-FrontEnd">
    <img src="https://user-images.githubusercontent.com/110639329/233704909-170868e2-f051-42e6-b733-8a77e037d9b9.jpg" alt="Logo" width="80" height="80>
  </a>

<h3 align="center">Photography-business-Portal</h3>

  <p align="center">
    This app is a comprehensive platform that allows users to showcase their portfolios, manage their clients and efficiently deliver photo-shoots. While currently under development, I aim to constantly expand its features and capabilities.
    <br />
    <a href="https://github.com/JustinStowe/Photography-business-Portal-FrontEnd"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/JustinStowe/Photography-business-Portal-FrontEnd">View Demo</a>
    ·
    <a href="https://github.com/JustinStowe/Photography-business-Portal-FrontEnd/issues">Report Bug</a>
    ·
    <a href="https://github.com/JustinStowe/Photography-business-Portal-FrontEnd/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Vue][Vue.js]][Vue-url]
- [![Express][express.js]][express-url]
- [![Mongo][mongo.js]][mongo-url]
- [![Tailwindcss][tailwindcss.js]][Tailwindcss-url]
- [![Cloudinary][cloudinary.js]][cloudinary-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Link to webpage: <https://myphotographypage.herokuapp.com>

## The end goal

To create a tool that simplifies a photographer's life and helps them run their business efficiently.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Find and keep hold of your `MongoURI`
2. Register for a cloudinary account @ https://cloudinary.com and grab your `cloud name` `API key` and `API Secret`
3. Clone the repos
   ```sh
   git clone https://github.com/JustinStowe/Photography-business-Portal-FrontEnd.git
   git clone https://github.com/JustinStowe/Photography-BackEnd
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Create `.env` file in Photography-BackEnd and enter your Enter your `MongoURI` `cloud name` `API key` and `API Secret` in the `.env` file
   ```js
   MongoURI = Your mongo uri
   SECRET= a secret you use to secure your jsonWebToken
   CLOUD_NAME= your cloud name here
   API_KEY= your api key
   API_SECRET= your cloudinary api secret
   ```
   also in `src/pages/NewPhotoPage` you are going to want to change the cloud name to your cloud name
   ![image](https://user-images.githubusercontent.com/110639329/233726312-3bbde4ba-8185-4502-8256-46057b9751f2.png)
   <p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

- Portfolio Page

  - The front and center of the application is a public portfolio page, allowing anyone visiting the website to see the quality of the photographer's work.
    ![image](https://user-images.githubusercontent.com/110639329/233719465-bae87c7d-e582-4918-982e-a5eed1f35794.png)

  -When the user logs in, the "home page" changes to render their photos instead

  ![image](https://user-images.githubusercontent.com/110639329/233719860-9bde05af-374e-4311-bd51-9f2336852399.png)

- Account Page

  -If no user is logged in
  ![image](https://user-images.githubusercontent.com/110639329/233719615-a5009937-5741-4eea-919a-151268063d9e.png)
  ![image](https://user-images.githubusercontent.com/110639329/233726575-6cc54532-46b9-41cf-8a4b-17325edc05ea.png)
  -If a user is logged in
  ![image](https://user-images.githubusercontent.com/110639329/233719724-2abaaf1b-4573-4b40-8c0d-6a6543011c03.png)

-Upload new Photo Page

-part 1 a widget to easily handle photo uploads with the ability to see the photos that a user has added to be uploaded
![image](https://user-images.githubusercontent.com/110639329/233719996-2df6ebbc-9b30-4689-b552-36a0461b32b5.png)
![image](https://user-images.githubusercontent.com/110639329/233720204-44d7ee38-b74d-4e14-9b40-846a34bbbce2.png)

-part 2 allows a user to label each uploaded photo with a title and date
![image](https://user-images.githubusercontent.com/110639329/233720341-6f577f09-b68a-4a79-a2ce-0941ac7e3754.png)

## WireFrame

![image](https://user-images.githubusercontent.com/110639329/216745056-d844f6cd-32a3-4d9f-bbb1-f4010551faf6.png)



<!-- ROADMAP -->![photography business page wire frame](https://github.com/JustinStowe/Photography-business-FrontEnd/assets/110639329/c770a8ea-7c89-49cc-b8a9-a48116129b18)


## Roadmap

- [x] Portfolio Page
- [x] Upload new photos
- [x] authentication and account management
- [x] authentication of unique users
- [x] Ability to change account details
- [ ] Email integration
- [ ] Calendly integration
- [ ] Full admin account setup
- [ ] Interactive client list
- [ ] Interactive project ID list
- [ ] Admin ability to manage client photos

_To see the server side code , please go to the [Photography-BackEnd](https://github.com/JustinStowe/Photography-BackEnd)_

## See the [open issues](https://github.com/JustinStowe/Photography-business-Portal-FrontEnd/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Justin Stowe - [@shadowangel1234](https://twitter.com/shadowangel1234) - justinstowe12@gmail.com

Project Link: [https://github.com/JustinStowe/Photography-business-Portal-FrontEnd](https://github.com/JustinStowe/Photography-business-Portal-FrontEnd)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Dominic](https://github.com/whoisdominic)- My instructor who saw my potential and cultivated it.
- [Marlin](https://github.com/MaDTrX)- My information dealer, who listened to what I wanted to try to do and always showed me the docs on how to do it
- [Steven](https://github.com/StevenB94) - My main debug assistant, even though he has his own life to live and job to attend to, he would always have time to work through my code with me.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/JustinStowe/Photography-business-FrontEnd.svg?style=for-the-badge
[contributors-url]: https://github.com/JustinStowe/Photography-business-FrontEnd/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/JustinStowe/Photography-business-FrontEnd.svg?style=for-the-badge
[forks-url]: https://github.com/JustinStowe/Photography-business-Portal-FrontEnd/network/members
[stars-shield]: https://img.shields.io/github/stars/JustinStowe/Photography-business-FrontEnd.svg?style=for-the-badge
[stars-url]: https://github.com/JustinStowe/Photography-business-FrontEnd/stargazers
[issues-shield]: https://img.shields.io/github/issues/JustinStowe/Photography-business-FrontEnd.svg?style=for-the-badge
[issues-url]: https://github.com/JustinStowe/Photography-business-Portal-FrontEnd/issues
[license-shield]: https://img.shields.io/github/license/JustinStowe/Photography-business-FrontEnd.svg?style=for-the-badge
[license-url]: https://github.com/JustinStowe/Photography-business-FrontEnd/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/JustinStowe
[product-screenshot]: https://user-images.githubusercontent.com/110639329/233724399-fdd267cf-b90e-4cf4-9069-3a5817644e83.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Express.js]: https://img.shields.io/badge/-Express-green
[Express-url]: https://expressjs.com/
[mongo.js]: https://img.shields.io/badge/-MongoDB-blue
[mongo-url]: https://www.mongodb.com/
[Tailwindcss-url]: https://tailwindcss.com/
[tailwindcss.js]: https://img.shields.io/badge/-TailWindCss-blue
[cloudinary.js]: https://img.shields.io/badge/-Cloudinary-lightgrey
[cloudinary-url]: https://cloudinary.com/
