
# Python for Engineers

<img src="https://raw.githubusercontent.com/TUDelft-CITG/learn-python/main/book/figures/learn-python-logo.png" width=80 style="float: right;"/>

[![Jupyter Book Badge](https://raw.githubusercontent.com/executablebooks/jupyter-book/47e06598ef05bd429467a7de66a7fb3a83e89c2f/docs/images/badge.svg)](https://jupyterbook.org) 
[![Jupyter lite Badge](https://jupyterlite.rtfd.io/en/latest/_static/badge.svg)](https://github.com/jupyterlite)

This repository contains the source for the website [Python for Engineers](https://tudelft-citg.github.io/learn-python/). The website is a self-paced online course, which is meant to be a way to provide (and refresh) knowledge of Python. This course was originally developed for students in the fields of: Civil Engineering, Environmental Engineering, Applied Earth Sciences and Construction Management and Engineering. These programs are part of the faculty of Civil Engineering and Geosciences at Delft University of Technology in the Netherlands. We try to draw on examples from these fields, but the course contents should be relevant for any engineering or applied geoscience discipline.

## Course Overview

The course "Learn Python for Engineers" aims to provide freshman master students with essential Python programming skills tailored to their field of study. By the end of the course, students will:

1. Gain a solid foundation in Python programming.
2. Understand how Python can be applied in engineering and geoscience.
3. Develop the ability to automate tasks and analyze complex data using Python.
4. Acquire skills to visualize information effectively.
5. Learn to develop efficient algorithms for problem-solving in their domain.
6. Enhance their academic performance and future professional prospects.
7. Become part of a vibrant learning community and foster collaboration with fellow classmates.

Join us in this exciting journey to acquire the necessary programming skills that will empower you in your academic and professional pursuits.

The course is organized as follows:
- Interactive exercises are found in Course Contents, where theory and exercises are introduced
- Each chapter contains at least two parts: theory and exercises. For this edition on the chapter on `numpy` contains more than one Exercise section, but this may change in the future.
- The "In a Nutshell" chapters do not contain any interactive elements.

## Interactive Python Elements

As of Summer 2023, this course uses two methods for providing students the ability to run Python in their internet browser: an IPython console (JupyterLite and Pyodide) and a 3rd party cloud kernel to run a `*.ipynb` file (Binder and Colab). The IPython console is provided in the associated repositor `TUDelft-CITG/learn-python-calculator`. There is also a package that is loaded into the notebooks and IPython console to check student answers, which can be found in `TUDelft-CITG/learn-python-package`.

We decided that with the in-browser Python capabilities, there is no longer a requirement to provide separate notebooks for students to run locally (and consequently, no need to install any software!). However, since it is nice to be able to run the cells in the theory and exercise pages, links to open each page with a working Python kernel via Binder and Colab are included (the rocket icon {fa}`rocket` at the top right). Colab initializes much faster and more reliably, but due to GDPR concerns with Google products, Binder is offerred as an alternative. Neither platform will save modifications to the notebook, unless they are downloaded or imported individually.

An overview of the interactive elements by Chapter:

- Exercises in Chapters 1 and 2 are evaluated using JupyterQuiz only; no execution of Python code is required
- Exercises in Chapters 3, 4 and 6 use a JupyterLite REPL; the answer-checking package is used here
- Exercises in Chapter 5 use a mix of JupyterQuiz and a JupyterLite REPL; the answer-checking package is used here
- Exercises in Chapter 7 use a JupyterLite REPL (separate web page); the answer-checking package is *not* used here 

### IPython Console

An HTML link is created and can be customized to initialize the console fora particular page.

To use the IPython console with a bit of front-end setup, use this [link](https://tudelft-citg.github.io/learn-python-calculator/repl/index.html?toolbar=1&kernel=python&code=print(%27You%20may%20begin!%27)), which adds the following to the URL: `?toolbar=1&kernel=python&code=print(%27You%20may%20begin!%27)`.

The example below chooses the kernel, imports pandas and the answer-checker and gives a message to begin.
 
````md
```{admonition} Open the Python Calculator for this page
:class: tip, dropdown
Click this <a href="https://tudelft-citg.github.io/learn-python-calculator/repl/index.html?toolbar=1&kernel=python&code=import pandas as pd; import data.check_answers as check; print('You may begin!')" target="_blank">link</a> and wait until the message "<tt>You may begin!</tt>" is printed to start evaluating code. More information about this tool can be found [here](calculator). 

Remember that all pages in this course can also be opened as an interactive notebook via Binder or Colab using the {fa}rocket icon above (read more about it [here](nb-links)).
```
````

### Jupyter notebooks

Notebooks are set up using built-in features of Jupyter Book and links to Binder and Colab are provided. This automatically uses the notebook to generate the page, and the following cell needs to be added to the notebooks (remember to make it a hidden cell in the Jupyter Book so that it does not display on the website):
```
# ##-On Google colab uncomment and run the following code
# ## to install and import the function that will be used to check your answers.
# !pip install learn-python-ceg-test

# ##-On Binder just uncomment and run the following line
# import learn_python_ceg_test.check_answers as check
```

### Decision-making notes

This section summarizes some key information that led up to the final decision of whether (and how) to include a Python kernel directly in the Jupyter Book (i.e., an interactive page directly in the book) for the Summer 2023 version, which was not trivial. These tools change quickly, so the information may already be out of date or irrelevant.

Remember that JupyterLite provides a Jupyter-like interface (Lab, classic notebook, REPL/console) and can be used with one of two kernels: Xeus or Pyodide. The biggest implication for us seems to be that Xeus does not allow dynamic import of packages at runtime (conda-forge only), whereas Pyodide does (via pip). On the other hand, Xeus allows pre-loading packages, whereas Pyodide does not. Future development may combine these two kernels, so it is only a matter of time until something breaks. Stay tuned...

Option 1:
- JupyterLite REPL to create iPython console in a frame on the page, supported by a Xeus kernel
- Allows conda forge packages (no pip) installed during the build process (not dynamically installed via frontend)
- Can specify code to run on init but it is visible as the first cell command (no hiding of code)
- conda forge package only visible in error traceback (important for answer-checking)

Option 1.5: same as Option 1 with a notebook, but must include the nb as a separate file in the book repo

Option 2:
- Binder (creates an image) and Colab creates a nb interface on google server (not same container as binder)
- displays page as nb with live kernel
- can use pip (conda-forge not sure)
- cannot hide cells (this is JB only, and all cells need to run and be not hidden)
- all cells are active
- need to hide cell in JB for colab pip install (not remove) and run this cell when using nb in colab

Option 3: JupyterLite kernel with Thebe to support an interactive Jupyter notebook page. We did not pursue this because it's not fully implemented yet via Jupyter Book (javascript stuff). Although Thebe is functional with a Binder kernel, in our opinion this is too slow and unreliable.

In the end, there was a problem with getting `matplotlib` to import when JupyterLite was included in the book build (see [Issue #35](https://github.com/TUDelft-CITG/learn-python/issues/35)). We also realized that it is possible (and much easier!) to create a separate JupyterLite website that uses Lab, classic nb or REPL via GitHub pages (see the [JupyterLite](https://jupyterlite.readthedocs.io/en/latest/) demos), which was a good alternative to complicated workflows and buggy kernel installations required for building the kernel directly into the book.

## Acknowledgments

Financial support for this project was provided through an open education grant from the Educational Management Team for the Civil Engineering and Geosciences Faculty at Delft. The content was first developed for Summer 2022 by Sandra Verhagen and a team of TA's in Jupyter notebooks that were auto-graded in Vocareum. For Summer 2023 a second round of funding was optained to update the content and adapt it to an entirely open and self-paced course without enrollement via a Jupyter Book, led by Robert Lanzafame. Special thanks goes to Miguel Mendoza Lugo who adapted the notebooks into the Jupyter Book format and implemented the interactive features, as well as Ahmed Farahat, who helped create the fun new visual features that make understanding the material easier in the Jupyter Book platform, as well as the In a Nutshell summaries.

This Book is maintained and developed by staff of the Faculty of Civil Engineering and Geosciences of TU Delft, the Netherlands.

 <img src="https://raw.githubusercontent.com/TUDelft-CITG/learn-python/mike/book/figures/TUDelft_logo_cmyk.png" width=170  style="float: right;"/> 
