# Word Square

> Get information about a candidate in a positive way.

1. What is the difference between a permutation and a combination? Can you give an example of a permutation of a set of words and of a combination of a set of words?

2. Given a set of 4 unique words, write a basic algorithm to generate all the permutations with repetitions for that set. Try to avoid using any data structures or recursion initially. Think stupid simple!

  Example:
  Input: [acid, dark, mark, atom]

  Output: 
  [acid, dark, mark, atom]
  [acid, acid, mark, atom]
  [dark, mark, atom, acid]
  [mark, atom, acid, dark]
  [atom, acid, dark, mark]
  [acid, mark, atom, dark]
  [acid, atom, dark, mark]
  [acid, dark, mark, atom]

3. Given a set of 4 unique words, modify the previously defined basic algorithm to generate all the permutations for that set.

  Example:
  Input: [acid, dark, mark, atom]

  Output: 
  [acid, dark, mark, atom]
  [dark, mark, atom, acid]
  [mark, atom, acid, dark]
  [atom, acid, dark, mark]
  [acid, mark, atom, dark]
  [acid, atom, dark, mark]
  [acid, dark, mark, atom]

4. Word square.

```
         top
       A C I D
       T     A
  left O     R right
       M A R K
         bot
```
         
  Let's define a thing called a word square. A word square consists of four 4-letter words (named top, bottom, left, and right) arranged in to a square such that the corner characters are shared. Words go left-to-right or top-to-bottom, and not the other ways. Write me a function that takes a set of 4-letter strings as input and prints all word squares that you can make using the words in the input set. A word cannot be used more than once in a word square.
  
  Example:
  Input: [acid, dark, mark, atom]
  Output: 
  [acid, dark, mark, atom]
  ...