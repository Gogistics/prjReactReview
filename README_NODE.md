NodeJS Review

1. What is Node

2. Event-driven => it's a programming mechanism to build a application based on and respond to the events.

3. Event-loop => it's a mechanism to handle async/sync callbacks/actions.

4. REPL (Read-Eval-Print-Loop) => it's a virtual environment for developers to run/test JS code

5. module.exports => a module encapsulates the related code into a single unit of code; simply speaking, it's like a wrapper of holding bunch of functions

6. Async v.s. Non-blocking => async literally means not sync; non-blocking is widely used with IO (input/output)

7. tracing (trace-event-categories; could try OpenTracing)

8. debugger (works like a breakpoint) => a mechanism for Node developers to triage bugs

9. package.json => this file holds various metadata of a Node project
    Patch releases: 1.0 or 1.0.x or ~1.0.4
    Minor releases: 1 or 1.x or ^1.0.4
    Major releases: * or x

10. setImmediate v.s. setTimeout => both are based on event-loop
    setImmediate() is designed to execute a script once the current poll phase (event-loop) completes
    setTimeout() is designed to execute a script after a min threshold in ms has elapsed

11. libuv => a library to handle async operations

12. EventEmitter => it's a pattern similar to PubSub; developers can use this class to create an emiter and register callbacks to a named event. therefore, when the emiter object invoke an eventg, all callbacks attached to that specific event are called synchronously.

13. Streams => in NodeJS, streams are pipes that let developers easily read data from a source and pipe it to a destination. stream is nothing but an event emitter.

14. callback => a function called at the completion of a given task

15. security => authentication, request validation, and error handling

16. crypto => encrypt data

17. readFile => is asynchronously read the entire contents of a file; createReadStream => it will read the file in chunks of the default size 64 kb

http://www.tutorialspoint.com/nodejs/nodejs_interview_questions.htm