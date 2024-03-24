// Les variables dont on a besoins
var sp, btn_start, btn_stop, t, ms, s, mn, h;

// Fonctionnalité pour initialiser les variables quand la page se charge

window.onload = function () {
  sp = document.getElementsByTagName("span");
  btn_start = document.getElementById("start");
  btn_stop = document.getElementById("stop");
  t;
  (ms = 0), (s = 0), (mn = 0), (h = 0);
};

// Mettre en place le compteur
function update_chrono() {
  ms += 1;
  if (ms == 10) {
    ms = 1;
    s += 1;
  }
  if (s == 60) {
    s = 0;
    mn += 1;
  }
  if (mn == 60) {
    mn = 0;
    h += 1;
  }
  //Insertion des valeurs dans les spans
  sp[0].innerHTML = h + "h";
  // [0] permet de selectionner le premier span
  sp[1].innerHTML = mn + "min";
  // [1] permet de selectionner le deuxieme span
  sp[2].innerHTML = s + "s";
  // [2] permet de selectionner le troisieme span
  sp[3].innerHTML = ms + "ms";
  // [3] permet de selectionner le quatrième span
}

// Mettre en place la fonction boutton start
function start() {
  // Cette ligne de code execute la fonction update_chrono()
  t = setInterval(update_chrono, 100);
  btn_start.disabled = true;
}

// Stoper le chronometre
function stop() {
  clearInterval(t); // suppression de l'interval que j'ai creer
  btn_start.disabled = false;
}
// reset : remettre a zero

function reset() {
  clearInterval(t);
  btn_start.disabled = false;
  (ms = 0), (s = 0), (mn = 0), (h = 0);

  //Insertion des valeurs dans les spans
  sp[0].innerHTML = h + "h";
  // [0] permet de selectionner le premier span
  sp[1].innerHTML = mn + "min";
  // [1] permet de selectionner le deuxieme span
  sp[2].innerHTML = s + "s";
  // [2] permet de selectionner le troisieme span
  sp[3].innerHTML = ms + "ms";
  // [3] permet de selectionner le quatrième span
}
