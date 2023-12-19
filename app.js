alert("Login ID: admin@admin.com\nPassword: admin");
// Alert added
var temp;
var isPlaying = false;
var audio = new Audio();
const songs = [
  {
    id: "a1",
    songName: `Heeriye<br>
    <div class="subtitle">Arjit Singh</div>`,
    poster: "Poster/1.jpg",
  },
  {
    id: "a2",
    songName: `Ram Siya Ram<br>
    <div class="subtitle">Bhushan K</div>`,
    poster: "Poster/2.jpg",
  },
  {
    id: "a3",
    songName: `Guli Mata<br>
    <div class="subtitle">Shreya Ghoshal</div>`,
    poster: "Poster/3.jpg",
  },
  {
    id: "a4",
    songName: `Raataan Lambiyan<br>
    <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "Poster/4.jpg",
  },
  {
    id: "a5",
    songName: `Pyaar Hota Kai Baar<br>
    <div class="subtitle">Arjit</div>`,
    poster: "Poster/5.jpg",
  },
  {
    id: "a6",
    songName: `Khalsi<br>
    <div class="subtitle">Aditya Gadhavi</div>`,
    poster: "Poster/6.jpg",
  },
  {
    id: "a7",
    songName: `Chaleya<br>
    <div class="subtitle">Arjit Singh</div>`,
    poster: "Poster/7.jpg",
  },
  {
    id: "a8",
    songName: `Check Kar<br>
    <div class="subtitle">Permish Verma</div>`,
    poster: "Poster/8.jpg",
  },
  {
    id: "a9",
    songName: `Cheques<br>
    <div class="subtitle">Subh</div>`,
    poster: "Poster/9.jpg",
  },
  {
    id: "a10",
    songName: `Rolex Theme Song<br>
    <div class="subtitle">Anirudh</div>`,
    poster: "Poster/10.jpg",
  },
  {
    id: "a11",
    songName: `My Life in this Town<br>
    <div class="subtitle">Nikita Gandhi</div>`,
    poster: "Poster/11.jpg",
  },
  {
    id: "a12",
    songName: `On My Way<br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "Poster/12.jpg",
  },
  {
    id: "a13",
    songName: `Bilionera<br>
    <div class="subtitle">Otilia Bruma</div>`,
    poster: "Poster/13.jpg",
  },
  {
    id: "a14",
    songName: `Warhan<br>
    <div class="subtitle">Randall</div>`,
    poster: "Poster/14.jpg",
  },
  {
    id: "a15",
    songName: `Aam Jahe Munde<br>
    <div class="subtitle">Parmish Verma</div>`,
    poster: "Poster/15.jpg",
  },
  {
    id: "a16",
    songName: `Bad Boy<br>
    <div class="subtitle">Tungevaag</div>`,
    poster: "Poster/16.jpg",
  },
  {
    id: "a17",
    songName: `Sugar & Brownies<br>
    <div class="subtitle">Dharia</div>`,
    poster: "Poster/17.jpg",
  },
  {
    id: "a18",
    songName: `One Night in Dubai<br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "Poster/18.jpg",
  },
  {
    id: "a19",
    songName: `Headlight<br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "Poster/19.jpg",
  },
  {
    id: "a20",
    songName: `One Love<br>
    <div class="subtitle">Beyond the Blue</div>`,
    poster: "Poster/20.jpg",
  },
  {
    id: "a21",
    songName: `Aigiri Nandini<br>
    <div class="subtitle">Rajlakshmi Sanjay</div>`,
    poster: "Poster/21.jpg",
  },
  {
    id: "a22",
    songName: `Tumse Milke Dil Ka<br>
    <div class="subtitle">Sonu Nigam</div>`,
    poster: "Poster/22.jpg",
  },
  {
    id: "a23",
    songName: `Doope Shope<br>
    <div class="subtitle">Honey Singh</div>`,
    poster: "Poster/23.jpg",
  },
  {
    id: "a24",
    songName: `Bam Leheri<br>
    <div class="subtitle">Kailash Kher</div>`,
    poster: "Poster/24.jpg",
  },
  {
    id: "a25",
    songName: `Mera Intkam Dekhegi<br>
    <div class="subtitle">Krishna Beuraa</div>`,
    poster: "Poster/25.jpg",
  },
  {
    id: "a26",
    songName: `Cheques<br>
    <div class="subtitle">Subh</div>`,
    poster: "Poster/26.jpg",
  },
  {
    id: "a27",
    songName: `295<br>
    <div class="subtitle">Siddhu Moosewala</div>`,
    poster: "Poster/27.jpg",
  },
  {
    id: "a28",
    songName: `Nagada Remix<br>
    <div class="subtitle">Sush and Yohan</div>`,
    poster: "Poster/28.jpg",
  },
  {
    id: "a29",
    songName: `Baby Remix<br>
    <div class="subtitle">Sush and Yohan</div>`,
    poster: "Poster/29.jpg",
  },
  {
    id: "a30",
    songName: `End 2022 Remix<br>
    <div class="subtitle">Sush and Yohan</div>`,
    poster: "Poster/30.jpg",
  },
  {
    id: "a31",
    songName: `Baharla Madhumas Ha<br>
    <div class="subtitle">Sush and Yohan</div>`,
    poster: "Poster/31.jpg",
  },
  {
    id: "a32",
    songName: `Beggin You<br>
    <div class="subtitle">Sush and Yohan</div>`,
    poster: "Poster/32.jpg",
  },
  {
    id: "a33",
    songName: `Navratri Nagada Remix<br>
    <div class="subtitle">Sush and Yohan</div>`,
    poster: "Poster/33.jpg",
  },
  {
    id: "a34",
    songName: `Anushqa | Something Is Common<br>
    <div class="subtitle">Sush and Yohan</div>`,
    poster: "Poster/34.jpg",
  },
  {
    id: "a35",
    songName: `2021 Year End<br>
    <div class="subtitle">Sush and Yohan</div>`,
    poster: "Poster/35.jpg",
  },
  // {
  //   id: "a36",
  //   songName: `On My Way<br>
  //   <div class="subtitle">Sush and Yohan</div>`,
  //   poster: "Poster/36.jpg"
  // }
];

