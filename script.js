const data = [
	{
		img: './images/Akira-Toriyama.jpg',
		name: 'Akira Toriyama',
		known:
      'Recognition for his highly successful manga series Dr.Slump, before going on to create Dragon Ball-Z',
		info: "Akira Toriyama is one of Japan's most celebrated manga artists and writers.Toriyama studied graphic design at the Prefectural Industrial High School. Toriyama created his final Dragon Ball manga in 1989.",
	},
	{
		img: './images/Alice-Walker.jpg',
		name: 'Alice Walker',
		known:
      'first African-American woman to win the Pulitzer Prize for Fiction. In recent years she has spoken out repeatedly in support of Julian Assange.',
		info: 'American novelist, short story writer, poet, and social activist. Over the span of her career, Walker has published seventeen novels and short story collections, twelve non-fiction works, and collections of essays and poetry.',
	},
	{
		img: './images/Alice-Waters.jpg',
		name: 'Alice Waters',
		known:
      'Waters has authored the books Chez Panisse Cooking, The Art of Simple Food I and II, and 40 Years of Chez Panisse.',
		info: 'American chef, restaurateur, and author. She is the owner of Chez Panisse, a Berkeley, California, restaurant famous for taking credit for creating the farm-to-table movement and for pioneering California cuisine, which she opened in 1971.',
	},
	{
		img: './images/Anne-Tyler.jpg',
		name: 'Anne Tyler',
		known:
      "Tyler's ninth novel, Dinner at the Homesick Restaurant, was a finalist for the Pulitzer Prize, PEN/Faulkner Award, and the American Book Award for Fiction in 1983.",
		info: 'Has published twenty-three novels, including Dinner at the Homesick Restaurant, The Accidental Tourist, and Breathing Lessons. All three were finalists for the Pulitzer Prize for Fiction, and Breathing Lessons won the prize in 1989. She has also won the Janet Heidinger Kafka Prize.',
	},
	{
		img: './images/George-Saunders.jpg',
		name: 'George Saunders',
		known:
      'A professor at Syracuse University, Saunders won the first National Magazine Award for fiction in 1994.',
		info: "George Saunders (born December 2, 1958) is an American writer of short stories, essays, novellas, children's books, and novels. His writing has appeared in The New Yorker, Harper's, McSweeney's, and GQ. He also contributed a weekly column, American Psyche, to the weekend magazine of The Guardian between 2006 and 2008.",
	},
	{
		img: './images/GRRM.jpg',
		name: 'George R R Martin',
		known:
      'Martin is known for his regular attendance at science fiction conventions and comics conventions, and his accessibility to fans.',
		info: 'George Raymond Richard Martin (born George Raymond Martin; September 20, 1948), also known as GRRM, is an American novelist, screenwriter, television producer and short story writer. He is the author of the series of epic fantasy novels A Song of Ice and Fire, which were adapted into the Emmy Award-winning HBO series Game of Thrones ',
	},
	{
		img: './images/hiromu-arakawa-copy.jpeg',
		name: 'Hiromu Arakawa',
		known: 'Best known for the manga series Fullmetal Alchemist (2001–2010)',
		info: 'Japanese manga artist. She is best known for the manga series Fullmetal Alchemist (2001–2010), which became a hit both domestically and internationally, and was adapted into two anime television series. She is also known for Silver Spoon (2011–2019) and the manga adaptation of The Heroic Legend of Arslan novels.',
	},
	{
		img: './images/j-k.jpg',
		name: 'Joanne Rowling',
		known:
      'Better known by her pen name J. K. Rowling. She is known for the books of Harry Potter and Fantastic Beasts and where to find them.',
		info: 'Better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, and screenwriter. She is author of the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.',
	},
	{
		img: './images/Jordan_Peterson.jpg',
		name: 'Jordan Bernt Peterson',
		known:
      'Jordan Peterson is a Canadian professor of psychology, clinical psychologist, YouTube personality, and author.',
		info: 'Has a PhD in clinical psychology from McGill University. Taught at Harvard. Published his first book, Maps of Meaning: The Architecture of Belief. He released a series of Youtube videos criticizig the Act to amend the Canadian Human Rights Act and the Criminal Code.',
	},
	{
		img: './images/Michio_Kaku.jpg',
		name: 'Michio Kaku',
		known:
      "Author of several books about physics and related topics notably 'The Physics of Impossible' and has made frequent appearances on radio, television, and film.",
		info: 'American theoretical physicist, futurist, and popularizer of science (science communicator). He is a professor of theoretical physics in the City College of New York and CUNY Graduate Center. He is a regular contributor to his own blog, as well as other popular media outlets. For his efforts to bridge science and science fiction, he is a 2021 Sir Arthur Clarke Lifetime Achievement Awardee.',
	},
	{
		img: './images/Stephen-King.jpeg',
		name: 'Stephen Edwin King',
		known:
      'Received Bram Stoker Awards, World Fantasy Awards, and British Fantasy Society Awards. In 2003, the National Book Foundation awarded him the Medal for Distinguished Contribution to American Letters',
		info: 'American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. Described as the "King of Horror", a play on his surname and a reference to his high standing in pop culture, his books have sold more than 350 million copies, and many have been adapted into films, television series, miniseries, and comic books.',
	},
	{
		img: './images/Tom-Macarthy.jpg',
		name: 'Thomas Joseph McCarthy',
		known:
      'McCarthy has received critical acclaim for his writing/direction work for the independent films The Station Agent (2003), The Visitor (2007), Win Win (2011), and Spotlight (2015)',
		info: 'American film director, screenwriter, and actor who has appeared in several films, including Meet the Parents and Good Night, and Good Luck, and television series such as The Wire, Boston Public, Law & Order etc.McCarthy won the Academy Award for Best Original Screenplay for Spotlight(2015), and earned him a nomination for the Academy Award for Best Director.',
	},
];
const header = document.getElementById('header');
const featuredSpeaker = document.querySelector('.featured-speakers');
const loadMore = document.querySelector('.load-more');
const loadMoreBtn = document.querySelector('.load-more-btn');
let initialLoad = 0;

