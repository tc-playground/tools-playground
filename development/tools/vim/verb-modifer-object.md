# Verb Modifier Object

## Introduction

* `Vim` has a special type of grammar that typically follows the pattern `verb modifier object`.



## Verbs

* `d` delete
* `c` change

## Modifiers:

* `t` till
* `f` find
* `i` inside

## Objects

* `w` word
* `(` parenthesis
* `t` tag
* `s` sentence
* `“` quotes

---

## Examples

* `diw` deletes a word that your cursor is on, regardless of whether it is at the beginning or end of the word. 

* `dt)` deletes all text from the current cursor position up until and excluding `)`. 

* `cfp` deletes all text from the current cursor position up to and including `p`, then automatically puts you into insert mode. 

* `.`, repeats the previous command.

---

## References

* [Vim Beginner Tips](https://medium.com/swlh/8-vim-tricks-that-will-take-you-from-beginner-to-expert-817ff4870245)