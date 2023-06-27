 <img src="https://raw.githubusercontent.com/TUDelft-CITG/learn-python/main/book/figures/learn-python-logo.png" width=80/> 


 
# Learn Python for Civil Engineering and Geosciences

[![Jupyter Book Badge](https://raw.githubusercontent.com/executablebooks/jupyter-book/47e06598ef05bd429467a7de66a7fb3a83e89c2f/docs/images/badge.svg)](https://jupyterbook.org)
[![Jupyter lite Badge](https://jupyterlite.rtfd.io/en/latest/_static/badge.svg)](https://github.com/jupyterlite)


The course "Learn Python for Civil Engineering and Geosciences" aims to provide freshman master students with essential Python programming skills tailored to their field of study. By the end of the course, students will:

1. Gain a solid foundation in Python programming.
2. Understand how Python can be applied in civil engineering and geosciences.
3. Develop the ability to automate tasks and analyze complex data using Python.
4. Acquire skills to visualize information effectively.
5. Learn to develop efficient algorithms for problem-solving in their domain.
6. Enhance their academic performance and future professional prospects.
7. Become part of a vibrant learning community and foster collaboration with fellow classmates.

Join us in this exciting journey to acquire the necessary programming skills that will empower you in your academic and professional pursuits.


Things to be considered: 
- I decided to use jupyterlite with  the kernel backed by Pyodide
- On the intro page, you will see an embedded frame of jupyterlite as well as a link to open it in a new tab. I will remove that later 
- The jupyter lite sandbox is on my personal GitHub, we need to make one new on the TU Delft GitHub


- The actions build.yml and test.yml are disabled since those are for building the book using xeus
- I added a new action book.yml. This will build and publish the book every time there is a change in the main branch. We need to change that.




## Interactive Python Elements

We decided that with the in-browser Python capabilities, there is no longer any need to provide separate notebooks for students to run locally (and consequently, no need to install any software!).
### Overview Interactive Elements, Summer 2023

JupyterLite Sandbox: `jupyter-lite-sandbox`

  - The function is also available on pypi as . 
  - The function is not available on conda-forge yet. 

An overview of the interactive elements by Chapter is below:

- Exercises in Chapters 1 and 2 are evaluated using jupyterquiz only
- Exercises in Chapters 3, 4 and 6 can be evaluated using the answer-checking package function located at the JupyterLite Sandbox. 
- Exercises in Chapter 5 are evaluated jupyterquiz and a jupyter-lite RPL link is given to make computations
- Exercises in Chapter 7 are not evaluated, a jupyter-lite RPL link is given to make computations 

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