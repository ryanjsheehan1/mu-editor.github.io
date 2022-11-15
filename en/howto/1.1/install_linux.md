---
layout: default
title: How to install Mu on Linux 
i18n: en
---

# How to install Mu on Linux

Packaging on Linux is a complicated scenario. We've tried to find a solution
that will work on as many flavours of Linux as possible (x86_64) while making
it as easy to install as possible for beginner coders. As a result, we're
currently using the [AppImage](https://appimage.org/) standard for package distribution.


## Step 1 - Download the AppImage

* [Download the AppImage](/en/download) and put it somewhere safe (such as your
  home directory, or Downloads directory).


## Step 2 - Update User Permissions

On Linux, in order for Mu to work with the MicroPython based devices
you need to ensure you add yourself to the correct permissions group
(usually the `dialout` or `uucp` groups).

* Open a terminal (press `CTRL` + `ALT` + `T`).
* Type the following to add your user (identified by `$USER`) to the `dialout` group:

```
sudo adduser $USER dialout
```
* You will need to enter your password for this to work.
* You should reboot your machine for this change to take effect.

On some specialised Linux distributions (i.e. **not** the most popular / common
ones), flash drives may not be automatically detected and mounted. Since many
MicroPython and CircuitPython based devices appear as flash devices by default,
please consult your distribution's documentation for how to automatically
mount such devices when they are plugged in.


## Step 3 - Update AppImage Permissions

* In the file explorer, find the AppImage you downloaded in the first step, and
  right click to display the context menu.

<div class="row">
  <img src="/img/en/howto/mu_linux-1.png" alt="Right click AppImage" class="img-responsive center-block img-rounded "/>
  <br/>
</div>

* Select the "Properties" entry. A new modal window will open.
* Select the "Permissions" tab.
* Make sure the "Allow executing file as program" check box ("Execute") is ticked.
<div class="row">
  <img src="/img/en/howto/mu_linux-2.png" alt="Execute AppImage" class="img-responsive center-block img-rounded "/>
  <br/>
</div>
* Close the window.


## Step 4 - Install Dependencies

On these Linux distributions you need to install additional software packages.
Bring up a terminal window and run the following commands:

**Arch Linux**

```
pacman -S libxcript-compat
```

**Ubuntu 22.04 LTS (Jammy Jellyfish)**

```
apt install libfuse2
```


## Step 5 - Launch Mu

On most Linux distributions, double click Mu's AppImage to start it.
A few, however, require using the terminal to do it:

**Arch Linux**

As of Mu 1.1.1 running Mu requires using the Wayland display server.
Other than that, double clicking Mu's AppImage works nicely.


**Debian 11 (bulleye)**

```
QT_QPA_PLATFORM=wayland ./Downloads/Mu_Editor-1.1.1-x86_64.AppImage
```


**Ubuntu 22.04 LTS (Jammy Jellyfish)**

```
QT_QPA_PLATFORM=wayland ./Downloads/Mu_Editor-1.1.1-x86_64.AppImage
```

