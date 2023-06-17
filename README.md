# learn-python

- Caspar: add config files and recipe pages to our book on main


option 1:
- JupyterLite REPL to create iPython console in a frame on the page, supported by a Xeus kernel
- Allows conda forge packages (no pip) installed during the build process (not dynamically installed via frontend)
- Can specify code to run on init but it is visible as the first cell command (no hiding of code)
- conda forge package only visible in error traceback

option 1.5: can also do option 1 with a nb, but then you need to include the nb as a separate file in the book repo

option 2:
- binder (creates an image), colab creates a nb interface on google server (not same container as binder)
- displays page as nb
- can use pip (conda-forge not sure)
- cannot hide cells (this is JB only, and all cells need to run and be not hidden)
- all cells are active
- need to hide cell in JB for colab pip install (not remove) and run this cell when using nb in colab

Not used: JupyterLite kernel to support an interactive Jupyter notebook page, because it's not fully implemented yet via Jupyter Book (javascript stuff). Note, however, that it *is* possible to create a JupyterLite website that uses Lab, classic nb or REPL. 

We decided that with the in-browser Python capabilities, there is no longer any need to provide separate nb's for students to run locally (nor install any software!).

Remember that JupyterLite can be used with one of two kernels: Xeus or Pyodide. The biggest implication for us seems to be that Xeus does not allow dynamic import of packages at runtime, whereas Pyodide does. On the other hand, Xeus allows pre-loading packages, whereas Pyodide does not. Future development may combine these two kernels, so it is only a matter of time until something breaks. Stay tuned...

Robert will add:
- a special page on how to use python in this mooc. Installing software is optional, and must give instructions for how to use it (e.g., with a nb or iPython)
- explanation that this mooc is meant for students with a bit of familiarity with scientific computing (e.g., we don't introduce things like 


