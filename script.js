lucide.createIcons();

const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    const iconElement = menuIcon.querySelector('i');
    if (navbar.classList.contains('active')) {
        iconElement.setAttribute('data-lucide', 'x');
    } else {
        iconElement.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons(); 
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.querySelector('i').setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    }
};

function handleFormSubmit(event) {
    event.preventDefault();
    const formMessage = document.getElementById('form-message');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formMessage.textContent = "Thank you! Your message has been sent successfully.";
        formMessage.style.color = "var(--neon-color)";
        event.target.reset();

        setTimeout(() => {
            formMessage.textContent = "";
        }, 3000);
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "#ff3333";
    }
}

const mockResumeContent = `
    <h2 style="font-size: 3rem; text-align: center; color: var(--neon-color); margin-bottom: 2rem;">Professional Resume</h2>
    <div style="text-align: center; margin-bottom: 3rem; font-size: 1.6rem;">
        <p><strong>Princess Jhuzzmien T. Calimlim</strong></p>
        <p>Email: jhuzzien12@gmail.com | Phone: 9369447388</p>
    </div>
    <h3 class="resume-heading">Objective</h3>
    <p style="margin-top: 1rem; font-size: 1.6rem;">Motivated and adaptable BSIT undergraduate with a strong foundation in Web Design, UI/UX, and front-end development. Eager to apply technical and creative skills to contribute to innovative and user-centered digital projects while gaining valuable industry experience.</p>
    <h3 class="resume-heading">Skills</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 1rem; margin-left: 1rem; font-size: 1.6rem;">
        <p><strong>Web:</strong> HTML5, CSS3, JavaScript, Python, Tailwind CSS</p>
        <p><strong>Design:</strong> Flutterflow, Figma (UI/UX), Adobe XD (UI/UX Design), Canva (Graphic Design)</p>
        <p><strong>Other:</strong> SQL, Database Management, System Analysis</p>
    </div>
    <h3 class="resume-heading">Academic Projects</h3>
    <div class="resume-item" style="margin-top: 1rem;">
        <h4>PUPQC WEBSITE</h4>
        <p>Developed a responsive school website prototype for PUP Quezon City, focusing on smooth navigation, accessibility, and a modern user interface. Designed layouts and user flows using Canva, then implemented the design with core web technologies (HTML, CSS, JavaScript) to ensure functionality across devices.</p>
    </div>
    <div class="resume-item" style="margin-top: 1rem;">
        <h4>Memu Gadgets and Appliances Website</h4>
        <p>Designed and developed a responsive e-commerce website prototype focused on showcasing gadgets and home appliances. Prioritized mobile-first design, smooth navigation, and user-friendly product displays.</p>
    </div>
<div class="resume-item" style="margin-top: 1rem;">
        <h4>Garage Burger Website</h4>
        <p>Created a responsive burger menu website showcasing food items and pricing for a burger restaurant. Focused on clean design, smooth navigation, and visual appeal. Designed the interface using Adobe XD, emphasizing intuitive user experience and consistent branding across pages.</p>
    </div>
    <div class="resume-item">
        <h4>Mano Isko Mobile App/Website(Productivity)</h4>
        <p>Developed a mobile app and website using FlutterFlow and Figma, designed as a scholarship note tracker for students in Quezon City. The platform allows scholarship offices to manually input updates and notes, helping users conveniently monitor their scholarship details. Focused on creating a clean, organized, and user-friendly interface for easier scholarship management..</p>
    </div>
   <div class="resume-item" style="margin-top: 1rem;">
        <h4>Graphic Designs & Pubmats</h4>
        <p>Created various digital posters, publication materials, and visual content using Canva and occasionally Figma. Focused on producing clean, creative, and engaging layouts that align with the intended theme and branding for organizations and events.</p>
    </div>
    <h3 class="resume-heading">Education Background</h3>
    <div class="resume-item" style="margin-top: 1rem;">
        <h4>Bachelor of Science in Information Technology (BSIT)</h4>
        <p>Polytechnic University of the Philippines, Quezon City (PUP-QC)</p>
        <p class="date">2026 - 2027 Present (Expected Graduation)</p>
    </div>
    <div class="resume-item" style="margin-top: 1rem;">
        <h4>Technology Vocational Livelihood - Information and Communication Teschnology Strand (TVL-ICT)</h4>
        <p>Lagro High School</p>
        <p class="date">2021 - 2023 (Senior High School)</p>
    </div>
        <div class="resume-item" style="margin-top: 1rem;">
        <h4>Technology Vocational Livelihood - Information and Communication Teschnology Strand (TVL-ICT)</h4>
        <p>Lagro High School</p>
        <p class="date">2017 - 2021 (Senior High School)</p>
    </div>
<h3 class="resume-heading">My Reference</h3>
    <div class="resume-item" style="margin-top: 1rem;">
        <h4>Richard Zabala</h4>
        <p>MTA, IT Consultant, Web Developer</p>
        <p class="date">richard.cabala@depedqc.ph
</p>
    </div>
    <div class="resume-item" style="margin-top: 1rem;">
        <h4>Mamerto Goneda</h4>
        <p>IT Consultant, acadene IT solutions</p>
        <p class="date">mamerto.goneda@academe.net</p>
    </div>
    
`;

function openResumeModal(event) {
    event.preventDefault(); 
    const modal = document.getElementById('resume-modal');
    const content = document.getElementById('resume-content');
    content.innerHTML = mockResumeContent; 
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
}


document.addEventListener('DOMContentLoaded', () => {
    
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    const skillBars = document.querySelectorAll('.skills-content .progress .bar span');
    skillBars.forEach(bar => {
        const percentage = bar.closest('.progress').querySelector('h3 span').textContent;
        bar.style.width = percentage;
    });

    document.querySelectorAll('.open-resume-btn').forEach(btn => {
        btn.addEventListener('click', openResumeModal);
    });
    
    document.getElementById('resume-modal').addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeResumeModal();
        }
    });
});
