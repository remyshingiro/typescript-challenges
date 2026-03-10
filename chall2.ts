// # Favorite Song Snapshot

// **Difficulty Level:** 2 (Easy)

// ## Concepts Practiced

// - arrays with explicit types
// - object types
// - accessing array elements
// - accessing object properties
// - console output

// ## Short Description

// Create a typed array and a typed object, then print values from both in the correct order.

// ## Task Instructions

// 1. Create a `songs` array with the explicit type `string[]`.
// 2. Put these three song names into the array in this order:
//     - `Intro`
//     - `Echo`
//     - `Sunrise`
// 3. Create a `listener` object with this type:
//     - `name` is a `string`
//     - `age` is a `number`
//     - `isPremium` is a `boolean`
// 4. Give the object these values:
//     - `name`: `Maya`
//     - `age`: `22`
//     - `isPremium`: `true`
// 5. Print the following in this exact order:
//     - the first song in the array
//     - the third song in the array
//     - the listener's `name`
//     - the listener's `isPremium` value

// ## Starter Code (`main.ts`)

// Edit only `main.ts`.

// ```ts
// // TODO: create the songs array with an explicit type

// // TODO: create the listener object with typed properties

// // TODO: print the first song
// // TODO: print the third song
// // TODO: print the listener name
// // TODO: print the listener premium status

// ```

// ## Expected Output

// ```text
// Intro
// Sunrise
// Maya
// true
// ```

// ## Constraints

// - Use explicit TypeScript types.
// - Only modify `main.ts`.
// - Output order must match exactly.
// - Do not use interfaces.
// - Do not use union types.

















// ## Task Instructions

// 1. Create a `songs` array with the explicit type `string[]`.
// 2. Put these three song names into the array in this order:
//     - `Intro`
//     - `Echo`
//     - `Sunrise`
// 3. Create a `listener` object with this type:
//     - `name` is a `string`
//     - `age` is a `number`
//     - `isPremium` is a `boolean`
// 4. Give the object these values:
//     - `name`: `Maya`
//     - `age`: `22`
//     - `isPremium`: `true`
// 5. Print the following in this exact order:
//     - the first song in the array
//     - the third song in the array
//     - the listener's `name`
//     - the listener's `isPremium` value
let songs: string[] = ['Intro', 'Echo', 'Sunrise'];
interface Lister {
    name: string;
    age: number;
    isPremium: boolean;
}

let listener: Lister {
    name: 'Maya';
    age: 22;
    isPremium: true;
};