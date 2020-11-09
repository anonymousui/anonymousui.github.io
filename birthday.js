const words = ["Hello Everyone", "Say Happy Birthday", "to", "Kartikey"]
let i=0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('txt').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 500);
	};
	loopTyping();
};

function deletingEffect() {
		let word = words[i].split("");
		var loopDeleting = function() {
			if (word.length > 0) {
				word.pop();
				document.getElementById('txt').innerHTML = word.join("");
			} else {
				if (words.length > (i + 1)) {
					i++;
				} else {
					i=0;
				};
				typingEffect();
				return false;
			};
			timer = setTimeout(loopDeleting, 200);
		};
		loopDeleting();
};

typingEffect();