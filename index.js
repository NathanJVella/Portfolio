/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

const skillLists = {
    mySkillsList: [
        "C# 14",
        ".NET 10",
        "ASP.NET Core",
        "EF Core",
        "MVC / Minimal API",
        "Game Development",
        "Unity",
        "Docker Containers",
        "MySQL",
        "PostgreSQL",
        "LUA",
        "Visual Studio",
        "Git",
        "CI / CD",
        "AWS",
        "Azure",
        "Blazor / Mudblazor",
        "Redis",
        "HTML",
        "CSS",
        "Blazor"
    ],

    serverProgrammerSkillsList: [
        "C#",
        "ASP.NET Core",
        "EF Core",
        "MySQL",
        "AWS",
        "Docker"
    ],

    gameDeveloperSkillsList: [
        "C#",
        "Stride",
        ".csx"
    ],

    horrorToothSkillsList: [
        "C#",
        "Unity Engine",
        "Maya",
        "ZBrush"
    ],

    naturesBorneSkillsList: [
        "C#",
        "Unity Engine",
        "Maya",
        "Blender",
        "Mirror"
    ],

    cupOfLifeSkillsList: [
        "C#",
        "Unity Engine",
        "Maya",
    ]
};

for (const [containerId, skills] of Object.entries(skillLists)) {
    const container = document.getElementById(containerId);

    skills.forEach(skill => {
        const tag = document.createElement("span");
        tag.textContent = skill;
        container.appendChild(tag);
    });
}




document.querySelectorAll(".slideshow").forEach(slideshow => {
    const slides = slideshow.querySelectorAll(".slide");
    const next = slideshow.querySelector(".next");
    const prev = slideshow.querySelector(".prev");

    console.log(next);
    console.log(prev);

    let current = 0;

    function showSlide(index) {
        slides[current].classList.remove("active");

        current = (index + slides.length) % slides.length;

        slides[current].classList.add("active");
    }

    next?.addEventListener("click", () => {
        console.log("Next clicked");
        showSlide(current + 1);
    });

    prev?.addEventListener("click", () => {
        showSlide(current - 1);
    });

    setInterval(() => {
        showSlide(current + 1);
    }, 3000);
});



document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggleButton");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const skills = button.closest(".info-box").querySelector(".skills");

            skills.classList.toggle("open");

            button.textContent = skills.classList.contains("open")
                ? "Hide Skills"
                : "Show Skills";
        });
    });
});