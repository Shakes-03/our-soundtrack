// --- FEATURE 1: WELCOME BOOT SPLASH SCREEN ---
const welcomeModal = document.getElementById('welcome-modal');
const startAppBtn = document.getElementById('start-app-btn');

if (startAppBtn && welcomeModal) {
    startAppBtn.addEventListener('click', () => {
        welcomeModal.classList.add('hidden');
    });
}

// --- FEATURE 2: LOVE METER MINI-GAME ---
let loveScore = 0;
const mashBtn = document.getElementById('mash-btn');
const loveProgress = document.getElementById('love-progress');
const loveStatus = document.getElementById('love-status');

const milestones = [
    { threshold: 20, text: "Level 1: Cute Crushes" },
    { threshold: 50, text: "Level 2: Endless Laughs" },
    { threshold: 80, text: "Level 3: True Soulmates" },
    { threshold: 100, text: "Level MAX: Infinite Cuddles! ❤️" }
];

if (mashBtn) {
    mashBtn.addEventListener('click', () => {
        playSound('sfx-click');
        if (loveScore < 100) {
            loveScore += 5;
            loveProgress.style.width = loveScore + "%";

            // Update milestone status text
            milestones.forEach(m => {
                if (loveScore === m.threshold) {
                    loveStatus.textContent = m.text;
                }
            });

            // Trigger max love rewards explicitly outside the loop for reliability
            if (loveScore >= 100) {
    playSound('sfx-coin');
    
    const secretCard = document.getElementById('secret-video-card');
    const secretVid = document.getElementById('secret-video');
    
    if (secretCard) {
        secretCard.classList.remove('hidden');
    }
    if (secretVid) {
        secretVid.load();
        
        // Optional: Muting temporarily guarantees the browser lets it auto-start, 
        // after which she can unmute using the video controls bar.
        secretVid.muted = false; 
        
        secretVid.play().catch(error => {
            console.log("Browser blocked autoplay. User can use video controls to play.", error);
        });
    }
}

// --- FEATURE 3: RETRO SOUND EFFECTS (SFX) HELPER ---
function playSound(sfxId) {
    const sfx = document.getElementById(sfxId);
    if (sfx) {
        sfx.currentTime = 0;
        sfx.play().catch(e => console.log("Audio play blocked by browser policy", e));
    }
}

// Hook SFX into buttons (excluding mash-btn to avoid overlapping sounds)
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.id !== 'mash-btn') playSound('sfx-click');
    });
});

// --- FEATURE 4: TOGETHER COUNTDOWN TIMER ---
const startDate = new Date("2023-04-01T00:00:00"); 

function updateCountdown() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);

    const counterDisplay = document.getElementById("counter-display");
    if (counterDisplay) {
        counterDisplay.innerText = `${days}d ${hours}h ${minutes}m`;
    }
}

updateCountdown();
setInterval(updateCountdown, 60000);

