import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public producto: any;
  // cadena que contiene la ruta de las peticiones al back-end
  // url = 'https://uamishopbackend.azurewebsites.net/tutorial-spring-boot-0.1.0/';
  url = 'http://localhost:8080/';
  // en el constructor añadimos la clase http
  constructor( private http: Http) { }

  // con este metodo se obtienen todos los libros del catalogo
  obtenerLibros() {
    // this.http.get(this.url2).subscribe(res => console.log('hola', res));
    return this.http.get(this.url + 'libros') // .subscribe(res => console.log(res.json()));
    .pipe(map(res => res.json()));
  }

  obtenerProyectos() {
    return this.http.get(this.url + 'proyectos')
    .pipe(map(res => res.json()));
  }

  obtenerElectronicos() {
    // this.http.get(this.url2).subscribe(res => console.log('hola', res));
    return this.http.get(this.url + 'electronica') // .subscribe(res => console.log(res.json()));
    .pipe(map(res => res.json()));
  }

  obtenerDepartamentos() {
    // this.http.get(this.url2).subscribe(res => console.log('hola', res));
    return this.http.get(this.url + 'departamentos') // .subscribe(res => console.log(res.json()));
    .pipe(map(res => res.json()));
  }

  obtenerTutorias() {
    // this.http.get(this.url2).subscribe(res => console.log('hola', res));
    return this.http.get(this.url + 'tutorias') // .subscribe(res => console.log(res.json()));
    .pipe(map(res => res.json()));
  }

  obtenerOtros() {
    return this.http.get(this.url + 'otros') // .subscribe(res => console.log(res.json()));
    .pipe(map(res => res.json()));
  }

  obtenerProductos() {
    // this.http.get(this.url2).subscribe(res => console.log('hola', res));
    return this.http.get(this.url + 'productos') // .subscribe(res => console.log(res.json()));
    .pipe(map(res => res.json()));
  }


  nuevoLibro(nombre, precio, descripcion, file: File, idUsuario) {
    const formData: FormData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('descripcion', descripcion);
    formData.append('file', file);
    formData.append('idUsuario', idUsuario);
    return this.http.post( this.url + 'libros', formData)
    .pipe(
    map(res => {
      console.log('si llego');
      console.log(res.json());
      return res.json();
    }));
  }

  nuevoProyecto(nombre, representante, precio, descripcion, requisitos, file: File, idUsuario) {
    const formData: FormData = new FormData();
    formData.append('nombre', nombre);
    formData.append('representante', representante);
    formData.append('precio', precio);
    formData.append('descripcion', descripcion);
    formData.append('requisitos', requisitos);
    formData.append('file', file);
    formData.append('idUsuario', idUsuario);
    return this.http.post( this.url + 'proyectos', formData)
    .pipe(
    map(res => {
      console.log('si entro');
      console.log(res.json());
      return res.json();
    }));
  }

  nuevoElectronico(nombre, precio, descripcion, file: File, idUsuario) {
    const formData: FormData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('descripcion', descripcion);
    formData.append('file', file);
    formData.append('idUsuario', idUsuario);
    return this.http.post( this.url + 'electronica', formData)
    .pipe(
    map(res => {
      console.log('si entro');
      console.log(res.json());
      return res.json();
    }));
  }

  nuevoDepartamento(nombre, precio, descripcion, file: File, idUsuario, ubicacion) {
    const formData: FormData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('descripcion', descripcion);
    formData.append('file', file);
    formData.append('idUsuario', idUsuario);
    formData.append('ubicacion', ubicacion);
    return this.http.post( this.url + 'departamentos', formData)
    .pipe(
    map(res => {
      return res.json();
    }));
  }

  nuevaTutoria(nombre, precio, descripcion, area , file: File, idUsuario) {
    const formData: FormData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('descripcion', descripcion);
    formData.append('area', area);
	formData.append('file', file);
	formData.append('idUsuario', idUsuario);
    return this.http.post( this.url + 'tutorias', formData)
    .pipe(
    map(res => {
      return res.json();
    }));
  }

  nuevoOtro(nombre, precio, descripcion, file: File, idUsuario) {
    const formData: FormData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('descripcion', descripcion);
    formData.append('file', file);
    formData.append('idUsuario', idUsuario);
    return this.http.post( this.url + 'Otros', formData)
    .pipe(
    map(res => {
      console.log('si entro');
      console.log(res.json());
      return res.json();
    }));
  }

  obtenerProductoConId(idProducto) {
    return this.http.get(this.url + 'productos/' + idProducto)
    .pipe(
      map(res => {
        console.log('si entro');
        console.log(res.json());
        return res.json();
      }));
  }

  // metodo para obtener los productos favoritos de un usuario regresa una
  // coleccion de los productos favoritos del usuario
  dameMisFavoritos(idUsuario) {
    console.log(idUsuario);
    return this.http.get(this.url + 'misFavoritos/' + idUsuario)
    .pipe(
      map(res => {
        console.log(res.json());
        return res.json();
      }));
  }

  agregameEnFavoritos(idUsuario, idProducto) {
    return this.http.put(this.url + 'agregaFavorito/' + idUsuario + '/' + idProducto, null)
    .pipe(
      map(res => {
        console.log(res.json());
        return res.json();
      }));
  }


  eliminameEnFavoritos(idUsuario, idProducto) {
    return this.http.put(this.url + 'eliminaFavorito/' + idUsuario + '/' + idProducto, null)
    .pipe(
      map(res => {
        console.log(res.json());
        return res.json();
      }));
  }

  dameMisProductos(idUsuario) {
    return this.http.get(this.url + 'misProductos/' + idUsuario)
    .pipe(
      map(res => {
        console.log(res.json());
        return res.json();
      }));
  }

  eliminameProducto(idUsuario, idProducto) {
      return this.http.delete(this.url + 'productos?idUsuario=' + idUsuario + '&idProducto=' + idProducto)
      .pipe(
        map(res => {
          console.log(res.json());
          return res.json();
        }));
  }

  modificaDatosProducto(idUsuario, idProducto, nombre, precio, descripcion) {
    const formData: FormData = new FormData();
    formData.append('idUsuario', idUsuario);
    formData.append('idProducto', idProducto);
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('descripcion', descripcion);
    return this.http.post( this.url + 'modificaProducto', formData)
    .pipe(
    map(res => {
      return res.json();
    }));
  }

  modificaDatosTutoria(idUsuario, idProducto, nombre, precio, descripcion, area) {
    const formData: FormData = new FormData();
    formData.append('idUsuario', idUsuario);
    formData.append('idProducto', idProducto);
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('descripcion', descripcion);
    formData.append('area', area);
    return this.http.post( this.url + 'modificaTutoria', formData)
    .pipe(
      map(res => {
        return res.json();
    }));
  }

  modificaDatosProyectos(idUsuario, idProducto, nombre, precio, descripcion, representante, requisitos) {
    const formData: FormData = new FormData();
    formData.append('idUsuario', idUsuario);
    formData.append('idProducto', idProducto);
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('descripcion', descripcion);
    formData.append('representante', representante);
    formData.append('requisitos', requisitos);
    return this.http.post( this.url + 'modificaProyecto', formData)
    .pipe(
      map(res => {
        return res.json();
    }));
  }

  modificaDatosDepartamentos(idUsuario, idProducto, nombre, precio, descripcion, ubicacion) {
    const formData: FormData = new FormData();
    formData.append('idUsuario', idUsuario);
    formData.append('idProducto', idProducto);
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('descripcion', descripcion);
    formData.append('ubicacion', ubicacion);
    return this.http.post( this.url + 'modificaDepartamento', formData)
    .pipe(
      map(res => {
        return res.json();
    }));
  }

  modificaImagenProducto(idUsuario, idProducto, file: File) {
    const formData: FormData = new FormData();
    formData.append('idUsuario', idUsuario);
    formData.append('idProducto', idProducto);
    formData.append('file', file);
    return this.http.post( this.url + 'modificaImg', formData)
    .pipe(map(res => {
        return res.json();
    }));
  }

  getProducto() {
    return this.producto;
  }
 
  setProducto(prod: any) {
    this.producto = prod;
  }
 

  
}
