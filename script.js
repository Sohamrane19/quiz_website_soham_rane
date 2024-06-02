const scienceQuestions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "H2"],
        correctAnswer: "H2O",
        difficulty: "easy",
        field: "Science"
    },
    {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        difficulty: "easy",
        field: "Science"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        correctAnswer: "Diamond",
        difficulty: "medium",
        field: "Science"
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
        difficulty: "easy",
        field: "Science"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
        correctAnswer: "Mitochondria",
        difficulty: "medium",
        field: "Science"
    },
    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
        correctAnswer: "NaCl",
        difficulty: "easy",
        field: "Science"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter",
        difficulty: "medium",
        field: "Science"
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        correctAnswer: "300,000 km/s",
        difficulty: "hard",
        field: "Science"
    },
    {
        question: "Which element has the highest melting point?",
        options: ["Iron", "Carbon", "Tungsten", "Gold"],
        correctAnswer: "Tungsten",
        difficulty: "hard",
        field: "Science"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        correctAnswer: "Skin",
        difficulty: "medium",
        field: "science"
    },
    {
        difficulty: "easy",
        correctAnswer: "Oxygen",
        question: "What is the most abundant element in the Earth's crust?",
        options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
        field: "Science"
    },
    {
        difficulty: "medium",
        correctAnswer: "Photosynthesis",
        question: "What process do plants use to convert sunlight into energy?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
        field: "Science"
    },
    {
        difficulty: "medium",
        correctAnswer: "DNA",
        question: "What is the molecule that carries genetic information in living organisms?",
        options: ["RNA", "DNA", "ATP", "Protein"],
        field: "Science"
    },
    {
        difficulty: "hard",
        correctAnswer: "Mitochondria",
        question: "Which organelle is known as the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
        field: "Science"
    },
    {
        difficulty: "hard",
        correctAnswer: "Plate Tectonics",
        question: "What is the scientific theory that describes the large-scale motions of Earth's lithosphere?",
        options: ["Continental Drift", "Plate Tectonics", "Seafloor Spreading", "Earthquake Theory"],
        field: "Science"
    },
    {
        difficulty: "hard",
        correctAnswer: "Fermion",
        question: "What type of subatomic particle is the electron?",
        options: ["Boson", "Fermion", "Hadron", "Lepton"],
        field: "Science"
    },
    {
        difficulty: "hard",
        correctAnswer: "Quarks",
        question: "What are the fundamental particles that make up protons and neutrons?",
        options: ["Leptons", "Quarks", "Bosons", "Hadrons"],
        field: "Science"
    },

    // History
    {
        difficulty: "easy",
        correctAnswer: "George Washington",
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        field: "History"
    },
    {
        difficulty: "easy",
        correctAnswer: "Christopher Columbus",
        question: "Who is credited with discovering America in 1492?",
        options: ["Christopher Columbus", "Ferdinand Magellan", "Leif Erikson", "Amerigo Vespucci"],
        field: "History"
    },
    {
        difficulty: "easy",
        correctAnswer: "Julius Caesar",
        question: "Who was assassinated on the Ides of March?",
        options: ["Augustus", "Brutus", "Nero", "Julius Caesar"],
        field: "History"
    },
    {
        difficulty: "medium",
        correctAnswer: "1066",
        question: "In what year did the Battle of Hastings take place?",
        options: ["1215", "1066", "1415", "1588"],
        field: "History"
    },
    {
        difficulty: "medium",
        correctAnswer: "Napoleon Bonaparte",
        question: "Who became the Emperor of France in 1804?",
        options: ["Louis XVI", "Robespierre", "Napoleon Bonaparte", "Louis XIV"],
        field: "History"
    },
    {
        difficulty: "medium",
        correctAnswer: "Genghis Khan",
        question: "Who founded the Mongol Empire?",
        options: ["Kublai Khan", "Attila the Hun", "Genghis Khan", "Tamerlane"],
        field: "History"
    },
    {
        difficulty: "hard",
        correctAnswer: "Treaty of Westphalia",
        question: "What treaty ended the Thirty Years' War?",
        options: ["Treaty of Versailles", "Treaty of Westphalia", "Treaty of Tordesillas", "Treaty of Paris"],
        field: "History"
    },
    {
        difficulty: "hard",
        correctAnswer: "Byzantine Empire",
        question: "What empire was known as the Eastern Roman Empire?",
        options: ["Ottoman Empire", "Byzantine Empire", "Holy Roman Empire", "Macedonian Empire"],
        field: "History"
    },
    {
        difficulty: "hard",
        correctAnswer: "Mughal Empire",
        question: "Which empire built the Taj Mahal?",
        options: ["Ottoman Empire", "Mughal Empire", "Maurya Empire", "Gupta Empire"],
        field: "History"
    },
    {
        difficulty: "hard",
        correctAnswer: "Feudalism",
        question: "What system of land ownership and duties was prevalent in medieval Europe?",
        options: ["Manorialism", "Feudalism", "Mercantilism", "Capitalism"],
        field: "History"
    },
    {
        difficulty: "easy",
        correctAnswer: "Nile",
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        field: "Geography"
    },
    {
        difficulty: "easy",
        correctAnswer: "Pacific Ocean",
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        field: "Geography"
    },
    {
        difficulty: "easy",
        correctAnswer: "Mount Everest",
        question: "What is the highest mountain in the world?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Denali"],
        field: "Geography"
    },
    {
        difficulty: "medium",
        correctAnswer: "Australia",
        question: "Which continent is known as the 'island continent'?",
        options: ["Antarctica", "Australia", "South America", "Africa"],
        field: "Geography"
    },
    {
        difficulty: "medium",
        correctAnswer: "Sahara",
        question: "What is the largest desert in the world?",
        options: ["Arabian", "Gobi", "Kalahari", "Sahara"],
        field: "Geography"
    },
    {
        difficulty: "medium",
        correctAnswer: "Amazon Rainforest",
        question: "What is the largest rainforest in the world?",
        options: ["Congo Rainforest", "Daintree Rainforest", "Amazon Rainforest", "Valdivian Rainforest"],
        field: "Geography"
    },
    {
        difficulty: "hard",
        correctAnswer: "Ulaanbaatar",
        question: "What is the capital of Mongolia?",
        options: ["Astana", "Ulaanbaatar", "Tashkent", "Bishkek"],
        field: "Geography"
    },
    {
        difficulty: "hard",
        correctAnswer: "Vatican City",
        question: "What is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
        field: "Geography"
    },
    {
        difficulty: "hard",
        correctAnswer: "Kilimanjaro",
        question: "What is the highest peak in Africa?",
        options: ["Kilimanjaro", "Mount Kenya", "Ras Dashen", "Simien Mountains"],
        field: "Geography"
    },
    {
        difficulty: "hard",
        correctAnswer: "Atacama Desert",
        question: "What is the driest desert in the world?",
        options: ["Sahara", "Mojave", "Atacama Desert", "Gobi"],
        field: "Geography"
    },
    {
        difficulty: "easy",
        correctAnswer: "Soccer",
        question: "What is the most popular sport in the world?",
        options: ["Basketball", "Cricket", "Soccer", "Tennis"],
        field: "Sports"
    },
    {
        difficulty: "easy",
        correctAnswer: "Michael Jordan",
        question: "Who is often considered the greatest basketball player of all time?",
        options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Shaquille O'Neal"],
        field: "Sports"
    },
    {
        difficulty: "easy",
        correctAnswer: "Michael Phelps",
        question: "Who has won the most Olympic gold medals?",
        options: ["Usain Bolt", "Carl Lewis", "Mark Spitz", "Michael Phelps"],
        field: "Sports"
    },
    {
        difficulty: "medium",
        correctAnswer: "Tour de France",
        question: "Which cycling race is known as the most prestigious in the world?",
        options: ["Giro d'Italia", "Tour de France", "Vuelta a España", "Paris-Roubaix"],
        field: "Sports"
    },
    {
        difficulty: "medium",
        correctAnswer: "Wimbledon",
        question: "Which tennis tournament is played on grass courts?",
        options: ["Australian Open", "French Open", "US Open", "Wimbledon"],
        field: "Sports"
    },
    {
        difficulty: "medium",
        correctAnswer: "Brazil",
        question: "Which country has won the most FIFA World Cup titles?",
        options: ["Germany", "Italy", "Brazil", "Argentina"],
        field: "Sports"
    },
    {
        difficulty: "hard",
        correctAnswer: "1950",
        question: "In what year did the first Formula 1 World Championship take place?",
        options: ["1946", "1950", "1954", "1960"],
        field: "Sports"
    },
    {
        difficulty: "hard",
        correctAnswer: "Jack Nicklaus",
        question: "Who has won the most major championships in golf?",
        options: ["Tiger Woods", "Arnold Palmer", "Jack Nicklaus", "Gary Player"],
        field: "Sports"
    },
    {
        difficulty: "hard",
        correctAnswer: "Five",
        question: "How many players are there in a basketball team on the court at any one time?",
        options: ["Five", "Six", "Seven", "Eight"],
        field: "Sports"
    },
    {
        difficulty: "hard",
        correctAnswer: "Wilt Chamberlain",
        question: "Who scored 100 points in a single NBA game?",
        options: ["Michael Jordan", "Wilt Chamberlain", "Kobe Bryant", "LeBron James"],
        field: "Sports"
    },
    {
        difficulty: "easy",
        correctAnswer: "William Shakespeare",
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        field: "Literature"
    },
    {
        difficulty: "easy",
        correctAnswer: "J.K. Rowling",
        question: "Who is the author of the 'Harry Potter' series?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"],
        field: "Literature"
    },
    {
        difficulty: "easy",
        correctAnswer: "Homer",
        question: "Who is the author of 'The Iliad' and 'The Odyssey'?",
        options: ["Virgil", "Sophocles", "Homer", "Aeschylus"],
        field: "Literature"
    },
    {
        difficulty: "medium",
        correctAnswer: "George Orwell",
        question: "Who wrote '1984' and 'Animal Farm'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Kurt Vonnegut"],
        field: "Literature"
    },
    {
        difficulty: "medium",
        correctAnswer: "Fyodor Dostoevsky",
        question: "Who wrote 'Crime and Punishment'?",
        options: ["Leo Tolstoy", "Anton Chekhov", "Fyodor Dostoevsky", "Ivan Turgenev"],
        field: "Literature"
    },
    {
        difficulty: "medium",
        correctAnswer: "Herman Melville",
        question: "Who wrote 'Moby-Dick'?",
        options: ["Herman Melville", "Mark Twain", "Nathaniel Hawthorne", "Edgar Allan Poe"],
        field: "Literature"
    },
    {
        difficulty: "hard",
        correctAnswer: "James Joyce",
        question: "Who wrote 'Ulysses'?",
        options: ["James Joyce", "Samuel Beckett", "Virginia Woolf", "T.S. Eliot"],
        field: "Literature"
    },
    {
        difficulty: "hard",
        correctAnswer: "Gabriel Garcia Marquez",
        question: "Who wrote 'One Hundred Years of Solitude'?",
        options: ["Gabriel Garcia Marquez", "Pablo Neruda", "Isabel Allende", "Jorge Luis Borges"],
        field: "Literature"
    },
    {
        difficulty: "hard",
        correctAnswer: "Harper Lee",
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
        field: "Literature"
    },
    {
        difficulty: "hard",
        correctAnswer: "Miguel de Cervantes",
        question: "Who wrote 'Don Quixote'?",
        options: ["Miguel de Cervantes", "Federico Garcia Lorca", "Gabriel Garcia Marquez", "Jorge Luis Borges"],
        field: "Literature"
    },
    {
        difficulty: "easy",
        correctAnswer: "3.14",
        question: "What is the approximate value of Pi?",
        options: ["2.72", "3.14", "1.62", "1.41"],
        field: "Mathematics"
    },
    {
        difficulty: "easy",
        correctAnswer: "Right angle",
        question: "What is an angle of 90 degrees called?",
        options: ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"],
        field: "Mathematics"
    },
    {
        difficulty: "easy",
        correctAnswer: "4",
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        field: "Mathematics"
    },
    {
        difficulty: "medium",
        correctAnswer: "Pythagorean Theorem",
        question: "What theorem states that in a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides?",
        options: ["Pythagorean Theorem", "Fundamental Theorem of Algebra", "Fermat's Last Theorem", "Law of Sines"],
        field: "Mathematics"
    },
    {
        difficulty: "medium",
        correctAnswer: "Prime number",
        question: "What do you call a number that has no positive divisors other than 1 and itself?",
        options: ["Composite number", "Even number", "Odd number", "Prime number"],
        field: "Mathematics"
    },
    {
        difficulty: "medium",
        correctAnswer: "Quadratic equation",
        question: "What type of equation is ax^2 + bx + c = 0?",
        options: ["Linear equation", "Quadratic equation", "Cubic equation", "Exponential equation"],
        field: "Mathematics"
    },
    {
        difficulty: "hard",
        correctAnswer: "Fibonacci sequence",
        question: "What is the name of the sequence that starts with 0 and 1, and each subsequent number is the sum of the previous two?",
        options: ["Arithmetic sequence", "Geometric sequence", "Harmonic sequence", "Fibonacci sequence"],
        field: "Mathematics"
    },
    {
        difficulty: "hard",
        correctAnswer: "Euler's Identity",
        question: "Which mathematical equation is known as 'the most beautiful equation' and links five fundamental mathematical constants?",
        options: ["Euler's Identity", "Pythagorean Theorem", "Fermat's Last Theorem", "Riemann Hypothesis"],
        field: "Mathematics"
    },
    {
        difficulty: "hard",
        correctAnswer: "Calculus",
        question: "What branch of mathematics deals with the study of change and motion, using derivatives and integrals?",
        options: ["Algebra", "Geometry", "Trigonometry", "Calculus"],
        field: "Mathematics"
    },
    {
        difficulty: "hard",
        correctAnswer: "Gödel's Incompleteness Theorems",
        question: "Which theorems demonstrated the inherent limitations of every formal axiomatic system?",
        options: ["Gödel's Incompleteness Theorems", "Cantor's Theorem", "Fermat's Last Theorem", "Poincaré Conjecture"],
        field: "Mathematics"
    }
];



