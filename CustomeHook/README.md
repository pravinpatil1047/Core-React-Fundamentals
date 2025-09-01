## customehook:
Custom React Hooks are reusable JavaScript functions whose names start with use and that can call other
hooks (like useState , useEffect , etc.). They let you extract stateful logic from components so you can share it across your app. In other words, custom hooks encapsulate complex or repetitive logic
(such as data fetching, event handling, subscriptions, etc.) behind a simple interface. This makes your
components cleaner and more focused on rendering UI. Importantly, each call to a custom hook has its own independent state, so using the same hook in different components doesn’t share state between them.

# When and why to use custom hooks:
Use a custom hook whenever you have logic (especially involving state or side effects) that you want to reuse in more than one place. For example, if two components both need to track the window size or fetch data from an API, you should extract that logic into a useWindowSize or useFetch hook. Custom hooks improve code reuse and organization: they encapsulate logic (separation of concerns) so components don’t have to implement the same details over and over.They also promote abstraction, hiding “gnarly” implementation details behind simple
hook calls.In interviews, stress that custom hooks are simply functions (following the Rules of
Hooks) that help you share stateful behavior; they do not introduce any magic beyond regular functions

# Benefits of custom hooks:
- Reusability: Write the logic once and use it in many components.
- Separation of concerns: Components focus on presentation, while custom hooks handle side effects or state    management. This leads to cleaner, easier-to-read components .
- Abstraction: You can hide complex implementation details (like event subscriptions or API calls) inside a
hook, exposing only what the component needs.
- Testability: By decoupling logic from components, you can test hooks in isolation (e.g. via utilities like
React Testing Library’s renderHook ) without rendering the full UI.


# Best example in actual use case:
1. useWindowSize
2. useFetch
3. useDebounce
4. useLocalStorage
5. useIntersectionObserver