// Function to load featured speakers section dynamically.

function printCards() {
	for (let i = initialLoad; i < initialLoad + 4; i += 1) {
		const markup = ` <div class="each-speaker" data-aos="zoom-in" data-aos-delay="200">
    <div class="speaker-img">
          <img src='${data[i].img}' alt="${data[i].name} photo" />
        </div>
        <div class="informations-container">
          <h2 class="title">${data[i].name}</h2>
          <p class="sub-title">
            ${data[i].known}
          </p>
          <div class="more-information">
            <p class="disclaimer">
              ${data[i].info}
            </p>
          </div>
        </div>
      </div>`;
		featuredSpeaker.innerHTML += markup;
		if (initialLoad === data.length - 4) {
			loadMoreBtn.style.display = 'none';
		}
	}
	initialLoad += 4;
}
printCards();

loadMore.addEventListener('click', printCards);

// Function to load timer in hero section

function countDown() {
	const now = new Date();
	const eventDate = new Date(2024, 9, 24, 9);
	const currentTime = now.getTime();
	const eventTime = eventDate.getTime();

	const remTime = eventTime - currentTime;
	let s = Math.floor(remTime / 1000);
	let m = Math.floor(s / 60);
	let h = Math.floor(m / 60);
	const d = Math.floor(h / 24);

	h %= 24;
	m %= 60;
	s %= 60;

	h = h < 10 ? `0${h}` : h;
	m = m < 10 ? `0${m}` : m;
	s = s < 10 ? `0${s}` : s;
	document.getElementById('days').textContent = d;
	document.getElementById('hours').textContent = h;
	document.getElementById('minutes').textContent = m;
	document.getElementById('seconds').textContent = s;

	setTimeout(countDown, 1000);
}
countDown();

// NavBar toggling functionality for smaller screens

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
const scrollLinks = document.querySelectorAll('.scroll-links');
const closeBtn = document.getElementById('close-btn');

navToggle.addEventListener('click', () => {
	navLinks.classList.add('show-links');
	// navLinkBtn.classList.toggle('hidden');
	closeBtn.classList.remove('hidden');
});

function removeActive() {
	scrollLinks.forEach((link) => {
		link.classList.remove('active');
	});
}

scrollLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		navLinks.classList.remove('show-links');
		removeActive();
		e.target.classList.add('active');
		closeBtn.classList.add('hidden');
	});
});

closeBtn.addEventListener('click', () => {
	navLinks.classList.remove('show-links');
	closeBtn.classList.add('hidden');
});

const options = {
	root: null,
	threshold: 0,
	rootMargin: '-150px',
};

const levelUpBtn = document.querySelector('.level-up');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) levelUpBtn.classList.remove('hidden');
		else levelUpBtn.classList.add('hidden');
	});
}, options);

observer.observe(header);
