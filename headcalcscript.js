var heads = {
	goblin:{amt:0,xp:130,nature:1,body:2,soul:0,blood:0},
	monkey:{amt:0,xp:182,nature:1,body:3,soul:0,blood:0},
	imp:{amt:0,xp:286,nature:2,body:3,soul:0,blood:0},
	minotaur:{amt:0,xp:364,nature:2,body:4,soul:0,blood:0},
	scorpion:{amt:0,xp:454,nature:1,body:0,soul:1,blood:0},
	bear:{amt:0,xp:480,nature:1,body:1,soul:1,blood:0},
	unicorn:{amt:0,xp:494,nature:1,body:2,soul:1,blood:0},
	dog:{amt:0,xp:520,nature:2,body:2,soul:1,blood:0},
	chaosdruid:{amt:0,xp:584,nature:2,body:3,soul:1,blood:0},
	giant:{amt:0,xp:650,nature:2,body:4,soul:1,blood:0},
	ogre:{amt:0,xp:716,nature:3,body:4,soul:1,blood:0},
	elf:{amt:0,xp:754,nature:2,body:2,soul:2,blood:0},
	troll:{amt:0,xp:780,nature:2,body:3,soul:2,blood:0},
	horror:{amt:0,xp:832,nature:2,body:4,soul:2,blood:0},
	kalphite:{amt:0,xp:884,nature:2,body:4,soul:3,blood:0},
	dagannoth:{amt:0,xp:936,nature:3,body:4,soul:3,blood:0},
	bloodveld:{amt:0,xp:1040,nature:2,body:0,soul:2,blood:1},
	tzhaar:{amt:0,xp:1104,nature:3,body:0,soul:2,blood:1},
	demon:{amt:0,xp:1170,nature:4,body:0,soul:2,blood:1},
	aviansie:{amt:0,xp:1234,nature:4,body:0,soul:3,blood:1},
	abyssal:{amt:0,xp:1300,nature:4,body:0,soul:4,blood:1},
	dragon:{amt:0,xp:1560,nature:4,body:0,soul:4,blood:2},
}
document.addEventListener("keydown",function(k){
	switch (k.code){
		case "Enter":
			document.getElementById("input").value = "";
			var box = document.getElementById("headlist");
			var amt = document.getElementById("amount").value;
			document.getElementById("amount").value = 1;
			var reqs = document.getElementById("reqs");
			if (box.value !== ""){
				var head = heads[box.value.substring(0,box.value.indexOf("\n"))];
				head.amt+=parseInt(amt);
				if (head.amt < 0)
					head.amt = 0;
				/*for (var i = 0; i < amt; i++){
					total.xp+=head.xp
					for (var r in head.rune)
						total[r]+=head.rune[r];
				}*/
				//reqs.value+=JSON.stringify(head)+"\n"
			}
			reqs.value = "";
			var total = {xp:0,nature:0,body:0,soul:0,blood:0}
			for (var h in heads)
				if (heads[h].amt > 0){
					for (var p in total)
						if (heads[h][p] > 0)
							total[p]+=heads[h][p]*heads[h].amt;
					reqs.value+=h+" x"+heads[h].amt+"\n";
				}
			reqs.value+="\n";
			for (var p in total)
				if (total[p] > 0)
					reqs.value+=p+": "+total[p]+"\n";
			//reqs.value = JSON.stringify(total);
			document.getElementById("input").focus();
			break;
	}
});
function update(){
	var str = document.getElementById("input").value;
	var box = document.getElementById("headlist");
	box.value = "";
	for (var p in heads){
		if (p.indexOf(str)!==-1)
			box.value+=p+"\n"
	}
}
setInterval(update,100);