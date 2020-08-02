/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var sectionNames = [];
const sectionFragment = new DocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//Create an array of Section Names
function getSectionNames() {
   
    landingContainer = document.getElementsByClassName("landing__container");
    
    for (const containerElement of landingContainer) {
        let tempSectionNames = containerElement.querySelector("h2").textContent;
        sectionNames.push(tempSectionNames)
    };    
}

getSectionNames();

// build the nav

    


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 * 
 * 
 * 
*/



//Build an Menu of Fragment object, based on the Array of Sections identified earlier
function buildMenu() {
    sectionNames.forEach(helperBuildMenuFn);
    const menuItemDoc = document.getElementById("menuItems");
    menuItemDoc.appendChild(sectionFragment);
}

function helperBuildMenuFn(sectionName, index){
    let aTemp = document.createElement("a");
    let attValue = "#section"+(++index);
    aTemp.setAttribute("href", attValue);
    aTemp.textContent=sectionName;
    sectionFragment.appendChild(aTemp);
}

buildMenu();
// Build menu 



// Scroll to section on link click

// Set sections as active
let activeSections = document.getElementsByTagName("a");

for (const activeSection of activeSections ) {
    activeSection.addEventListener("click",function(){
        let sectionName = activeSection.textContent.replace(/\s+/g, '').toLowerCase();
        let docSecName = document.getElementById(sectionName);
        docSecName.setAttribute("class", "active-class");
        let varh2 = docSecName.getElementsByTagName("h2")
        varh2[0].style.backgroundColor = "#deb887";
        
        for (let count=0; count<activeSections.length; count++)
        {
            let tempName = activeSections[count].textContent.replace(/\s+/g, '').toLowerCase();
            if (tempName == sectionName ) {
            }else{
                let docRemove = document.getElementById(tempName);
                docRemove.removeAttribute("class", "active-class");
                let localVarh2 = docRemove.getElementsByTagName("h2")
                localVarh2[0].style.backgroundColor = "";
            }
        }
    })
}




