export class Methods {

  public dateDay = new Date();



  public getDate() {
    var dia = [];
    dia[0] = "Domingo";
    dia[1] = "Lunes";
    dia[2] = "Martes";
    dia[3] = "Miércoles";
    dia[4] = "Jueves";
    dia[5] = "Viernes";
    dia[6] = "Sábado";

    var mes = [];
    mes[0] = "enero";
    mes[1] = "febrero";
    mes[2] = "marzo";
    mes[3] = "abril";
    mes[4] = "mayo";
    mes[5] = "junio";
    mes[6] = "julio";
    mes[7] = "agosto";
    mes[8] = "septiembre";
    mes[9] = "octubre";
    mes[10] = "noviembre";
    mes[11] = "diciembre";

    return `${dia[this.dateDay.getDay()]}, ${this.dateDay.getDate()} de ${mes[this.dateDay.getMonth()]}`
  }

  public quitarAcentos(cadena: string) {
    const acentos:any = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
    return cadena.split('').map(letra => acentos[letra] || letra).join('').toString();
  }


}