function togglePlay(Id) {
  const source = "./audio/" + Id + ".mp3";
  if (audio.src !== new URL(source, document.baseURI).href) {
    let elem = document.querySelector(".bi-pause-circle-fill");
    if (elem) {
      let prev = elem.getAttribute("id").slice(1);
      pause(prev);
    }
    delete audio;
    audio = new Audio(source);
    isPlaying = false;
  }
  isPlaying ? pause(Id) : play(Id);
  temp = Id;
  // headlight 
  document.getElementById("title").innerHTML = `${
    songs[temp - 1].songName
  }`;
  console.log(temp);
}

function play(Id) {
  isPlaying = true;
  // <i class="bi bi-pause-circle-fill"></i>
  document.getElementById("a" + Id).classList.remove("bi-play-circle-fill");
  document.getElementById("a" + Id).classList.add("bi-pause-circle-fill");
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  document.getElementById("poster_master_play").src = "./Poster/" + Id + ".jpg";
  audio.play();
  audio.addEventListener("timeupdate", () => {
    let music_curr = audio.currentTime;
    let music_dur = audio.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);
    if (sec1 < 10) {
      sec1 = `0${sec1}`;
    }
    currentEnd.innerHTML = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
      sec2 = `0${sec2}`;
    }
    currentStart.innerHTML = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
    // console.log(seekBar);
  });

  seek.addEventListener("change", () => {
    audio.currentTime = (seek.value * audio.duration) / 100;
  });
}

