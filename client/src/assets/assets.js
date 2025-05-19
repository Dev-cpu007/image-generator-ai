export const testimonialsData = [
    {
    image:'../src/assets/pic1.jpg',
    name: 'Donald Jackman',
    role: 'Graphic Designer',
    stars: 5,
    text: `"I've been using Kalpana-AI for nearly two years, primarily for Instagram, 
            and it has been incredibly user-friendly, making my work much easier."`
    },
    {
    image:'../src/assets/pic2.jpg',
    name: 'Richard Nelson',
    role: 'Content Creator',
    stars: 5,
    text: `"Kalpana-AI has transformed how I create visual content.
            The quality is consistently impressive and saves me hours 
            of work each week."`
    },
    {
    image:'../src/assets/pic3.jpg',
    name: 'James Washington',
    role: 'Co-Founder',
    stars: 5,
    text: `"As a startup founder, Kalpana-AI has been 
            invaluable for creating professional marketing 
            materials without needing a design team."`
    },
]

function rateDisplay(num){
        let star = ""
        for (let index = 0; index < num; index++) {
              star += "★"  
        }
        return star
}

export default rateDisplay