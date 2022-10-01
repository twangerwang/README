const generateReadme = ({title, description, installation, usage, contribution, test, license, github, email})=>

`# ${title}
![License icon](https://img.shields.io/badge/License-${license.replace(/\s+/g,'')}-green)
## Table of Contents<br>
---
* [Description](#description)<br>
* [Installation](#installation)<br>
* [Usage](#usage)<br>
* [Contribution](#contribution)<br>
* [Tests](#test)<br>
* [License](#license)<br>
* [Questions](#questions)<br>
---
## Description  
${description}

## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Test
${test}

## License
${license}

## Questions
Feel free to reach out!<br>
https://github.com/${github}<br>
${email}
`;

module.exports={
    generateReadme,
    test:()=>{}
};