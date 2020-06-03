function generateMarkdown(data) {
    return `${generateTableOfContents(data)}

------------------------------------------  

## Project Details

# Title
${data.title}

# Version
${data.version}

# Description
${data.description}

# Installation Help
${data.installation}

# Basic Usage
${data.usage}

${generateBasicInfo(data)}

${generateContributers(data)}`
};

function generateTableOfContents() {
    return `
## Table of Contents
1. Title
2. Version
3. Description
4. Installation Help
5. Basic Usage
6. License
7. Tests
8. FAQs 
9. Contributers
10. Contact Info`
};

function generateBasicInfo(data){
    return `# License
${data.license}
    
# Tests
${data.tests}
    
# FAQs
${data.faqs}`
};


function generateContributers(data){
    return `# Contact Info
${data.email}

${data.confirmContributers}`
};


module.exports = generateMarkdown;