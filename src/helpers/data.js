const questions = [
    {
      id: 1,
      question: '1.What are Custom Hooks?',
      answer:
        'A Custom Hook is a function in Javascript whose name begins with ‘use’ and which calls other hooks. It is a part of React v16.8 hook update and permits you for reusing the stateful logic without any need for component hierarchy restructuring.In almost all of the cases, custom hooks are considered to be sufficient for replacing render props and HoCs (Higher-Order components) and reducing the amount of nesting required. Custom Hooks will allow you for avoiding multiple layers of abstraction or wrapper hell that might come along with Render Props and HoCs.The disadvantage of Custom Hooks is it cannot be used inside of the classes.is unnecessary to bind ‘this’ inside the constructor when using an arrow function. This prevents bugs caused by the use of ‘this’ in React callbacks..',
    },
    {
      id: 2,
      question: '2. What are the rules that must be followed while using React Hooks?',
      answer:
        "There are 2 rules which must be followed while you code with Hooks: React Hooks must be called only at the top level. It is not allowed to call them inside the nested functions, loops, or conditionsIt is allowed to call the Hooks only from the React Function Components."
    },
    {
      id: 3,
      question: "3. What is Axios, and how does it simplify making HTTP requests in React applications?",
      answer:
        "Axios is a third-party JavaScript library that simplifies making HTTP requests in both browsers and Node.js. In React, Axios is often preferred for its simplicity, ease of use, and features like automatic JSON parsing, request/response interception, and better error handling compared to the native fetch function.",
    },
    {
      id: 4,
      img:"./img/4.png",
      question: '4. How do you handle asynchronous operations with fetch in a React component?',
      answer:
        "You typically use fetch within the componentDidMount lifecycle method or with the useEffect hook in functional components. You can then handle the response asynchronously using .then() and .catch() or with async/await. Example using fetch with useEffect in a functional component:",
    },
   
  ]
  export default questions
  