// --- FEATURE 5: AUDIO PLAYER & PLAYLIST LOGIC ---
const songs = [
    {
        title: "Love Me Again",
        artist: "John Newman",
        cover: "assets/photos/default.jpg", 
        audioSrc: "assets/audio/John Newman - Love Me Again (Lyrics).mp3", 
        memory: "The song that signifies the start of our journey together <3"
    },
    {
        title: "Breezeblocks",
        artist: "Alt-J",
        cover: "assets/photos/IMG-20231021-WA0026.jpg",
        audioSrc: "assets/audio/Alt-J () Breezeblocks Lyrics (HQ).mp3",
        memory: "This song means so much to us and everytime I hear it, I think of you <3"
    },
    {
        title: "Wicked Game",
        artist: "Chris Isaak",
        cover: "assets/photos/IMG-20240810-WA0001.jpg",
        audioSrc: "assets/audio/Chris Isaak - Wicked Game (Lyrics).mp3",
        memory: "I never thought I'd love someone like you <3"
    },
    {
        title: "Art Deco",
        artist: "Lana Del Rey",
        cover: "assets/photos/IMG-20240906-WA0051.jpg",
        audioSrc: "assets/audio/Lana-Del-Rey-Art-Deco-Lyrics.mp3",
        memory: "You're my favorite person to listen to Lana Del Rey with <3"
    },
    {
        title: "Sanctuary",
        artist: "Joji",
        cover: "assets/photos/IMG-20241229-WA0000.jpg",
        audioSrc: "assets/audio/Joji - Sanctuary (Lyrics).mp3",
        memory: "You are my sanctuary, my safe place, and my home :)"
    },
    {
        title: "I Wanna Be Yours",
        artist: "Artic Monkeys",
        cover: "assets/photos/IMG-20250325-WA0003.jpg",
        audioSrc: "assets/audio/Arctic Monkeys - I Wanna Be Yours.mp3",
        memory: "I wanna be yours, in every way possible, forever and always <3"
    },
    {
        title: "Young and Beautiful",
        artist: "Lana Del Rey",
        cover: "assets/photos/IMG-20250421-WA0009.jpg",
        audioSrc: "assets/audio/Lana Del Rey - Young And Beautiful (Lyrics).mp3",
        memory: "I will always love you <3"
    },
    {
        title: "Kiss from a Rose",
        artist: "Seal",
        cover: "assets/photos/IMG-20250214-WA0006.jpg",
        audioSrc: "assets/audio/Seal-Kiss-From-A-Rose-Lyrics.mp3",
        memory: "Kisses from you are my favourite <3"
    },
    {
        title: "Die For You",
        artist: "The Weeknd",
        cover: "assets/photos/IMG-20230802-WA0048.jpg",
        audioSrc: "assets/audio/The-Weeknd-DIE-FOR-YOU-Lyrics.mp3",
        memory: "I would absolutely die for you <3"
    },
    {
        title: "Video Games",
        artist: "Lana Del Rey",
        cover: "assets/photos/IMG-20240824-WA0032.jpg",
        audioSrc: "assets/audio/Lana-Del-Rey-Video-Games-Lyrics.mp3",
        memory: "It will always be You <3"
    },
    {
        title: "Amour plastique",
        artist: "Videoclub",
        cover: "assets/photos/IMG-20240323-WA0035.jpg",
        audioSrc: "assets/audio/VIDEOCLUB-Amour-plastique-Lyrics.mp3",
        memory: "Remember this song <3"
    },
    {
        title: "Nothing Without You",
        artist: "The Weeknd",
        cover: "assets/photos/IMG-20240906-WA0033.jpg",
        audioSrc: "assets/audio/The-Weeknd-Nothing-Without-You-A.mp3",
        memory: "I'd be lost without you <3"
    },
    {
        title: "Unthinkable",
        artist: "Alicia Keys",
        cover: "assets/photos/IMG-20231205-WA0018.jpg",
        audioSrc: "assets/audio/Alicia Keys - Un-thinkable (Im Ready) (1).mp3",
        memory: "I still get butterflies when I think of you <3"
    },
    {
        title: "Yellow",
        artist: "Coldplay",
        cover: "assets/photos/IMG-20241229-WA0001.jpg",
        audioSrc: "assets/audio/@coldplay - Yellow (Lyrics).mp3",
        memory: "You're my reason for everything, my sunshine!"
    }
];

const audio = new Audio();
const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const currentImg = document.getElementById('current-img');
const vinyl = document.getElementById('vinyl');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const memoryText = document.getElementById('memory-text');
const playlistEl = document.getElementById('playlist');
const likeBtn = document.getElementById('like-btn');

let currentSongIndex = 0;
let isPlaying = false;

function initApp() {
    loadSong(currentSongIndex);
    renderPlaylist();
}

function loadSong(index) {
    const song = songs[index];
    trackTitle.textContent = song.title;
    trackArtist.textContent = song.artist;
    currentImg.src = song.cover;
    audio.src = song.audioSrc;
    memoryText.textContent = song.memory;
    
    document.querySelectorAll('.playlist-item').forEach((item, idx) => {
        if (idx === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function playSong() {
    isPlaying = true;
    audio.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
    vinyl.classList.add('playing');
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    vinyl.classList.remove('playing');
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return;
    
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;

    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) durationSeconds = `0${durationSeconds}`;
    durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function renderPlaylist() {
    playlistEl.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.classList.add('playlist-item');
        if (index === currentSongIndex) li.classList.add('active');
        
        li.innerHTML = `
            <img src="${song.cover}" alt="${song.title}" style="width: 48px; height: 48px; object-fit: cover; image-rendering: pixelated; border: 2px solid var(--card-border);">
            <div class="playlist-item-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
        `;
        
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });
        
        playlistEl.appendChild(li);
    });
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);
progressContainer.addEventListener('click', setProgress);

likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
    const heartIcon = likeBtn.querySelector('i');
    
    if (likeBtn.classList.contains('liked')) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');

        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#f43f5e', '#fb7185', '#fda4af']
        });
    } else {
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
    }
});

initApp();
