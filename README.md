# D3 Visualization

For this final assignment, you will be using the [D3](https://d3js.org/) JavaScript library to create an ___interactive visualization___ for some significant data set. This will give you a chance to experiment with this popular visualization library, as well as to practice the sorts of data processing that we've been using all quarter.

Since this is the "final project" in the course, it will be significantly more open-ended than previous assignments. You are welcome to visualize a data set of your choosing (perhaps one that is relevant to your own work; see below for some other possible suggestions), and the visualization can take any format that you feel is appropriate (i.e., a bar chart, a scatter plot, a network graph, or even a [map](https://bost.ocks.org/mike/map/)). Your visualization will need to be _interactive_ (what data is displayed and how it is displayed should be adjustable by the user), but the exact details of that user experience is up to you. See below for specific requirements that your project will need to fulfill.

- Basically, find a cool data set, and then think about how you might want to display and interact with that visually---and then create that visualization!

And since is the last project and the iSchool is all about collaboration, you are required to implement this visualization in **groups of 2 or 3** (trios will be expected to produce _slightly_ more sophisticated visualizations, since there is an extra person). This will additionally give you some practice coding collaboratively using GitHub.


### Objectives
By completing this assignment you will practice and master the following skills:

* Programming in JavaScript
* Using AJAX to access data from a Web API
* Creating simple visualizations using D3 that dynamically display data
* Providing interaction via event-driven programming
* Locating and reading online programming tutorials and guides
* Collaboratively programming using git

### Resources
D3 is huge. There are a ton of things you can do with it, and even simple charts take significant effort. Yet the library is incredibly popular and there is significant demand for creating effective interactive visualizations. This means that many, many people have produced examples, tutorials, books, and courses for how to create visualizations in D3.

So the good news is: there are lots of examples and tutorials you could learn from! :) But the bad news is: there are lots of examples and tutorials you could learn from :( Part of this assignment will involve you practicing the kind of research and _information filtering_ you've  been informally doing all quarter. While we will cover the basics that you'll need in class, you will likely need to look up the specifics of how to achieve particular effects with the library.

A few places to begin your search for help:

- [The list of tutorials](https://github.com/d3/d3/wiki/Tutorials) on the D3 wiki. The first few entries are the official tutorials, and are an okay place to start.
- [INFO 474's Introduction to D3](https://github.com/INFO-474/m7-d3-intro) is a learning module developed by Mike Freeman for an undergrad course focused entirely on D3; we're doing just a taste of what they're doing. There are additional modules to focus on other topics in the same Github Repo.
- [Interactive Data Visualization](http://alignedleft.com/tutorials/d3) is an in-depth tutorial from the wiki list which I find pretty readable.

(I will expand this list if I find more recommended options).

## Working Collaboratively
For this assignment, you are **required** to work in small teams of **2 or 3** people. This with help keep the assignment a little more manageable (hopefully), as well as give you practice collaborating using GitHub.

To get started:

1. One (1) team member should **fork** this repository, creating a copy under their account.
2. That person (the "repo owner") should then [all the other team members as collaborators](https://help.github.com/articles/adding-collaborators-to-a-personal-repository/)
3. Then **all** the team members should clone that forked repo to their local machines for development.

This way all team members can work on the code and commit changes at the same time! When you've finished adding a feature, `push` the code to GitHub and your teammates can `pull` in your changes (resolving any merge conflicts if needed).

I normally recommend splitting a project by feature (e.g., each person works on one distinct piece that all get combined in the end). But this project doesn't "split" very well; all the parts are pretty tightly integrated and can't easily be worked on separately. Thus I would also encourage you to utilize [pair programming](http://guide.agilealliance.org/guide/pairing.html). This involves two people working on one computer (one keyboard): one person is the "driver" who does the typing and getting individual code in place, and the other is the "navigator" who thinks more about the higher picture. And the pair switches rolls regularly. 

No matter what your strategy is for "dividing" the work, each person needs to contribute to the project. In particular, the final version of the code should contain (non-trivial) **commits** from all members of the team--if we look at the commit history, we should see that everyone did something!

- This will also ensure that you're practicing merging commits!

If there are any questions or issues with collaborating on this project, please let me know (privately if necessary).


## Visualization Requirements
What you choose to implement for your visualization is up to you (and if there are any questions about appropriateness or feasibility, check in with me!) However, your project does need to fulfill a couple of broad requirements:

### 1. Programmatically Accesses Data

Your program should display a visualization for some "real-world" data. This should be a _significantly large_ data set (e.g., with dozens or hundreds or thousands of items; most meaningful data sets will be this size)

Your program should dynamically load the data using an `Ajax` request (via `$.get()`) from an existing RESTful Web API. As we've mentioned in class, there are lots of available APIs that provide data you could visualization; see [ProgrammableWeb](http://www.programmableweb.com/apis/directory) for one list or search Google for an API surrounding whatever topic you are interested in.

Some ideas for data sets:

- [Github](https://developer.github.com/v3/) has an API; you could use that to dynamically create a [code swarm visualization](http://vis.cs.ucdavis.edu/~ogawa/codeswarm/) like the one we watched in class.
    - If you can't think of any other options, I highly encourage you to do this one!! It is a great default.
- I pointed out the [UHNCR](http://data.unhcr.org/wiki/index.php/API_Documentation) API; you could create a visualization similar to the [Refugee Project](http://www.therefugeeproject.org/).
- The [Washington State Department of Transportation](http://www.wsdot.wa.gov/mapsdata.htm) makes a lot of its data available online, including things like [traffic](http://wsdot.com/traffic/api/). You could create a visual representation of traffic patterns over time, for example. [SoundTransit](http://www.soundtransit.org/Open-Transit-Data) also has an API, but you need to request an access key via email.
- [Twitter](https://dev.twitter.com/overview/api) has an API we've already looked at, you could visualize a graph of network connections, or retweet chains, or trending topics. Note thatyou can use my search proxy, or check with me about setting up a streaming proxy (you don't want to put your API key secrets online where others can get them!)
- Various other consumer web services have public APIs; many students in the iSchool have used the [Spotify](https://developer.spotify.com/web-api/) and [Yelp](https://www.yelp.com/developers/documentation/v2/overview) APIs for projects.
- The Washington Post has been compiling a database of [fatal shootings by police officers](https://github.com/washingtonpost/data-police-shootings) that you could visualize in some way (e.g., considering the victim's race, mental health, or whether they were armed). There are [similar databases](http://www.shootingtracker.com/) (though less well structured) for mass shootings as well.

That last once you will note does not have a RESTful API that you can access. That's okay! **As an alternative to loading the data via Ajax**, you can develop a (short) Python script that [downloads the data from the web](http://docs.python-requests.org/en/master/user/quickstart/), parses it if necessary, and saves it to a local `.json` file (e.g., `shooting_data.json`). You can then use jQuery's `$.get()` method to load this file into your D3 visualization.
 
- You can use this technique for any available data set you wish; and indeed, lots of data sets are available as HTML or csv (e.g., from [data.gov](https://www.data.gov/) or similar repositories). If there is another, particular data set you want to use that isn't available online, check in with me and we can accommodate. 

- The goal here is to practice writing a program that processes and interprets data _automatically_, while letting you apply your programming skills to a topic that you care about!


### 2. Is Built with D3
Your visualization should be implemented using the [D3](https://d3js.org/) JavaScript library specifically. 

Your visualization should graphically display some meaningful dimension of your dataset: whether a bar chart measuring data magnitude, a scatter plot mapping two dimensions to x and y, a network graph, or even a map of locations---these are all feasible. Basically, you should think about a variable or two from each "item" in your dataset, think about a visual property (e.g., size, location, color, etc) that you might associate with that variable, and then plot the variable on the screen.

- You are primarily being evaluated on your ability to implement a visualization, not on its "effectiveness". Try to pick something sensible and appropriate, but you don't need to know anything about visual design (there are other courses for that!).

Note that you should be building the visualization from "scratch", using core D3 methods. We will cover how to use these methods in class, going over the steps you'll need to reproduce for this assignment.

- **Caution!** D3's power but complexity has led to the creation of numerous more focused or  "simpler" libraries (such as Highcharts or even Plotly's JavaScript version). You should ___not___ use one of these libraries for this assignment; you should be working with the core D3 methods.

    You _are_ welcome to use [D3 plugins](https://github.com/d3/d3/wiki/Plugins) if you want to make a more complex visualization, you just shouldn't use an entirely separate "program". If you have any questions about what is appropriate or not, please check in with me.

####Starter Code

I have provided some (very basic) starter code in this repository. This includes an `index.html` file that loads both the `d3` and `jquery` libraries for your convenience, provides a skeleton for HTML code (which you are _not_ required to expand on), and then uses D3 to create an `<svg>` element into which you can `append` things like `circles` or `rects`. This is assigned to a _global_ `svg` that you can access from any other functions you create (e.g., a `redraw()` or `update()` function).

- You are of course welcome to modify any of the provided code as you see fit.

- For example, you should **definitely** replace the displayed title (`<h1>`) in the HTML with an actual title for your visualization, as well as include a citation as the source of your data.


### 3. Is Interactive
Your visualization needs to be **interactive**: that is, the user can interact with it (click, drag, move the mouse, etc) and see it change in some _meaningful_ way (not just random).

Your program should support two different kinds of interactivity:

1. The user should be able to change or filter _what_ data is being displayed. For example, maybe they can click on a button (or use a search field) to see a different subset of the data. Or maybe clicking on a data item will cause the chart to shift to showing more details about that item (like if you click on someone in a social network graph and then see all of their adjacent nodes).

    In short: the user should be able to dynamically cause the visualization to need to `enter()` and `exit()` elements following the [general update pattern](https://bl.ocks.org/mbostock/3808218).
    
2.  The user should be able to change _how_ the data is displayed. This can be as simple as having elements change color (be "highlighted") on mouse-over, or as complex as being able to "drag" nodes of a graph to new positions.

    In short: the user should be able to dynamically cause the `attributes` or `styling` of _individual elements_ to change. 

You should use a [transition](https://github.com/d3/d3/wiki/Transitions) to animate the display updating when it changes!

You are welcome to create and use a component external to the graph (i.e., an HTML `<button>`) to enable _one_ of these interactions, but the other should be caused by the user interacting with the d3-generated visualization direction (either by `click`, `mouseover`, etc). Alternatively, you could use a [JavaScript interval](http://www.w3schools.com/jsref/met_win_setinterval.asp) to have the visualization update every X seconds (i.e., to be "continuously animated").

### 4. Includes Layout and Decorations
Finally, your graph should be structured with appropriate (dynamic) [scales](http://alignedleft.com/tutorials/d3/scales) and [margins](https://bl.ocks.org/mbostock/3019563), so that all the data fits and looks nice.

As a benefit of having a proper scale, your visualization should also include a descriptive [axis](http://alignedleft.com/tutorials/d3/axes) (or more likely two axes) labeling the data. This axis should change when appropriate if your visualization changes.

Finally, you should include at least _one_ other kind of decoration: for example, additional [text labels](https://www.dashingd3js.com/svg-text-element) on the elements, or an overall [legend](http://zeroviscosity.com/d3-js-step-by-step/step-3-adding-a-legend). (I've included a few relative example tutorials, but you should also look around for additional explanations!)

These decorations will help provide an explanation of what your visualization is showing so we can read it!


## Submitting Your Solution
Remember to `add`, `commit`, and `push` your final program once it's finished!

In order to submit you assignment, you need to both `push` your completed solution to your GitHub repository (the one in the cloud that you created by forking), **and** submit a link to your repository to [Canvas](https://canvas.uw.edu/) (so that we know where to find your work)!

- **Only one person needs to submit to Canvas!** You need to only have a single GitHub repository, though make sure everyone's names are on the submission (in the `SUBMISSION.md` file).

Before you submit your assignment, double-check the following:

1. Confirm that your program is completed and works without errors. Loading the web page should display the visualization, which can be interacted with.. 
* Be sure and fill out the **`SUBMISSION.md`** included in the assignment directory, answering the questions.
* `commit` the final version of your work, and `push` your code to your GitHub repository.

Submit a a link to your GitHub repository via [this canvas page](https://canvas.uw.edu/courses/1041440/assignments/3208935).

The assignment is due on **Fri Jun 03 at 11:59 PM**.

### Grading Rubric
See the assignment page on Canvas for the grading rubric.
