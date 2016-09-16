var bio = {
	"name": "Luz K. Molina",
	"role": "Global Scientist, focused in Data Visualization",
	"contacts": {
		"website": "http://www.databayou.com",
		"email": "la_chusca@hotmail.com",
		"twitter": "@databayou",
		"github": "databayou",
		"blog": "http://www.saf21.org/blog/",
		"location": "Manchester, UK"
	},
	"welcome_message": "Welcome to my Resume page!",
	"skills": [ "Languages: JavaScript ",
				" Data Analysis: R, SPSS, Matlab, Excel, CANOCO", 
				" Web Development: jQuery, JSON, HTML/CSS, D3.js"
	    ],
	"picture_URL": "images/Luz_photo.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

var formattedwebsite = HTMLwebsite.replace("%data%", bio.contacts.website);
$("#topContacts").append(formattedwebsite);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedemail);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedtwitter);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgithub);
var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#topContacts").append(formattedblog);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedlocation);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture_URL);
$("#topContacts").append(formattedbioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
$("#topContacts").append(formattedwelcomeMsg);
var formattedskills = HTMLskills.replace("%data%", bio.skills);
$("#topContacts").append(formattedskills);

var education = {
	"schools": [
	    {
	    	"name": "Manchester Metropolitan University",
	    	"degree": "PhD",
	    	"dates": "November 2015 - December 2018",
	    	"location": "Manchester, UK",
	    	"major": "Visualization"
	    },
	    {
	    	"name": "The University of Southern Mississippi",
            "degree": "MSc",
	    	"dates": "January 2008 - December 2011",
	    	"location": "Stennis Space Center, MS, USA",
	    	"major": "Marine Science with emphasis in Biology"
	    },
	    {
	    	"name": "Universidad de los Andes",
	    	"degree": "BSc",
	    	"dates": "January 1998 - September 2003",
	    	"location": "Bogota, Colombia",
	    	"major": ["Biology", " Chemistry"]
	    }
	],
"onlineCourses":[
        {
    	"title": "JavaScript Syntax",
    	"school": "Udacity",
    	"dates": "August - September 2016",
    	"url": "http://www.udacity.com/course/ud804"
        },
        {
    	"title": "D3.js",
    	"school": "Dashing D3.js",
    	"dates": "June - July 2014",
    	"url": "https://www.dashingd3js.com/why-build-with-d3js"
        }
    ]
}

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(school in education.schools) {
			$("#education").append(HTMLschoolStart);
    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

    var formattedEducationNameMajor = formattedschoolName + formattedschoolDegree + formattedschoolDates +
         formattedschoolLocation + formattedschoolMajor;
          $(".education-entry:last").append(formattedEducationNameMajor);
   }
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(onlineCourse in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);

                var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
                var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
                var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
                var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
                var formattedonlineTitleURL = formattedonlineTitle + formattedonlineSchool + 
                formattedonlineDates + formattedonlineURL;
                $(".education-entry:last").append(formattedonlineTitleURL);
                }
        }
}
//call or invoke my code
education.display();

var work = {
	"jobs":[
	    {
	    	"employer": "Manchester Metropolitan University",
	    	"title": "Researcher",
	    	"dates": "November 2015 - December 2018",
	    	"location": "Manchester, UK",
	    	"description": "Researcher for the project SAF21. Interested in Public Engagement through Fisheries Visualization"
	    },
	    {
	    	"employer": "Freelance",
	    	"title": "Data Visualization",
	    	"dates": "January 2014 - November 2015",
	    	"location": "Houston, TX, USA",
	    	"description": "Created Data Visualizations for Challenges using D3.js"
	    },
	    {
	    	"employer": "The University of Southern Mississippi",
	    	"title": "Graduate Assistant",
	    	"dates": "January 2008 - December 2011",
	    	"location": "Stennis Space Center, MS, USA",
	    	"description": "Cruise assistant, HPLC Technician, Algae screening, Teaching Assistant Biological Oceanography Laboratory"
	    },
	    {
	    	"employer": "Gimnasio Cartagena de Indias",
	    	"title": "Science Teacher",
	    	"dates": "January 20087 - December 2007",
	    	"location": "Cartagena de Indias, Colombia, South America",
	    	"description": "Science Teacher for Primary and High School"
	    }
    ]
}

function displayWork() { // need to invoque this code
	for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + 
        formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
   }
}

//call or invoke my code
displayWork();

var projects = {
	"projects": [
	    {
	    	"title": "The Web Index",
	    	"date": "2014",
	    	"description": "Visualization challenge: how interconnected are certain countries on the internet. Created for wwww.visualizing.org, using R.",
	    	"image": "images/webindex.jpeg"
	    },
	    {
	     	"title": "East Asias Urban Expansion",
	    	"date": "2014",
	    	"description": "Visualization challenge of Asia's cities, created for wwww.visualizing.org. Created with D3.js.",
	    	"image": "images/urban.png"
	    },
	    {
	    	"title": "Sensor Prism",
	    	"date": "2014",
	    	"description": "Data visualization to show pollution in different cities around the world, created for Datacanvas: Sense your City challenge. Created with D3.js.",
	    	"image": "images/sense.png"
	    }
	]
}

function displayProjects() { // need to invoque this code

	for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        $(".project-entry:last").append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedprojectDescription);
         var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
        $(".project-entry:last").append(formattedprojectImage);
    	    }
    	 }   

displayProjects();  

// here is the map
$("#mapDiv").append(googleMap);

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedemail);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(formattedtwitter);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedgithub);
var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#footerContacts").append(formattedblog);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedlocation);