const generateReadme = ({title, description, installation, usage, contribution, test, license, github, email})=>

`# ${title}
![License icon](https://img.shields.io/badge/License-${license.replace(/\s+/g,'')}-green)
## Table of Contents
---
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#test)
* [License](#license)
* [Questions](#questions)
---
## Description  
${description}

## Installation
\`\`\`
${installation}
\`\`\`

## Usage
${usage}

## Contribution
${contribution}

## Test
\`\`\`
${test}
\`\`\`

## License
${license}

## Questions

Feel free to reach out!

GitHub: https://github.com/${github}

Email: ${email}
`;

module.exports={
    generateReadme,
    test:()=>{}
};