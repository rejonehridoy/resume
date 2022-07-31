class Skill{
	constructor(groupName, items){
		this.groupName = groupName;
		this.skillItems = items;
	}
}

function AssignAllSkills(){
    let allSkills = [];
    const programmingSkill = new Skill('Programming', [
        { name: 'C/C++', rating: 5 },
        { name: 'C#', rating: 4 },
        { name: 'Python', rating: 4 },
        { name: 'Java', rating: 4 },
        { name: 'SQL', rating: 4 },
        { name: 'Latex', rating: 3 }
    ]);
    allSkills.push(programmingSkill);

    const operatingSystemSkills = new Skill('Operating System', [
        { name: 'Windows', rating: 5 },
        { name: 'Linux', rating: 4 }
    ]);
    allSkills.push(operatingSystemSkills);

    const webDevelopmentSkill = new Skill('Web Development', [
        { name: 'HTML', rating: 5 },
        { name: 'CSS', rating: 4 },
        { name: 'Booststrap', rating: 4 },
        { name: 'JavaScript, JQuery', rating: 4 }
    ]);
    allSkills.push(webDevelopmentSkill);

    const databaseSkills = new Skill('Database', [
        { name: 'MSSQL', rating: 4 },
        { name: 'MYSQL', rating: 4 },
        { name: 'LINQ', rating: 4},
        { name: 'PL/SQL', rating: 4 },
        { name: 'SQLite', rating: 4 },
        { name: 'Firebase', rating: 4 }
    ]);
    allSkills.push(databaseSkills);

    const frameworksSkills = new Skill('Frameworks', [
        { name: 'Entity Framework', rating: 4 },
        { name: 'Asp.Net Core MVC', rating: 4 }
    ]);
    allSkills.push(frameworksSkills);

    const softwareToolsSkills = new Skill('Software & Tools', [
        { name: 'Visual Studio', rating: 5 },
        { name: 'GitHub, BitBucket, GitLab', rating: 5 },
        { name: 'Jira, Trello', rating: 5},
        { name: 'Visualization', rating: 5, description: '(e.g. matplotlib, Seaborn, ...)' },
        { name: 'Data handling/analysis', rating: 5, description: '(e.g. numpy, scipy, pandas, ...)'},
        { name: 'Android Studio', rating: 4 }
    ]);
    allSkills.push(softwareToolsSkills);

    const miscellaneousSkills = new Skill('Miscellaneous', [
        { name: 'Git', rating: 4 },
        { name: 'Web API', rating: 4 },
        { name: 'Problem Solving', rating: 4 },
        { name: 'Machine Learning', rating: 3},
        { name: 'Deep Learning', rating: 3},
        { name: 'NLP', rating: 3}
    ]);
    allSkills.push(miscellaneousSkills);

    const languageSkills = new Skill('Miscellaneous', [
        { name: 'Bangla', rating: 5 },
        { name: 'English', rating: 4 }
    ]);
    allSkills.push(languageSkills);

    return allSkills;
}

function GetRating(rating) {
    let ratingHtml = '';
    for (let i = 0; i < rating; i++)
    {
        ratingHtml += '<div class="rating-plus"></div>';
    }
    for (let i = 0; i < 5 - rating; i++)
    {
        ratingHtml += '<div class="rating-minus"></div>';
    }
    return ratingHtml;
}

function GetAllSkills(){
    const allSkills = AssignAllSkills();
    // for skills group
    let skillsHtml = '';
    for(var i = 0; i < allSkills.length; i++) {
        const skillGroup = allSkills[i];
        skillsHtml += `<div class="skills-group"><i>${skillGroup.groupName}</i></div>`;
        
        // individual skills of that specific skills group
        for(var j = 0; j <skillGroup.skillItems.length; j++) {
            const skill = skillGroup.skillItems[j];
            let itemDesign = '';
            if(skill.description === undefined) {
                itemDesign += `<div class="skill-item d-flex justify-content-between align-items-center"><p class="skill-name">${skill.name}</p><div class="d-flex justify-content-center">`;
            }else{
                itemDesign += `<div class="skill-item d-flex justify-content-between align-items-center"><p class="skill-name">${skill.name} <br><span>${skill.description}</span></p><div class="d-flex justify-content-center">`;
            }
            
            skillsHtml += itemDesign + GetRating(skill.rating) + '</div></div>';
        }
    }
    return skillsHtml;
}

$('#skills-zone').html(GetAllSkills());

// for mobile devices only
if(screen.width < 768){
    $('.skills-section').insertAfter('.work-history-section');
    $('.skills-section').css('padding-left','25px');
    $('.skills-section').css('padding-right','25px');
    $('.skills-section').css('margin-top','15px');
}