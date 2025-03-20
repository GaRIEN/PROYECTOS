# 🏢 **Sistema de Gestión de Practicantes **


## 📌 **Descripción del Proyecto**

El **Sistema de Gestión de Practicantes** es una aplicación web diseñada para facilitar el control y administración de los practicantes dentro de una empresa grande.

Esta herramienta permite a los administradores gestionar eficientemente la asignación de practicantes a diferentes **proyectos y eventos**, realizar el seguimiento de **participantes** y generar **reportes detallados** sobre el desempeño y actividades de los practicantes.

Cuenta con un **panel de administración seguro** que permite a los encargados mantener la información actualizada y optimizar la gestión de los recursos humanos en la empresa.

---

## 🎯 **Características Principales**

✅ **Gestión de Practicantes:** Registro, edición y eliminación de practicantes en el sistema.  
✅ **Asignación de Proyectos:** Cada practicante puede ser asignado a uno o varios proyectos dentro de la empresa.  
✅ **Eventos y Participaciones:** Organización y control de eventos en los que participan los practicantes.  
✅ **Reportes y Análisis:** Generación de informes detallados sobre el desempeño y progreso de los practicantes.  
✅ **Panel de Administración:** Interfaz exclusiva para administradores donde pueden gestionar usuarios y configuraciones.  
✅ **Interfaz Intuitiva:** Uso de **DataTables** para una mejor visualización y manipulación de datos.  

---

## 🚀 **Tecnologías Usadas**

### 📌 **Frontend**
- HTML5, CSS3  
- JavaScript (Vanilla)  
- Bootstrap  
- DataTables  

### 📌 **Backend**
- Django (Python)  
- Django Admin Panel  

### 📌 **Base de Datos**
- MySQL  

---

## 📸 **Capturas de Pantalla**

### 🏢 **Panel de Administración**
![Admin Panel](http://imgfz.com/i/VjQac29.png)

### 🔐 **Pantalla de Login**
![Login](http://imgfz.com/i/RqZEdhC.png)

### 📋 **home**
![Home](http://imgfz.com/i/i0HXNC7.png)

### 📋 **Registrar proyectos**
![Registrar proyecto](http://imgfz.com/i/7ZiG5Uf.png)

### 📋 **Mostrar Proyectos**
![Listado proyectos](http://imgfz.com/i/rtvi29Z.png)

---

## 🔧 **Instalación y Configuración**

 **Clonar el repositorio**  
**crear entorno virtual  ubuntu server**

```python
 python -m venv venv
```

```python
source venv/bin/activate
```
```python
pip install -r requirements.txt
```
**crear entorno virtual  Windows**
```python
 python -m venv venv
```
```python
venv\Scripts\activate
```
```python
pip install -r requirements.txt
```

****Configurar la base de datos****
Asegúrate de tener MySQL instalado y configura la conexión en el archivo settings.py:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME':'sicotec',
        'USER':'root',
        'PASSWORD':'root',
        'HOST':'localhost',
        'PORT':'3306'
    }
}
```
**Aplicar migraciones y ejecutar el servidor**

```python
python manage.py migrate
```
```python
python manage.py runserver
```

### 🔑 Acceso al Panel de Administración
	📌 URL: http://127.0.0.1:8000/admin/
    🧑 Usuario: garien
    🔑 Contraseña: 1563


### 📬 Contacto
	Si tienes dudas o sugerencias, puedes contactarme en:
    📧 Email: gabrielhuaman683@gmail.com
   
