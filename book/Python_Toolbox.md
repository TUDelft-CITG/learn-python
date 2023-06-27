# Python Toolbox

This page describes how you will interact with Python in this course, specifically via IPython and Jupyter Notebooks. **IPython** is an interactive Python interpreter that adds feautures that are useful for engineering, such as command history or inline display of figures. As you will see below, you can enter multiple lines of text and evaluate them at once; this is often referred to as a *cell* of code. In a nutshell, if you string many of these cells together into a single digital document, you more or less end up with a **Jupyter Notebook**; this leverages the power of IPython by allowing you to type, run and save the cells in any order, as well as type formatted text in between. Together, these two tools make up our toolbox for this course, and, as you will see, both of them can run in your internet browser, so there is no need to install special software!

(calculator)=
## IPython: Your Primary Python Calculator

Below is an example of an IPython interpreter embedded in this webpage, which we refer to as our **Python Calculator**. Note that the square brackets with numbers (e.g, `[1]: ...`) are a feature of IPython that keeps track of the cells you have run: the first (pre-loaded) command is a print statement that executes once the interpreter is ready for use. You can try entering code yourself (for example, type `x=2`) and executing it using `Shift+Enter`. You just defined a variable! Note that typing `Enter` in the interpreter adds extra lines, it does not execute the cell. Try entering multiple lines, for example, `3*x`, `Enter` and `print(x)`, then execute. Can you tell what happened?

<iframe
    src="https://tudelft-citg.github.io/learn-python-calculator/repl/index.html?toolbar=1&kernel=python&code=print(%27You%20may%20begin!%27)"
    width="750"
    height="400"
    style="border:2px solid powderblue"
></iframe>

The simple exercise above should be all you need to get started with this course. Throughout this course we encourage you to the Python Calculator in a new browser tab, which will allow you to read the exercise and run code side by side. You can test it <a href="https://tudelft-citg.github.io/learn-python-calculator/repl/index.html?toolbar=1&kernel=python&code=print(%27You%20may%20begin!%27)" target="_blank">here</a> in a new tab. When the console is critical for completing the exercises in a certain chapter, a drop-down note will be added that includes a special link inside, just like this:

`````{admonition} Open the Python Calculator for this page
:class: tip, dropdown
Click this <a href="https://tudelft-citg.github.io/learn-python-calculator/repl/index.html?toolbar=1&kernel=python&code=print('You may begin!')" target="_blank">link</a> and wait until the message "<tt>You may begin!</tt>" is printed to start evaluating code. More information about this tool can be found [here](calculator). 

Remember that all pages in this course can also be opened as an interactive notebook via Binder or Colab using the {fa}rocket icon above (read more about it [here](nb-links)).
`````

All exercises in this course can be completed using only the Python Calculator. We hope you find it to be a simple but useful way to practice and learn the Python programming language.

```{note}
A special instance of the Python Calculator is set up for each page which pre-loads a few packages needed to complete the exercise. Make sure you use link that is on the page of the exercises you are working on. 
```

(nb-links)=
## Interactive Jupyter Notebooks

Although the Python Calculator is all that is needed, it is nice to be able to explore Python by using a Jupyter Notebook. There are two ways these notebooks have been set up to avoid the need for special software, namely: Binder and Colab. These notebooks allow you to run your script in cells, where each cell is equivalent to those in the IPython interpreter. Running cell blocks is more convenient for data analysis since sometimes you just need to change a small part of your code or add some explanation, math formulas, or figures. Therefore, re-running only the corresponding cell is much more efficient.

No example is provided here, but you can access this tool elsewhere in this course using the links under the rocket icon ({fa}`rocket`) at the top right of the page. Although Colab is the fastest and most reliable service, it is provided by Google, and the data privacy policy is not always clear. As such, Binder is provided as an alternative, but note that sometimes it takes a while for the notebook to load. Both of these options do not allow you to save your work in the notebook (unless you download a file or link a Google account), so be careful when closing a tab!

```{note}
Due to the way this website is generated from Jupyter Notebooks, when you view the files in Binder or Colab, you will notice oddly formatted text cells: this is the code to generate features like this note on the website, which do not render properly in the notebook environment. You can simply ignore them. In addition, whereas the Python Calculator windows will load properly, there are special pieces of code that need to be run in the notebooks to get them to work properly. Simply follow the instructions in the commented code cell near the top of the notebook, which involves uncommenting one or two lines and executing the cell.
```

## Anaconda: Python on Your Computer

If you want to explore Python programming and Jupyter ecosystems beyond the exercises covered in this course, it might be worthwhile to install a Python distribution on your own computer. The most common and easiest way to do this is with [Anaconda](https://www.anaconda.com/download). Installation instructions are not included in this course, but you can find plenty of website of videos that cover this, as well as using the Anaconda Navigator to open a Jupyter Lab or Jupyter Notebook environment. Most of the pages in this online textbook can be downloaded in the form of a Jupyter Notebook file (a file ending with `.ipynb`): open it via one of the Jupyter environments and you are ready to go!