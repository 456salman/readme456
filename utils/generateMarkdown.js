// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Appache"){
  return "License-Apache_2.0-blue.svg"
  }
  else if (license === "Boosts"){
    return "License-Boost_1.0-lightblue.svg"
  }
  else if (license === "BSD" ){
  return "License-BSD_3--Clause-blue.svg"
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Appache"){
    return "https://opensource.org/licenses/Apache-2.0"
    }
    else if (license === "Boosts"){
      return "https://www.boost.org/LICENSE_1_0.txt"
    }
    else if (license === "BSD" ){
    return "https://opensource.org/licenses/BSD-3-Clause"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
- [github](#github)
- [discription](#discription)
- [installation](#installation)
- [usage](#usage)
- [credits](#credits)
- [license](#license)
- [features](#features)
- [conptributers](#conptributers)

## github
${data.github}


## discription
${data.github}

## installation
${data.discription}
## usage
${data.installation}

## credits
${data.credits}

## license
[![License](https://img.shields.io/badge/${data.license}.svg)]

## features
${data.features}

## conptributers
 ${data.conptributers}


 ## test
 ${data.tests}

 ## queation
 ${data.question}
  `
  ;
}

module.exports = generateMarkdown;
