

## Julia Language Installation

Depending on the device you are using, you download the appropriate one version of Julia from [page installations](https://julialang.org/downloads/) on the official site.

### Windows users {#windows-users .unnumbered}

1. Go to downloads and run the installer.

2. Copy the [[path]{#Path}]{style="color: cyann"} to which
     Julia is installed (it will be needed below).

### MacOSUsers {#χρήστες-macos .unnumbered}

1. Double-click the image of the downloaded disk (in the folder of
     downloads) to load it.

2. Drag the Julia-1.X.Y app to the shortcut folder
     Applications.

### Linux Users {#χρήστες-linux .unnumbered}

1. Unzip the downloaded folder and place it in the
     your home directory.

2. Make sure you have installed the dependencies
     curl and cmake.

After installation, opening Julia shows the
Julia's interactive mode, called REPL (Read Evaluate Print Loop), at
which you can write your first code on the command line like
shown below:

::: tcolorbox
[**`julia>`**]{style="color: juliagreen"}
**`println("Hello World!$! ``‘`\
`nThe sum of 3 and 5 is: ", 3+5)`** [`Hello World!@!`\
`The sum of 3 and 5 is: 8`]{.roman}
:::

## Add Julia language to PATH environment variable

In order to be able to run Julia in the command prompt/terminal
of your device requires adding the Julia language to the PATH
Environment Variables

### Windows Users {#χρήστες-windows-1 .unnumbered}

1. Press the Windows button and search for \"Edit
     Environment Variables (Edit the system environment variables)\"

2. Press the button \"Environment Variables (Environment
     Variables)\" at the bottom right of the window that will appear on the screen
     your

The path you need to change is in System Variables
(System Variables)

1. Find \"Path\" in System Variables,
     tap up and tap edit.

#### Windows 7-8 {#windows-7-8 .unnumbered}

1. If there is no semicolon (';') at the end, add it and
     paste the path to the installation directory folder
     noted [above](#Path). This route should
     looks like C:```\
     Users```\
     UserName```\
     AppData```\
     Local`\`Programs
     Julia-1.X.Y. (your version here)
#### Windows 10 {#windows-10 .unnumbered}
1. Press 'New' on the top right of the window that will appear and
     paste the path to the installation directory folder
     noted [above](#Path). This route should
     look like C:```\
    μοιάζει με C:`‘`\
    Users`‘`\
    UserName`‘`\
    AppData`‘`\
    Local`‘`\
    Programs`‘`\
    Julia-1.7.3.```

All that remains is to add the suffix to the path you pasted.

1. Add the suffix '```\
     bin' and save the changes made.```

### MacOS Users {#χρήστες-macos-1 .unnumbered}

1. Press cmd + space and search for terminal.

2. Copy and paste the following two commands:
     **`rm -f /usr/local/bin/julia`**
     **`sudo ln -s /Applications/Julia-1.X.app/Contents/Resources/julia/bin/julia /usr /local/bin/julia`**

3. Enter your code and you're good to go.

At this point you can open the command prompt (Windows users)
or the terminal (MacOS and Linux users) and typing \"julia\" will
display the Julia REPL.

## Package Installation (packages)

Packages contain modules, tests and documentation. They expand the
basic functionality of Julia.

Julia has a built-in package manager for installing add-on functionality written in Julia. It can also install external libraries using your operating system's standard system for doing so, or by compiling from source.

### 1st way of installing packages {#way-to-install-packages .unnumbered}

1. Open the Julia REPL.

2. In the command prompt type \"`using Pkg`" and press ENTER.

3. To load a package, write the command
     `Pkg.add("packagename")`. To load multiple packages you can
     also use the command:
     `for pkg in ["DifferentialEquations", "Turing", "DataFrames", "Plots"]`
     `Pkg.add(pkg) end`

### 2nd way of installing packages {#way-to-install-packages .unnumbered}

1. Open the Julia REPL.

2. In the command line type \"`]`\".

3. To load a package, write the command
     \"`add packagename`".

For more information about the packages available
for Julia check the links found on [their page
packages](https://julialang.org/packages/) on the official site.

## Install IDE/code-editor

### Usefulness of code-editors and IDEs {#usefulness-of-code-editors-and-ides .unnumbered}

For writing larger programs, it is recommended for all of them
users to download a code-editor or an IDE (Integrated
Development Environment).

A code-editor is a text editor that accelerates
and makes programming easier as it completes code, detects
errors and provides syntax highlighting by displaying keywords
language and syntax errors with visually distinct colors etc.

IDEs present a single program in which all the
development and provides capabilities to create, modify,
compiling, developing and debugging the software (contain
i.e. code-editor).

Some Editors and IDEs whose installation we will refer to are
the:

-   [VS Code]{style="color: cyann"}

-   [Jupyter]{style="color: cyann"}

>A single editor or IDE is very likely to cover all of your needs needs, so you can choose one of the above and find below information about its installation.

### Install VS Code Julia Extension {#install-vs-code-julia-extension .unnumbered}

1. Depending on the device you are using, download the appropriate one
     version of VS Code from [page
     installations](https://code.visualstudio.com/download) in official
     site. At this point you should be able to run VS Code.

2. You can download the extension directly from [VS Code
     Marketplace](https://marketplace.visualstudio.com/items?itemName=julialang.language-julia)
     *or* download it manually from within VS Code by going to
     in extensions (extensions) and downloading the extension with the
     name Julia.

3. Now you can make a new file, save it
     ending with \".jl\" and run it

4. If the extension does not automatically detect the Julia installation you can
     set julia.exe-cutablePath to point to the executable
     Julia file that the extension should use. To
     edit the configuration settings you can get
     access through the menu File$\to$Preferences$\to$Settings to
     then make sure the user settings include the
     setting julia.executablePath;

#### Windows users {#users-windows-2 .unnumbered}

1. To find the path you will need you can open it
     Windows menu by pressing the Windows button, search
     Julia and then right-click to select: \"open its location
     (Open file location)\"

2. Right clicking again on the Julia X.Y.Z file select:
     \"open file location"

3. Copy the Path of julia.exe.

4. Open VS Code follow: File$\to$Preferences$\to$Settings
     (or just by pressing ctr + ,) and look for julia.executablePath in
     search bar.

5. Paste the julia.exe path you copied in step 3,
     close settings and restart VS code.

#### MacOS Users {#users-macos-2 .unnumbered}

1. To find the path you will need you will need to download
     the file labeled \"64-bit.tar.gz\" from [page
     installations](https://julialang.org/downloads/) by Julia.

2. Copy the file path shown below
     Photo.

::: center
[image]{.image .placeholder original-image-src="julia_bin_path.png"
original-image-title=""}
:::

1. Copy the Path of julia.exe.

2. Open VS Code follow: File$\to$Preferences$\to$Settings
     (or just by pressing ctr + ,) and look for julia.executablePath in
     search bar.

3. Paste the file path you copied in step 3, close
     settings and restart VS code.

### Useful Links {#useful-links-1 .unnumbered}

For windows users, the video [Julia programming Environment set up in
Visual Studio Code](https://www.youtube.com/watch?v=2Q2YQt5cL4c) explains
detailing the process described above.

## Install Jupyter {#install-jupyter .unnumbered}

### 1st way: Install using Anaconda {#1st-way-install-using-anaconda .unnumbered}

1. Download Anaconda from [its official site
     Anaconda](https://www.anaconda.com/products/distributio). **Users
     Windows:** if you don't have Python installed, select in step
     showing the \"Advanced Options\" of the installation
     option \"Add Anaconda3 to my PATH environment variable\".

2. Press the Windows button and open Anaconda Navigator.

3. There you will find Jupyter Lab and Jupyter Notebook installed.

4. To start writing a Jupyter notebook, just
     type the following command: \"`jupyter notebook`\".

### 2nd way: Install Jupyter via Julia REPL {#th-way-install-jupyter-via-julia-repl .unnumbered}

1. Open the Julia REPL.

2. Install the package : \"`IJulia`\".

3. Type in the code line : \"`using IJulia`\" and press ENTER.
     []{#step:3 label="step:3"}

4. Write in the code line : \"`notebook()`\" and press ENTER.
     []{#step:4 label="step:4"}

5. An option will appear that says:
     \"`install Jupyter via Conda, y/n [y]: `\". Press ENTER and you will
     start installing Jupyter

6. After the installation is complete, write exit() and restart it
     Julia REPL.

7. Repeating the steps
     [\[step:3\]](#step:3){reference-type="eqref" reference="step:3"} and
     [\[step:4\]](#step:4){reference-type="eqref" reference="step:4"}, you will
     open Jupyter in your browser.

### 3rd way: Install Jupyter via Python {#th-way-install-jupyter-via-python .unnumbered}

Those who already have Python 2 installed, version later than
Python 2.7.9 *or* Python 3, a later version of Python
3.4, they can ignore the Python installation and
install and verify installation of Pip.
#### Install Python {#install-python .unnumbered}

1. Download the Python installer from [its official site
     Python](https://www.python.org). You will need to go to downloads
     $\to$ Python 3.10.5 .

**Note for Windows users:** Make sure you put (0,.35) --
(.25,0) -- (1,.7) -- (.25,.15) -- cycle; in \"Add Python 3.10.5
to PATH\", which will appear at some point in the installation.

1. To confirm that python is installed on your system,
     open command prompt (Windows users)/terminal (MacOS users
     *or* Linux) and type \"`python`\".

2. The version of python you have installed will be displayed if the
     python successfully installed on your device.

#### Install and verify installation of pip {#install-and-verify-installation-of-pip .unnumbered}

Pip is a powerful package management system for packages
Python software. So make sure you have it installed.

To confirm you have pip installed on your system:

1. Open command prompt (Windows users)/terminal (MacOS users
     *or* Linux).

2. Just type: \"`pip -V`\" and press ENTER.

3. If a message appears with the version of pip, then you are ready to
     proceed.

All versions of Python 2 $>=2.7.9$ and Python 3$>=3.4$ that
they are installed from the official python site, they also install pip. In
in case it is not installed, follow the guides below:

- **Windows users:** [How to install pip on
     Windows](https://www.geeksforgeeks.org/how-to-install-pip-on-windows/).

- **MacOS Users:** [How to install pip on a
     Mac](https://www.groovypost.com/howto/install-pip-on-a-mac/).

- **Linux users:** [How to install pip in
     Linux](https://www.tecmint.com/install-pip-in-linux/).

#### Update pip {#update-pip .unnumbered}

**Windows users:** Open command prompt and type :
\"`python -m pip install -U pip`\".

**MacOS users:** Open terminal and type :
\"`$ python -m pip install –upgrade pip`\".

**Linux users:** Open terminal and type :
\"`$ sudo -H pip3 install –upgrade pip`\"
### Install Jupyter {#install-jupyter-1 .unnumbered}

1. Open the terminal and create a virtual environment with the
     command \"`pip3 install virtualenv`"

2. Create a virtual jupyter environment and activate it with
     the command: `virtualenv jupyter source jupyter/bin/activate`

3. Open the terminal and type the command:
     \"`pip3 install jupyter`".

4. To start writing a Jupyter notebook, just
     type the following command at the command prompt (users
     Windows)/terminal (MacOS or Linux users): \"`jupyter notebook`\".

### Add Julia language to Jupyter {#add-julia-language-to-jupyter .unnumbered}

If you didn't follow the 2nd way to install Jupyter, you will need to
to add a package that will allow you to use the
Julia language in Jupyter.

1. Open the Julia REPL in any of the ways they have
     mentioned.

2. Write in the REPL the command : \"`using Pkg`"

3. Add the \"IJulia\" package by typing the command:
     \"`Pkg.add("IJulia")`\"
## Useful links

-   [How to install Anaconda and Jupyter Notebook in Windows
    10](https://www.youtube.com/watch?v=syijLJ3oQzU)

-   [How to install Jupyter Notebook for Windows - Geeks for Geeks
    ](https://www.geeksforgeeks.org/how-to-install-jupyter-notebook-in-windows/)

-   [How to setup Jupyter & Python on Mac, Windows or Linux
    Tutorial](https://www.youtube.com/watch?v=9tPS-7TWjq0)

-   [Installing the classic Jupyter Notebook - Jupyter
    official](https://docs.jupyter.org/en/latest/install/notebook-classic.html#installing-jupyter-using-anaconda-and-conda)


At this point the user is ready to write scripts.
But in order to equip himself with the knowledge to write the brief
and beautiful code provided by Julia would be good to refer to
[language usage guide
Julia](https://eclass.uoa.gr/modules/document/?course=MATH722).
