- [ ] Why would you use class component over function components (removing hooks from the question)?
  
  I've been notcing a lot of people outside of Lambda using functional components with props and class components with states. It's a little odd Lambda tells students classes are now considered legacy because there are a lot of professionals still using only class components in the industry. For some reaosn, for me, I like the organization of using functional components for one thing, and class components for another. It looks clearn to me and you can put a name to it, such as... if you see a class component you KNOW its using state, and if you see a functional component you KNOW it's passing down props. 

- [ ] Name three lifecycle methods and their purposes.

componentDidMount() = to fetch data from an external API or perform unique JSX
componentDidUpdate() = operatations on the DOM when the component has been updated
componentWillUnmount() = clean up DOM elements created by componentWillmount()

- [ ] What is the purpose of a custom hook?

To keep your code DRY

- [ ] Why is it important to test our apps?

Testing for bugs is very important especially if need a component to do only 1 thing. If you're working with clients its critical to give them exactly what they want, and nothing else. 