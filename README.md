# xrcambridge.org

## Website

This website was adapted and updated based on the xrmcr.org website. It's built using Jekyll, a static site generator. Jekyll takes Markdown, SCSS (styling), HTML and Javascript files, and generates a deployable version of the website in the '_site' folder.

## Hosting

The website is hosted on Netlify, which is currently configured to automatically deploy the content everytime code is pushed.

## Prerequisites

Ruby - https://www.ruby-lang.org/en/downloads/
Bundler - 'gem install bundler' from the terminal, once Ruby is installed.

## How to run the website locally

After cloning the repository locally, open a terminal window in the root directory of the website, and type the following commands:

- bundle install
- bundle exec jekyll serve
- navigate to localhost:4000 or 127.0.0.1:4000 in the browser of your choice

Everytime you edit the code, you can save the file and refresh the webpage to see the newly generated content.

## How to edit content

Content for Get Involved and FAQs is the easiest to edit. It requires editing the working_groups.yml, or faqs.yml respectively.
Each link in the menu corresponds to a page in the /_pages folder. In most cases, those pages use blocks of HTML code stored in a different folder. Note that there are some files that are not yet used (e.g. resources files and data that needs to be reviewed first before being published).

## How to add a new page

* To add a new page, create a new html page in the folder _pages. Give it a good name, and if appropriate, place it in a subfolder (the folder hierarchy doesn't affect the url, so don't worry about that).
* In the html file, paste the following frontmatter at the top:
<pre><code>
---
layout: xr-splash
permalink: '/url-for-page'
title: Page title
excerpt: Subtitle that shows beneath the page title
---
</code></pre>

* Now, you have 2 choices, depending on whether you prefer HTML or Markdown
  * For HTML, simply add the HTML content underneath.
  * For Markdown, please create a markdown file in _includes/content, then in the HTML file you created add the following code, using the appropriate file name:
<pre><code>
{% capture page_content %}
  {% include content/this-is-the-file-you-created.md %}
{% endcapture %}
{{ page_content | markdownify }}
</code></pre>

If you have any questions, don't hesitate to ask.
