function App() {
  return (
    <div className="container">
      <h1>Programming Fundamentals</h1>

      <div className="section">
        <h2>About</h2>
        <p>
          Hey Devang Katarkar here, and this is a webpage that summarizes all my knowledge of programming
          fundamentals in three popular programming languages: JavaScript, Python, and Java.
          This page is made with the help of HTML, CSS, JavaScript, and basic React.<br></br>
          Hope you find it useful!
        </p>
      </div>

<div class="section">
    <h2>JavaScript Basics</h2>
    <ul>
        <li><strong>Makes websites interactive</strong> - Buttons, forms, animations</li>
        <li><strong>Variables (let/const)</strong> - Storage boxes for data (let=change, const=constant)</li>
        <li><strong>Basic data types</strong> - Numbers, text (strings), true/false (booleans)</li>
        <li><strong>Arrays [ ]</strong> - Ordered lists of items (shopping list)</li>
        <li><strong>Objects { }</strong> - Things with properties (person with name, age, city)</li>
        <li><strong>Functions</strong> - Reusable code blocks that do specific tasks</li>
        <li><strong>If-else</strong> - Make decisions based on conditions</li>
        <li><strong>Loops (for/while)</strong> - Repeat actions multiple times</li>
        <li><strong>DOM manipulation</strong> - Change webpage content, styles, structure</li>
        <li><strong>Event listeners</strong> - React to clicks, typing, mouse movements</li>
        <li><strong>Console.log()</strong> - Show messages in browser console (F12)</li>
        <li><strong>=== is better than ==</strong> - Strict comparison checks type and value</li>
    </ul>
</div>

<div class="section">
    <h2>Python Basics</h2>
    <ul>
        <li><strong>Simple and readable syntax</strong> - Looks almost like English, easy to learn</li>
        <li><strong>Lists [ ]</strong> - Like shopping lists that you can change (mutable)</li>
        <li><strong>Tuples ( )</strong> - Like lists but cannot change once made (immutable)</li>
        <li><strong>Slicing</strong> - Getting parts of strings/lists (ex: get first 3 letters of a word)</li>
        <li><strong>Functions</strong> - Reusable code blocks that do specific tasks</li>
        <li><strong>Dictionaries { }</strong> - Like real dictionaries: word (key) → meaning (value)</li>
        <li><strong>Indentation matters</strong> - Python uses spaces/tabs to organize code, not { }</li>
        <li><strong>No semicolons</strong> - Unlike JavaScript, Python doesn't need ; at line ends</li>
        <li><strong>Print command</strong> - Use print() to show output on screen</li>
        <li><strong>Input command</strong> - Use input() to get user input</li>
        <li><strong>If-elif-else</strong> - Python's way of making decisions (elif = else if)</li>
        <li><strong>For loops</strong> - Easy way to go through lists/strings one by one</li>
    </ul>
</div>

<div class="section">
    <h2>Java Basics</h2>
    <ul>
        <li><strong>Object-Oriented Programming</strong> - Everything is organized as objects</li>
        <li><strong>Encapsulation</strong> - Keeping data and methods together in a class (like a capsule)</li>
        <li><strong>Abstraction</strong> - Showing only essential features, hiding complex details</li>
        <li><strong>Inheritance</strong> - Child classes can reuse code from parent classes</li>
        <li><strong>Polymorphism</strong> - Same method name but different actions (like "draw" for circle vs square)</li>
        <li><strong>Platform independent</strong> - Write once, run anywhere thanks to JVM</li>
        <li><strong>Classes & Objects</strong> - Blueprint (class) → Actual thing (object)</li>
        <li><strong>Main method</strong> - Starting point of every Java program</li>
        <li><strong>Compilation needed</strong> - Code must be compiled before running</li>
        <li><strong>Strongly typed</strong> - Must declare variable types (int, String, etc.)</li>
        <li><strong>Garbage collection</strong> - Automatic memory management</li>
    </ul>
</div>

      <footer>
        <p>Made by Devang<br></br>Built using HTML, CSS, JavaScript, and basic React</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