let currentQuestion = 0;
let score = 0;
let filteredQuestions = [];

const selectedDifficultyElement = document.getElementById("difficulty");
const selectedFieldElement = document.getElementById("field");
const questionElement = document.getElementById("questionid");
const optionsElements = [
    document.getElementById("o1"),
    document.getElementById("o2"),
    document.getElementById("o3"),
    document.getElementById("o4")
];

function startQuiz() {
    const containerElement = document.getElementById("container");
    const questionDisplayElement = document.getElementById("questionDisplay");
    containerElement.style.display = 'none';
    questionDisplayElement.style.display = 'block';

    const selectedField = selectedFieldElement.value;
    const selectedDifficulty = selectedDifficultyElement.value;
    filteredQuestions = scienceQuestions.filter(question => {
        return question.difficulty === selectedDifficulty && question.field === selectedField;
    });

    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    const current = filteredQuestions[currentQuestion];
    questionElement.textContent = current.question;
    optionsElements.forEach((optionElement, index) => {
        optionElement.textContent = current.options[index];
        optionElement.previousElementSibling.checked = false;
        optionElement.style.backgroundColor = ''; 
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.nextElementSibling.textContent.trim();
        const correctAnswer = filteredQuestions[currentQuestion].correctAnswer;
        
        optionsElements.forEach(optionElement => {
            if (optionElement.textContent.trim() === correctAnswer) {
                optionElement.style.backgroundColor = 'green'; 
            } else if (optionElement.previousElementSibling.checked) {
                optionElement.style.backgroundColor = 'red'; 
            }
        });

        if (answer === correctAnswer) {
            score++;
        }

        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < filteredQuestions.length) {
                loadQuestion();
            } else {
                displayResult();
            }
        }, 1000); 
    } else {
        alert("Please select an option!");
    }
}

function displayResult() {
    const questionDisplayElement = document.getElementById("questionDisplay");
    const resultDisplayElement = document.getElementById("resultDisplay");
    const scoreElement = document.getElementById("score");

    questionDisplayElement.style.display = 'none';
    resultDisplayElement.style.display = 'block';
    scoreElement.textContent = `You scored ${score} out of ${filteredQuestions.length}`;
}

function restartQuiz() {
    const containerElement = document.getElementById("container");
    const resultDisplayElement = document.getElementById("resultDisplay");

    containerElement.style.display = 'block';
    resultDisplayElement.style.display = 'none';
}
