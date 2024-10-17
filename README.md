# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Plagarism Statement

All exercises must contain the following statement:
“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

## Note
I am attempting this from scratch, I will compare it to my last semesters repository and make any corrections needed base on that.

## Answer
Normal Mergesort has a runtime of $\Theta(nlogn)$, but this Mergesort has extra logic(an extra for loop), which will make it $\Theta(n^{2}logn)$.

Update-To be clearer, I had believed that I had mostly seen mergesort code that only used 1 for loop. Here what I innitially meant the nested for loops(2 total for loops) that caused the $n^2$ compared to $n$. Both those loops make sure that we iterate ovver every single element.

Update 2- So based on the comments I spent a good deal of time looking at the mergesort slides from the sorting presentation. I believe that the difference between this mergesort and the mergsort there is mainly the nested for loops. More specifically I was looking at the merge code slide and I believe that those two for loops that used to be separate are now nested. Looking at the runtime explanation too we see in the original it was $n$ but I think the new mergesort would now be $n^2$ with them being nested, which would also point to the bound being $\Theta(n^{2}logn)$.