function pause(Id) {
  isPlaying = false;
  document.getElementById("a" + Id).classList.remove("bi-pause-circle-fill");
  document.getElementById("a" + Id).classList.add("bi-play-circle-fill");
  masterPlay.classList.remove("bi-pause-fill");
  masterPlay.classList.add("bi-play-fill");
  audio.pause();
}

function previous() {
  if (temp > 2) {
    togglePlay(temp - 1);
  }
}

function next() {
  if (temp < 36) {
    togglePlay(temp + 1);
  }
}

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];
let rem_song = document.getElementsByClassName("rem_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

// let pop_song = document.getElementsByClassName("pop_song");
function scrollleft() {
  rem_song.scrollLeft -= 330;
  // alert("Moved L");
}

function scrollright() {
  rem_song.scrollLeft += 330;
  // alert("Moved R");
}

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let Artists_bx = document.getElementsByClassName("Artists_bx")[0];

pop_art_right.addEventListener("click", () => {
  Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener("click", () => {
  Artists_bx.scrollLeft -= 330;
});

function close() {
  document.getElementById("login").style.display = "none";
}

function openloginpage() {
  document.getElementById("login").style.display = "flex";
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("password").value;

  if (email == "") {
    alert("Please enter your name");
  } else if (pwd == "") {
    alert("Please enter Password");
  } else if (email == "admin@admin.com") {
    close();
  } else if (pwd == "admin") {
    close();
  } else if (document.getElementById("t5").value.length < 4) {
    alert("Password minimum length is 5");
  } else if (document.getElementById("t5").value.length > 12) {
    alert("Password max length is 12");
  } else {
    close();
  }
});

//dont above

// let remix_song_left = document.getElementsByClassName("remix_song_left");
// let remix_song_right = document.getElementsByClassName("remix_song_right");
// let rem_song = document.getElementsByClassName("rem_song");

// remix_song_right.addEventListener("click", () => {
//   rem_song.scrollLeft += 330;
// });
// remix_song_left.addEventListener("click", () => {
//   rem_song.scrollLeft -= 330;
// });

//mehul code started here
// if (audio.paused) {
//   masterPlay.classList.remove("bi-pause-fill");
//   masterPlay.classList.add("bi-play-fill");
// }

// search
//mehul code started here 6/11/2023
// const songs = [
//   {
//     id: "a1",
//     songName: `Heeriye<br>
//     <div class="subtitle">Arjit Singh</div>`,
//     poster: "Poster/1.jpg",
//   },
//   {
//     id: "a2",
//     songName: `Ram Siya Ram<br>
//     <div class="subtitle">Bhushan K</div>`,
//     poster: "Poster/2.jpg",
//   },
//   {
//     id: "a3",
//     songName: `Guli Mata<br>
//     <div class="subtitle">Shreya Ghoshal</div>`,
//     poster: "Poster/3.jpg",
//   },
//   {
//     id: "a4",
//     songName: `Raataan Lambiyan<br>
//     <div class="subtitle">Jubin Nautiyal</div>`,
//     poster: "Poster/4.jpg",
//   },
//   {
//     id: "a5",
//     songName: `Pyaar Hota Kai Baar<br>
//     <div class="subtitle">Arjit</div>`,
//     poster: "Poster/5.jpg",
//   },
//   {
//     id: "a6",
//     songName: `Khalsi<br>
//     <div class="subtitle">Aditya Gadhavi</div>`,
//     poster: "Poster/6.jpg",
//   },
//   {
//     id: "a7",
//     songName: `Chaleya<br>
//     <div class="subtitle">Arjit Singh</div>`,
//     poster: "Poster/7.jpg",
//   },
//   {
//     id: "a8",
//     songName: `Check Kar<br>
//     <div class="subtitle">Permish Verma</div>`,
//     poster: "Poster/8.jpg",
//   },
//   {
//     id: "a9",
//     songName: `Cheques<br>
//     <div class="subtitle">Subh</div>`,
//     poster: "Poster/9.jpg",
//   },
//   {
//     id: "a10",
//     songName: `Rolex Theme Song<br>
//     <div class="subtitle">Anirudh</div>`,
//     poster: "Poster/10.jpg",
//   },
//   {
//     id: "a11",
//     songName: `My Life in this Town<br>
//     <div class="subtitle">Nikita Gandhi</div>`,
//     poster: "Poster/11.jpg",
//   },
//   {
//     id: "a12",
//     songName: `On My Way<br>
//     <div class="subtitle">Alan Walker</div>`,
//     poster: "Poster/12.jpg",
//   },
//   {
//     id: "a13",
//     songName: `Bilionera<br>
//     <div class="subtitle">Otilia Bruma</div>`,
//     poster: "Poster/13.jpg",
//   },
//   {
//     id: "a14",
//     songName: `Warhan<br>
//     <div class="subtitle">Randall</div>`,
//     poster: "Poster/14.jpg",
//   },
//   {
//     id: "a15",
//     songName: `Aam Jahe Munde<br>
//     <div class="subtitle">Parmish Verma</div>`,
//     poster: "Poster/15.jpg",
//   },
//   {
//     id: "a16",
//     songName: `Bad Boy<br>
//     <div class="subtitle">Tungevaag</div>`,
//     poster: "Poster/16.jpg",
//   },
//   {
//     id: "a17",
//     songName: `Sugar & Brownies<br>
//     <div class="subtitle">Dharia</div>`,
//     poster: "Poster/17.jpg",
//   },
//   {
//     id: "a18",
//     songName: `One Night in Dubai<br>
//     <div class="subtitle">Alan Walker</div>`,
//     poster: "Poster/18.jpg",
//   },
//   {
//     id: "a19",
//     songName: `Headlight<br>
//     <div class="subtitle">Alan Walker</div>`,
//     poster: "Poster/19.jpg",
//   },
//   {
//     id: "a20",
//     songName: `One Love<br>
//     <div class="subtitle">Beyond the Blue</div>`,
//     poster: "Poster/20.jpg",
//   },
//   {
//     id: "a21",
//     songName: `Aigiri Nandini<br>
//     <div class="subtitle">Rajlakshmi Sanjay</div>`,
//     poster: "Poster/21.jpg",
//   },
//   {
//     id: "a22",
//     songName: `Tumse Milke Dil Ka<br>
//     <div class="subtitle">Sonu Nigam</div>`,
//     poster: "Poster/22.jpg",
//   },
//   {
//     id: "a23",
//     songName: `Doope Shope<br>
//     <div class="subtitle">Honey Singh</div>`,
//     poster: "Poster/23.jpg",
//   },
//   {
//     id: "a24",
//     songName: `Bam Leheri<br>
//     <div class="subtitle">Kailash Kher</div>`,
//     poster: "Poster/24.jpg",
//   },
//   {
//     id: "a25",
//     songName: `Mera Intkam Dekhegi<br>
//     <div class="subtitle">Krishna Beuraa</div>`,
//     poster: "Poster/25.jpg",
//   },
//   {
//     id: "a26",
//     songName: `Cheques<br>
//     <div class="subtitle">Subh</div>`,
//     poster: "Poster/26.jpg",
//   },
//   {
//     id: "a27",
//     songName: `295<br>
//     <div class="subtitle">Siddhu Moosewala</div>`,
//     poster: "Poster/27.jpg",
//   },
//   {
//     id: "a28",
//     songName: `Nagada Remix<br>
//     <div class="subtitle">Sush and Yohan</div>`,
//     poster: "Poster/28.jpg",
//   },
//   {
//     id: "a29",
//     songName: `Baby Remix<br>
//     <div class="subtitle">Sush and Yohan</div>`,
//     poster: "Poster/29.jpg",
//   },
//   {
//     id: "a30",
//     songName: `End 2022 Remix<br>
//     <div class="subtitle">Sush and Yohan</div>`,
//     poster: "Poster/30.jpg",
//   },
//   {
//     id: "a31",
//     songName: `Baharla Madhumas Ha<br>
//     <div class="subtitle">Sush and Yohan</div>`,
//     poster: "Poster/31.jpg",
//   },
//   {
//     id: "a32",
//     songName: `Beggin You<br>
//     <div class="subtitle">Sush and Yohan</div>`,
//     poster: "Poster/32.jpg",
//   },
//   {
//     id: "a33",
//     songName: `Navratri Nagada Remix<br>
//     <div class="subtitle">Sush and Yohan</div>`,
//     poster: "Poster/33.jpg",
//   },
//   {
//     id: "a34",
//     songName: `Anushqa | Something Is Common<br>
//     <div class="subtitle">Sush and Yohan</div>`,
//     poster: "Poster/34.jpg",
//   },
//   {
//     id: "a35",
//     songName: `2021 Year End<br>
//     <div class="subtitle">Sush and Yohan</div>`,
//     poster: "Poster/35.jpg",
//   },
//   // {
//   //   id: "a36",
//   //   songName: `On My Way<br>
//   //   <div class="subtitle">Sush and Yohan</div>`,
//   //   poster: "Poster/36.jpg"
//   // }
// ];

let searchResults = document.getElementsByClassName("searchResults")[0];
songs.forEach((element) => {
  const { id, songName, poster } = element;
  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;
  card.innerHTML = `<img src="${poster}" alt="">
<div class="content">
  ${songName}
</div>`;
  searchResults.appendChild(card);
});

let input = document.getElementById("searchBox");
input.addEventListener("keyup", () => {
  let input_value = input.value.toUpperCase();
  console.log(input_value);
  let items = searchResults.getElementsByTagName("a");

  for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName("content")[0];
    let text_value = as.textContent || as.innerHTML;

    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }

    if (input.value == 0) {
      items[index].style.display = "none";
    }
  }
});

