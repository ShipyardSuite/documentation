![GitHub last commit (branch)](https://img.shields.io/github/last-commit/shipyardsuite/documentation/develop?color=3cafe2&style=flat-square)
![Docker Image Version (latest by date)](https://img.shields.io/docker/v/shipyardsuite/documentation?color=3cafe2&sort=date&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/shipyardsuite/documentation?color=3cafe2&style=flat-square)
![Maintenance](https://img.shields.io/maintenance/yes/2020?color=3cafe2&style=flat-square)
![GitHub](https://img.shields.io/github/license/shipyardsuite/documentation?color=3cafe2&style=flat-square)

# documentation

Documentation service for on-site documentation and tutorials for shipyards features.

## Overview

The documentation service supplies the documentation of Shipyard, pages are supplied as Markdown files.

Each topic is reachable by visiting `/documentation/[category]-[topic]`.

## Creating new Content

The `documents` directory contains of subdirectories for each category, every category directory contains serveal Markdown files.
Follow the following rules to create new content, and link the new files in the main react file.

### New Category

If you want to add a new Category, add a new directory in  `./documents`, with a descriptive category name. Do not create a file called "Home.md", since the categories homepage will be automatically generated.

### New Topic

To add a new Topic, create a markdown file in the category directory it should be part of.

If you need to add an image to your topic, it can be placed in `./app/assets/images`. After building, it can be found in `./public/images/`. Please use Reference style image placement in Markdown.

## Making a new Topic/Category accessible with the frontend

Add your new Category or Topic to the `./app/targets.js` file, and follow the already existing entries as a guideline. The rest will be done automatically.

## Documentation Pages:

(Documentation HOME is not a markdown page)

- Installation
    - Home
- Configuration
    - Home
- Quickstart
    - Home

## Reference

please refer to the [Markdown-Cheatsheet][cheatsheet link] by [Adam Pritchard][cheatsheet author link] for Markdown reference. 

## License

This project is released under the [Apache version 2](LICENSE) license.

<!-- links -->

[cheatsheet link]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[cheatsheet author link]: https://github.com/adam-p
