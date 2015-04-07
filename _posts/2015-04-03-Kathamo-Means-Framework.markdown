---
layout: post
title:  "Kathamo means Framework"
date:   2015-04-03 13:47:00
tags: css, framework, minimalism
---
Kathamo is a minimalist CSS framework that can help you rapidly develop sites that look beautiful at any size, be it a 17" laptop screen or an iPhone.
>Kathamo is an Assamese word, literary meaning "structure" or "frame"; thus the name itself suggests a framework. 

Kathamo is based on the following principles:

**Responsive Grid:** Kathamo has a familiar, lightweight 1024 grid as its base, but elegantly scales down to downsized browser windows, tablets, mobile phones (in landscape and portrait).

**Faster Development:** Kathamo is a tool for rapid development with easy CSS and a well-structured Grid.

**Minimal UI:** Kathamo is not a UI framework. It's a development kit that provides the most basic styles as a foundation, but is ready to adopt whatever your design or style is.

## Development
Kathamo is developed by [Debashis Barman](http://www.debashisbarman.in). Kathamo 2.0.0 is currently the stable version. This version of Kathamo includes:

<ul>
<li>Base CSS file for basic styles as a foundation.</li>
<li>A 1024 Grid system with responsive elements.</li>
</ul>

### License
All the files in this repository are [MIT](http://opensource.org/licenses/MIT) licensed.

## Documentation

Kathamo 2.0.0 (Stable) has a few easy ways to quickly get started, each one appealing to a different skill level and use case. Read through to see what suits your particular needs.

### Basic Template

Start with the below to begin working with a minimal Kathamo document.

```
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
	&lt;meta charset="utf-8"&gt;
	&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
	&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
	&lt;title&gt;&lt;/title&gt;

	&lt;!-- Kathamo --&gt;
	&lt;link href="path-to-kathamo-root-directory/kathamo.css" rel="stylesheet"&gt;
&lt;/head&gt;

&lt;body&gt;&lt;/body&gt;

&lt;/html&gt;
```

### Grid System

Kathamo includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases. In Kathamo, all the columns must be wrapped inside a `.row` and all the rows must be wrapped inside a `.container`. The column classes follows the pattern `col-*-**` where the `*` indicates `lg`, `md` and `sm` and `**` indicates the size of the column, ranging from 1 to 11.

```
&lt;!-- `.container` is the main wrapper for the grid. --&gt;
&lt;div class="container"&gt;

	&lt;!-- All columns must be wrapped in a `.row`. --&gt;
	&lt;div class="row"&gt;

	&lt;!-- Grid columns are created by specifying the number of 12 available columns you wish to span. --&gt;
	&lt;div class="col-lg-3 col-md-5 col-sm-12"&gt;&lt;/div&gt;
	&lt;div class="col-lg-9 col-md-7 col-sm-12"&gt;&lt;/div&gt;

	&lt;/div&gt;

&lt;/div&gt;
```

### Typography

The base typeface of Kathamo is [Raleway](http://www.google.com/fonts/specimen/Raleway) served by Google, set at `font-size: 15px` over `line-height: 1.618` with `letter-spacing: 0.618px` and `font-weight: 300`.

```
&lt;!-- Standard Headings --&gt;
&lt;h1&gt;Kathamo &lt;small&gt;Framework&lt;/small&gt;&lt;/h1&gt;
&lt;h2&gt;Kathamo &lt;small&gt;Framwork&lt;/small&gt;&lt;/h2&gt;
&lt;h3&gt;Kathamo &lt;small&gt;Framwork&lt;/small&gt;&lt;/h3&gt;
&lt;h4&gt;Kathamo &lt;small&gt;Framwork&lt;/small&gt;&lt;/h4&gt;
&lt;h5&gt;Kathamo &lt;small&gt;Framwork&lt;/small&gt;&lt;/h5&gt;
&lt;h6&gt;Kathamo &lt;small&gt;Framwork&lt;/small&gt;&lt;/h6&gt;

&lt;!-- Body Text --&gt;
&lt;p&gt;Kathamo &lt;small&gt;Framework&lt;/small&gt;&lt;/p&gt;

&lt;!-- Other styled text tags --&gt;
&lt;strong&gt;Bolded&lt;/strong&gt;
&lt;em&gt;Italicized&lt;/em&gt;
&lt;a&gt;Colored&lt;/a&gt;
&lt;u&gt;Underlined&lt;/u&gt;
```

### List

Basic `<ol>` and `<ul>` are unstyled. Use `li-unstyled`, `li-inline`, `li-circle`, `li-square`, `li-disc`, `<dl>` to add styling.

```
&lt;!-- Ordered List --&gt;
&lt;ol&gt;
&lt;li&gt;Item 1&lt;/li&gt;
&lt;li&gt;Item 2&lt;/li&gt;
&lt;li&gt;Item 3&lt;/li&gt;
&lt;li&gt;Item 4&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Unstyled List --&gt;
&lt;ol class="li-unstyled"&gt;
&lt;li&gt;Item 1&lt;/li&gt;
&lt;li&gt;Item 2&lt;/li&gt;
&lt;li&gt;Item 3&lt;/li&gt;
&lt;li&gt;Item 4&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Inline List --&gt;
&lt;ol class="li-inline"&gt;
&lt;li&gt;Item 1&lt;/li&gt;
&lt;li&gt;Item 2&lt;/li&gt;
&lt;li&gt;Item 3&lt;/li&gt;
&lt;li&gt;Item 4&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Unorderd List --&gt;
&lt;ul class="li-circle"&gt;
&lt;li&gt;Item 1&lt;/li&gt;
&lt;li&gt; Item 3
&lt;ul class="li-square"&gt;
&lt;li&gt;Item 1&lt;/li&gt;
&lt;li&gt;Item 2
&lt;ul class="li-disc"&gt;
&lt;li&gt;Item 1&lt;/li&gt;
&lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Data List --&gt;
&lt;dl&gt;
&lt;dt&gt;Title 1&lt;/dt&gt;
&lt;dd&gt;Item 1&lt;/dd&gt;
&lt;dt&gt;Title 2&lt;/dt&gt;
&lt;dd&gt;Item 2&lt;/dd&gt;
&lt;/dl&gt;

&lt;!-- Inline Data List --&gt;
&lt;dl class="li-inline"&gt;
&lt;dt&gt;Inline Data List&lt;/dt&gt;
&lt;dd&gt;Item 1&lt;/dd&gt;
&lt;dd&gt;Item 2&lt;/dd&gt;
&lt;dd&gt;Item 3&lt;/dd&gt;
&lt;dd&gt;Item 4&lt;/dd&gt;
&lt;/dl&gt;
```


### Blockquote

Use `<blockquote>` for quoting blocks of content from another source within your document.

```
&lt;blockquote&gt;
Kathamo is an Assamese word, literary meaning "structure" or "frame"; thus the name itself suggests a framework.
&lt;cite&gt;Debashis Barman, Kathamo Creator&lt;/cite&gt;
&lt;/blockquote&gt;
```

### Code

Use `<code>` for wrapping inline snippets of code and `<pre>` for multiple lines of code.

```
&lt;!-- For inline snippets of code. --&gt;
&lt;p&gt;Use &lt;code&gt;&lt;code&gt;&lt;/code&gt; for wrapping inline snippets of code.&lt;/p&gt;

&lt;!-- For multiple lines of code. --&gt;
&lt;pre&gt;
&lt;link href="kathamo/kathamo.css" rel="stylesheet" /&gt;
&lt;/pre&gt;
```

### Images & Thumbnail

All `<img>` in Kathamo are responsive. Kathamo provides two standard classes `img-circle` and `img-border`. Also use `left-text-wrap` or `right-text-wrap` to the `<img>` for wrapping text around a image.

```
&lt;!-- Responsive image --&gt;
&lt;img src="#" title=""&gt;

&lt;!-- Bordered image --&gt;
&lt;img src="#" class="img-border"&gt;

&lt;!-- Round image --&gt;
&lt;img src="#" class="img-circle"&gt;

&lt;!-- To wrap an image around text --&gt;
&lt;p&gt;
 ...
&lt;/p&gt;
&lt;img src="#" class="left-text-wrap"&gt;
&lt;p&gt;
...
&lt;/p&gt;
&lt;img src="#" class="right-text-wrap"&gt;
```

Wrap `<ul>` or `<ol>` of `<img>` inside `.thumbnail` to create image thumbnail. Use `.col-3` or `.col-4` to specificy number of columns in the thumbnail

```
&lt;!-- 3 columns thumbnail --&gt;
&lt;div class="thumbnail"&gt;
&lt;ul class="col-3"&gt;
&lt;li&gt;&lt;img src="#" title=""&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="#" title=""&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="#" title=""&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="#" title=""&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="#" title=""&gt;&lt;/li&gt;
&lt;/div&gt;

&lt;!-- 3 columns thumbnail --&gt;
&lt;div class="thumbnail"&gt;
&lt;ul class="col-4"&gt;
&lt;li&gt;&lt;img src="#" title=""&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="#" title=""&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="#" title=""&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="#" title=""&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="#" title=""&gt;&lt;/li&gt;
&lt;/div&gt;
```

### Table

Use `.table` to any `<table>` for adding basic styling to it.

```
&lt;table class="table"&gt;
  ...
&lt;/table&gt;
```

### Bordered Table

Use `.table-bordered` for borders on all sides of the table and cells.

```
&lt;table class="table table-bordered"&gt;
  ...
&lt;/table&gt;
```

### Borderless Table

Use `.table-no-border` to remove borders on all sides of the table and cells.

```
&lt;table class="table table-no-border"&gt;
  ...
&lt;/table&gt;
```

### Striped Rows

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.

```
&lt;table class="table table-striped"&gt;
  ...
&lt;/table&gt;
```

### Responsive Table

Wrap `.table` in `.table-responsive` to make responsive table.

```
&lt;div class="table-responsive"&gt;
&lt;table class="table"&gt;
  ...
&lt;/table&gt;
&lt;/div&gt;
```

### Form

Use standard HTML tags for `<label>`, `<input>`, `<select>` and `<textarea>`. Kathamo provides custom style for different input types viz. text, password, email, search, checkbox and radio.

```
&lt;form  ...  &gt;
	&lt;div class="col-lg-6 col-md-6 col-sm-12"&gt;
	&lt;label&gt;Your email&lt;/label&gt;
	&lt;input type="text" name="email" placeholder="me@example.com"/&gt;
	&lt;/div&gt;

	&lt;div class="col-lg-6 col-md-6 col-sm-12"&gt;
	&lt;label&gt;You're from&lt;/label&gt;
	&lt;select class="ui-full-width"&gt;
	&lt;option&gt;Country&lt;/option&gt;
	&lt;option name="country" value="Option 1"&gt;India&lt;/option&gt;
	&lt;option name="country" value="Option 2"&gt;Outside India&lt;/option&gt;
	&lt;/select&gt;
	&lt;/div&gt;

	&lt;div class="col-lg-12 col-md-12 col-sm-12"&gt;
	&lt;label&gt;Message&lt;/label&gt;
	&lt;textarea name="message" placeholder="Hi! Deb..."&gt;&lt;/textarea&gt;
	&lt;/div&gt;

	&lt;div class="col-lg-12 col-md-12 col-sm-12"&gt;
	&lt;input type="checkbox" name="copy-to-yourself"&gt;Send a copy to yourself.
	&lt;/div&gt;

	&lt;div class="col-lg-12 col-md-12 col-sm-12"&gt;
	&lt;input type="submit" class="btn btn-success" value="Submit"&gt;
	&lt;input type="reset" class="btn btn-danger" value="Clear"&gt;
	&lt;/div&gt;
&lt;/form&gt;
```

### Button

Use `.btn` to any standard HTML button with `btn-default`, `btn-success`, `btn-danger` to add styling to it. Kathamo also supports anchor buttons.

```
&lt;!-- Buttons --&gt;
&lt;button type="button" class="btn btn-default"&gt;Default&lt;/button&gt;
&lt;button type="submit" class="btn btn-success"&gt;Success&lt;/button&gt;
&lt;button type="reset" class="btn btn-danger"&gt;Danger&lt;/button&gt;

&lt;!-- Input Types --&gt;
&lt;input type="button" class="btn btn-default" value="Default"&gt;
&lt;input type="submit" class="btn btn-success" value="Success"&gt;
&lt;input type="reset" class="btn btn-danger" value="Danger"&gt;

&lt;!-- Anchor Buttons --&gt;
&lt;a type="button" class="btn btn-default" href=""&gt;Default&lt;/a&gt;
&lt;a type="button" class="btn btn-success" href=""&gt;Success&lt;/a&gt;
&lt;a type="button" class="btn btn-danger" href=""&gt;Danger&lt;/a&gt;
```

### Alerts & Panel

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages and panel.

```
&lt;!-- Info alert --&gt;
&lt;div class="alert alert-info"&gt;
&lt;strong&gt;Heads up!&lt;/strong&gt; This alert needs your attention, but it's not super important.
&lt;/div&gt;

&lt;!-- Success alert --&gt;
&lt;div class="alert alert-success"&gt;
&lt;strong&gt;Well done!&lt;/strong&gt; You successfully read this important alert message.
&lt;/div&gt;

&lt;!-- Danger alert --&gt;
&lt;div class="alert alert-danger"&gt;
&lt;strong&gt;Oh snap!&lt;/strong&gt; Change a few things up and try submitting again.
&lt;/div&gt;

&lt;!-- Panel --&gt;
&lt;div class="panel"&gt;
&lt;div class="panel-head"&gt;
Panel Heading
&lt;/div&gt;
&lt;div class="panel-body"&gt;
This is a panel.
&lt;/div&gt;
&lt;/div&gt;
```

### Navbar

Kathamo provides a custom class `.navbar` to add styling `<nav>` navigation bar. Use supportive class `.navbar-static` for a static navbar.

```
&lt;!-- Navbar --&gt;
&lt;nav class="navbar clearfix" id="navbar-toggle"&gt;
&lt;div class="navbar-container"&gt;

	&lt;ul class="navbar-list clearfix"&gt;
	&lt;li class="navbar-item navbar-header"&gt;&lt;a href=""&gt;Kathamo&lt;/a&gt;&lt;/li&gt;
	
	&lt;div class="sr-only"&gt;
	&lt;li class="open-menu"&gt;&lt;a href="#navbar-toggle"&gt;&lt;span class="fa fa-fw fa-bars"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	&lt;li class="close-menu"&gt;&lt;a href="#"&gt;&lt;span class="fa fa-fw fa-close"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	&lt;/div&gt;
	
	&lt;div class="navbar-toggle pull-right"&gt;
	
	&lt;li class="navbar-item"&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;
	
	&lt;li class="navbar-item"&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;
	
	&lt;li class="navbar-item"&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;
	
	&lt;li class="navbar-item"&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;

	&lt;/div&gt;

	&lt;/ul&gt;

&lt;/div&gt;
&lt;/nav&gt;

&lt;!-- Static Navbar --&gt;
&lt;nav class="navbar navbar-static clearfix" id="navbar-toggle"&gt;
&lt;div class="navbar-container"&gt;

	&lt;ul class="navbar-list clearfix"&gt;
	&lt;li class="navbar-item navbar-header"&gt;&lt;a href=""&gt;Kathamo&lt;/a&gt;&lt;/li&gt;
	
	&lt;div class="sr-only"&gt;
	&lt;li class="open-menu"&gt;&lt;a href="#navbar-toggle"&gt;&lt;span class="fa fa-fw fa-bars"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	&lt;li class="close-menu"&gt;&lt;a href="#"&gt;&lt;span class="fa fa-fw fa-close"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	&lt;/div&gt;
	
	&lt;div class="navbar-toggle pull-right"&gt;
	
	&lt;li class="navbar-item"&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;
	
	&lt;li class="navbar-item"&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;
	
	&lt;li class="navbar-item"&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;
	
	&lt;li class="navbar-item"&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;

	&lt;/div&gt;

	&lt;/ul&gt;

&lt;/div&gt;
&lt;/nav&gt;
```

### Utilities

Kathamo has a number of small utility classes that act as easy-to-use helpers. Sometimes it's better to use a utility class than create a whole new class just to float an element.

### Visibility

Use visibility classes `visible-*` and `hidden-*` to control visibilty of an element. Here `*` indicates `lg`, `md` or `sm`. 

```
&lt;!-- To disable in small devices --&gt;
&lt;span class="hidden-sm"&gt;
...
&lt;/span&gt;

&lt;!-- To display in small devices --&gt;
&lt;span class="visible-sm"&gt;
...
&lt;/span&gt;
```

### Text Alignment

Use classes `text-right`, `text-left`, `text-center` and `text-justify` to set alignment of a particular block of texts.

```
&lt;!-- To set justified text alignment --&gt;
&lt;p class="text-justify"&gt;
...
&lt;/p&gt;
```

### Floating Elements

Use classes `pull-right` and `pull-left` to float an element.

```
&lt;!-- Float in right direction --&gt;
&lt;div class="pull-right"&gt;
...
&lt;/div&gt;

&lt;!-- Float in left direction --&gt;
&lt;div class="pull-right"&gt;
...
&lt;/div&gt;
```

## Examples

Here are some website that uses Kathamo as basic framework for development : [Knowledge Exchange Network](http://www.kenmanipur.org), [One Man Design](http://onemandesign.github.io), [Dr. Surajit Barman's Homepage](http://www.surajitbarman.in) and [Debashis Barman's Homepage](http://www.debashisbarman.in)

## Feedback

Please provide [feedback](mailto:kathamo.framework@gmail.com) for better development of Kathamo.
