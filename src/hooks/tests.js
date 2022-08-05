// const intervalRef = useInterval(() => {
//   handleClick();
//   if (isGameOver) {
//     count.current = 0;
//     setIsSuccess(false);
//     setCountSwitch(true);
//     setIsGameOver(false);
//     const value = resultObj[checkColor.current] + 1;
//     const newTotal = resultObj.totalGames + 1;
//     setResultObj((prevState) => ({
//       ...prevState,
//       [checkColor.current]: value,
//       totalGames: newTotal,
//     }));
//   }
//   if (resultObj.totalGames > 1000) {
//     clearInterval(intervalRef.current);
//   }
//   // debugger;
// }, 1);

// const runTest = () => {
//   let resultObj = {
//     gold: 0,
//     blue: 0,
//     purple: 0,
//     green: 0,
//     orange: 0,
//     red: 0,
//     god: 0,
//     nice: 0,
//   };
//   const totalGames = 1000;

//   for (let i = 0; i < totalGames; i++) {
//     let count = 0;
//     while (true) {
//       count++;
//       const color = getColor(count);
//       const range = getRange(count);
//       let rand1 = getRandom(range);
//       let rand2 = getRandom(range);
//       const result = getResult(rand1, rand2);
//       if (result) {
//         //win
//         resultObj[color] = resultObj[color] + 1;
//         count = 0;
//         break;
//       }
//     }
//   }
//   console.log(resultObj);
// };
// const [resultObj, setResultObj] = useState({
//   red: 0,
//   green: 0,
//   blue: 0,
//   purple: 0,
//   gold: 0,
//   orange: 0,
//   totalGames: 0,
//   god: 0,
//   nice: 0,
// });
