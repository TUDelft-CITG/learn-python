# Installations (MUDE)

```{note}
This is the page from MUDE where students were instructed to install various things. Kiril translated the HTML into markdown. Good luck ;)
```

<style>
.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav > li {
  position: relative;
  display: block;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
.nav > li > a:hover,
.nav > li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.nav > li.disabled > a {
  color: #777777;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #777777;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eeeeee;
  border-color: #337ab7;
}
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #ddd;
}
.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}
.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}
.nav-tabs > li > a:hover {
  border-color: #eeeeee #eeeeee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
}
.nav-tabs.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs.nav-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:hover,
.nav-tabs.nav-justified > .active > a:focus {
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
</style>

<h2 id="setup">General information</h2>

<p> Dear students,<br/><br/>
In the “Modeling, Uncertainty and Data for Engineers” (MUDE) module you will use several software tools and services to code, collaborate and ask for support.<br/><br/>
Please, make sure you have an up-to-date web browser and follow the instructions below to install this software and learn to use these services.<br/><br/>
During installation, you may run into some issues. The Carpentries list them on their webpage:
<a href = "{{site.swc_github}}/workshop-template/wiki/Configuration-Problems-and-Solutions">Configuration Problems and Solutions wiki page</a>.
</p>

<h2 id="setup">Table of contents</h2>
<ol>
<li><a href="#mattermost">Mattermost</a></li>
<li><a href="#queue">Queue</a></li>
<li><a href="#python">Python</a></li>
<li><a href="#jupyterhub">JupyterHub</a></li>
<li><a href="#shell">Bash shell script</a></li>
<li><a href="#git">Git</a></li>
<li><a href="#editor">Text Editor</a></li>
</ol>
<h2>Platforms</h2>

<div id="mattermost">
  <h3>Mattermost</h3>

  <p>
    Mattermost is an instant messaging platform that allows you, your team members and course staff to communicate with each other. We expect that you comply with the following rules:
    <ul>
    	<li>Refrain from reaching course staff through private messages (DMs) unless explicitly told to do so.</li>
    	<li>In General chat you can find everyone participating in this course. Therefore, think carefully whether the message you want to share there is important to <em>everyone</em> before posting something and creating a notification for everybody.</li>
    	<li>Keep a good tone both in public and private channels and be respectful towards the other participants.</li>
    </ul>
    Upon pressing the following link, you agree to follow the aforementioned rules: <a href="https://mattermost.tudelft.nl/signup_user_complete/?id=h6kirbxky7nt3j4ihwksi51qry">Join Mattermost team</a>.
    <br/>
    <em>In case the link above does not work, try logging in through <a href="https://mattermost.tudelft.nl">https://mattermost.tudelft.nl</a> with your NetID and corresponding password first and then click the link again.</em><br/>
    The first time you login to Mattermost, there will be an introductory tour on how to join channels, send messages and change your profile settings.
  </p>

</div>

<div id="queue">
  <h3>Queue</h3>

  <p>
    Queue is a tool for <em>enqueing</em> during Workshops (and not only) to ask questions about the material to the Teaching Assistants, which are present during these sessions.<br>
    In order to register for our course, press the following link: <a href="https://queue.tudelft.nl/edition/370/enrol">Join Queue course</a>.
  </p>

</div>

<div id="python">
  <h3>Python</h3>

  <p>
    <a href="https://python.org">Python</a> is a popular language for
    research computing, and great for general-purpose programming as
    well.  Installing all of its research packages individually can be
    a bit difficult, so we recommend
    <a href="https://www.anaconda.com/products/individual">Anaconda</a>,
    an all-in-one installer.
  </p>

  <p>
    Regardless of how you choose to install it,
    <strong>please make sure you install Python version 3.x</strong>
    (e.g., 3.6 is fine).
  </p>

  <p>
    We will teach Python using the <a href="https://jupyter.org/">Jupyter Notebook</a>,
    a programming environment that runs in a web browser (Jupyter Notebook will be installed by Anaconda). For this to work you will need a reasonably
    up-to-date browser. The current versions of the Chrome, Safari and
    Firefox browsers are all
    <a href="https://jupyter-notebook.readthedocs.io/en/stable/notebook.html#browser-compatibility">supported</a>
    (some older browsers, including Internet Explorer version 9
    and below, are not).
  </p>

  <div>
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a data-os="windows" href="#python-windows" aria-controls="Windows" role="tab" data-toggle="tab">Windows</a></li>
      <li role="presentation"><a data-os="macos" href="#python-macos" aria-controls="MacOS" role="tab" data-toggle="tab">MacOS</a></li>
      <li role="presentation"><a data-os="linux" href="#python-linux" aria-controls="Linux" role="tab" data-toggle="tab">Linux</a></li>
    </ul>
    <div class="tab-content">
      <article role="tabpanel" class="tab-pane active" id="python-windows">
        <ol>
          <li>Open <a href="https://www.anaconda.com/products/individual#download-section">https://www.anaconda.com/products/individual#download-section</a> with your web browser.</li>
          <li>Press the Windows icon below <i>Get Additional Installers</i></li>
          <li>Download the Anaconda for Windows installer with Python 3.9. (If you are not sure which version to choose, you probably want the 64-bit Graphical Installer</li>
          <li>Install Python 3 by running the Anaconda Installer, using all of the defaults for installation <em>except</em> make sure to check <em>both</em> <strong>Add Anaconda to my PATH environment variable</strong> and <strong>Register Anaconda as my default Python</strong>.</li>
        </ol>
        <h4>Video Tutorial</h4>
        <div class="yt-wrapper2">
        <div class="yt-wrapper">
        <iframe type="text/html" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube-nocookie.com/embed/xxQ0mzZ8UvA?modestbranding=1&playsinline=1&iv_load_policy=3&rel=0" class="yt-frame" allowfullscreen></iframe>
        </div>
        </div>
      </article>
      <article role="tabpanel" class="tab-pane" id="python-macos">
        <ol>
          <li>Open <a href="https://www.anaconda.com/products/individual#download-section">https://www.anaconda.com/products/individual#download-section</a> with your web browser.</li>
          <li>Press the macOS icon below <i>Get Additional Installers</i></li>
          <li>Download the Anaconda Installer with Python 3.9 for macOS Graphical Installer.</li>
          <li>Install Python 3 by running the Anaconda Installer using all of the defaults for installation.</li>
        </ol>
        <h4>Video Tutorial</h4>
        <div class="yt-wrapper2">
        <div class="yt-wrapper">
        <iframe type="text/html" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube-nocookie.com/embed/TcSAln46u9U?modestbranding=1&playsinline=1&iv_load_policy=3&rel=0" class="yt-frame" allowfullscreen></iframe>
        </div>
        </div>
      </article>
      <article role="tabpanel" class="tab-pane" id="python-linux">
        <ol>
          <li>Open <a href="https://www.anaconda.com/products/individual#download-section">https://www.anaconda.com/products/individual#download-section</a> with your web browser.</li>
          <li>Download the Anaconda Installer with Python 3 for Linux.<br>
            (The installation requires using the shell. If you aren't
            comfortable doing the installation yourself
            stop here and request help at the workshop.)
          </li>
          <li>
            Open a terminal window and navigate to the directory where
            the executable is downloaded (e.g., `cd ~/Downloads`).
          </li>
          <li>
            Type <pre>bash Anaconda3-</pre> and then press
            <kbd>Tab</kbd> to autocomplete the full file name. The name of
            file you just downloaded should appear.
          </li>
          <li>
            Press <kbd>Enter</kbd>
            (or <kbd>Return</kbd> depending on your keyboard).
            You will follow the text-only prompts.
            To move through the text, press <kbd>Spacebar</kbd>.
            Type <code>yes</code> and press enter to approve the license.
            Press <kbd>Enter</kbd> (or <kbd>Return</kbd>)
            to approve the default location
            for the files.
            Type <code>yes</code> and press
            <kbd>Enter</kbd> (or <kbd>Return</kbd>)
            to prepend Anaconda to your <code>PATH</code>
            (this makes the Anaconda distribution the default Python).
          </li>
          <li>
            Close the terminal window.
          </li>
        </ol>
      </article>
    </div>
  </div>
</div>

<div id="jupyterhub">
  <h3>JupyterHub</h3>

  <p>
    JupyterHub is an online environment that supports running Jupyter Notebooks, running Python files and using Git. Therefore, you can work remotely on the workshops we provide you with.
  </p>
  	
  <p>
    Go over the following manual to learn how to use JupyterHub: <a href="https://servicedesk.surf.nl/wiki/display/WIKI/User+Manual+-+Student">https://servicedesk.surf.nl/wiki/display/WIKI/User+Manual+-+Student</a>.
    You can use the following link to access the course environment: <a href="https://jupyter.lisa.surfsara.nl/jhltud001/">https://jupyter.lisa.surfsara.nl/jhltud001/</a>
  </p>

</div>


<div id="shell">
  <h3>The Bash Shell</h3>
  <p>
    Bash is a commonly-used shell that gives you the power to do
    tasks more quickly.
  </p>

  <div>
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a data-os="windows" href="#shell-windows" aria-controls="Windows" role="tab" data-toggle="tab">Windows</a></li>
      <li role="presentation"><a data-os="macos" href="#shell-macos" aria-controls="MacOS" role="tab" data-toggle="tab">MacOS</a></li>
      <li role="presentation"><a data-os="linux" href="#shell-linux" aria-controls="Linux" role="tab" data-toggle="tab">Linux</a></li>
    </ul>
    <div class="tab-content">
      <article role="tabpanel" class="tab-pane active" id="shell-windows"> If you are following the YouTube video, you can stop watching at <b>2:52</b> as you do not need to install the Software Carpentry Windows installer.
        <ol>
          <li>Download the Git for Windows <a href="https://gitforwindows.org/">installer</a>.</li>
          <li>Run the installer and follow the steps below:
            <ol>
              <li>
                Click on "Next" four times (two times if you've previously
                installed Git).  You don't need to change anything
                in the Information, location, components, and start menu screens.
              </li>
              <li>
                <strong>
                  From the dropdown menu, "Choosing the default editor used by Git", select "Use the Nano editor by default" (NOTE: you will need to scroll <emph>up</emph> to find it) and click on "Next".
                </strong>
              </li>
              <li>
                On the page that says "Adjusting the name of the initial branch in new repositories", ensure that
		"Let Git decide" is selected. This will ensure the highest level of compatibility for our lessons. 
              </li>
              <li>
                Ensure that "Git from the command line and also from 3rd-party software" is selected and
                click on "Next". (If you don't do this Git Bash will not work properly, requiring you to
                remove the Git Bash installation, re-run the installer and to select the "Git from the
                command line and also from 3rd-party software" option.)
              </li>
 	      <li>
	      Select "Use bundled OpenSSH".
	      </li>
              <li>
		Ensure that "Use the native Windows Secure Channel Library" is selected and click on "Next".
	      </li>
              <li>
                Ensure that "Checkout Windows-style, commit Unix-style line endings" is selected and click on "Next".
              </li>
              <li>
                <strong>
                  Ensure that "Use Windows' default console window" is selected and click on "Next".
                </strong>
              </li>
              <li>
		Ensure that "Default (fast-forward or merge) is selected and click "Next"
              </li>
              <li>
		Ensure that "Git Credential Manager" is selected and click on "Next".
              </li>
              <li>
		Ensure that "Enable file system caching" is selected and click on "Next".
              </li>
              <li>
		Click "Next" in the "Configuring experimental options" section.
              </li>
              <li>Click on "Install".</li>
              <li>Click on "Finish" or "Next".</li>
            </ol>
          </li>
          <li>
            If your "HOME" environment variable is not set (or you don't know what this is):
            <ol>
              <li>Open command prompt (Open Start Menu then type <code>cmd</code> and press <kbd>Enter</kbd>)</li>
              <li>
                Type the following line into the command prompt window exactly as shown:
                <p><code>setx HOME "%USERPROFILE%"</code></p>
              </li>
              <li>Press <kbd>Enter</kbd>, you should see <code>SUCCESS: Specified value was saved.</code></li>
              <li>Quit command prompt by typing <code>exit</code> then pressing <kbd>Enter</kbd></li>
            </ol>
	  </li>
        </ol>
        <p>This will provide you with both Git and Bash in the Git Bash program.</p>
        <h4>Video Tutorial</h4>
        <div class="yt-wrapper2">
        <div class="yt-wrapper">
        <iframe type="text/html" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube-nocookie.com/embed/339AEqk9c-8?start=0&end=172&modestbranding=1&playsinline=1&iv_load_policy=3&rel=0" class="yt-frame" allowfullscreen></iframe>
        </div>
        </div>
      </article>
      <article role="tabpanel" class="tab-pane" id="shell-macos">
        <p>
          The default shell in some versions of macOS is Bash, and
	  Bash is available in all versions, so no need to install anything.
	  You access Bash from the Terminal (found in
	  <code>/Applications/Utilities</code>).
          See the Git installation <a href="#shell-macos-video-tutorial">video tutorial</a>
          for an example on how to open the Terminal.
          You may want to keep Terminal in your dock for this workshop.
        </p>
        <p>
            To see if your default shell is Bash type <code>echo $SHELL</code>
            in Terminal and press the <kbd>Return</kbd> key. If the message
            printed does not end with '/bash' then your default is something
            else and you can run Bash by typing <code>bash</code>
        </p>
        <p>
          If you want to change your default shell, see <a href="https://support.apple.com/en-au/HT208050" rel="noopener">
          this Apple Support article</a> and follow the instructions on "How to change your default shell".
        </p>
        <h4 id="shell-macos-video-tutorial">Video Tutorial</h4>
        <div class="yt-wrapper2">
        <div class="yt-wrapper">
        <iframe type="text/html" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube-nocookie.com/embed/9LQhwETCdwY?modestbranding=1&playsinline=1&iv_load_policy=3&rel=0" class="yt-frame" allowfullscreen></iframe>
        </div>
        </div>
      </article>
      <article role="tabpanel" class="tab-pane" id="shell-linux">
        <p>
          The default shell is usually Bash and there is usually no need to
          install anything.
        </p>
        <p>
          To see if your default shell is Bash type <code>echo $SHELL</code> in
          a terminal and press the <kbd>Enter</kbd> key. If the message printed
          does not end with '/bash' then your default is something else and you
          can run Bash by typing <code>bash</code>.
        </p>
      </article>
    </div>
  </div>
</div>

<div id="git">
  <h3>Git</h3>
  <p>
    Git is a version control system that lets you track who made changes
    to what when.
  </p>
  <p>
    In order to be able to take part in projects in MUDE, make sure that you have logged in at least once to <a href="https://gitlab.tudelft.nl/">https://gitlab.tudelft.nl/</a>.
  </p>

  <div>
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a data-os="windows" href="#git-windows" aria-controls="Windows" role="tab" data-toggle="tab">Windows</a></li>
      <li role="presentation"><a data-os="macos" href="#git-macos" aria-controls="MacOS" role="tab" data-toggle="tab">MacOS</a></li>
      <li role="presentation"><a data-os="linux" href="#git-linux" aria-controls="Linux" role="tab" data-toggle="tab">Linux</a></li>
    </ul>
    <div class="tab-content">
      <article role="tabpanel" class="tab-pane active" id="git-windows">
        <p>
          Git should be installed on your computer as part of your Bash
          install (see the
          <a href="#shell">Shell installation instructions</a>).
        </p>
      </article>
      <article role="tabpanel" class="tab-pane" id="git-macos">
        <p>
          <strong>For macOS</strong>, install Git for Mac
          by downloading and running the most recent "mavericks" installer from
          <a href="http://sourceforge.net/projects/git-osx-installer/files/">this list</a>.
          Because this installer is not signed by the developer, you may have to
          right click (control click) on the .pkg file, click Open, and click
          Open on the pop up window.
          After installing Git, there will not be anything in your <code>/Applications</code> folder,
          as Git is a command line program.
          <strong>For older versions of OS X (10.5-10.8)</strong> use the
          most recent available installer labelled "snow-leopard"
          <a href="http://sourceforge.net/projects/git-osx-installer/files/">available here</a>.
        </p>
        <h4>Video Tutorial</h4>
        <div class="yt-wrapper2">
        <div class="yt-wrapper">
          <iframe type="text/html" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube-nocookie.com/embed/9LQhwETCdwY?modestbranding=1&playsinline=1&iv_load_policy=3&rel=0" class="yt-frame" allowfullscreen></iframe>
        </div>
        </div>
      </article>
      <article role="tabpanel" class="tab-pane" id="git-linux">
        <p>
          If Git is not already available on your machine you can try to
          install it via your distro's package manager. For Debian/Ubuntu run
          <code>sudo apt-get install git</code> and for Fedora run
          <code>sudo dnf install git</code>.
        </p>
      </article>
    </div>
  </div>
</div>

<div id="editor">
  <h3>Text Editor</h3>

  <p>
    When you're writing code, it's nice to have a text editor that is
    optimized for writing code, with features like automatic
    color-coding of key words. The default text editor on macOS and
    Linux is usually set to Vim, which is not famous for being
    intuitive. If you accidentally find yourself stuck in it, hit
    the <kbd>Esc</kbd> key, followed by <kbd>:</kbd>+<kbd>Q</kbd>+<kbd>!</kbd>
    (colon, lower-case 'q', exclamation mark), then hitting <kbd>Return</kbd> to
    return to the shell.
  </p>

  <div>
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a data-os="windows" href="#editor-windows" aria-controls="Windows" role="tab" data-toggle="tab">Windows</a></li>
      <li role="presentation"><a data-os="macos" href="#editor-macos" aria-controls="MacOS" role="tab" data-toggle="tab">MacOS</a></li>
      <li role="presentation"><a data-os="linux" href="#editor-linux" aria-controls="Linux" role="tab" data-toggle="tab">Linux</a></li>
    </ul>
    <div class="tab-content">
      <article role="tabpanel" class="tab-pane active" id="editor-windows">
        <p>
          nano is a basic editor and the default that instructors use in the workshop.
          It is installed along with Git.
        </p>
      </article>
      <article role="tabpanel" class="tab-pane" id="editor-macos">
        <p>
          nano is a basic editor and the default that instructors use in the workshop.
          See the Git installation <a href="#editor-macos-video-tutorial">video tutorial</a>
          for an example on how to open nano.
          It should be pre-installed.
        </p>
        <h4 id="editor-macos-video-tutorial">Video Tutorial</h4>
        <div class="yt-wrapper2">
        <div class="yt-wrapper">
        <iframe type="text/html" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube-nocookie.com/embed/9LQhwETCdwY?modestbranding=1&playsinline=1&iv_load_policy=3&rel=0" class="yt-frame" allowfullscreen></iframe>
        </div>
        </div>
      </article>
      <article role="tabpanel" class="tab-pane" id="editor-linux">
        <p>
          nano is a basic editor and the default that instructors use in the workshop.
          It should be pre-installed.
        </p>
      </article>
    </div>
  </div>
</div>