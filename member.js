function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.createElement("div");
    skillsMember.setAttribute("class", "skills-member");
    skills.appendChild(skillsMember);
    var skillsMemberImg = document.createElement("img");
    skillsMemberImg.setAttribute("class", "skills-member-img");
    skillsMemberImg.setAttribute("src", "https://www.w3schools.com/howto/img_avatar.png");
    skillsMember.appendChild(skillsMemberImg);
    var skillsMemberName = document.createElement("h3");
    skillsMemberName.setAttribute("class", "skills-member-name");
    skillsMemberName.innerHTML = "Name Member";
    skillsMember.appendChild(skillsMemberName);
    var skillsMemberSkills = document.createElement("p");
    skillsMemberSkills.setAttribute("class", "skills-member-skills");
    skillsMemberSkills.innerHTML = "Skills Member";
    skillsMember.appendChild(skillsMemberSkills);
}