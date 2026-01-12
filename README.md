# 🎵 Librería de Zuo - Music Player

Un reproductor de música elegante y moderno construido con Electron, React y Tailwind CSS. Presenta dos temas personalizables y un visualizador de audio reactivo.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Electron](https://img.shields.io/badge/Electron-Latest-47848F.svg)
![React](https://img.shields.io/badge/React-18-61DAFB.svg)

## ✨ Características

### 🎨 Temas Personalizables
- **Amber Gold**: Tema cálido con tonos dorados y ámbar
- **Morado Noche**: Tema oscuro con acentos morados y negros

### 🎵 Funcionalidades del Reproductor
- ✅ Reproducción de archivos MP3
- ✅ Controles completos (Play, Pausa, Siguiente, Anterior)
- ✅ Modo repetición de canción
- ✅ Control de volumen con silencio
- ✅ Barra de progreso interactiva
- ✅ Visualizador de audio reactivo en tiempo real

### 🖥️ Modos de Visualización
- **Modo Normal**: Interfaz completa con playlist y controles
- **Modo Compacto**: Ventana pequeña flotante con controles esenciales

### 📋 Gestión de Playlist
- Carga de carpetas completas de música
- Búsqueda en tiempo real por título, artista o álbum
- Visualización de metadatos (artista, álbum, duración)
- Indicador visual de canción en reproducción

### 🎨 Visualizador de Audio
- Barras reactivas que responden a la música
- Diferentes cantidades de barras según el modo (12 en compacto, 20 en normal)
- Gradientes de color según el tema seleccionado

## 🚀 Instalación

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn

### Pasos de Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/libreria-de-zuo.git
cd libreria-de-zuo
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia la aplicación:
```bash
npm start
```

## 📦 Construcción

Para crear un ejecutable de la aplicación:

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

## 🎮 Uso

1. **Selecciona un tema** al iniciar la aplicación
2. **Carga música** usando el botón "Cargar Carpeta"
3. **Reproduce** haciendo clic en cualquier canción de la playlist
4. **Cambia entre modos** usando el botón de modo compacto
5. **Busca canciones** usando la barra de búsqueda

### Atajos de Teclado
- `Espacio`: Play/Pausa
- `→`: Siguiente canción
- `←`: Canción anterior

## 🛠️ Tecnologías Utilizadas

- **Electron**: Framework para aplicaciones de escritorio
- **React**: Biblioteca de UI con Hooks
- **Babel**: Transpilador de JSX
- **Tailwind CSS**: Framework de CSS utility-first
- **Web Audio API**: Para el visualizador de audio
- **jsmediatags**: Lectura de metadatos MP3

## 📁 Estructura del Proyecto

```
libreria-de-zuo/
├── index.html          # Interfaz principal de la aplicación
├── main.js             # Proceso principal de Electron
├── package.json        # Dependencias y scripts
├── Public/             # Recursos estáticos (iconos, imágenes)
│   ├── 2v.png
│   ├── ampliar.png
│   ├── anterior.png
│   ├── cerrar.png
│   ├── jugar.png
│   ├── minimizar.png
│   ├── pausa.png
│   ├── proximo.png
│   └── repetir.png
└── .gitignore          # Archivos ignorados por Git
```

## 🎨 Personalización de Temas

Los temas se definen en el archivo `index.html`. Puedes agregar nuevos temas modificando el array `themes`:

```javascript
const themes = [
    {
        id: 'amber',
        name: 'Amber Gold',
        // ... configuración de colores
    },
    {
        id: 'purple',
        name: 'Morado Noche',
        // ... configuración de colores
    }
];
```

## 🐛 Solución de Problemas

### El visualizador no muestra barras
- Asegúrate de que el audio esté reproduciéndose
- Verifica que el navegador permita el uso de Web Audio API
- Revisa la consola de desarrollador para errores

### La aplicación no carga música
- Verifica que los archivos sean formato MP3
- Asegúrate de tener permisos de lectura en la carpeta

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Zuo**

## 🙏 Agradecimientos

- Diseño de temas inspirado en interfaces modernas
- Tema "Morado Noche" dedicado a Meli

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
