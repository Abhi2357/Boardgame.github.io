console.log("welcome to my world");
// console.time("time");
var arr = [42, 43, 44, 45, 46, 47, 48];
var a = Array(49).fill(5);
var turn = 0;
var changeturn=document.getElementById("color");
var boxer = document.getElementsByClassName("boxer");
var newgame= document.getElementById("newgame");
Array.from(boxer).forEach((element, index) => {
    let boxtext = element.querySelector(".box");
    element.addEventListener("click", () => {
        // console.log("hi");
        // console.log(index);
        if (possible(index) == 1) {
            boxtext.innerText = "O";
            if (turn == 0) {
                boxtext.classList.add("red")
                turn = 1;
                a[index] = 1;
                changeturn.innerHTML="Blue";
                changeturn.classList.remove("red");
                changeturn.classList.add("blue");

            }
            else if (turn == 1) {
                boxtext.classList.add("blue");
                turn = 0;
                a[index] = 0;
                changeturn.innerHTML="Red";
                changeturn.classList.add("red");
                changeturn.classList.remove("blue");
            }
            // changeturn.innerHTML=""
            // console.log(a);
            var b = a.slice();
            var m = [];
            while (b.length) m.push(b.splice(0, 7));
            // console.log(m);
            // console.log(boxtext.style.color);
            c = index - 7;
            i = arr.indexOf(index);
            arr.splice(i, 1, c);
            // console.log(index);
            if (checkwin(m) == 1) {
                document.getElementById("gameover").style.display="block";
                console.log("gameover");
            
            };
        }
    }
    );
})
console.log(newgame);
newgame.addEventListener("click",()=>{
    a=confirm("Are you sure you want to leave this game");
    if(a)
    {window.location.reload(true)};
})
function exit(){
    console.log("exit");
}

function checkwin(m) {
    if (hor(m) == 1 || ver(m) == 1 || ldia(m) == 1 || rdia(m) == 1) {
        return true;
    }
}
function hor(m) {
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            if (m[i][j] == turn) {
                if ((j + 1) < 7 && m[i][j + 1] == turn) {
                    if ((j + 2) < 7 && m[i][j + 2] == turn) {
                        if ((j + 3) < 7 && m[i][j + 3] == turn) {
                            return true;

                        }

                    }


                }

            }
        }
    }
    return false;
}
function ver(m) {
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            if (m[i][j] == turn) {
                if ((i + 1) < 7 && m[i + 1][j] == turn) {
                    if ((i + 2) < 7 && m[i + 2][j] == turn) {
                        if ((i + 3) < 7 && m[i + 3][j] == turn) {
                            return true;

                        }

                    }


                }

            }
        }
    }
    return false;
}
function ldia(m) {
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            if (m[i][j] == turn) {
                if ((j + 1) < 7 && (i + 1) < 7 && m[i + 1][j + 1] == turn) {
                    if ((j + 2) < 7 && (i + 2) < 7 && m[i + 2][j + 2] == turn) {
                        if ((j + 3) < 7 && (i + 3) < 7 && m[i + 3][j + 3] == turn) {
                            return true;

                        }

                    }


                }

            }
        }
    }
    return false;
}
function rdia(m) {
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            if (m[i][j] == turn) {
                if ((j - 1) >= 0 && (i + 1) < 7 && m[i + 1][j -1] == turn) {
                    if ((j - 2) >= 0 && (i + 2) < 7 && m[i + 2][j - 2] == turn) {
                        if ((j - 3) >= 0 && (i + 3) < 7 && m[i + 3][j - 3] == turn) {
                            return true;

                        }

                    }


                }

            }
        }
    }
    return false;
}
function possible(index) {
    for (j = 0; j < arr.length; j++) {
        if (index == arr[j])
            return true;
    }
}

// var age=203;
// console.assert(age<200,"age not valid")
// console.timeEnd("time");
// let a=document.links.href;
// Array.from(a).forEach((element)=>{
//     if(element.includes("this"))
//         {
//             console.log("element");
//         }
// })
