(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(3),o=n.n(a),l=(n(15),n(1)),c=n(4),i=n(5),u=n(7),g=n(6),d=n(8),m=(n(17),[["E","F","F#","G","G#","A","A#","B","C","C#","D","D#"],["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],["D","D#","E","F","F#","G","G#","A","A#","B","C","C#"],["G","G#","A","A#","B","C","C#","D","D#","E","F","F#"],["B","C","C#","D","D#","E","F","F#","G","G#","A","A#"],["E","F","F#","G","G#","A","A#","B","C","C#","D","D#"]]),h=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],G=5,E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={screen:1,randomStringIndex:null,randomNoteIndex:null,wrongGuesses:[],totalWrongGuessesCount:0,rightGuess:"",rightGuessesArr:[]},n.startGameHandler=function(){n.setState({screen:2,randomStringIndex:t.getRandomStringIndex(),randomNoteIndex:t.getRandomNoteIndex()})},n.restartClickHandler=function(){n.setState({screen:2,randomStringIndex:t.getRandomStringIndex(),randomNoteIndex:t.getRandomNoteIndex(),wrongGuesses:[],rightGuess:"",rightGuessesArr:[]})},n.handleNoteClick=function(e){h[e]===m[n.state.randomStringIndex][n.state.randomNoteIndex]?n.setState(function(n){var r=[].concat(Object(l.a)(n.rightGuessesArr),[h[e]]);return r.length<G?{wrongGuesses:[],rightGuessesArr:r,randomStringIndex:t.getRandomStringIndex(),randomNoteIndex:t.getRandomNoteIndex()}:{screen:3,rightGuessesArr:r}}):n.setState(function(t){return{wrongGuesses:[].concat(Object(l.a)(t.wrongGuesses),[h[e]]),totalWrongGuessesCount:t.totalWrongGuessesCount+1}})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=this,t=[],n=[],r=this.state,a=r.screen,o=r.randomStringIndex,l=r.randomNoteIndex,c=r.wrongGuesses,i=r.totalWrongGuessesCount,u=r.rightGuess,g=r.rightGuessesArr,d=s.a.createElement("div",{className:"strings-overlay"},s.a.createElement("button",{className:"start-button",onClick:this.startGameHandler},"Start!")),G=0;G<m.length;G++){for(var E=[],A="",C=0;C<m[G].length;C++)G===o&&C===l?(A="string-item is-highlighted",console.log("highlighted:",m[G][C])):A="string-item",E.push(s.a.createElement("li",{className:A,key:"".concat(G,"-").concat(C)},s.a.createElement("button",null,m[G][C])));t.push(s.a.createElement("ul",{className:"string",key:G},E))}for(var f=function(t){var r="",a=c.includes(h[t]),o=u===h[t];a?r="is-wrong":o&&(r="is-correct"),n.push(s.a.createElement("li",{key:t},s.a.createElement("button",{onClick:function(){return e.handleNoteClick(t)},className:r},h[t])))},p=0;p<h.length;p++)f(p);var w=g.join(", ");return console.log("latest wrongGuesses:",this.state.wrongGuesses),console.log("total wrong guesses count:",i),console.log("latest rightGuesses:",this.state.rightGuessesArr,this.state.rightGuessesArr.length),console.log("screen:",this.state.screen),1===a?s.a.createElement("div",{className:"App"},d):2===a?s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"strings-wrapper"},t),s.a.createElement("ul",{className:"defined-notes"},n),s.a.createElement("p",null,"Question #",this.state.rightGuessesArr.length+1)):3===a?s.a.createElement("div",{className:"App"},s.a.createElement("h2",null,"Your results:"),s.a.createElement("p",null,"Correctly guessed notes are:"," ",s.a.createElement("span",{className:"is-correct-arr"},s.a.createElement("strong",null," ",w))),s.a.createElement("p",null,"Amount of incorrectly guessed notes:",s.a.createElement("span",{className:"is-wrong-count"},s.a.createElement("strong",null," ",i))),s.a.createElement("button",{onClick:this.restartClickHandler},"Restart")):void 0}}],[{key:"getRandomStringIndex",value:function(){return Math.floor(Math.random()*m.length)}},{key:"getRandomNoteIndex",value:function(){return Math.floor(Math.random()*m[0].length)}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.ef9832cf.chunk.js.map