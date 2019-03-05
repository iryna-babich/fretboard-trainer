(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),o=n.n(r),l=(n(16),n(2)),i=n(1),u=n(4),c=n(3),m=n(5),d=(n(18),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={questionsNumber:10},n.handleNumberOfQuestions=function(e){n.setState({questionsNumber:parseInt(e.target.value,10)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.onStartGameClick,t=this.state.questionsNumber;return console.log("questionsNumber:",this.state.questionsNumber),console.log(typeof this.state.questionsNumber),s.a.createElement("div",{className:"startscreen-wrapper"},s.a.createElement("h1",{className:"header-main"},"Fretboard Trainer"),s.a.createElement("div",{className:"strings-overlay"},s.a.createElement("div",{className:"question-options"},s.a.createElement("label",{htmlFor:"questions-dropdown"},"Select number of questions:"),s.a.createElement("select",{id:"questions-dropdown",onChange:this.handleNumberOfQuestions,value:t},s.a.createElement("option",{value:5},"5"),s.a.createElement("option",{value:10},"10"),s.a.createElement("option",{value:15},"15"))),s.a.createElement("button",{className:"start-button",onClick:function(){return e(t)}},"Start")))}}]),t}(a.Component)),g=(n(20),function(e){var t=e.totalWrongGuessesCount,n=e.onGameRestarted,a=e.questionsCount,r=e.duration,o=Math.floor(r/60),l=(r%60).toFixed(1),i=(r/a%60).toFixed(2),u="minutes";return 1===o&&(u="minute"),s.a.createElement("div",{className:"results-wrapper"},s.a.createElement("h2",null,"Your results:"),s.a.createElement("p",null,"Number of questions: ",a),s.a.createElement("p",null,"Number of mistakes:"," ",s.a.createElement("span",{className:"is-wrong-count"},s.a.createElement("strong",null,t))),s.a.createElement("p",null,"Total time:"," ",s.a.createElement("strong",null,o>0&&s.a.createElement("span",{className:"duration-minutes"},o," ",u," "),l," seconds")),s.a.createElement("p",null,"Average time per note: ",s.a.createElement("strong",null,i," seconds")),s.a.createElement("button",{className:"restart-button",onClick:n},"Restart"))});g.defaultProps={onGameRestarted:function(){},totalWrongGuessesCount:0,questionsCount:0,duration:0};var h=g,p=n(6),f=n(9),G=n.n(f),v=(n(22),[["E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E"],["B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],["G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G"],["D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D"],["A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A"],["E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E"]]),E=[[4,4,4,4,4,4,4,5,5,5,5,5,5],[4,4,4,4,4,4,4,4,4,4,4,4,4],[3,3,3,3,4,4,4,4,4,4,4,4,4],[3,3,3,3,3,3,3,3,3,4,4,4,4],[2,2,3,3,3,3,3,3,3,3,3,3,3],[2,2,2,2,2,2,2,2,3,3,3,3,3]],N=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={randomStringIndex:null,randomNoteIndex:null,wrongGuesses:[],totalWrongGuessesCount:0,rightGuess:"",rightGuessesArr:[],startTime:null},n.assignNoteToGuess=function(){var e=t.getRandomStringIndex(),a=t.getRandomNoteIndex();n.playPositionAtStringAndFret(e,a),n.setState({randomStringIndex:e,randomNoteIndex:a})},n.setStartTime=function(){n.setState({startTime:Date.now()})},n.playPositionAtStringAndFret=function(e,t){var a=v[e][t],s=E[e][t];console.log("octave:",s),n.playNote("".concat(a).concat(s))},n.correctlyGuessedNote=function(e){var a=n.props,s=a.onGameCompleted,r=a.questionsCount,o=n.state.startTime,l=(Date.now()-o)/1e3;n.setState(function(a){var o=[].concat(Object(p.a)(a.rightGuessesArr),[N[e]]);if(o.length<r){var i=t.getRandomStringIndex(),u=t.getRandomNoteIndex();return n.playPositionAtStringAndFret(i,u),{wrongGuesses:[],rightGuessesArr:o,randomStringIndex:i,randomNoteIndex:u}}return s(o,a.totalWrongGuessesCount,l),{rightGuessesArr:o}})},n.wronglyGuessedNote=function(e){n.setState(function(t){return{wrongGuesses:[].concat(Object(p.a)(t.wrongGuesses),[N[e]]),totalWrongGuessesCount:t.totalWrongGuessesCount+1}})},n.handleNoteClick=function(e){N[e]===v[n.state.randomStringIndex][n.state.randomNoteIndex]?n.correctlyGuessedNote(e):n.wronglyGuessedNote(e)},n.synth=null,n}return Object(m.a)(t,e),Object(i.a)(t,null,[{key:"getRandomStringIndex",value:function(){return Math.floor(Math.random()*v.length)}},{key:"getRandomNoteIndex",value:function(){return Math.floor(Math.random()*v[0].length)}}]),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.synth=(new G.a.Synth).toMaster(),this.assignNoteToGuess(),this.setStartTime()}},{key:"playNote",value:function(e){this.synth.triggerAttackRelease(e,"16n")}},{key:"render",value:function(){for(var e=this,t=[],n=[],a=[],r=[],o=this.state,l=o.randomStringIndex,i=o.randomNoteIndex,u=o.wrongGuesses,c=o.totalWrongGuessesCount,m=o.rightGuess,d=o.rightGuessesArr,g=this.props.questionsCount,h=function(n){for(var a=[],r="",o=function(t){n===l&&t===i?(r="string-item is-highlighted",console.log("highlighted:",v[n][t]),a.push(s.a.createElement("li",{className:r,key:"".concat(n,"-").concat(t)},s.a.createElement("button",{onClick:function(){return e.playPositionAtStringAndFret(n,t)}},v[n][t])))):(r="string-item",a.push(s.a.createElement("li",{className:r,key:"".concat(n,"-").concat(t)},s.a.createElement("button",null,v[n][t]))))},u=0;u<v[n].length;u++)o(u);t.push(s.a.createElement("ul",{className:"string",key:n},a))},p=0;p<v.length;p++)h(p);var f=function(t){var a="",r=u.includes(N[t]),o=m===N[t];r?a="is-wrong":o&&(a="is-correct"),n.push(s.a.createElement("li",{key:t},s.a.createElement("button",{onClick:function(){return e.handleNoteClick(t)},className:a},N[t])))};for(p=0;p<N.length;p++)f(p);for(p=0;p<12;p++)a.push(s.a.createElement("div",{className:"vertical-stripe",key:p}));for(var G=0;G<12;G++)r.push(s.a.createElement("div",{className:"marker-dot",key:G}));return console.log("total wrong guesses count:",c),console.log("latest rightGuesses:",this.state.rightGuessesArr),s.a.createElement("div",{className:"fretboard-inner"},s.a.createElement("div",{className:"strings-wrapper"},s.a.createElement("div",{className:"strings-wrapper--inner"},s.a.createElement("div",{className:"vertical-stripes"},a),s.a.createElement("div",{className:"marker-dots"},r),s.a.createElement("div",{className:"strings"},t))),s.a.createElement("div",{className:"defined-notes-wrapper"},s.a.createElement("ul",{className:"defined-notes"},n)),s.a.createElement("p",null,"Question ",d.length+1," of ",g))}}]),t}(a.Component),b=(n(24),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={screen:1,totalWrongGuessesCount:null,rightGuessesArr:[],questionsCount:null,duration:null},n.handleStartGameClick=function(e){n.setState({screen:2,questionsCount:e})},n.handleGameCompleted=function(e,t,a){n.setState({screen:3,rightGuessesArr:e,totalWrongGuessesCount:t,duration:a})},n.startGameHandler=function(){n.setState({screen:2}),n.assignNoteToGuess()},n.restartClickHandler=function(){n.setState({screen:2})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.screen,n=e.totalWrongGuessesCount,a=e.questionsCount,r=e.duration;return 1===t?s.a.createElement("div",{className:"App"},s.a.createElement(d,{onStartGameClick:this.handleStartGameClick})):2===t?s.a.createElement("div",{className:"App"},s.a.createElement(C,{questionsCount:a,onGameCompleted:this.handleGameCompleted})):3===t?s.a.createElement("div",{className:"App"},s.a.createElement(h,{questionsCount:a,onGameRestarted:this.restartClickHandler,totalWrongGuessesCount:n,duration:r})):void 0}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.9a352883.chunk.js.map