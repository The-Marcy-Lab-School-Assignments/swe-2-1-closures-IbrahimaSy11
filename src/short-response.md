# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Question 1

### Prompt 1

What are the core principles of encapsulation in object-oriented programming?

### Response 1

Here are the core principles of encapsulation:

- Encapsulation means keeping data and the functions that use that data together in one object.

- It hides the object’s internal details so other parts of the program can’t change them directly.

- Data is accessed or updated through special methods like getters and setters.

- This helps protect the data, keeps the code organized, and makes it easier to update or fix later.

---

## Question 2

### Prompt 2

The code snippet below is an example of a **closure**.

```js
const multiplyNumsBy = (nums, multiplier) => {
  return nums.map((num) => num * multiplier);
};

const multiplesOfFive = multiplyNumsBy([1, 2, 3, 4], 5); // [5, 10, 15, 20]
```

First, define what a **closure** is in your own words and then explain how this example includes a closure.

### Response 2

#### **Define Closure**

- A **closure** is when a function remembers and can use variables from the place where it was created, even after that place has finished running.
- It allows a function to keep access to old variables, even when it’s used somewhere else later.

### **Code Snippet Explanation:**

The function inside `.map()` is a **closure** because it uses the `multiplier` variable from the outer function `multiplyNumsBy`. It remembers that value even when run separately for each number.

---

## Question 3

### Prompt 3

Consider the code snippet below showing a factory function for creating animal objects. The `makeNoise` method is not working as intended:

```js
const makeAnimal = (name, species, sound) => {
  const animal = {
    name: name,
    species: species,
    makeNoise: () => {
      console.log(`${this.name} the ${this.species} says ${sound}`);
    },
  };
  return animal;
};

const betty = makeAnimal("betty", "cat", "meow");
betty.makeNoise(); // undefined the undefined says meow

const bugs = makeAnimal("bugs", "bunny", "whatsup doc");
bugs.makeNoise(); // undefined the undefined says meow says whatsup doc
```

First, define the `this` keyword.

Then, explain why the `makeNoise` method is not working (why are `this.name` and `this.species` returning `undefined`?).

Finally, update the code snippet above to fix it.

### Response 3

### **Answer:**

**Definition of `this`:**
The `this` keyword refers to the object that is currently calling the function. It allows methods inside an object to access that object’s own properties.

**Explanation of the problem:**
The `makeNoise` method is written as an **arrow function**, and arrow functions do **not have their own `this`**. Instead, they use the `this` value from the surrounding scope (in this case, the global scope).
Because of that, `this.name` and `this.species` don’t point to the `animal` object — they are `undefined`.

To fix it, you can use a **regular function** instead of an arrow function:

```js
makeNoise: function() {
  console.log(`${this.name} the ${this.species} says ${sound}`);
}
```

Now, `this` correctly refers to the `animal` object.
