function generateMarkdown(data) {
    return `
# ${data.Title}
https://github.com/${data.Username}/${data.Title}
# Description 
${data.Description}

# Table of Contents
* [Installation](#installation)
*[Usage](#usage)
*[License](#lisense)
*[Contributing](#contributing)
*[Test](#tests)

*[Questions](#questions)
#Installation
The following necessary dependencies must be installed to run the application
# Usage
In order to use this app, ${data.Usage}
# License 
This project is licensed under the ${data.License} license.module
![Github license] (https://img.shields.io/badge/license-${data.License}-blue)
Contributors: ${data.Contribution}
# Tests 
The following is needed to run the test: ${data.Tests}
# Questions 
If you have any questions about the reportError, open an issue or contact ${data.Email}
`
}
module.exports = generateMarkdown;