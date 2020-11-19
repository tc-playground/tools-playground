import jsonPlaceholder from "../apis/jsonPlaceholder";

// This is a bad example of an ncorrect asynchronous action that 
// will cause an redux error upon invocation.
//
// The solution is to use an async handling middleware like 
// 'redux-think' and return a function containing an async promise.
// See: ./index.js'.

export const fetchPosts = async () => {
  // Will result in:
  //   Error: Actions must be plain objects.
  //   Use custom middleware for async actions.
  const responsePromise = await jsonPlaceholder.get("/posts");

  // This is not a plain JS object! After transpilation 
  // a 'promise' like structure is returned. See below.
  return {
    type: "FETCH_POSTS",
    payload: responsePromise
  };
};

// async/await syntax causes the following to be generated.
//
// https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=KYDwDg9gTgLgBAYwgOwM7wGbBggFgBQnVTgF44BDVAT2QTgAoBKMgPjgG8AoOOAej5wA6gEsANmLhRgqAK5j4I5AC4e_QbwCiUKNGVwAgghgiUJALaz0cAEbA4YMRSVwINgFbBjqAHRqBvHAAqqj2CFYwEOZw5iIAJnFiwADuFNJwGNCUNHSUxqZofrxIaPDSqJBo9uQUqSLw7qgo-E4IwLgQYnHAUD4A5tgMAER8kMRDTADcXP6CACq4IiRLcMgQ8BQOTi4AUgDKrh5eMD6GGDA9cDBQFGhg4hQmKHCzV7j2YBTUYhAUcXDJcSSdBA2z2TYYWQwWTSACEamk0KgyE4al4MGoYGA-iGADFNHMAMIACQA-vgAPJ7OZ7IYAGjRDi-Pz--nKlVCagAvtMeUA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Ces2016%2Ces2017%2Creact%2Cstage-0%2Cstage-1%2Cstage-2%2Cstage-3%2Ces2015-loose&prettier=false&targets=&version=6.26.0&envVersion=
//
// "use strict";
//
// function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//
// var fetchPosts = function () {
//   var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
//     var response;
//     return regeneratorRuntime.wrap(function _callee$(_context) {
//       while (1) {
//         switch (_context.prev = _context.next) {
//           case 0:
//             _context.next = 2;
//             return jsonPlaceholder.get("/posts");
//
//           case 2:
//             response = _context.sent;
//             return _context.abrupt("return", {
//               type: "FETCH_POSTS",
//               payload: response
//             });
//
//           case 4:
//           case "end":
//             return _context.stop();
//         }
//       }
//     }, _callee, undefined);
//   }));
//
//   return function fetchPosts() {
//     return _ref.apply(this, arguments);
//   };
// }();