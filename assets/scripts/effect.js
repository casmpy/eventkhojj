const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const effect = (element) => {
    let iteration = 0;
    const interval = setInterval(() => {
        const text = "HARJAS SIDHU";
        if (iteration >= text.length) {
            clearInterval(interval);
        }
        document.getElementById("name").innerText = 
        text.split("").map((letter, index) => {
            if (index < iteration) {
                return text[index];
            }
            return alphabets[Math.floor(Math.random() * 26)]
        }).join("");
        iteration += 1/2;
    }, 30);
}

let observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
		effect(entries[0]);
        observer.unobserve(document.getElementById("name"));
    }
}, { threshold: [1] });

observer.observe(document.getElementById('name'));