---
layout: page
title: About
permalink: /Mini-OS/
---
Mini OS
=======
>A Bare Bone Operating System written in C and Assembly.

Mini OS is a Bare Bone Operating System written in C and Assembly which could be loaded with the GRUB bootloader on an x86 system. This kernel will display a message on the screen and then hang.

This project is under active development. The purpose of this project is to make something stable and simple.
Help is needed ! Everyone could join this project, in order to learn something new by programming an OS.

Send me your comments and bug reports to: [deb.dbuniversity@gmail.com](mailto:deb.dbuniversity@gmail.com).

##Tools
Before building the kernel, make sure that the following tools are available in your system.
<ul>
<li>An x86 computer (of course)</li>
<li>Linux</li>
<li>NASM assembler</li>
<li>gcc</li>
<li>ld (GNU Linker)</li>
<li>grub</li>
</ul>

##Building the kernel
The following commands will build the kernel.
<pre>
nasm -f elf32 kernel.asm -o kasm.o
gcc -m32 -c kernel.c -o kc.o
ld -m elf_i386 -T link.ld -o kernel kasm.o kc.o
</pre>

##Configuring the grub
GRUB requires the kernel to be of the name pattern <code>kernel-&lt;version&gt;</code> . So, I renamed my kernel executable to <code>kernel-0.0.1</code>.

Now place it in the <code>/boot</code> directory. You will require superuser privileges to do so.

In your GRUB configuration file <code>grub.cfg</code> you should add an entry, something like:

<pre>
title Mini OS
  root (hd0, 0)
  kernel /boot/kernel-0.0.1 ro
</pre>

##Using the qemu emulator
The kernel will also be run using the <code>qemu</code> emulator.
<pre>
qemu-system-i386 -kernel kernel
</pre>

##License
All the files in this repository are [MIT](http://opensource.org/licenses/MIT) licensed.

##Author
Debashis Barman ([http://www.debashisbarman.in](http://www.debashisbarman.in))
