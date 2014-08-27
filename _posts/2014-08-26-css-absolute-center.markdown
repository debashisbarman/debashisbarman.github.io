---
layout: post
title:  "CSS Absolute Center"
date:   2014-08-26 00:30:00
tags: Web Design, Modern Website
---
CSS-Absolute-Center is a Simple CSS Framework for centering HTML elements.

**How to Use**

Create a _parent_ block.
`<div></div>`.

Inside this create a _child_ block.

Add classes `.absolute-center-wrapper` to the _parent_ block and `.absolute-center` to the _child_ block.

Now add this `css` segment to your stylesheet.
<pre>
.absolute-center-wrapper {
	width: 100%;
	height: 100%;
	display: table;
}
</pre>
and
<pre>
.absolute-center {
	display: table-cell;
	vertical-align: middle;
	text-align: center;
}
</pre>
and you are done.

**License**

This project and source code is licensed under MIT [(http://opensource.org/licenses/MIT)](http://opensource.org/licenses/MIT).

**Version**

1.0 (Stable)

**Author**

Debashis Barman [(www.debashisbarman.in)](http://www.debashisbarman.in).

**Download**

The complete source code is available for downloading in my github [repository](https://www.github.com/debashisbarman/css-absolute-center).