//mehul End started here 6/11/2023
// search

// let music = new Audio("audio/1.mp3");
let masterPlay = document.getElementById("masterPlay");
masterPlay.addEventListener("click", () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    document.getElementById("a" + temp).classList.remove("bi-play-circle-fill");
    document.getElementById("a" + temp).classList.add("bi-pause-circle-fill");
  } else {
    audio.pause();
    masterPlay.classList.remove("bi-pause-fill");
    masterPlay.classList.add("bi-play-fill");
    document
      .getElementById("a" + temp)
      .classList.remove("bi-pause-circle-fill");
    document.getElementById("a" + temp).classList.add("bi-play-circle-fill");
  }
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

// audio.addEventListener("timeupdate", () => {
//   let music_curr = audio.currentTime;
//   let music_dur = audio.duration;

//   let min1 = Math.floor(music_dur / 60);
//   let sec1 = Math.floor(music_dur % 60);
//   // console.log(min1);
//   if (sec1 < 10) {
//     sec1 = `0${sec1}`;
//   }
//   currentEnd.innerHTML = `${min1}:${sec1}`;

//   let min2 = Math.floor(music_curr / 60);
//   let sec2 = Math.floor(music_curr % 60);
//   if (sec2 < 10) {
//     sec2 = `0${sec2}`;
//   }
//   currentStart.innerHTML = `${min2}:${sec2}`;

//   let progressBar = parseInt((music_curr / music_dur) * 100);
//   seek.value = progressBar;
//   let seekBar = seek.value;
//   bar2.style.width = `${seekBar}%`;
//   dot.style.left = `${seekBar}%`;
//   // console.log(seekBar);
// });

// seek.addEventListener("change", () => {
//   audio.currentTime = (seek.value * audio.duration) / 100;
// });

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0 && vol.value <= 50) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  audio.volume = vol_a / 100;
});

//mehul code completed here

// Errors:
// Play Bug, Song Time
