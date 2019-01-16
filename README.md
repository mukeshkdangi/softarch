# Software Architecture

### Welcome to the softarch wiki!

![Project Details](https://github.com/mukeshkdangi/softarch/blob/master/CS%20570%20Soft%20Arch%20Vis.pdf)

## Aim
The software aims to provide a visualization that is meaningful for the architect, developer and the user. Neither of the three recovery methods provide a clear visualization of the system’s abstract/overall architecture. We propose building a visualization tool that will provide hierarchy and levels to the system’s architecture. Along with this, the visualization will highlight areas of vulnerability in the software which will provide the architect with a better understanding of the system’s core components.

## Visualization Details:
The visualization will provide three layers to the system: 

#### Level 1
An abstract overview of the system architecture in terms of clusters and components categorized. This level will primarily be helpful to the users and the stakeholders in explaining the software system.

#### Level 2
Files belonging to each cluster/component and their dependencies in a directory structure (both outgoing and incoming). This level will assist the architect in identifying architectural erosion and drift that has been introduced in the system through implementation.

#### Level 3
Details of each individual file (such as file size, inheritance, lines of code, dependencies) along with the class diagram of the file. This layer will help the developer in particular as it describes each individual file.

Along with this we propose to implement the following a visualization for the n most coupled nodes. This would be in the form of a word cloud. Each name would be associated with a list of key features of the file such as lines of code, dependencies and source files which would help identify why the file has been flagged as vulnerable.

As inputs, we propose to use the output provided by the RELAX recovery method as well as third party libraries to elicit class diagrams of files. The software itself will be built using D3.js.

> Results: 
![Level 1](https://github.com/mukeshkdangi/softarch/blob/master/Screenshot%202019-01-16%20at%201.53.59%20PM.png)
![Level 2](https://github.com/mukeshkdangi/softarch/blob/master/Screenshot%202019-01-16%20at%201.54.18%20PM.png)
![Level 3](https://github.com/mukeshkdangi/softarch/blob/master/Screenshot%202019-01-16%20at%201.54.26%20PM.png)
![Level 4](https://github.com/mukeshkdangi/softarch/blob/master/Screenshot%202019-01-16%20at%201.54.36%20PM.png)


