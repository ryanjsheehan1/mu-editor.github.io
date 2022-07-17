---
layout: default
title: Descarga Mu
i18n: es
---

# Descarga Mu

Hay muchas formas de instalar Mu. La más sencilla es descargar el instalador oficial para Windows o Mac OSX. Si usted no puede instalar Mu porque la computadora que está usando está bloqueada, debe probar PortaMu: un método para ejecutar Mu desde un pendrive en Windows u OSX. También puede usar la herramienta de pip incorporada en Python. Algunas distribuciones de Linux ya vienen con Mu empaquetado (y debe usar el administrador de paquetes de su sistema operativo para instalarlo). Y finalmente, si está usando Raspbian (la versión de Linux para Raspberry Pi) puede instalar Mu como un paquete.

Si eres desarrollador, puedes encontrar el código fuente en
[GitHub](https://github.com/mu-editor/mu).

<div class="media">
  <div class="media-left">
    <img src="/img/windows_logo.png" alt="Windows Logo" class="media-object">
  </div>
  <div class="media-body">
    <h4 class="media-heading">Instalador Windows</h4>
    <a id="download-button-windows" href="https://github.com/mu-editor/mu/releases/download/v1.1.1/MuEditor-win64-1.1.1.msi" class="btn btn-primary" role="button">64-bit</a>
    <a href="/en/howto/1.1/install_windows" class="btn btn-default" role="button">Instrucciones</a></p>
  </div>
</div>

<hr/>

<div class="media">
  <div class="media-left">
    <img src="/img/apple_logo.png" alt="Apple Logo" class="media-object">
  </div>
  <div class="media-body">
    <h4 class="media-heading">Instalador Mac OSX</h4>
    <p><a id="download-button-macos" href="https://github.com/mu-editor/mu/releases/download/v1.1.1/MuEditor-osx-1.1.1.dmg" class="btn btn-primary" role="button">Descargar</a>
    <a href="/en/howto/1.1/install_macos" class="btn btn-default" role="button">Instrucciones</a></p>
  </div>
</div>

<hr/>

<div class="media">
  <div class="media-left">
    <img src="/img/python_logo.png" alt="Python Logo" class="media-object">
  </div>
  <div class="media-body">
    <h4 class="media-heading">Paquete Python</h4>
        <p><a href="/en/howto/1.1/install_with_python" class="btn btn-default" role="button">Instrucciones</a></p>
  </div>
</div>

<hr/>

<div class="media">
  <div class="media-left">
    <img src="/img/rpi_logo.png" alt="Raspberry Pi Logo" class="media-object">
  </div>
  <div class="media-body">
    <h4 class="media-heading">Raspbian</h4>
        <p><a href="/en/howto/1.1/install_raspberry_pi" class="btn btn-default" role="button">Instrucciones</a></p>
  </div>
</div>

<br/>

<div class="panel panel-danger">
    <div class="panel-heading"><h3 class="panel-title">¡ATENCIÓN USUARIOS DE LINUX!</h3></div>
    <div class="panel-body">
    <p>En Linux, para que Mu funcione con los dispositivos basados ​​en MicroPython, debe asegurarse de agregar al grupo los permisos correctos (generalmente los grupos son <code>dialout</code> o <code>uucp</code>). También debe asegúrese de que su distribución monte automáticamente los dispositivos flash, o asegúrese de montarlos manualmente.</p>
    </div>
</div>

<script src="{{ ASSET_PATH }}/js/platform.js"></script>