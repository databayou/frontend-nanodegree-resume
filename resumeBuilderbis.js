var name = "Luz Karime Molina";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Data Visualization Expert, Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

//the following is an array cause its in []
 //var longitude = skills.length;
 //var longitude = [].length  //0
 var animals = ["llama"];
 animals.length 

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
//$("#main").append(skills); // Brings all and no spaces between them
//$("#main").append(skills[0]); // will only bring the first skill
//$("#main").append(longitude);
//$("#main").append(skills.length);//will give me the longitude of the array

var bio = {
	"name": "Luz K. Molina",
	"role": "Researcher",
	"contacts": {
		"mobile": "850-797-2345",
		"email": "la_chusca@hotmail.com",
		"github": "databayou",
		"twitter": "@databayou",
		"location": "Manchester, UK"
	},
	"welcome_message": "Welcome to my Resume page!",
	"skills": [
	    "JavaScript", "Matlab", "R", "CSS", "HTML", "d3.js"
	    ],
	    "picture_URL": "Users/luzmolina/Documents/photos/profilepics/Luz_photo.jpg"
};

//dot notation
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts.mobile);
$("#main").append(bio.contacts.email);
$("#main").append(bio.contacts.twitter);
$("#main").append(bio.contacts.location);
$("#main").append(bio.picture_URL);
$("#main").append(bio.welcome_message);
$("#main").append(bio.skills);

//brachet notation
var education2 = {};
education2["school"] = "The University of Southern Mississippi";
education2["years"] = "3 years";
education2["city"] = "Stennis Space Center";

$("#main").append(education2["school"]);
$("#main").append(education2["years"]);
$("#main").append(education2["city"]);

var work = {};
work.position = "PhD. Student";
work.employer = "Manchester Metropolitan University";
work.years = "Working for 8 months";
work.city = "Manchester, UK";

$("#main").append(work.position);
$("#main").append(work.employer);
$("#main").append(work.years);
$("#main").append(work.city);

var education1 = {};
education1["school"] = "The University of Southern Mississippi";
education1["years"] = "3 years";
education1["city"] = "Stennis Space Center";

$("#main").append(education1["school"]);
$("#main").append(education1["years"]);
$("#main").append(education1["city"]);

var education = {
	"schools": [
	    {
	    	"name": "Manchester Metropolitan University",
	    	"city": "Manchester, UK",
	    	"majors": ["Visualization"],
	    	"graduation": "December, 2018"
	    },
	    {
	    	"name": "The University of Southern Mississippi",
	    	"city": "Stennis Space Center, MS, USA",
	    	"major": "Marine Science, Emphasis in Biology",
	    	"graduation": "December, 2011"
	    },
	    {
	    	"name": "Universitdad de los Andes",
	    	"city": "Bogota, Colombia",
	    	"majors": ["Biology"],
	    	"graduation": "September, 2003"
	    }
	],

"onlineCourses":[
        {
    	"title": "JavaScript Syntax",
    	"school": "Udacity",
    	"dates": 2016,
    	"url": "http://www.udacity.com/course/ud804"
        }
    ]
};

//$("#main").append(education["schools"]);
//$("#main").append(education["onlineCourses"]);
$("#main").append(education.schools.name);

//not sure why i kept this
 if (bio.skills.lenght > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace ("%data%",
    	  bio.skills[1]);
    formattedSkill = HTMLskills.replace ("%data%",
    	  bio.skills[2]);
    $("#skills").append(formattedSkill); 
    formattedSkill = HTMLskills.replace("%data%",
    	bio.skills[3]);
    $("#skills").append(formattedSkill);


var projects = {
	"projects": [
	    {
	    	"title": "The Web Index",
	    	"date": "2014",
	    	"description": "Visualization challenge of how interconected are certain countries on the internet. Created for wwww.visualizing.org, using R.",
	    	"image": "webindex.jpeg"
	    },
	    {
	     	"title": "East Asias Urban Expansion",
	    	"date": "2014",
	    	"description": "Visualization challenge of Asia's cities, created for wwww.visualizing.org. Created with D3.js.",
	    	"image": "urban.png"
	    },
	    {
	    	"title": "Sensor Prism",
	    	"date": "2014",
	    	"description": "Data visualization to show pollution in different cities around the world, created for Datacanvas: Sense your City challenge. Created with D3.js.",
	    	"image": "sense.png"
	    }
	]
}

//this is how i was showing projcts but they showed display projects
	for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);

    var formattedProjects = formattedprojectTitle + 
        formattedprojectDates + formattedprojectDescription + formattedprojectImage;

    $(".project-entry:last").append(
	    formattedProjects);
   }

   
//count clicks on page
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
})