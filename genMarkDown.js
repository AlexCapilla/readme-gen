function genMarkDown(data){
    return`
    # ${data.title}
    ${data.license}
    
    ### Description

    ${data.description}

    ### Table of Contents
    * Installation

    ## Installation
    To install, run the following commands:
    \`\`\`
    ${data.installation}
    \`\`\`

    ## Usage
    ${data.usage}

    ${data.license}
    
    ## Contributing
    ${data.contributing}

    ## Test

    ${data.test}

    ## Questions
    Please contact

    Email:   ${data.email}

    Github:  ${data.github}


    `
}

module.exports = genMarkDown;